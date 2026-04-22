export type ServiceTone = 'pink' | 'yellow' | 'green' | 'blue';

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tone: ServiceTone;
}

export const SERVICES: Service[] = [
  {
    id: 'discovery',
    icon: '⬡',
    title: 'Discovery and Diagnostics',
    description: 'We uncover what\'s broken and spotlight the highest-impact fixes to accelerate your success.',
    tone: 'pink',
  },
  {
    id: 'knowledge',
    icon: '◎',
    title: 'Knowledge Capture and Insight',
    description: 'Our AI-powered Knowledge Capture turns scattered data into organized, searchable wisdom.',
    tone: 'yellow',
  },
  {
    id: 'legacy',
    icon: '✦',
    title: 'Legacy Re-Platforming',
    description: 'Modernize legacy systems into future-ready platforms. Even small changes drive impact and unlock value.',
    tone: 'green',
  },
  {
    id: 'innovation',
    icon: '◇',
    title: 'Innovation Engineering',
    description: 'Discover powerful, untapped opportunities to transform your product, technology, and organizational strategy.',
    tone: 'blue',
  },
];
