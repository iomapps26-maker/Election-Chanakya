import { 
  HeroSlide, 
  ServiceItem, 
  TeamMember, 
  ProjectItem, 
  GalleryItem, 
  BlogPost, 
  CareerOpening, 
  FAQItem, 
  TestimonialItem 
} from '../types';

export const COMPANY_INFO = {
  name: 'Election Chanakya',
  legalName: 'Election Chanakya Political Advisory & Analytics Services Pvt. Ltd.',
  domain: 'https://electionchanakya.co.in',
  ceo: 'Vivek Gupta',
  phone: '+91 8218305284',
  email: 'info@electionchanakya.co.in',
  office: 'Sector 63, Noida, Uttar Pradesh, India',
  addressFull: 'Plot A-42, Core Tower, Sector 63, Noida, Uttar Pradesh 201301, India',
  established: '2016',
  campaignsManaged: '280+',
  votersSurveyed: '22 Million+',
  predictiveAccuracy: '95.4%',
  warRoomsOperated: '145+'
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tagline: 'Scientific Campaign Management & Voter Psychology',
    title: 'Transforming Indian Political Strategy',
    highlightText: 'Through Precision Data',
    subtitle: 'India’s foremost political consulting and election engineering intelligence firm driven by empirical voter analytics.',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=2000&q=85', // Political Rally / Crowd
    ctaText: 'Explore Strategy Services',
    secondaryCtaText: 'Request Confidential Brief',
    stats: [
      { label: 'Campaigns Won', value: '280+' },
      { label: 'Accuracy Rate', value: '95.4%' },
      { label: 'Voters Polled', value: '22M+' }
    ]
  },
  {
    id: 2,
    tagline: 'Micro-Targeting & Booth Intelligence',
    title: 'Precision Booth Management &',
    highlightText: 'Voter Mobilization',
    subtitle: 'Granular household mapping, page-in-charge (Panna Pramukh) tracking, and real-time voter turnout optimization.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=85', // Analytics & Strategy Discussion
    ctaText: 'Booth Strategy Intelligence',
    secondaryCtaText: 'Schedule Audit',
    stats: [
      { label: 'Booths Mapped', value: '185,000+' },
      { label: 'Field Cadre', value: '45,000+' },
      { label: 'States Covered', value: '18 States' }
    ]
  },
  {
    id: 3,
    tagline: 'Hyper-Local Survey Research & Intelligence',
    title: 'Scientific Opinion Polls &',
    highlightText: 'Ground Sentiment Analysis',
    subtitle: 'Multi-stage stratified sampling with AI-powered demographic profiling to deliver bulletproof exit & opinion polls.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=2000&q=85', // Survey / Financial Analytics Data
    ctaText: 'Survey Methodologies',
    secondaryCtaText: 'View Case Studies',
    stats: [
      { label: 'Sample Accuracy', value: '±1.2%' },
      { label: 'Surveys Done', value: '1,200+' },
      { label: 'Data Points', value: '50M+' }
    ]
  },
  {
    id: 4,
    tagline: 'Real-Time Command & Control Center',
    title: '24/7 Election War Room &',
    highlightText: 'Media Crisis Defense',
    subtitle: 'Integrated intelligence war rooms tracking media sentiment, opponent narratives, and real-time voter pulse.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=2000&q=85', // Technology Control Room
    ctaText: 'War Room Setup',
    secondaryCtaText: 'Live Demo',
    stats: [
      { label: 'Active War Rooms', value: '145+' },
      { label: 'Response Time', value: '< 3 Mins' },
      { label: 'Narrative Control', value: '98%' }
    ]
  },
  {
    id: 5,
    tagline: 'AI-Driven Hyper-Local Digital Campaigns',
    title: 'Next-Gen Political Branding &',
    highlightText: 'Digital Dominance',
    subtitle: 'Algorithmic social media targeting, WhatsApp voter engagement networks, and AI persona building for leaders.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=85', // Digital Media Team
    ctaText: 'Digital Campaign Matrix',
    secondaryCtaText: 'Contact Vivek Gupta',
    stats: [
      { label: 'Impressions Managed', value: '4.2 Billion' },
      { label: 'WhatsApp Groups', value: '350,000+' },
      { label: 'ROI Improvement', value: '3.4x' }
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'political-consulting',
    title: 'Political Consulting',
    shortDesc: 'Strategic guidance for leaders and political parties from constituency selection to coalition dynamics.',
    fullDesc: 'We provide end-to-end strategic advisory for political candidates and political parties across India. From initial viability studies and candidate positioning to alliance dynamics, message calibration, and macro-trend forecasting.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    features: ['Candidate Viability Analysis', 'Incumbency Mitigation Strategy', 'Opponent Weakness Mapping', 'Leadership Narrative Design']
  },
  {
    id: 'election-management',
    title: 'Election Management',
    shortDesc: 'Full 360-degree turnkey campaign execution from nomination day to counting day management.',
    fullDesc: 'Comprehensive campaign management structuring field logistics, volunteer deployment, legal compliance, campaign schedule optimization, and multi-tier leadership command.',
    iconName: 'Flag',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80',
    features: ['Nomination Logistics', 'Rally & Star Campaigner Planning', 'Cadre Motivation Engine', 'Counting Day Agent Training']
  },
  {
    id: 'booth-management',
    title: 'Booth Management',
    shortDesc: 'Granular Panna Pramukh frameworks and voter mobilization software for maximum polling percentage.',
    fullDesc: 'Elections in India are won at the polling booth. We build multi-level booth management structures, assigning verified Page-in-Charges (Panna Pramukhs), tracking silent voters, and driving turnout on polling day.',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80',
    features: ['Panna Pramukh Mapping', 'Voter Slip Distribution Tracking', 'GOTV (Get Out The Vote) Mobile Apps', 'Silent Voter Identification']
  },
  {
    id: 'campaign-strategy',
    title: 'Campaign Strategy',
    shortDesc: 'Data-backed core messaging, emotional triggers, and manifesto alignment tailored to key voter demographics.',
    fullDesc: 'Crafting localized slogans, core messaging architectures, issue framing, and demographic-specific promises that resonate deeply with youth, women, rural communities, and urban professionals.',
    iconName: 'Target',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    features: ['Manifesto Drafting', 'Core Slogan Development', 'Issue Resonance Matrix', 'Demographic Micro-messaging']
  },
  {
    id: 'opinion-poll',
    title: 'Opinion Poll & Baseline Survey',
    shortDesc: 'Scientific field sampling to measure candidate popularity, anti-incumbency, and voting intention.',
    fullDesc: 'Executing rigorous door-to-door and telephonic quantitative surveys across all polling booths in a constituency. Uncover real voter preferences before launching campaign spends.',
    iconName: 'PieChart',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    features: ['Stratified Random Sampling', 'Anti-Incumbency Index', 'Cast/Community Balance Audit', 'Issue Hierarchy Index']
  },
  {
    id: 'exit-poll',
    title: 'Exit Poll Research',
    shortDesc: 'On-the-ground polling on election day for high-accuracy seat projections before counting day.',
    fullDesc: 'Our proprietary exit poll methodology interviews voters immediately as they leave polling stations across representative sample booths, delivering accurate seat projections within 2 hours of polling close.',
    iconName: 'BarChart3',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    features: ['Post-Voting Sample Extraction', 'Confidence Level Analysis', 'Seat-by-Seat Victory Margin Estimator', 'Turnout Impact Calibration']
  },
  {
    id: 'survey-research',
    title: 'Qualitative Survey Research',
    shortDesc: 'Deep focus group discussions, influencer interviews, and community leader mapping.',
    fullDesc: 'Uncovering the underlying emotional and psychological drivers behind voter choices through structured focus group discussions (FGDs) with local opinion makers, trade union leaders, and self-help groups.',
    iconName: 'FileText',
    image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1000&q=80',
    features: ['Focus Group Discussions', 'Key Opinion Leader (KOL) Interviews', 'Caste Dynamics Deep Dive', 'Perception Gap Diagnostics']
  },
  {
    id: 'digital-campaign',
    title: 'Digital Campaign & Social Media',
    shortDesc: 'Precision digital advertising, viral content generation, and voter segment targeting on Meta, YouTube & X.',
    fullDesc: 'Dominating digital news feeds with tailored video assets, infographics, meme marketing, and targeted ad campaigns designed to persuade undecided young voters.',
    iconName: 'Share2',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80',
    features: ['Localized Video Campaigns', 'Social Media Account Domination', 'WhatsApp Community Networks', 'Influencer Collaboration']
  },
  {
    id: 'political-branding',
    title: 'Political Branding & Image Building',
    shortDesc: 'Crafting an authoritative, empathetic, and visionary personal brand for politicians.',
    fullDesc: 'Transforming politicians into respected household names. We refine speech delivery, visual presentation, digital media presence, biography publishing, and public relations strategy.',
    iconName: 'Award',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
    features: ['Public Speaking & Speech Coaching', 'Visual Style & Wardrobe Guidance', 'National/Regional Media Coverage', 'Crisis PR & Reputation Management']
  },
  {
    id: 'constituency-mapping',
    title: 'Constituency Mapping & GIS Analytics',
    shortDesc: 'GIS-backed spatial analytics showing booth-wise voting historical patterns and demographic shifts.',
    fullDesc: 'Interactive GIS maps layering polling booth locations with past election performance, caste density, infrastructure development gaps, and road connectivity.',
    iconName: 'MapPin',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80',
    features: ['GIS Heatmaps of Booth Strengths', 'Historical Swing Velocity Maps', 'Infrastructure Need Index', 'Voter Migration Analysis']
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & AI Modeling',
    shortDesc: 'Machine learning models predicting swing voters, turnout probabilities, and victory margins.',
    fullDesc: 'Using advanced predictive analytics to categorize every voter in the constituency into loyalists, fence-sitters, and opposition die-hards, maximizing campaign spending efficiency.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
    features: ['Swing Voter Clustering', 'Propensity Score Matching', 'Ad Spend Optimization Algorithm', 'Turnout Forecasting Models']
  },
  {
    id: 'war-room',
    title: 'Election War Room Operations',
    shortDesc: '24/7 centralized command room monitoring ground events, media narratives, and real-time alerts.',
    fullDesc: 'Setting up state-of-the-art physical and virtual War Rooms with dedicated teams monitoring media channels, social media trends, field team reports, and counter-narrative deployment.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
    features: ['Real-Time TV & Print Media Monitoring', 'Rumor & Fake News Countermeasures', 'Rapid Response Team Coordination', 'Daily Intelligence Briefings']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'vivek-gupta',
    name: 'Vivek Gupta',
    role: 'Chief Executive Officer & Founder',
    isCEO: true,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85',
    description: 'Vivek Gupta is a veteran political strategist and data analyst with over 12 years of hands-on experience advising national political leaders, Chief Ministers, Members of Parliament, and MLAs across India. Under his leadership, Election Chanakya has pioneered scientific booth-level data analytics and AI-driven campaign management.',
    specialization: [
      'Macro Political Strategy',
      'High-Stakes Constituency Management',
      'Crisis Public Relations',
      'Electoral Coalition Dynamics'
    ]
  },
  {
    id: 'dr-ananya-sharma',
    name: 'Dr. Ananya Sharma',
    role: 'Head of Survey Research & Psephology',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    description: 'Ph.D. in Applied Statistics from ISI Delhi, Dr. Ananya leads the quantitative research and exit polling wing. She specializes in stratified sampling methodologies and voter psychology modeling.',
    specialization: ['Quantitative Polling', 'Sampling Science', 'Voter Psychology', 'Exit Poll Calibration']
  },
  {
    id: 'rajesh-verma',
    name: 'Rajesh Verma',
    role: 'Director of Ground Operations & Booth Intelligence',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85',
    description: 'Ex-Military Intelligence Officer with vast expertise in field logistics, cadre mobilization, and Panna Pramukh network execution across 18 Indian states.',
    specialization: ['Cadre Management', 'Field Logistics', 'Panna Pramukh Network', 'Polling Day GOTV']
  },
  {
    id: 'neha-kapoor',
    name: 'Neha Kapoor',
    role: 'Chief Digital Strategist & Media Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85',
    description: 'Pioneer in hyper-local digital political advertising, Neha manages multi-platform social media campaigns, WhatsApp community networks, and leader branding.',
    specialization: ['Digital Campaigns', 'WhatsApp Networks', 'Meme & Narrative Engineering', 'Leader Branding']
  },
  {
    id: 'amitabh-joshi',
    name: 'Amitabh Joshi',
    role: 'Head of Data Science & AI Analytics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    description: 'Ex-Silicon Valley senior data engineer specializing in machine learning algorithms, voter clustering models, and real-time war room dashboard systems.',
    specialization: ['Machine Learning', 'Swing Voter Clustering', 'War Room Engineering', 'GIS Mapping']
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'up-assembly-2022',
    title: 'Uttar Pradesh Assembly Campaign',
    constituencyType: 'Multi-Constituency Assembly',
    state: 'Uttar Pradesh',
    year: '2022',
    category: 'assembly',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1000&q=80',
    swingAchieved: '+8.4% Swing',
    votersReached: '4.8 Million Voters',
    description: 'Designed comprehensive booth-level Panna Pramukh strategy and digital war room for 32 key constituencies in Western UP.',
    results: [
      'Won 27 out of 32 targeted seats (84.3% win rate)',
      'Mobilized 89% of registered loyalist voters on polling day',
      'Ran 4,500+ hyper-local WhatsApp voter groups'
    ]
  },
  {
    id: 'punjab-parliamentary-2024',
    title: 'Punjab Parliamentary Victory Strategy',
    constituencyType: 'Lok Sabha Parliament',
    state: 'Punjab',
    year: '2024',
    category: 'parliamentary',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1000&q=80',
    swingAchieved: '+11.2% Swing',
    votersReached: '1.6 Million Voters',
    description: 'Conducted 4 rounds of deep opinion polling and executed targeted agrarian policy campaign messaging.',
    results: [
      'Flipped 2 historical stronghold constituencies',
      'Identified and converted 120,000 undecided rural voters',
      'Achieved 97.2% exit poll projection accuracy'
    ]
  },
  {
    id: 'karnataka-assembly-2023',
    title: 'Karnataka Southern Belt Turnaround',
    constituencyType: 'Assembly Clusters',
    state: 'Karnataka',
    year: '2023',
    category: 'assembly',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    swingAchieved: '+6.8% Swing',
    votersReached: '2.9 Million Voters',
    description: 'Deployed GIS mapping to uncover infrastructure grievances and built localized manifesto promises.',
    results: [
      'Secured victory in 18 out of 22 managed constituencies',
      'Overcame 5-year anti-incumbency gap in urban pockets',
      'Trained over 12,000 booth level polling agents'
    ]
  },
  {
    id: 'mp-ground-survey-2023',
    title: 'Madhya Pradesh State-Wide Voter Pulse',
    constituencyType: 'State-Wide Polling',
    state: 'Madhya Pradesh',
    year: '2023',
    category: 'survey',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    swingAchieved: '±0.8% Error Margin',
    votersReached: '350,000 Sample Respondents',
    description: 'Conducted the largest stratified field survey mapping scheme beneficiary sentiment and youth employment priorities.',
    results: [
      'Accurately predicted seat distribution within 3 seats',
      'Helped calibrate welfare scheme publicity in final 45 days',
      'Delivered daily live sentiment updates to party high command'
    ]
  },
  {
    id: 'haryana-assembly-2024',
    title: 'Haryana Ground Turnout Management',
    constituencyType: 'Assembly Election',
    state: 'Haryana',
    year: '2024',
    category: 'assembly',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
    swingAchieved: '+5.6% Swing',
    votersReached: '1.2 Million Voters',
    description: 'Real-time turnout command center tracking non-voting households during polling hours and deploying GOTV volunteers.',
    results: [
      'Boosted voter turnout in key friendly booths by 14%',
      'Successfully neutralised opponent false narrative within 20 minutes',
      'Secured historic narrow margin victories (< 1,500 votes)'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: '24/7 Election War Room Setup',
    category: 'War Room',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
    description: 'State of the art technology command center analyzing live TV broadcasts, social trends, and field reports.'
  },
  {
    id: 'g2',
    title: 'Mass Political Rally Strategy',
    category: 'Campaigns',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1000&q=80',
    description: 'Organizing strategic crowd positioning, audio-visual stage setups, and media live streaming.'
  },
  {
    id: 'g3',
    title: 'Door-to-Door Field Survey Team',
    category: 'Surveys',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80',
    description: 'Trained researchers collecting tablet-based field responses with GPS verification.'
  },
  {
    id: 'g4',
    title: 'Constituency Heatmap Analytics',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    description: 'GIS visualization showing polling booth voter density and historical swing probability.'
  },
  {
    id: 'g5',
    title: 'Press Conference & Media Strategy',
    category: 'Media',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
    description: 'Managing national and regional media interactions for party spokespersons.'
  },
  {
    id: 'g6',
    title: 'Booth Cadre Workshop & Training',
    category: 'Campaigns',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    description: 'Training 500+ Panna Pramukhs on digital turnout tools and voter relationship management.'
  },
  {
    id: 'g7',
    title: 'Digital Ad Content Studio',
    category: 'Media',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80',
    description: 'In-house video production team generating viral political reels and campaign anthems.'
  },
  {
    id: 'g8',
    title: 'High Command Strategy Session',
    category: 'War Room',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    description: 'Confidential strategy meetings with candidate high commands and core advisors.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How Panna Pramukh & Booth Intelligence Win Indian Elections',
    slug: 'how-panna-pramukh-wins-indian-elections',
    excerpt: 'In modern Indian democracy, high-decibel rallies set the mood, but booth-level execution secures victory. Learn how micro-targeting converts silent voters.',
    content: `In the complex arena of Indian politics, elections are won not merely through grand speeches or national media narratives, but through the disciplined execution at the polling booth level. The concept of the 'Panna Pramukh' (Page-in-Charge) has revolutionized voter mobilization.

### The Mathematics of a Polling Booth
A typical polling booth in an Indian constituency comprises roughly 1,000 to 1,200 registered voters, divided across approximately 30 pages of the official voter list. Each page contains around 30 to 40 voters across 8-10 households.

By designating a dedicated worker for every single page, campaign managers achieve:
1. Direct, personalized relationship with every household.
2. Real-time identification of loyalists, fence-sitters, and opposition voters.
3. Rapid distribution of personalized voter slips.
4. Guaranteed voter turnout on polling day morning.

### Election Chanakya’s Digital Panna Pramukh Engine
Election Chanakya upgrades traditional booth management with secure mobile applications. Panna Pramukhs receive verified voter data, track scheme beneficiaries, log local grievances, and receive live updates from the central War Room in Sector 63, Noida.`,
    category: 'Booth Management',
    author: 'Vivek Gupta',
    date: 'July 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'blog-2',
    title: 'The Science of Exit Polls: Stratified Sampling & Error Calibration',
    slug: 'science-of-exit-polls-sampling-error-calibration',
    excerpt: 'An insider look into how Election Chanakya achieves 95.4% accuracy in predicting seat counts across assembly and parliamentary polls.',
    content: `Exit polls are frequently criticized when television news projections miss the mark. However, when executed with rigorous statistical sampling, exit polling remains the gold standard of electoral forecast.

### Why Typical Surveys Fail
1. **Unrepresentative Sampling:** Surveying only urban markets or major highways while ignoring interior rural hamlets.
2. **Spiral of Silence:** Voters hesitating to disclose choices due to local social pressure.
3. **Imbalanced Caste Weighting:** Failing to normalize sample data against actual census caste demographics.

### The Election Chanakya Methodology
At Election Chanakya, under the guidance of CEO Vivek Gupta, our exit polling protocol mandates:
- **Stratified Random Booth Selection:** Selecting 15-20% of representative booths per assembly segment across urban, semi-urban, and rural strata.
- **Systematic Interval Polling:** Interviewing every Nth voter emerging from the booth (e.g., every 5th voter) to eliminate surveyor bias.
- **Demographic Weighting Models:** Running raw data through proprietary AI algorithms that rebalance sample responses based on historical voting patterns and demographic census weights.`,
    category: 'Survey Analytics',
    author: 'Dr. Ananya Sharma',
    date: 'June 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'blog-3',
    title: 'Building an Unbeatable Election War Room: 24/7 Command Architecture',
    slug: 'building-unbeatable-election-war-room',
    excerpt: 'How a centralized intelligence center monitors news cycles, counters fake narratives within 180 seconds, and coordinates field teams.',
    content: `During the intense 45 days of an election campaign, information asymmetry can destroy months of preparation. An Election War Room functions as the brain and nerve center of the entire political operation.

### Key Pillars of a Modern Political War Room
1. **Media Sentiment Operations:** Continuous monitoring of regional TV channels, newspapers, and digital news portals.
2. **Social Media Crisis Defense:** AI alerts detecting rival smear campaigns or misinformation, enabling counter-narrative deployment within minutes.
3. **Ground Logistics Control:** Live tracking of candidate rally convoys, star campaigner schedules, and promotional vehicle routes.
4. **Legal & Compliance Desk:** Immediate response to Election Commission Model Code of Conduct (MCC) notices or legal challenges.

Election Chanakya equips leaders with enterprise-grade physical and virtual War Rooms, operated by trained political analysts and media professionals.`,
    category: 'War Room Operations',
    author: 'Amitabh Joshi',
    date: 'June 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80'
  }
];

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Political Data Analyst',
    location: 'Sector 63, Noida (On-site / Field)',
    department: 'Data Analytics & GIS',
    type: 'Full-Time',
    experience: '3 - 6 Years',
    description: 'We are seeking an experienced Political Data Analyst with deep knowledge of Indian election datasets, demographic mapping, and statistical modeling.',
    responsibilities: [
      'Analyze past election data (Lok Sabha & Vidhan Sabha) down to polling booth level.',
      'Build machine learning models to identify swing voter patterns and voter turnover probability.',
      'Create interactive GIS maps and executive dashboards for candidate brief meetings.',
      'Collaborate with field survey directors to refine survey questionnaires and sample weights.'
    ]
  },
  {
    id: 'job-2',
    title: 'Field Survey Operations Manager',
    location: 'Noida HQ / Pan-India Travel',
    department: 'Survey Research',
    type: 'Full-Time',
    experience: '4 - 8 Years',
    description: 'Lead large-scale field teams across multiple states for quantitative opinion polls, exit polls, and focus group discussions.',
    responsibilities: [
      'Recruit, train, and manage 100+ field surveyors and supervisors per region.',
      'Ensure strict data quality control, GPS verification, and anti-fabrication protocols.',
      'Coordinate field logistics, hotel accommodations, and daily data uploads to HQ server.',
      'Prepare daily field progress reports for the CEO and Research Head.'
    ]
  },
  {
    id: 'job-3',
    title: 'Political Digital Campaign Lead',
    location: 'Sector 63, Noida',
    department: 'Digital Media & Communications',
    type: 'Full-Time',
    experience: '3 - 5 Years',
    description: 'Drive high-impact digital campaigns, WhatsApp broadcast networks, meme marketing, and targeted ad strategies on Meta, YouTube, and X.',
    responsibilities: [
      'Manage multi-million budget digital ad campaigns with precise demographic targeting.',
      'Set up and monitor hyper-local WhatsApp voter communities across assembly constituencies.',
      'Design viral political messaging, short video scripts, and rapid-response graphics.',
      'Track digital sentiment metrics and provide hourly updates during campaign spikes.'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What sets Election Chanakya apart from generic PR or marketing agencies?',
    answer: 'Unlike generic corporate marketing agencies, Election Chanakya is specialized exclusively in Indian political strategy, psephology, and booth-level electoral analytics. Led by CEO Vivek Gupta, our team comprises political scientists, statistical analysts, ex-military logistics officers, and veteran field researchers who understand ground caste realities, local grievances, and voter psychology.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How far in advance of an election should a candidate engage Election Chanakya?',
    answer: 'While we can deploy rapid-response War Rooms 30 days before polling, the ideal timeline is 6 to 12 months prior to nomination. Early engagement allows us to perform thorough baseline surveys, identify anti-incumbency issues, execute leader image building, and establish a robust Panna Pramukh network.',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'How do you guarantee confidentiality and data security for political clients?',
    answer: 'Confidentiality is the bedrock of our business. Every project is bound by strict non-disclosure agreements (NDAs). All survey raw data, strategic reports, and war room feeds are encrypted and stored on isolated servers. We never work with direct opponents in the same constituency.',
    category: 'Legal & Privacy'
  },
  {
    id: 'faq-4',
    question: 'What is your sample size and methodology for opinion & exit polls?',
    answer: 'We employ multi-stage stratified random sampling tailored to the constituency size. For an Assembly seat (~200,000 voters), sample sizes typically range from 2,500 to 5,000 verified respondents across 20-30 representative booths. For Parliamentary seats (~1.8 million voters), sample sizes range from 12,000 to 25,000 respondents.',
    category: 'Surveys'
  },
  {
    id: 'faq-5',
    question: 'Can Election Chanakya handle booth management and GOTV on polling day?',
    answer: 'Yes! Our Panna Pramukh software and GOTV (Get Out The Vote) mobile application allow booth managers to track voting turnout in real-time. By 1:00 PM on polling day, your team knows exactly which loyalist households have not yet voted, triggering targeted follow-up calls or volunteer home visits.',
    category: 'War Room'
  },
  {
    id: 'faq-6',
    question: 'Where is Election Chanakya office located and how can we meet Mr. Vivek Gupta?',
    answer: 'Our main command office is situated in Sector 63, Noida, Uttar Pradesh, India. You can schedule a confidential in-person or virtual briefing by calling +91 8218305284 or emailing info@electionchanakya.co.in.',
    category: 'General'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Senior Member of Parliament (Lok Sabha)',
    designation: 'Western UP Constituency',
    partyAffiliation: 'National Party Leader',
    quote: 'Election Chanakya’s booth management and data-backed survey reports transformed our entire campaign posture. Vivek Gupta and his team predicted our victory margin within 1.5% accuracy. Truly world-class political strategy!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-2',
    name: 'Cabinet Minister & Vidhan Sabha Candidate',
    designation: 'Northern State Assembly',
    partyAffiliation: 'Regional Alliance Partner',
    quote: 'The 24/7 War Room setup in Noida provided instantaneous counter-narratives whenever opponents spread misinformation on social media. Election Chanakya is an indispensable force multiplier for any serious politician.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-3',
    name: 'State General Secretary',
    designation: 'Campaign & Logistics Division',
    partyAffiliation: 'State Party High Command',
    quote: 'Their Panna Pramukh mobilization app and GOTV execution gave us a 9% turnout advantage in key swing booths on polling day. They are undisputed masters of ground voter analytics.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  }
];
