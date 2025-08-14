export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'urgent' | 'normal' | 'event';
  isNew: boolean;
}

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'NDA 148 Course Notification Released',
    description: 'UPSC has released the notification for NDA 148 Course. Last date for online application is March 15, 2024. Special crash course batches starting soon.',
    date: '2024-02-20',
    type: 'urgent',
    isNew: true
  },
  {
    id: '2',
    title: 'Free Mock Test Series',
    description: 'Register for our free mock test series for CDS 2024. Limited seats available. Mock tests include detailed performance analysis and ranking.',
    date: '2024-02-18',
    type: 'normal',
    isNew: true
  },
  {
    id: '3',
    title: 'SSB Success Workshop',
    description: 'Join our exclusive SSB Success Workshop on March 2-3, 2024. Learn from retired defence officers and successful candidates. Registration open.',
    date: '2024-02-15',
    type: 'event',
    isNew: false
  },
  {
    id: '4',
    title: 'AFCAT 2024 Results Declared',
    description: 'Congratulations to all our students who cleared AFCAT 2024! Special SSB preparation batches for qualified candidates starting immediately.',
    date: '2024-02-10',
    type: 'normal',
    isNew: false
  }
];