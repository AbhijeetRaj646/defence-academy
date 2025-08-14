export interface Testimonial {
  id: string;
  name: string;
  achievement: string;
  story: string;
  image: string;
  course: string;
  year: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Lieutenant Arjun Sharma',
    achievement: 'Selected in NDA 146 Course',
    story: 'Patriot\'s Path Academy transformed my dream into reality. The dedicated faculty, comprehensive study material, and constant motivation helped me clear NDA on my first attempt. The SSB preparation was exceptional - it built my confidence and leadership skills.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    course: 'NDA Preparation',
    year: '2023'
  },
  {
    id: '2',
    name: 'Flying Officer Priya Patel',
    achievement: 'AFCAT 2023 Topper - Air Force',
    story: 'The AFCAT coaching at Patriot\'s Path was outstanding. The technical knowledge sessions and aviation-focused preparation gave me an edge. Today, I\'m proud to serve in the Indian Air Force, and it all started with the foundation built here.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    course: 'AFCAT Training',
    year: '2023'
  },
  {
    id: '3',
    name: 'Captain Vikram Singh',
    achievement: 'CDS 2022 - Indian Army',
    story: 'The journey from a civilian to an Army officer seemed impossible until I joined Patriot\'s Path. The structured approach, regular assessments, and mentorship program helped me clear CDS and OTA. Forever grateful to this institution.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
    course: 'CDS Coaching',
    year: '2022'
  },
  {
    id: '4',
    name: 'Sub-Lieutenant Anjali Verma',
    achievement: 'Indian Navy - Executive Branch',
    story: 'Patriot\'s Path Academy doesn\'t just prepare you for exams; it prepares you for life. The SSB interview training was phenomenal. The confidence and leadership qualities I developed here helped me excel in the Navy. Proud to serve my nation!',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    course: 'SSB Interview',
    year: '2023'
  }
];