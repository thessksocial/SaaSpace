export interface SaaSProduct {
  id: string
  name: string
  tagline: string
  description: string
  category: string
  color: string
  url: string
  size: 'small' | 'medium' | 'large'
  featured?: boolean
}

export const saasProducts: SaaSProduct[] = [
  {
    id: 'figma',
    name: 'Figma',
    tagline: 'Design collaboratively',
    description: 'Figma is a collaborative web application for interface design, with additional offline features.',
    category: 'Design',
    color: '#A259FF',
    url: 'https://figma.com',
    size: 'large',
    featured: true
  },
  {
    id: 'notion',
    name: 'Notion',
    tagline: 'All-in-one workspace',
    description: 'A new tool that blends your everyday work apps into one. It\'s the all-in-one workspace for you and your team.',
    category: 'Productivity',
    color: '#FFFFFF',
    url: 'https://notion.so',
    size: 'large',
    featured: true
  },
  {
    id: 'slack',
    name: 'Slack',
    tagline: 'Where work happens',
    description: 'Slack is a business communication platform offering many IRC-style features.',
    category: 'Communication',
    color: '#4A154B',
    url: 'https://slack.com',
    size: 'large'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    tagline: 'Develop. Preview. Ship.',
    description: 'Vercel is a cloud platform for frontend developers, providing the speed and reliability innovators need.',
    category: 'DevTools',
    color: '#000000',
    url: 'https://vercel.com',
    size: 'medium',
    featured: true
  },
  {
    id: 'linear',
    name: 'Linear',
    tagline: 'Streamline issues',
    description: 'Linear is a purpose-built tool for planning and building software.',
    category: 'DevTools',
    color: '#5E6AD2',
    url: 'https://linear.app',
    size: 'medium'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    tagline: 'Payments infrastructure',
    description: 'Stripe is a suite of payment APIs that powers commerce for businesses of all sizes.',
    category: 'Finance',
    color: '#635BFF',
    url: 'https://stripe.com',
    size: 'large'
  },
  {
    id: 'openai',
    name: 'OpenAI',
    tagline: 'AI research and deployment',
    description: 'OpenAI is an AI research and deployment company dedicated to ensuring AGI benefits all of humanity.',
    category: 'AI',
    color: '#10A37F',
    url: 'https://openai.com',
    size: 'large',
    featured: true
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    tagline: 'AI safety company',
    description: 'Anthropic is an AI safety company that builds reliable, interpretable, and steerable AI systems.',
    category: 'AI',
    color: '#D4A574',
    url: 'https://anthropic.com',
    size: 'medium'
  },
  {
    id: 'github',
    name: 'GitHub',
    tagline: 'Where the world builds software',
    description: 'GitHub is a provider of Internet hosting for software development and version control.',
    category: 'DevTools',
    color: '#6E40C9',
    url: 'https://github.com',
    size: 'large'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    tagline: 'The open source Firebase alternative',
    description: 'Supabase is an open source Firebase alternative with a PostgreSQL database.',
    category: 'DevTools',
    color: '#3ECF8E',
    url: 'https://supabase.com',
    size: 'medium'
  },
  {
    id: 'framer',
    name: 'Framer',
    tagline: 'Design and ship your dream site',
    description: 'Framer is the only tool you need to create stunning websites without writing code.',
    category: 'Design',
    color: '#0055FF',
    url: 'https://framer.com',
    size: 'medium'
  },
  {
    id: 'canva',
    name: 'Canva',
    tagline: 'Design anything, publish anywhere',
    description: 'Canva is an online design and visual communication platform.',
    category: 'Design',
    color: '#00C4CC',
    url: 'https://canva.com',
    size: 'large'
  },
  {
    id: 'airtable',
    name: 'Airtable',
    tagline: 'Build apps, not databases',
    description: 'Airtable is a cloud collaboration service with database functionality.',
    category: 'Productivity',
    color: '#FCBF49',
    url: 'https://airtable.com',
    size: 'medium'
  },
  {
    id: 'intercom',
    name: 'Intercom',
    tagline: 'Customer messaging platform',
    description: 'Intercom is the complete AI-first customer service solution.',
    category: 'Marketing',
    color: '#6AFDEF',
    url: 'https://intercom.com',
    size: 'medium'
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    tagline: 'Turn emails into revenue',
    description: 'Mailchimp is a marketing automation and email marketing platform.',
    category: 'Marketing',
    color: '#FFE01B',
    url: 'https://mailchimp.com',
    size: 'medium'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    tagline: 'Grow better with HubSpot',
    description: 'HubSpot offers a full platform of marketing, sales, and customer service software.',
    category: 'Marketing',
    color: '#FF7A59',
    url: 'https://hubspot.com',
    size: 'large'
  },
  {
    id: 'twilio',
    name: 'Twilio',
    tagline: 'Communication APIs',
    description: 'Twilio is a cloud communications platform for building SMS, Voice & Messaging applications.',
    category: 'Communication',
    color: '#F22F46',
    url: 'https://twilio.com',
    size: 'medium'
  },
  {
    id: 'miro',
    name: 'Miro',
    tagline: 'Visual collaboration platform',
    description: 'Miro is an online collaborative whiteboard platform for teams.',
    category: 'Productivity',
    color: '#FFD02F',
    url: 'https://miro.com',
    size: 'medium'
  },
  {
    id: 'loom',
    name: 'Loom',
    tagline: 'Video messaging for work',
    description: 'Loom is an easy-to-use video messaging tool for work.',
    category: 'Communication',
    color: '#625DF5',
    url: 'https://loom.com',
    size: 'small'
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    tagline: 'Product analytics',
    description: 'Mixpanel is a business analytics service company focused on product analytics.',
    category: 'Analytics',
    color: '#7856FF',
    url: 'https://mixpanel.com',
    size: 'small'
  }
]

export const categories = [...new Set(saasProducts.map(p => p.category))]

export function getProductsByCategory(category: string): SaaSProduct[] {
  return saasProducts.filter(p => p.category === category)
}

export function searchProducts(query: string): SaaSProduct[] {
  const lowerQuery = query.toLowerCase()
  return saasProducts.filter(
    p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.tagline.toLowerCase().includes(lowerQuery)
  )
}
