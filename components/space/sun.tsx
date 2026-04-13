'use client'

import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

// Custom shader for realistic sun surface
const sunVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const sunFragmentShader = `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  // Noise functions for turbulence
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 6; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }
  
  void main() {
    vec3 pos = vPosition * 0.15;
    
    // Animated turbulence
    float turbulence = fbm(pos + time * 0.05);
    float turbulence2 = fbm(pos * 2.0 - time * 0.03);
    
    // Sun colors - from deep orange core to bright yellow surface
    vec3 coreColor = vec3(1.0, 0.3, 0.0);      // Deep orange-red
    vec3 midColor = vec3(1.0, 0.5, 0.0);       // Orange
    vec3 surfaceColor = vec3(1.0, 0.75, 0.2);  // Yellow-orange
    vec3 hotspotColor = vec3(1.0, 0.95, 0.7);  // Bright yellow-white
    
    // Create plasma-like patterns
    float plasma = (turbulence + turbulence2) * 0.5 + 0.5;
    plasma = pow(plasma, 0.8);
    
    // Sunspots (darker regions)
    float sunspots = fbm(pos * 3.0 + time * 0.02);
    sunspots = smoothstep(0.3, 0.6, sunspots) * 0.3;
    
    // Solar granulation (convection cells)
    float granulation = fbm(pos * 8.0 + time * 0.1);
    granulation = smoothstep(0.0, 1.0, granulation) * 0.15;
    
    // Mix colors based on patterns
    vec3 color = mix(coreColor, midColor, plasma);
    color = mix(color, surfaceColor, plasma * 0.7 + granulation);
    color = mix(color, hotspotColor, pow(plasma, 3.0) * 0.5);
    
    // Apply sunspots
    color = mix(color, coreColor * 0.5, sunspots);
    
    // Limb darkening (edges appear darker)
    float fresnel = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
    fresnel = pow(fresnel, 0.5);
    color = mix(color, coreColor * 0.8, fresnel * 0.4);
    
    // Add brightness variation
    color *= 1.0 + granulation * 0.3;
    
    gl_FragColor = vec4(color, 1.0);
  }
`

// Corona shader for the outer atmosphere
const coronaFragmentShader = `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vNormal;
  
  void main() {
    float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    
    // Animated corona rays
    float rays = sin(atan(vNormal.y, vNormal.x) * 12.0 + time * 0.5) * 0.5 + 0.5;
    rays = pow(rays, 2.0);
    
    vec3 coronaColor = vec3(1.0, 0.6, 0.1);
    float alpha = fresnel * 0.3 * (0.7 + rays * 0.3);
    
    gl_FragColor = vec4(coronaColor, alpha);
  }
`

export function Sun() {
  const sunRef = useRef<THREE.Mesh>(null)
  const coronaRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const sunMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: sunVertexShader,
      fragmentShader: sunFragmentShader
    })
  }, [])
  
  const coronaMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: sunVertexShader,
      fragmentShader: coronaFragmentShader,
      transparent: true,
      side: THREE.BackSide
    })
  }, [])

  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Update shader uniforms
    sunMaterial.uniforms.time.value = time
    coronaMaterial.uniforms.time.value = time

    if (sunRef.current) {
      sunRef.current.rotation.y += 0.0005
    }
    
    if (coronaRef.current) {
      coronaRef.current.rotation.z += 0.0003
    }
  })

  // Sun radius - 100x bigger than planets (planets are ~0.3-0.8, so sun is 50)
  const sunRadius = 50

  return (
    <group position={[0, 0, 0]}>
      {/* Main sun sphere with realistic shader */}
      <mesh 
        ref={sunRef} 
        material={sunMaterial}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <sphereGeometry args={[sunRadius, 128, 128]} />
      </mesh>

      {/* Hover tooltip */}
      {isHovered && (
        <Html
          position={[0, sunRadius + 15, 0]}
          center
          style={{ pointerEvents: 'none' }}
        >
          <div className="animate-in fade-in zoom-in-95 duration-200 rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-950/90 to-orange-950/90 px-5 py-3 shadow-lg shadow-orange-500/20 backdrop-blur-md">
            <p className="whitespace-nowrap text-base font-medium text-amber-100">
              Hello, I&apos;m Sun.
            </p>
          </div>
        </Html>
      )}
      
      {/* Corona / outer atmosphere */}
      <mesh ref={coronaRef} material={coronaMaterial}>
        <sphereGeometry args={[sunRadius * 1.15, 64, 64]} />
      </mesh>
      
      {/* Subtle outer glow */}
      <mesh>
        <sphereGeometry args={[sunRadius * 1.3, 32, 32]} />
        <meshBasicMaterial
          color="#FF6B00"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Point light from sun - increased intensity for larger sun */}
      <pointLight
        position={[0, 0, 0]}
        intensity={8}
        color="#FFD700"
        distance={500}
        decay={1.5}
      />

      {/* Secondary warm light for ambient effect */}
      <pointLight
        position={[0, 0, 0]}
        intensity={4}
        color="#FF8C00"
        distance={300}
        decay={2}
      />
    </group>
  )
}
