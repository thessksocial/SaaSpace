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
  // 🎨 Design & Creative (15)
  {
    id: 'figma',
    name: 'Figma',
    tagline: 'Design collaboratively',
    description: 'Figma is a collaborative web application for interface design, with additional offline features.',
    category: 'Design',
    color: '#A259FF',
    url: 'https://www.figma.com',
    size: 'large',
    featured: true
  },
  {
    id: 'canva',
    name: 'Canva',
    tagline: 'Design anything, publish anywhere',
    description: 'Canva is an online design and visual communication platform for creating graphics, presentations, and more.',
    category: 'Design',
    color: '#00C4CC',
    url: 'https://www.canva.com',
    size: 'large',
    featured: true
  },
  {
    id: 'adobe-creative-cloud',
    name: 'Adobe Creative Cloud',
    tagline: 'Creativity for all',
    description: 'Adobe Creative Cloud is a collection of software for graphic design, video editing, and web development.',
    category: 'Design',
    color: '#FF0000',
    url: 'https://www.adobe.com/creativecloud',
    size: 'large'
  },
  {
    id: 'sketch',
    name: 'Sketch',
    tagline: 'Design toolkit for Mac',
    description: 'Sketch is a vector graphics editor for macOS primarily used for user interface and user experience design.',
    category: 'Design',
    color: '#F7B500',
    url: 'https://www.sketch.com',
    size: 'medium'
  },
  {
    id: 'framer',
    name: 'Framer',
    tagline: 'Design and ship your dream site',
    description: 'Framer is the only tool you need to create stunning websites without writing code.',
    category: 'Design',
    color: '#0055FF',
    url: 'https://www.framer.com',
    size: 'medium',
    featured: true
  },
  {
    id: 'invision',
    name: 'InVision',
    tagline: 'Digital product design platform',
    description: 'InVision is a digital product design platform for teams to collaborate on prototypes.',
    category: 'Design',
    color: '#FF3366',
    url: 'https://www.invisionapp.com',
    size: 'medium'
  },
  {
    id: 'webflow',
    name: 'Webflow',
    tagline: 'Build better business websites',
    description: 'Webflow is a visual web development platform that empowers you to build professional websites.',
    category: 'Design',
    color: '#4353FF',
    url: 'https://webflow.com',
    size: 'large'
  },
  {
    id: 'pixlr',
    name: 'Pixlr',
    tagline: 'Free online photo editor',
    description: 'Pixlr is a cloud-based set of image editing tools and utilities.',
    category: 'Design',
    color: '#2DABE2',
    url: 'https://pixlr.com',
    size: 'small'
  },
  {
    id: 'vistacreate',
    name: 'VistaCreate',
    tagline: 'Create stunning visuals easily',
    description: 'VistaCreate (formerly Crello) is an online graphic design tool for creating marketing materials.',
    category: 'Design',
    color: '#8B5CF6',
    url: 'https://create.vista.com',
    size: 'small'
  },
  {
    id: 'removebg',
    name: 'Remove.bg',
    tagline: 'Remove backgrounds instantly',
    description: 'Remove.bg uses AI to remove image backgrounds automatically in seconds.',
    category: 'Design',
    color: '#00BFFF',
    url: 'https://www.remove.bg',
    size: 'small'
  },
  {
    id: 'photoroom',
    name: 'PhotoRoom',
    tagline: 'AI photo editor',
    description: 'PhotoRoom is an AI-powered photo editing app for creating professional product photos.',
    category: 'Design',
    color: '#000000',
    url: 'https://www.photoroom.com',
    size: 'small'
  },
  {
    id: 'desygner',
    name: 'Desygner',
    tagline: 'Design on the go',
    description: 'Desygner is a graphic design tool for creating marketing materials and social media posts.',
    category: 'Design',
    color: '#FF6B35',
    url: 'https://desygner.com',
    size: 'small'
  },
  {
    id: 'lunacy',
    name: 'Lunacy',
    tagline: 'Free design software',
    description: 'Lunacy is a free graphic design software by Icons8 with built-in AI tools.',
    category: 'Design',
    color: '#179DE3',
    url: 'https://icons8.com/lunacy',
    size: 'small'
  },
  {
    id: 'vectr',
    name: 'Vectr',
    tagline: 'Free vector graphics',
    description: 'Vectr is a free graphics software for creating vector graphics easily.',
    category: 'Design',
    color: '#7B68EE',
    url: 'https://vectr.com',
    size: 'small'
  },
  {
    id: 'designbold',
    name: 'DesignBold',
    tagline: 'Design studio online',
    description: 'DesignBold is an online photo editor and graphic design tool.',
    category: 'Design',
    color: '#FF4081',
    url: 'https://designbold.com',
    size: 'small'
  },

  // 🤖 AI Tools (15)
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'AI conversation partner',
    description: 'ChatGPT is an AI chatbot developed by OpenAI that can understand and generate human-like text.',
    category: 'AI',
    color: '#10A37F',
    url: 'https://chat.openai.com',
    size: 'large',
    featured: true
  },
  {
    id: 'claude',
    name: 'Claude',
    tagline: 'AI assistant by Anthropic',
    description: 'Claude is an AI assistant built by Anthropic designed to be helpful, harmless, and honest.',
    category: 'AI',
    color: '#D4A574',
    url: 'https://claude.ai',
    size: 'large',
    featured: true
  },
  {
    id: 'jasper',
    name: 'Jasper',
    tagline: 'AI marketing copilot',
    description: 'Jasper is an AI writing assistant that helps create marketing copy, blog posts, and more.',
    category: 'AI',
    color: '#FF6B6B',
    url: 'https://www.jasper.ai',
    size: 'medium'
  },
  {
    id: 'copyai',
    name: 'Copy.ai',
    tagline: 'AI-powered copywriting',
    description: 'Copy.ai uses AI to help you write better marketing copy in seconds.',
    category: 'AI',
    color: '#7C3AED',
    url: 'https://www.copy.ai',
    size: 'medium'
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    tagline: 'AI writing platform',
    description: 'Writesonic is an AI-powered writing tool for creating articles, ads, and product descriptions.',
    category: 'AI',
    color: '#6366F1',
    url: 'https://writesonic.com',
    size: 'small'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    tagline: 'AI image generation',
    description: 'Midjourney is an AI program that creates images from textual descriptions.',
    category: 'AI',
    color: '#FFFFFF',
    url: 'https://www.midjourney.com',
    size: 'large',
    featured: true
  },
  {
    id: 'runway',
    name: 'Runway',
    tagline: 'AI creative tools',
    description: 'Runway is an applied AI research company building next-generation creative tools.',
    category: 'AI',
    color: '#00D4AA',
    url: 'https://runwayml.com',
    size: 'medium'
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    tagline: 'AI video generation',
    description: 'Synthesia is an AI video creation platform that generates videos with AI avatars.',
    category: 'AI',
    color: '#4F46E5',
    url: 'https://www.synthesia.io',
    size: 'medium'
  },
  {
    id: 'pictory',
    name: 'Pictory',
    tagline: 'AI video creation',
    description: 'Pictory transforms your scripts and blog posts into engaging videos using AI.',
    category: 'AI',
    color: '#EC4899',
    url: 'https://pictory.ai',
    size: 'small'
  },
  {
    id: 'lumaai',
    name: 'Luma AI',
    tagline: '3D capture with AI',
    description: 'Luma AI captures 3D scenes with unparalleled quality using neural rendering.',
    category: 'AI',
    color: '#8B5CF6',
    url: 'https://lumalabs.ai',
    size: 'medium'
  },
  {
    id: 'tome',
    name: 'Tome',
    tagline: 'AI-powered storytelling',
    description: 'Tome is a generative storytelling format for creating presentations with AI.',
    category: 'AI',
    color: '#FF6B35',
    url: 'https://tome.app',
    size: 'medium'
  },
  {
    id: 'gamma',
    name: 'Gamma',
    tagline: 'AI presentations',
    description: 'Gamma generates beautiful presentations, documents, and webpages in seconds with AI.',
    category: 'AI',
    color: '#7C3AED',
    url: 'https://gamma.app',
    size: 'medium'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    tagline: 'AI-powered search',
    description: 'Perplexity is an AI-powered search engine that provides direct answers with sources.',
    category: 'AI',
    color: '#20B2AA',
    url: 'https://www.perplexity.ai',
    size: 'large'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    tagline: 'AI voice generation',
    description: 'ElevenLabs creates the most realistic AI voices for content creators and developers.',
    category: 'AI',
    color: '#000000',
    url: 'https://www.elevenlabs.io',
    size: 'medium'
  },
  {
    id: 'replit-ghostwriter',
    name: 'Replit Ghostwriter',
    tagline: 'AI coding assistant',
    description: 'Ghostwriter is Replit\'s AI pair programmer that helps you code faster.',
    category: 'AI',
    color: '#F26207',
    url: 'https://replit.com',
    size: 'medium'
  },

  // 💻 Developer Tools (15)
  {
    id: 'github',
    name: 'GitHub',
    tagline: 'Where the world builds software',
    description: 'GitHub is a provider of Internet hosting for software development and version control using Git.',
    category: 'DevTools',
    color: '#6E40C9',
    url: 'https://github.com',
    size: 'large',
    featured: true
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    tagline: 'The DevSecOps platform',
    description: 'GitLab is a web-based DevOps lifecycle tool providing Git repository management.',
    category: 'DevTools',
    color: '#FC6D26',
    url: 'https://gitlab.com',
    size: 'large'
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket',
    tagline: 'Code & CI/CD built for teams',
    description: 'Bitbucket is a Git-based source code repository hosting service owned by Atlassian.',
    category: 'DevTools',
    color: '#0052CC',
    url: 'https://bitbucket.org',
    size: 'medium'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    tagline: 'Develop. Preview. Ship.',
    description: 'Vercel is the platform for frontend developers, providing the speed and reliability innovators need.',
    category: 'DevTools',
    color: '#000000',
    url: 'https://vercel.com',
    size: 'large',
    featured: true
  },
  {
    id: 'netlify',
    name: 'Netlify',
    tagline: 'Build and deploy modern web apps',
    description: 'Netlify is a remote-first cloud computing company that offers hosting and serverless backend services.',
    category: 'DevTools',
    color: '#00C7B7',
    url: 'https://netlify.com',
    size: 'medium'
  },
  {
    id: 'firebase',
    name: 'Firebase',
    tagline: 'Build apps fast',
    description: 'Firebase is a platform for creating mobile and web applications developed by Google.',
    category: 'DevTools',
    color: '#FFCA28',
    url: 'https://firebase.google.com',
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
    size: 'large',
    featured: true
  },
  {
    id: 'railway',
    name: 'Railway',
    tagline: 'Deploy in seconds',
    description: 'Railway is an infrastructure platform where you can provision infrastructure and develop locally.',
    category: 'DevTools',
    color: '#0B0D0E',
    url: 'https://railway.app',
    size: 'medium'
  },
  {
    id: 'render',
    name: 'Render',
    tagline: 'Cloud hosting made simple',
    description: 'Render is a unified cloud to build and run all your apps and websites.',
    category: 'DevTools',
    color: '#46E3B7',
    url: 'https://render.com',
    size: 'medium'
  },
  {
    id: 'postman',
    name: 'Postman',
    tagline: 'API platform for developers',
    description: 'Postman is an API platform for building and using APIs that simplifies the API lifecycle.',
    category: 'DevTools',
    color: '#FF6C37',
    url: 'https://www.postman.com',
    size: 'large'
  },
  {
    id: 'docker-hub',
    name: 'Docker Hub',
    tagline: 'Container registry',
    description: 'Docker Hub is a service for finding and sharing container images.',
    category: 'DevTools',
    color: '#2496ED',
    url: 'https://hub.docker.com',
    size: 'medium'
  },
  {
    id: 'codesandbox',
    name: 'CodeSandbox',
    tagline: 'Instant cloud dev environments',
    description: 'CodeSandbox is an online code editor and prototyping tool for web applications.',
    category: 'DevTools',
    color: '#151515',
    url: 'https://codesandbox.io',
    size: 'medium'
  },
  {
    id: 'stackblitz',
    name: 'StackBlitz',
    tagline: 'Instant dev environments',
    description: 'StackBlitz is an online IDE where you can create Angular, React, and Vue projects.',
    category: 'DevTools',
    color: '#1389FD',
    url: 'https://stackblitz.com',
    size: 'medium'
  },
  {
    id: 'glitch',
    name: 'Glitch',
    tagline: 'Build fast, full-stack apps',
    description: 'Glitch is the friendly place where everyone builds the web.',
    category: 'DevTools',
    color: '#3333FF',
    url: 'https://glitch.com',
    size: 'small'
  },
  {
    id: 'retool',
    name: 'Retool',
    tagline: 'Build internal tools fast',
    description: 'Retool is a development platform for building internal business software.',
    category: 'DevTools',
    color: '#3D3D3D',
    url: 'https://retool.com',
    size: 'medium'
  },

  // 📈 Marketing Tools (15)
  {
    id: 'hubspot',
    name: 'HubSpot',
    tagline: 'Grow better with HubSpot',
    description: 'HubSpot offers a full platform of marketing, sales, and customer service software.',
    category: 'Marketing',
    color: '#FF7A59',
    url: 'https://www.hubspot.com',
    size: 'large',
    featured: true
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    tagline: 'Turn emails into revenue',
    description: 'Mailchimp is a marketing automation and email marketing platform.',
    category: 'Marketing',
    color: '#FFE01B',
    url: 'https://mailchimp.com',
    size: 'large'
  },
  {
    id: 'convertkit',
    name: 'ConvertKit',
    tagline: 'Email for creators',
    description: 'ConvertKit is an email marketing platform built for creators.',
    category: 'Marketing',
    color: '#FB6970',
    url: 'https://convertkit.com',
    size: 'medium'
  },
  {
    id: 'activecampaign',
    name: 'ActiveCampaign',
    tagline: 'Marketing automation',
    description: 'ActiveCampaign is a cloud software platform for customer experience automation.',
    category: 'Marketing',
    color: '#356AE6',
    url: 'https://www.activecampaign.com',
    size: 'medium'
  },
  {
    id: 'brevo',
    name: 'Brevo',
    tagline: 'All-in-one marketing platform',
    description: 'Brevo (formerly Sendinblue) is a relationship marketing platform combining email and more.',
    category: 'Marketing',
    color: '#0B996E',
    url: 'https://www.brevo.com',
    size: 'medium'
  },
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    tagline: 'Social media management',
    description: 'Hootsuite is a social media management platform that covers almost every aspect of social media.',
    category: 'Marketing',
    color: '#143059',
    url: 'https://hootsuite.com',
    size: 'medium'
  },
  {
    id: 'buffer',
    name: 'Buffer',
    tagline: 'Social media toolkit',
    description: 'Buffer is a software application for managing social media accounts.',
    category: 'Marketing',
    color: '#2C4BFF',
    url: 'https://buffer.com',
    size: 'medium'
  },
  {
    id: 'sproutsocial',
    name: 'Sprout Social',
    tagline: 'Social media solutions',
    description: 'Sprout Social is a social media management and intelligence tool for brands.',
    category: 'Marketing',
    color: '#59CB59',
    url: 'https://sproutsocial.com',
    size: 'medium'
  },
  {
    id: 'later',
    name: 'Later',
    tagline: 'Visual social marketing',
    description: 'Later is a social media marketing platform for scheduling and analyzing posts.',
    category: 'Marketing',
    color: '#F73B6C',
    url: 'https://later.com',
    size: 'small'
  },
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    tagline: 'SEO tools & resources',
    description: 'Ahrefs is an SEO software suite that contains tools for link building and keyword research.',
    category: 'Marketing',
    color: '#FF8C00',
    url: 'https://ahrefs.com',
    size: 'large'
  },
  {
    id: 'semrush',
    name: 'SEMrush',
    tagline: 'Online visibility management',
    description: 'SEMrush is a SaaS platform for online visibility management and content marketing.',
    category: 'Marketing',
    color: '#FF642D',
    url: 'https://semrush.com',
    size: 'large'
  },
  {
    id: 'ubersuggest',
    name: 'Ubersuggest',
    tagline: 'Free keyword tool',
    description: 'Ubersuggest is a free SEO tool by Neil Patel for keyword research.',
    category: 'Marketing',
    color: '#F97316',
    url: 'https://neilpatel.com/ubersuggest',
    size: 'small'
  },
  {
    id: 'surferseo',
    name: 'Surfer SEO',
    tagline: 'Content optimization tool',
    description: 'Surfer SEO is an on-page optimization tool that analyzes ranking factors.',
    category: 'Marketing',
    color: '#00D4AA',
    url: 'https://surferseo.com',
    size: 'medium'
  },
  {
    id: 'clearscope',
    name: 'Clearscope',
    tagline: 'Content optimization',
    description: 'Clearscope is an AI-powered content optimization platform for SEO.',
    category: 'Marketing',
    color: '#4F46E5',
    url: 'https://clearscope.io',
    size: 'small'
  },
  {
    id: 'buzzsumo',
    name: 'BuzzSumo',
    tagline: 'Content research tool',
    description: 'BuzzSumo is a content research and monitoring tool for marketers.',
    category: 'Marketing',
    color: '#FF6B6B',
    url: 'https://buzzsumo.com',
    size: 'medium'
  },

  // 📊 Analytics & Data (10)
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    tagline: 'Understand your customers',
    description: 'Google Analytics is a web analytics service that tracks and reports website traffic.',
    category: 'Analytics',
    color: '#F9AB00',
    url: 'https://analytics.google.com',
    size: 'large',
    featured: true
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    tagline: 'Product analytics',
    description: 'Mixpanel is a business analytics service company focused on product analytics.',
    category: 'Analytics',
    color: '#7856FF',
    url: 'https://mixpanel.com',
    size: 'large'
  },
  {
    id: 'amplitude',
    name: 'Amplitude',
    tagline: 'Digital analytics platform',
    description: 'Amplitude is a product analytics platform that helps teams understand user behavior.',
    category: 'Analytics',
    color: '#1877F2',
    url: 'https://amplitude.com',
    size: 'large'
  },
  {
    id: 'hotjar',
    name: 'Hotjar',
    tagline: 'Website heatmaps & behavior',
    description: 'Hotjar is a behavior analytics company that analyzes website use through heatmaps.',
    category: 'Analytics',
    color: '#FF3C00',
    url: 'https://www.hotjar.com',
    size: 'medium'
  },
  {
    id: 'crazyegg',
    name: 'Crazy Egg',
    tagline: 'Website optimization',
    description: 'Crazy Egg is a heatmapping and A/B testing tool for website optimization.',
    category: 'Analytics',
    color: '#F59E0B',
    url: 'https://www.crazyegg.com',
    size: 'small'
  },
  {
    id: 'heap',
    name: 'Heap',
    tagline: 'Digital insights platform',
    description: 'Heap automatically captures every user interaction with no extra code.',
    category: 'Analytics',
    color: '#8B5CF6',
    url: 'https://heap.io',
    size: 'medium'
  },
  {
    id: 'kissmetrics',
    name: 'Kissmetrics',
    tagline: 'Customer analytics',
    description: 'Kissmetrics is a customer engagement automation platform.',
    category: 'Analytics',
    color: '#00CED1',
    url: 'https://kissmetrics.io',
    size: 'small'
  },
  {
    id: 'chartmogul',
    name: 'ChartMogul',
    tagline: 'Subscription analytics',
    description: 'ChartMogul is a subscription analytics platform for SaaS businesses.',
    category: 'Analytics',
    color: '#4E5FE7',
    url: 'https://chartmogul.com',
    size: 'medium'
  },
  {
    id: 'baremetrics',
    name: 'Baremetrics',
    tagline: 'Subscription analytics',
    description: 'Baremetrics provides subscription analytics and insights for businesses.',
    category: 'Analytics',
    color: '#6366F1',
    url: 'https://baremetrics.com',
    size: 'small'
  },
  {
    id: 'metabase',
    name: 'Metabase',
    tagline: 'Business intelligence',
    description: 'Metabase is an open-source business intelligence tool for data exploration.',
    category: 'Analytics',
    color: '#509EE3',
    url: 'https://www.metabase.com',
    size: 'medium'
  },

  // 🧾 Productivity & Collaboration (15)
  {
    id: 'notion',
    name: 'Notion',
    tagline: 'All-in-one workspace',
    description: 'Notion is an all-in-one workspace for notes, docs, wikis, and project management.',
    category: 'Productivity',
    color: '#000000',
    url: 'https://www.notion.so',
    size: 'large',
    featured: true
  },
  {
    id: 'slack',
    name: 'Slack',
    tagline: 'Where work happens',
    description: 'Slack is a business communication platform offering many IRC-style features.',
    category: 'Productivity',
    color: '#4A154B',
    url: 'https://slack.com',
    size: 'large',
    featured: true
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    tagline: 'Teamwork hub',
    description: 'Microsoft Teams is a collaboration app that helps your team stay organized.',
    category: 'Productivity',
    color: '#6264A7',
    url: 'https://teams.microsoft.com',
    size: 'large'
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    tagline: 'One app to replace them all',
    description: 'ClickUp is a cloud-based collaboration and project management tool.',
    category: 'Productivity',
    color: '#7B68EE',
    url: 'https://clickup.com',
    size: 'large'
  },
  {
    id: 'asana',
    name: 'Asana',
    tagline: 'Work management platform',
    description: 'Asana is a web and mobile work management platform designed to help teams organize.',
    category: 'Productivity',
    color: '#F06A6A',
    url: 'https://asana.com',
    size: 'large'
  },
  {
    id: 'trello',
    name: 'Trello',
    tagline: 'Organize anything',
    description: 'Trello is a visual tool for organizing your work and life.',
    category: 'Productivity',
    color: '#0079BF',
    url: 'https://trello.com',
    size: 'large'
  },
  {
    id: 'monday',
    name: 'Monday.com',
    tagline: 'Work OS platform',
    description: 'Monday.com is a work operating system that powers teams to run projects.',
    category: 'Productivity',
    color: '#FF3D57',
    url: 'https://monday.com',
    size: 'large'
  },
  {
    id: 'airtable',
    name: 'Airtable',
    tagline: 'Build apps, not databases',
    description: 'Airtable is a cloud collaboration service combining spreadsheet and database features.',
    category: 'Productivity',
    color: '#FCBF49',
    url: 'https://airtable.com',
    size: 'large'
  },
  {
    id: 'todoist',
    name: 'Todoist',
    tagline: 'Task management simplified',
    description: 'Todoist is a productivity app and task manager that helps organize life.',
    category: 'Productivity',
    color: '#E44332',
    url: 'https://todoist.com',
    size: 'medium'
  },
  {
    id: 'evernote',
    name: 'Evernote',
    tagline: 'Note-taking app',
    description: 'Evernote is a note-taking app for capturing and prioritizing ideas.',
    category: 'Productivity',
    color: '#00A82D',
    url: 'https://evernote.com',
    size: 'medium'
  },
  {
    id: 'coda',
    name: 'Coda',
    tagline: 'All-in-one doc',
    description: 'Coda is a new type of document that combines the flexibility of docs with app power.',
    category: 'Productivity',
    color: '#F46A54',
    url: 'https://coda.io',
    size: 'medium'
  },
  {
    id: 'basecamp',
    name: 'Basecamp',
    tagline: 'Project management & team communication',
    description: 'Basecamp is a real-time communication tool that helps teams stay on the same page.',
    category: 'Productivity',
    color: '#1D2D35',
    url: 'https://basecamp.com',
    size: 'medium'
  },
  {
    id: 'quip',
    name: 'Quip',
    tagline: 'Collaborative productivity',
    description: 'Quip combines documents, spreadsheets, and chat in one collaborative workspace.',
    category: 'Productivity',
    color: '#F27557',
    url: 'https://quip.com',
    size: 'small'
  },
  {
    id: 'miro',
    name: 'Miro',
    tagline: 'Visual collaboration platform',
    description: 'Miro is an online collaborative whiteboard platform for teams.',
    category: 'Productivity',
    color: '#FFD02F',
    url: 'https://miro.com',
    size: 'large'
  },
  {
    id: 'whimsical',
    name: 'Whimsical',
    tagline: 'Think together',
    description: 'Whimsical is a visual workspace for thinking and collaboration.',
    category: 'Productivity',
    color: '#7B68EE',
    url: 'https://whimsical.com',
    size: 'medium'
  },

  // 💰 Finance & Payments (10)
  {
    id: 'stripe',
    name: 'Stripe',
    tagline: 'Payments infrastructure',
    description: 'Stripe is a suite of payment APIs that powers commerce for businesses of all sizes.',
    category: 'Finance',
    color: '#635BFF',
    url: 'https://stripe.com',
    size: 'large',
    featured: true
  },
  {
    id: 'paypal',
    name: 'PayPal',
    tagline: 'Online payments',
    description: 'PayPal is an online payment system that supports money transfers.',
    category: 'Finance',
    color: '#003087',
    url: 'https://paypal.com',
    size: 'large'
  },
  {
    id: 'razorpay',
    name: 'Razorpay',
    tagline: 'Payment gateway for India',
    description: 'Razorpay is a payment gateway that allows businesses to accept payments.',
    category: 'Finance',
    color: '#0066FF',
    url: 'https://razorpay.com',
    size: 'medium'
  },
  {
    id: 'paddle',
    name: 'Paddle',
    tagline: 'Revenue delivery platform',
    description: 'Paddle is a revenue delivery platform for SaaS companies.',
    category: 'Finance',
    color: '#FFCE00',
    url: 'https://paddle.com',
    size: 'medium'
  },
  {
    id: 'chargebee',
    name: 'Chargebee',
    tagline: 'Subscription billing',
    description: 'Chargebee is a subscription billing and revenue management platform.',
    category: 'Finance',
    color: '#FF6B00',
    url: 'https://www.chargebee.com',
    size: 'medium'
  },
  {
    id: 'freshbooks',
    name: 'FreshBooks',
    tagline: 'Accounting software',
    description: 'FreshBooks is accounting software designed for small business owners.',
    category: 'Finance',
    color: '#0075DD',
    url: 'https://www.freshbooks.com',
    size: 'medium'
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    tagline: 'Accounting made easy',
    description: 'QuickBooks is an accounting software package for small and medium-sized businesses.',
    category: 'Finance',
    color: '#2CA01C',
    url: 'https://quickbooks.intuit.com',
    size: 'large'
  },
  {
    id: 'xero',
    name: 'Xero',
    tagline: 'Beautiful accounting',
    description: 'Xero is a cloud-based accounting software platform for small businesses.',
    category: 'Finance',
    color: '#13B5EA',
    url: 'https://xero.com',
    size: 'medium'
  },
  {
    id: 'zoho-books',
    name: 'Zoho Books',
    tagline: 'Online accounting',
    description: 'Zoho Books is online accounting software for growing businesses.',
    category: 'Finance',
    color: '#4285F4',
    url: 'https://zoho.com/books',
    size: 'medium'
  },
  {
    id: 'wave',
    name: 'Wave',
    tagline: 'Free accounting software',
    description: 'Wave provides free financial software for small businesses.',
    category: 'Finance',
    color: '#1C65C9',
    url: 'https://waveapps.com',
    size: 'small'
  },

  // 🛒 E-commerce (5)
  {
    id: 'shopify',
    name: 'Shopify',
    tagline: 'Commerce platform',
    description: 'Shopify is a commerce platform that allows anyone to set up an online store.',
    category: 'E-commerce',
    color: '#96BF48',
    url: 'https://shopify.com',
    size: 'large',
    featured: true
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    tagline: 'WordPress e-commerce',
    description: 'WooCommerce is an open-source e-commerce plugin for WordPress.',
    category: 'E-commerce',
    color: '#96588A',
    url: 'https://woocommerce.com',
    size: 'large'
  },
  {
    id: 'bigcommerce',
    name: 'BigCommerce',
    tagline: 'E-commerce for all',
    description: 'BigCommerce is a leading e-commerce platform for growing businesses.',
    category: 'E-commerce',
    color: '#34313F',
    url: 'https://bigcommerce.com',
    size: 'medium'
  },
  {
    id: 'gumroad',
    name: 'Gumroad',
    tagline: 'Sell anything',
    description: 'Gumroad is an e-commerce platform that enables creators to sell products.',
    category: 'E-commerce',
    color: '#FF90E8',
    url: 'https://gumroad.com',
    size: 'medium'
  },
  {
    id: 'sellfy',
    name: 'Sellfy',
    tagline: 'Sell digital products',
    description: 'Sellfy is an e-commerce platform for selling digital and physical products.',
    category: 'E-commerce',
    color: '#26CF72',
    url: 'https://sellfy.com',
    size: 'small'
  },

  // 📹 Video & Media (5)
  {
    id: 'loom',
    name: 'Loom',
    tagline: 'Video messaging for work',
    description: 'Loom is an easy-to-use video messaging tool for async communication.',
    category: 'Video',
    color: '#625DF5',
    url: 'https://loom.com',
    size: 'large'
  },
  {
    id: 'vimeo',
    name: 'Vimeo',
    tagline: 'Video experience platform',
    description: 'Vimeo is a video hosting, sharing, and services platform.',
    category: 'Video',
    color: '#1AB7EA',
    url: 'https://vimeo.com',
    size: 'large'
  },
  {
    id: 'wistia',
    name: 'Wistia',
    tagline: 'Video marketing',
    description: 'Wistia is a video hosting platform for businesses.',
    category: 'Video',
    color: '#54BBFF',
    url: 'https://wistia.com',
    size: 'medium'
  },
  {
    id: 'kapwing',
    name: 'Kapwing',
    tagline: 'Create content faster',
    description: 'Kapwing is an online video editor and content creation platform.',
    category: 'Video',
    color: '#4F57FF',
    url: 'https://kapwing.com',
    size: 'medium'
  },
  {
    id: 'veed',
    name: 'VEED',
    tagline: 'Online video editor',
    description: 'VEED is a simple online video editing tool for creating professional videos.',
    category: 'Video',
    color: '#1E90FF',
    url: 'https://veed.io',
    size: 'medium'
  },

  // 🧠 Learning & Courses (5)
  {
    id: 'teachable',
    name: 'Teachable',
    tagline: 'Create online courses',
    description: 'Teachable is a platform for creating and selling online courses.',
    category: 'Education',
    color: '#FF5E15',
    url: 'https://teachable.com',
    size: 'medium'
  },
  {
    id: 'thinkific',
    name: 'Thinkific',
    tagline: 'Course creation platform',
    description: 'Thinkific is a platform to create, market, and sell online courses.',
    category: 'Education',
    color: '#5CB85C',
    url: 'https://thinkific.com',
    size: 'medium'
  },
  {
    id: 'kajabi',
    name: 'Kajabi',
    tagline: 'Knowledge commerce',
    description: 'Kajabi is an all-in-one platform for online courses and memberships.',
    category: 'Education',
    color: '#F95700',
    url: 'https://kajabi.com',
    size: 'medium'
  },
  {
    id: 'podia',
    name: 'Podia',
    tagline: 'Sell online courses',
    description: 'Podia is a platform for selling online courses, memberships, and downloads.',
    category: 'Education',
    color: '#9D4EDD',
    url: 'https://podia.com',
    size: 'small'
  },
  {
    id: 'learnworlds',
    name: 'LearnWorlds',
    tagline: 'Online course platform',
    description: 'LearnWorlds is a powerful course platform for creating learning experiences.',
    category: 'Education',
    color: '#00D4AA',
    url: 'https://learnworlds.com',
    size: 'small'
  },

  // 🧾 Forms & Surveys (5)
  {
    id: 'typeform',
    name: 'Typeform',
    tagline: 'Beautiful forms',
    description: 'Typeform is an online software that helps create conversational forms.',
    category: 'Forms',
    color: '#262627',
    url: 'https://typeform.com',
    size: 'large'
  },
  {
    id: 'google-forms',
    name: 'Google Forms',
    tagline: 'Free form builder',
    description: 'Google Forms is a survey administration software for creating forms.',
    category: 'Forms',
    color: '#7248B9',
    url: 'https://forms.google.com',
    size: 'large'
  },
  {
    id: 'jotform',
    name: 'Jotform',
    tagline: 'Online form builder',
    description: 'Jotform is a full-featured online form builder for creating forms.',
    category: 'Forms',
    color: '#FF6100',
    url: 'https://jotform.com',
    size: 'medium'
  },
  {
    id: 'tally',
    name: 'Tally',
    tagline: 'Simplest form builder',
    description: 'Tally is a simple way to create free forms that work like documents.',
    category: 'Forms',
    color: '#1D1D1B',
    url: 'https://tally.so',
    size: 'medium'
  },
  {
    id: 'surveymonkey',
    name: 'SurveyMonkey',
    tagline: 'Online surveys',
    description: 'SurveyMonkey is an online survey development cloud-based software.',
    category: 'Forms',
    color: '#00BF6F',
    url: 'https://surveymonkey.com',
    size: 'large'
  },

  // 🔐 Security & Auth (5)
  {
    id: 'auth0',
    name: 'Auth0',
    tagline: 'Identity platform',
    description: 'Auth0 is an identity management platform for web, mobile, and legacy apps.',
    category: 'Security',
    color: '#EB5424',
    url: 'https://auth0.com',
    size: 'large'
  },
  {
    id: 'okta',
    name: 'Okta',
    tagline: 'Identity management',
    description: 'Okta is an identity and access management company.',
    category: 'Security',
    color: '#007DC1',
    url: 'https://okta.com',
    size: 'large'
  },
  {
    id: 'onelogin',
    name: 'OneLogin',
    tagline: 'Secure access management',
    description: 'OneLogin is a cloud identity and access management provider.',
    category: 'Security',
    color: '#01A0DC',
    url: 'https://onelogin.com',
    size: 'medium'
  },
  {
    id: 'lastpass',
    name: 'LastPass',
    tagline: 'Password manager',
    description: 'LastPass is a password manager that stores encrypted passwords.',
    category: 'Security',
    color: '#D32D27',
    url: 'https://lastpass.com',
    size: 'medium'
  },
  {
    id: '1password',
    name: '1Password',
    tagline: 'Password manager',
    description: '1Password is a password manager that provides a place to store passwords.',
    category: 'Security',
    color: '#1A8CFF',
    url: 'https://1password.com',
    size: 'large'
  },

  // 📬 Customer Support (5)
  {
    id: 'zendesk',
    name: 'Zendesk',
    tagline: 'Customer service software',
    description: 'Zendesk is a customer service software and support ticketing system.',
    category: 'Support',
    color: '#03363D',
    url: 'https://zendesk.com',
    size: 'large'
  },
  {
    id: 'intercom',
    name: 'Intercom',
    tagline: 'Customer messaging platform',
    description: 'Intercom is the complete AI-first customer service solution.',
    category: 'Support',
    color: '#6AFDEF',
    url: 'https://intercom.com',
    size: 'large'
  },
  {
    id: 'freshdesk',
    name: 'Freshdesk',
    tagline: 'Customer support software',
    description: 'Freshdesk is a cloud-based customer support software.',
    category: 'Support',
    color: '#25C16F',
    url: 'https://freshdesk.com',
    size: 'medium'
  },
  {
    id: 'helpscout',
    name: 'Help Scout',
    tagline: 'Help desk software',
    description: 'Help Scout is a help desk software company for customer support.',
    category: 'Support',
    color: '#1292EE',
    url: 'https://helpscout.com',
    size: 'medium'
  },
  {
    id: 'crisp',
    name: 'Crisp',
    tagline: 'Business messaging',
    description: 'Crisp is a business messaging platform for startups and SMBs.',
    category: 'Support',
    color: '#4D6CFE',
    url: 'https://crisp.chat',
    size: 'small'
  },

  // 📅 Scheduling (5)
  {
    id: 'calendly',
    name: 'Calendly',
    tagline: 'Easy scheduling ahead',
    description: 'Calendly is scheduling automation software for eliminating back-and-forth emails.',
    category: 'Scheduling',
    color: '#006BFF',
    url: 'https://calendly.com',
    size: 'large'
  },
  {
    id: 'savvycal',
    name: 'SavvyCal',
    tagline: 'Scheduling for humans',
    description: 'SavvyCal is a scheduling tool built for people who care about UX.',
    category: 'Scheduling',
    color: '#5046E5',
    url: 'https://savvycal.com',
    size: 'medium'
  },
  {
    id: 'clockwise',
    name: 'Clockwise',
    tagline: 'Time management',
    description: 'Clockwise is an AI-powered time management tool for busy teams.',
    category: 'Scheduling',
    color: '#FF5C00',
    url: 'https://clockwise.so',
    size: 'medium'
  },
  {
    id: 'motion',
    name: 'Motion',
    tagline: 'AI calendar assistant',
    description: 'Motion uses AI to automatically build your perfect schedule.',
    category: 'Scheduling',
    color: '#6366F1',
    url: 'https://usemotion.com',
    size: 'medium'
  },
  {
    id: 'reclaim',
    name: 'Reclaim',
    tagline: 'Smart calendar AI',
    description: 'Reclaim is an AI scheduling app that finds the best time for meetings.',
    category: 'Scheduling',
    color: '#4F46E5',
    url: 'https://reclaim.ai',
    size: 'medium'
  },

  // 🧰 Automation & Infrastructure (10)
  {
    id: 'zapier',
    name: 'Zapier',
    tagline: 'Automate your work',
    description: 'Zapier is a tool that allows you to connect apps and automate workflows.',
    category: 'Automation',
    color: '#FF4A00',
    url: 'https://zapier.com',
    size: 'large',
    featured: true
  },
  {
    id: 'make',
    name: 'Make',
    tagline: 'Visual automation',
    description: 'Make (formerly Integromat) is a visual platform for designing workflows.',
    category: 'Automation',
    color: '#6D00CC',
    url: 'https://make.com',
    size: 'medium'
  },
  {
    id: 'ifttt',
    name: 'IFTTT',
    tagline: 'Connect your apps',
    description: 'IFTTT helps you connect your apps and devices for free.',
    category: 'Automation',
    color: '#000000',
    url: 'https://ifttt.com',
    size: 'medium'
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    tagline: 'Web performance & security',
    description: 'Cloudflare is a web performance and security company.',
    category: 'Infrastructure',
    color: '#F38020',
    url: 'https://cloudflare.com',
    size: 'large'
  },
  {
    id: 'namecheap',
    name: 'Namecheap',
    tagline: 'Domain registration',
    description: 'Namecheap is a domain registrar and web hosting company.',
    category: 'Infrastructure',
    color: '#FF5100',
    url: 'https://namecheap.com',
    size: 'medium'
  },
  {
    id: 'godaddy',
    name: 'GoDaddy',
    tagline: 'Domain & hosting',
    description: 'GoDaddy is a web hosting and domain registrar company.',
    category: 'Infrastructure',
    color: '#1BDBDB',
    url: 'https://godaddy.com',
    size: 'large'
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    tagline: 'Cloud infrastructure',
    description: 'DigitalOcean is a cloud infrastructure provider for developers.',
    category: 'Infrastructure',
    color: '#0080FF',
    url: 'https://digitalocean.com',
    size: 'large'
  },
  {
    id: 'aws',
    name: 'AWS',
    tagline: 'Cloud computing services',
    description: 'Amazon Web Services offers reliable cloud computing services.',
    category: 'Infrastructure',
    color: '#FF9900',
    url: 'https://aws.amazon.com',
    size: 'large',
    featured: true
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud',
    tagline: 'Cloud computing platform',
    description: 'Google Cloud Platform is a suite of cloud computing services.',
    category: 'Infrastructure',
    color: '#4285F4',
    url: 'https://cloud.google.com',
    size: 'large'
  },
  {
    id: 'azure',
    name: 'Azure',
    tagline: 'Microsoft cloud',
    description: 'Microsoft Azure is a cloud computing service for building applications.',
    category: 'Infrastructure',
    color: '#0089D6',
    url: 'https://azure.microsoft.com',
    size: 'large'
  },

  // 🧠 AI Coding / Dev Assistants (5)
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'Your AI pair programmer',
    description: 'GitHub Copilot uses AI to suggest code and entire functions in real-time.',
    category: 'AI Coding',
    color: '#6E40C9',
    url: 'https://github.com/copilot',
    size: 'large',
    featured: true
  },
  {
    id: 'cursor',
    name: 'Cursor',
    tagline: 'AI-first code editor',
    description: 'Cursor is an AI-first code editor designed for pair-programming with AI.',
    category: 'AI Coding',
    color: '#000000',
    url: 'https://cursor.sh',
    size: 'large'
  },
  {
    id: 'codeium',
    name: 'Codeium',
    tagline: 'Free AI coding toolkit',
    description: 'Codeium offers free AI-powered code acceleration for developers.',
    category: 'AI Coding',
    color: '#09B6A2',
    url: 'https://codeium.com',
    size: 'medium'
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    tagline: 'AI code completion',
    description: 'Tabnine is an AI code completion tool that predicts and suggests code.',
    category: 'AI Coding',
    color: '#6B48FF',
    url: 'https://tabnine.com',
    size: 'medium'
  },
  {
    id: 'replit',
    name: 'Replit',
    tagline: 'Build software together',
    description: 'Replit is a browser-based IDE for collaborative coding.',
    category: 'AI Coding',
    color: '#F26207',
    url: 'https://replit.com',
    size: 'large'
  },

  // 📊 CRM (5)
  {
    id: 'salesforce',
    name: 'Salesforce',
    tagline: 'The world\'s #1 CRM',
    description: 'Salesforce is a customer relationship management solution for sales and marketing.',
    category: 'CRM',
    color: '#00A1E0',
    url: 'https://salesforce.com',
    size: 'large',
    featured: true
  },
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    tagline: 'CRM for growing businesses',
    description: 'Zoho CRM is an online sales CRM software for managing customer relationships.',
    category: 'CRM',
    color: '#C8202B',
    url: 'https://zoho.com/crm',
    size: 'large'
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    tagline: 'Sales CRM for teams',
    description: 'Pipedrive is a sales-focused CRM designed for teams to track deals.',
    category: 'CRM',
    color: '#25292C',
    url: 'https://pipedrive.com',
    size: 'medium'
  },
  {
    id: 'close',
    name: 'Close',
    tagline: 'CRM for closing deals',
    description: 'Close is a CRM built for inside sales teams with calling features.',
    category: 'CRM',
    color: '#1E3A5F',
    url: 'https://close.com',
    size: 'medium'
  },
  {
    id: 'insightly',
    name: 'Insightly',
    tagline: 'Modern CRM',
    description: 'Insightly is a CRM platform for businesses to build customer relationships.',
    category: 'CRM',
    color: '#0066CC',
    url: 'https://insightly.com',
    size: 'small'
  },

  // 🌍 More Tools (50+)
  {
    id: 'tawkto',
    name: 'Tawk.to',
    tagline: 'Free live chat',
    description: 'Tawk.to is a free messaging app to monitor and chat with visitors.',
    category: 'Support',
    color: '#03A84E',
    url: 'https://tawk.to',
    size: 'medium'
  },
  {
    id: 'drift',
    name: 'Drift',
    tagline: 'Conversational marketing',
    description: 'Drift is a conversational marketing platform that connects businesses with buyers.',
    category: 'Marketing',
    color: '#0176D3',
    url: 'https://drift.com',
    size: 'medium'
  },
  {
    id: 'olark',
    name: 'Olark',
    tagline: 'Live chat software',
    description: 'Olark is live chat software for sales, marketing, and customer support.',
    category: 'Support',
    color: '#1EB589',
    url: 'https://olark.com',
    size: 'small'
  },
  {
    id: 'segment',
    name: 'Segment',
    tagline: 'Customer data platform',
    description: 'Segment is a customer data platform that collects and routes data.',
    category: 'Analytics',
    color: '#52BD94',
    url: 'https://segment.com',
    size: 'large'
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    tagline: 'Cloud data platform',
    description: 'Snowflake is a cloud-based data storage and analytics platform.',
    category: 'Analytics',
    color: '#29B5E8',
    url: 'https://snowflake.com',
    size: 'large'
  },
  {
    id: 'glide',
    name: 'Glide',
    tagline: 'No-code apps',
    description: 'Glide turns spreadsheets into powerful apps without code.',
    category: 'No-Code',
    color: '#7B68EE',
    url: 'https://glideapps.com',
    size: 'medium'
  },
  {
    id: 'bubble',
    name: 'Bubble',
    tagline: 'No-code app builder',
    description: 'Bubble is a visual programming language and no-code development platform.',
    category: 'No-Code',
    color: '#3C92DC',
    url: 'https://bubble.io',
    size: 'large'
  },
  {
    id: 'adalo',
    name: 'Adalo',
    tagline: 'Build apps without code',
    description: 'Adalo is a no-code platform for building mobile and web apps.',
    category: 'No-Code',
    color: '#5146F5',
    url: 'https://adalo.com',
    size: 'medium'
  },
  {
    id: 'softr',
    name: 'Softr',
    tagline: 'Turn data into apps',
    description: 'Softr builds custom apps from Airtable or Google Sheets without code.',
    category: 'No-Code',
    color: '#2D2DFF',
    url: 'https://softr.io',
    size: 'medium'
  },
  {
    id: 'carrd',
    name: 'Carrd',
    tagline: 'Simple one-page sites',
    description: 'Carrd is a platform for building simple, responsive one-page sites.',
    category: 'Website Builder',
    color: '#1D1D1B',
    url: 'https://carrd.co',
    size: 'medium'
  },
  {
    id: 'dorik',
    name: 'Dorik',
    tagline: 'Website builder',
    description: 'Dorik is a no-code website builder for creating beautiful sites.',
    category: 'Website Builder',
    color: '#4353FF',
    url: 'https://dorik.com',
    size: 'small'
  },
  {
    id: 'tilda',
    name: 'Tilda',
    tagline: 'Website builder',
    description: 'Tilda is a website builder for creating websites without code.',
    category: 'Website Builder',
    color: '#FF7B5F',
    url: 'https://tilda.cc',
    size: 'medium'
  },
  {
    id: 'systeme',
    name: 'Systeme.io',
    tagline: 'All-in-one marketing',
    description: 'Systeme.io is an all-in-one marketing platform for entrepreneurs.',
    category: 'Marketing',
    color: '#8B5CF6',
    url: 'https://systeme.io',
    size: 'small'
  },
  {
    id: 'thrivecart',
    name: 'ThriveCart',
    tagline: 'High converting cart',
    description: 'ThriveCart is a checkout platform for selling digital products.',
    category: 'E-commerce',
    color: '#00C853',
    url: 'https://thrivecart.com',
    size: 'small'
  },
  {
    id: 'podbean',
    name: 'Podbean',
    tagline: 'Podcast hosting',
    description: 'Podbean is a podcast hosting and monetization platform.',
    category: 'Media',
    color: '#8BC34A',
    url: 'https://podbean.com',
    size: 'small'
  },
  {
    id: 'anchor',
    name: 'Anchor',
    tagline: 'Podcast creation',
    description: 'Anchor is a free podcast creation platform by Spotify.',
    category: 'Media',
    color: '#8940FA',
    url: 'https://anchor.fm',
    size: 'medium'
  },
  {
    id: 'substack',
    name: 'Substack',
    tagline: 'Newsletter platform',
    description: 'Substack is a platform for subscription newsletters.',
    category: 'Publishing',
    color: '#FF6719',
    url: 'https://substack.com',
    size: 'large'
  },
  {
    id: 'beehiiv',
    name: 'Beehiiv',
    tagline: 'Newsletter platform',
    description: 'Beehiiv is a newsletter platform built for growth.',
    category: 'Publishing',
    color: '#FBBF24',
    url: 'https://beehiiv.com',
    size: 'medium'
  },
  {
    id: 'ghost',
    name: 'Ghost',
    tagline: 'Publishing platform',
    description: 'Ghost is an independent platform for professional publishers.',
    category: 'Publishing',
    color: '#15171A',
    url: 'https://ghost.org',
    size: 'medium'
  },
  {
    id: 'wordpress',
    name: 'WordPress.com',
    tagline: 'Website & blog builder',
    description: 'WordPress.com is a blogging and website building platform.',
    category: 'Website Builder',
    color: '#21759B',
    url: 'https://wordpress.com',
    size: 'large'
  },
  {
    id: 'medium',
    name: 'Medium',
    tagline: 'Where ideas find you',
    description: 'Medium is an online publishing platform for stories and ideas.',
    category: 'Publishing',
    color: '#000000',
    url: 'https://medium.com',
    size: 'large'
  },
  {
    id: 'squarespace',
    name: 'Squarespace',
    tagline: 'Build your website',
    description: 'Squarespace is a website builder for creating beautiful websites.',
    category: 'Website Builder',
    color: '#000000',
    url: 'https://squarespace.com',
    size: 'large'
  },
  {
    id: 'wix',
    name: 'Wix',
    tagline: 'Create your website',
    description: 'Wix is a cloud-based website building platform.',
    category: 'Website Builder',
    color: '#0C6EFC',
    url: 'https://wix.com',
    size: 'large'
  },
  {
    id: 'weebly',
    name: 'Weebly',
    tagline: 'Free website builder',
    description: 'Weebly is a free website builder that makes it easy to create websites.',
    category: 'Website Builder',
    color: '#2C5BB1',
    url: 'https://weebly.com',
    size: 'medium'
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    tagline: 'AI-powered writing',
    description: 'Notion AI helps you write, brainstorm, and organize with AI assistance.',
    category: 'AI',
    color: '#000000',
    url: 'https://notion.so',
    size: 'medium'
  },
  {
    id: 'linear',
    name: 'Linear',
    tagline: 'Streamline issues',
    description: 'Linear is a purpose-built tool for planning and building software.',
    category: 'DevTools',
    color: '#5E6AD2',
    url: 'https://linear.app',
    size: 'large'
  },
  {
    id: 'height',
    name: 'Height',
    tagline: 'Project management',
    description: 'Height is an autonomous project collaboration tool.',
    category: 'Productivity',
    color: '#FF5C00',
    url: 'https://height.app',
    size: 'small'
  },
  {
    id: 'sunsama',
    name: 'Sunsama',
    tagline: 'Daily planner',
    description: 'Sunsama is a daily planner for busy professionals.',
    category: 'Productivity',
    color: '#F97316',
    url: 'https://sunsama.com',
    size: 'small'
  },
  {
    id: 'fibery',
    name: 'Fibery',
    tagline: 'Connected workspace',
    description: 'Fibery is a work management platform that adapts to your company.',
    category: 'Productivity',
    color: '#6C63FF',
    url: 'https://fibery.io',
    size: 'small'
  },
  {
    id: 'zenkit',
    name: 'Zenkit',
    tagline: 'Project management',
    description: 'Zenkit is a project management and collaboration tool.',
    category: 'Productivity',
    color: '#0F62FE',
    url: 'https://zenkit.com',
    size: 'small'
  },
  {
    id: 'proofhub',
    name: 'ProofHub',
    tagline: 'Project management',
    description: 'ProofHub is a SaaS-based project management software.',
    category: 'Productivity',
    color: '#F08C00',
    url: 'https://proofhub.com',
    size: 'small'
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    tagline: 'Work management',
    description: 'Teamwork is a work management software for client services.',
    category: 'Productivity',
    color: '#4461D7',
    url: 'https://teamwork.com',
    size: 'medium'
  },
  {
    id: 'payoneer',
    name: 'Payoneer',
    tagline: 'Global payments',
    description: 'Payoneer is a global payment platform for businesses.',
    category: 'Finance',
    color: '#FF4800',
    url: 'https://payoneer.com',
    size: 'medium'
  },
  {
    id: 'wise',
    name: 'Wise',
    tagline: 'International money transfers',
    description: 'Wise is a money transfer service for sending money abroad.',
    category: 'Finance',
    color: '#9FE870',
    url: 'https://wise.com',
    size: 'large'
  },
  {
    id: 'deel',
    name: 'Deel',
    tagline: 'Global HR platform',
    description: 'Deel is a global payroll and compliance platform.',
    category: 'HR',
    color: '#0E50E6',
    url: 'https://deel.com',
    size: 'large'
  },
  {
    id: 'remote',
    name: 'Remote',
    tagline: 'Global HR solutions',
    description: 'Remote is a global HR platform for distributed teams.',
    category: 'HR',
    color: '#5B21B6',
    url: 'https://remote.com',
    size: 'medium'
  },
  {
    id: 'oyster',
    name: 'Oyster',
    tagline: 'Global employment',
    description: 'Oyster makes it easy to hire people anywhere in the world.',
    category: 'HR',
    color: '#00C6BE',
    url: 'https://oysterhr.com',
    size: 'medium'
  },
  {
    id: 'gusto',
    name: 'Gusto',
    tagline: 'Payroll & HR',
    description: 'Gusto is a cloud-based payroll, benefits, and HR platform.',
    category: 'HR',
    color: '#F45D48',
    url: 'https://gusto.com',
    size: 'large'
  },
  {
    id: 'rippling',
    name: 'Rippling',
    tagline: 'Workforce platform',
    description: 'Rippling is a workforce platform for HR, IT, and Finance.',
    category: 'HR',
    color: '#FEC62E',
    url: 'https://rippling.com',
    size: 'large'
  },
  {
    id: 'bamboohr',
    name: 'BambooHR',
    tagline: 'HR software',
    description: 'BambooHR is HR software for small and medium businesses.',
    category: 'HR',
    color: '#73C41D',
    url: 'https://bamboohr.com',
    size: 'medium'
  },
  {
    id: 'lattice',
    name: 'Lattice',
    tagline: 'People management',
    description: 'Lattice is a people management platform for performance reviews.',
    category: 'HR',
    color: '#7C3AED',
    url: 'https://lattice.com',
    size: 'medium'
  },
  {
    id: 'cultureamp',
    name: 'Culture Amp',
    tagline: 'Employee experience',
    description: 'Culture Amp is an employee experience platform.',
    category: 'HR',
    color: '#E91B5B',
    url: 'https://cultureamp.com',
    size: 'medium'
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse',
    tagline: 'Hiring software',
    description: 'Greenhouse is a hiring software for growing companies.',
    category: 'HR',
    color: '#23AF4D',
    url: 'https://greenhouse.io',
    size: 'medium'
  },
  {
    id: 'lever',
    name: 'Lever',
    tagline: 'Talent acquisition',
    description: 'Lever is a talent acquisition suite for hiring.',
    category: 'HR',
    color: '#1F8CEB',
    url: 'https://lever.co',
    size: 'medium'
  },
  {
    id: 'workable',
    name: 'Workable',
    tagline: 'Recruiting software',
    description: 'Workable is recruiting software for hiring teams.',
    category: 'HR',
    color: '#2596FF',
    url: 'https://workable.com',
    size: 'medium'
  },
  {
    id: 'angellist',
    name: 'AngelList',
    tagline: 'Startup recruiting',
    description: 'AngelList is a platform connecting startups with job seekers and investors.',
    category: 'HR',
    color: '#000000',
    url: 'https://angel.co',
    size: 'medium'
  },
  {
    id: 'crunchbase',
    name: 'Crunchbase',
    tagline: 'Company insights',
    description: 'Crunchbase is a platform for finding business information.',
    category: 'Data',
    color: '#146AFF',
    url: 'https://crunchbase.com',
    size: 'large'
  },
  {
    id: 'producthunt',
    name: 'Product Hunt',
    tagline: 'Discover new products',
    description: 'Product Hunt is a website for discovering new tech products.',
    category: 'Discovery',
    color: '#DA552F',
    url: 'https://producthunt.com',
    size: 'large',
    featured: true
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
