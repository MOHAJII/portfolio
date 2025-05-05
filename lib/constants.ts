import { Project, Experience, Technology } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with secure payment processing and inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Healthcare Dashboard',
    description: 'Interactive dashboard for healthcare professionals to monitor patient data and metrics.',
    image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
    link: '#',
  },
  {
    id: 3,
    title: 'Real Estate Finder',
    description: 'Property search application with map integration and virtual viewing capabilities.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'Google Maps API'],
    link: '#',
  },
  {
    id: 4,
    title: 'Learning Management System',
    description: 'Comprehensive LMS for educational institutions with course creation and student tracking.',
    image: 'https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React', 'Django', 'AWS', 'WebRTC'],
    link: '#',
  },
  {
    id: 5,
    title: 'Learning Management System',
    description: 'Comprehensive LMS for educational institutions with course creation and student tracking.',
    image: 'https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['React', 'Django', 'AWS', 'WebRTC'],
    link: '#',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    duration: '2021 - Present',
    description: 'Leading development of scalable web applications and mentoring junior developers.',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    duration: '2019 - 2021',
    description: 'Developed and maintained various client projects using modern web technologies.',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Creative Web Agency',
    duration: '2017 - 2019',
    description: 'Created responsive user interfaces and implemented complex UI interactions.',
  },
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: 1,
    name: 'JavaScript',
    icon: 'code',
  },
  {
    id: 2,
    name: 'TypeScript',
    icon: 'code-2',
  },
  {
    id: 3,
    name: 'React',
    icon: 'component',
  },
  {
    id: 4,
    name: 'Node.js',
    icon: 'server',
  },
  {
    id: 5,
    name: 'MongoDB',
    icon: 'database',
  },
  {
    id: 6,
    name: 'AWS',
    icon: 'cloud',
  },
];