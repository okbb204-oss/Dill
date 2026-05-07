import { Handshake, School, RefreshCw, Moon, Monitor } from 'lucide-react';

export const trainingModesList = [
  {
    id: 'apprenticeship',
    icon: Handshake,
    link: 'https://tamhin.dz',
    isFeatured: true,
  },
  {
    id: 'presentiel',
    icon: School,
    link: '/centers',
    isFeatured: false,
  },
  {
    id: 'continue',
    icon: RefreshCw,
    link: 'https://mvet.gov.dz',
    isFeatured: false,
  },
  {
    id: 'evening',
    icon: Moon,
    link: '/centers?schedule=soir',
    isFeatured: false,
  },
  {
    id: 'distance',
    icon: Monitor,
    link: 'https://cnepd.edu.dz',
    isFeatured: false,
  }
];
