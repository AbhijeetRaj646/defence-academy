export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: string;
  batchSize: string;
  syllabus: string[];
  features: string[];
  fees: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: 'nda',
    title: 'NDA Preparation',
    shortDescription: 'Comprehensive coaching for National Defence Academy entrance exam with expert faculty and proven methodology.',
    description: 'Our NDA preparation course is designed to provide comprehensive coaching for the National Defence Academy entrance examination. With our expert faculty, proven teaching methodology, and personalized attention, we ensure that every student receives the best possible preparation for their defence career journey.',
    duration: '12 Months',
    batchSize: 'Max 30 Students',
    fees: '₹45,000',
    image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
    syllabus: [
      'Mathematics - Algebra, Trigonometry, Geometry',
      'General Ability Test - English & General Knowledge',
      'Physics - Mechanics, Heat, Light, Sound',
      'Chemistry - Physical, Inorganic, Organic',
      'General Science & Environmental Studies',
      'History & Geography of India',
      'Current Affairs & Defence Updates',
      'Reasoning & Mental Ability'
    ],
    features: [
      'Daily practice sessions',
      'Weekly mock tests',
      'Doubt clearing sessions',
      'Study material included',
      'Online test portal access',
      'Performance analysis',
      'Career counseling',
      'SSB interview preparation'
    ]
  },
  {
    id: 'cds',
    title: 'CDS Coaching',
    shortDescription: 'Specialized training for Combined Defence Services examination covering all three forces - Army, Navy, and Air Force.',
    description: 'Our CDS coaching program provides specialized training for the Combined Defence Services examination, preparing students for officer positions in the Indian Army, Navy, and Air Force. The course covers all aspects of the written examination and OTA preparation.',
    duration: '10 Months',
    batchSize: 'Max 25 Students',
    fees: '₹40,000',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    syllabus: [
      'English - Grammar, Vocabulary, Comprehension',
      'General Knowledge - Indian History, Geography',
      'Elementary Mathematics - Arithmetic, Algebra',
      'Current Affairs & Defence News',
      'Reasoning & Logical Thinking',
      'Indian Polity & Constitution',
      'Economics & Science',
      'Essay Writing & Précis'
    ],
    features: [
      'Comprehensive study material',
      'Regular mock examinations',
      'Individual attention',
      'Current affairs updates',
      'Interview preparation',
      'Personality development',
      'Time management training',
      'Success guarantee program'
    ]
  },
  {
    id: 'afcat',
    title: 'AFCAT Training',
    shortDescription: 'Expert coaching for Air Force Common Admission Test with focus on technical and non-technical branches.',
    description: 'Our AFCAT training program is specifically designed for the Air Force Common Admission Test, covering both technical and non-technical streams. We provide comprehensive preparation for all aspects of the examination with special focus on aviation and air force requirements.',
    duration: '8 Months',
    batchSize: 'Max 20 Students',
    fees: '₹35,000',
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg',
    syllabus: [
      'General Awareness - Current Affairs, Defence',
      'Verbal Ability - English Grammar, Reading',
      'Numerical Ability - Mathematics, Reasoning',
      'Reasoning & Military Aptitude',
      'Aviation & Space Technology',
      'Indian Air Force History',
      'Technical Knowledge (for Technical Branch)',
      'Computer Science Basics'
    ],
    features: [
      'Air Force specific preparation',
      'Technical branch coaching',
      'Aviation knowledge sessions',
      'Mock flying aptitude tests',
      'Computer adaptive practice',
      'Group discussions',
      'Leadership development',
      'Medical fitness guidance'
    ]
  },
  {
    id: 'ssb',
    title: 'SSB Interview',
    shortDescription: 'Complete SSB interview preparation including psychological tests, group tasks, and personal interviews.',
    description: 'Our SSB interview preparation course provides complete training for the Service Selection Board interview process. We cover all aspects including psychological tests, group testing, and personal interviews with experienced retired defence officers as mentors.',
    duration: '6 Months',
    batchSize: 'Max 15 Students',
    fees: '₹30,000',
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
    syllabus: [
      'Officer Intelligence Rating (OIR)',
      'Picture Perception & Description Test',
      'Thematic Apperception Test (TAT)',
      'Word Association Test (WAT)',
      'Situation Reaction Test (SRT)',
      'Group Planning Exercise (GPE)',
      'Progressive Group Task (PGT)',
      'Group Discussion & Lecturette'
    ],
    features: [
      'Retired officer mentorship',
      'Mock SSB interviews',
      'Personality development',
      'Confidence building exercises',
      'Leadership training',
      'Communication skills',
      'Team building activities',
      'Individual counseling sessions'
    ]
  }
];