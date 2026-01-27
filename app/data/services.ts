export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Marketing',
    description: 'Marketing is where most creators get stuck. We build custom strategies around your brand, niche, and goals - no copy-and-paste approach. With access to 20+ promotion methods, including social media, a 3,000+ page meme network, podcasts, and influencer collaborations, we handle the strategy and execution so you don\'t have to.',
    icon: '📈',
  },
  {
    title: 'Chatting',
    description: 'Chatting is the real revenue driver on OnlyFans, and so it is vital that it is done correctly. Our UK / USA chat team undergo vigorous training to ensure they can authentically match the creator\'s brand and understand the psychology in fan interactions. This drives revenue, increases renewals and ensures long term trust.',
    icon: '💬',
  },
  {
    title: 'Content Strategy & Production',
    description: 'In a fast-moving industry, knowing what content to post is everything. There\'s no universal formula - the difference between average and exceptional earnings comes down to strong branding and a clear niche. We help creators understand what the market wants and how to turn that into content that\'s unique, converts, and drives real growth.',
    icon: '🎬',
  },
];
