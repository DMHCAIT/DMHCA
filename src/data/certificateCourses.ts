export interface CertificateCourse {
  id: number
  title: string
  image: string
  lessons: number
  duration: string
  level: 'Beginner'
  rating: number
  reviews: number
  price: string
  category: string
  type: 'certificate'
  sourceUrl: string
}

export const certificateCourses: CertificateCourse[] = [
  {
    id: 301,
    title: 'Certificate In Obstetrics & Gynecology Nursing',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop',
    lessons: 36,
    duration: '25 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 1,
    price: '₹30,000.00',
    category: 'Obs & Gynae',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-obstetrics-gynecology-nursing/'
  },
  {
    id: 302,
    title: 'Certificate In Clinical Embryology',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=600&fit=crop',
    lessons: 26,
    duration: '25 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 0,
    price: '₹50,000.00',
    category: 'Reproductive',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-clinical-embryology/'
  },
  {
    id: 303,
    title: 'Certificate In Nuclear Medicine',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
    lessons: 15,
    duration: '25 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 2,
    price: '₹40,000.00',
    category: 'Radiology',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-nuclear-medicine/'
  },
  {
    id: 304,
    title: 'Certificate In Clinical Psychology',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    lessons: 25,
    duration: '25 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 1,
    price: '₹40,000.00',
    category: 'Psychology',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-clinical-psychology/'
  },
  {
    id: 305,
    title: 'Certificate In Obesity Management',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    lessons: 50,
    duration: '24 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 2,
    price: '₹35,000.00',
    category: 'Nutrition',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-obesity-management/'
  },
  {
    id: 306,
    title: 'Certificate Course In HIV Medicine',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    lessons: 42,
    duration: '25 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 1,
    price: '₹30,000.00',
    category: 'Medicine',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-course-in-hiv-medicine/'
  },
  {
    id: 307,
    title: 'Certificate Course In Hypertension',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=600&fit=crop',
    lessons: 35,
    duration: '50 Week',
    level: 'Beginner',
    rating: 4.8,
    reviews: 4,
    price: '₹30,000.00',
    category: 'Cardiology',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-hypertension/'
  },
  {
    id: 308,
    title: 'Certificate Course In Tuberculosis',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    lessons: 27,
    duration: '50 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 1,
    price: '₹50,000.00',
    category: 'Pulmonary',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-tuberculosis/'
  },
  {
    id: 309,
    title: 'Certificate Course In Diabetic Foot Care',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    lessons: 21,
    duration: '12 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 0,
    price: '₹30,000.00',
    category: 'Endocrinology',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-diabetic-foot-care/'
  },
  {
    id: 310,
    title: 'Certificate Course In Clinical Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    lessons: 36,
    duration: '25 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 4,
    price: '₹50,000.00',
    category: 'Nutrition',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-clinical-nutrition/'
  },
  {
    id: 311,
    title: 'Certificate Course In Cosmetology',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    lessons: 15,
    duration: '25 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 1,
    price: '₹50,000.00',
    category: 'Dermatology',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-cosmetology/'
  },
  {
    id: 312,
    title: 'Certificate Course In Pain Management',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    lessons: 26,
    duration: '18 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 1,
    price: '₹35,000.00',
    category: 'Medicine',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/cerificate-in-pain-management/'
  },
  {
    id: 313,
    title: 'Certificate In Infertility Management',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=600&fit=crop',
    lessons: 28,
    duration: '25 Week',
    level: 'Beginner',
    rating: 5.0,
    reviews: 0,
    price: '₹50,000.00',
    category: 'Reproductive',
    type: 'certificate',
    sourceUrl: 'https://dmhca.in/courses/certificate-in-infertility/'
  }
]
