export interface ServiceItem {
  id: string;
  title: string;
  category: "General" | "Cosmetic" | "Orthodontics" | "Surgical" | "Pediatric";
  shortDescription: string;
  fullDescription: string;
  duration: string;
  priceEstimate: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  credentials: string;
  experienceYears: number;
  image: string;
  bio: string;
  education: string[];
  daysAvailable: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Appointments" | "Insurance" | "Procedures";
}

export const clinicInfo = {
  name: "Smile Dental Care",
  subtitle: "Advanced Dental Clinic & Implant Center",
  tagline: "सधैं स्वस्थ र सुन्दर मुस्कान — Trusted, Painless Modern Dentistry in Butwal",
  phone: "+977 98*******10",
  mobilePhone: "+977 98*******10",
  emergencyPhone: "+977 98*******10",
  whatsapp: "+977 98*******10",
  email: "info@smiledentalbutwal.com",
  address: "Milan Chowk (Opposite Siddhartha Bank), Siddhartha Highway",
  city: "Butwal-8, Rupandehi, Lumbini Province, Nepal",
  landmark: "Near Milan Chowk Traffic Signal, 2 minutes from Buspark Road",
  hours: [
    { days: "Sunday - Friday", time: "8:00 AM - 7:30 PM" },
    { days: "Saturday", time: "9:00 AM - 3:00 PM (Special Shift)" },
    { days: "Emergency Triage", time: "24/7 On-Call Available" },
  ],
  stats: [
    { label: "Happy Smiles in Butwal", value: "18,000+" },
    { label: "Years Serving Rupandehi", value: "12+" },
    { label: "NMC Registered Specialists", value: "6" },
    { label: "Google Rating Butwal", value: "4.9 / 5" },
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: "dental-implants",
    title: "Precision Dental Implants (दन्त इम्प्लान्ट)",
    category: "Surgical",
    shortDescription: "Permanent, natural-looking replacement for missing teeth using computer-guided titanium implants.",
    fullDescription: "Replace missing teeth permanently with Grade-5 bio-compatible titanium implants crowned with natural zirconia ceramic. Performed with digital 3D guidance for swift healing and lifetime durability.",
    duration: "1-2 Visits + Osseointegration",
    priceEstimate: "From Rs. 35,000",
    popular: true,
    icon: "ShieldCheck",
    features: [
      "Guided 3D surgical placement",
      "Lifetime implant post warranty",
      "Natural shade matching with Zirconia crown",
      "Pain-free computer-assisted anesthesia"
    ],
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners & Braces (तार बाँध्ने र अलाइनर)",
    category: "Orthodontics",
    shortDescription: "Discreetly straighten crooked teeth, crowded smiles, and bite irregularities with modern clear aligners or ceramic braces.",
    fullDescription: "Get the straight smile you have always wanted. We offer digital invisible aligners and aesthetic tooth-colored ceramic braces supervised by our certified orthodontist.",
    duration: "6 - 15 Months",
    priceEstimate: "From Rs. 40,000",
    popular: true,
    icon: "Smile",
    features: [
      "Digital 3D intraoral scan (no messy molds)",
      "Virtually invisible aligner trays",
      "Easy monthly installment plans (EMI)",
      "Comfortable for students and working professionals"
    ],
  },
  {
    id: "cosmetic-veneers",
    title: "Porcelain Veneers & Smile Design (दाँतको कस्मेटिक डिजाइन)",
    category: "Cosmetic",
    shortDescription: "Handcrafted ultra-thin porcelain veneers to correct discoloration, chipped teeth, and smile gaps.",
    fullDescription: "Transform worn, stained, or uneven teeth with customized aesthetic porcelain veneers. Engineered for high stain-resistance and radiant natural translucency.",
    duration: "2-3 Visits",
    priceEstimate: "From Rs. 15,000 / tooth",
    popular: true,
    icon: "Sparkles",
    features: [
      "3D Digital Smile Simulation preview",
      "Stain-resistant medical grade ceramic",
      "Minimal enamel preparation",
      "Natural shine matching your facial features"
    ],
  },
  {
    id: "teeth-whitening",
    title: "Laser Teeth Whitening (दाँत चम्काउने / ह्वाइटनिङ)",
    category: "Cosmetic",
    shortDescription: "Brighten your smile up to 6-8 shades whiter in just 45 minutes with safe cold-laser activation.",
    fullDescription: "Remove deep tea, coffee, smoking, and age stains safely. Includes protective gum barrier and enamel remineralization gel to prevent sensitivity.",
    duration: "45 Minutes",
    priceEstimate: "Rs. 7,500 Special",
    popular: false,
    icon: "Sun",
    features: [
      "Immediate visible results in 1 session",
      "Safe on enamel with desensitizer serum",
      "Complimentary take-home touchup kit",
      "Long-lasting brightness"
    ],
  },
  {
    id: "root-canal",
    title: "Single-Visit Rotary RCT (रुट क्यानल उपचार)",
    category: "General",
    shortDescription: "Painless single-sitting root canal treatment to save infected, aching, or severely decayed teeth.",
    fullDescription: "Using digital apex locators and advanced rotary endodontics, we clean and seal infected root canals quickly, effectively eliminating pain and preserving your natural tooth.",
    duration: "45 - 60 Minutes",
    priceEstimate: "From Rs. 4,500",
    popular: false,
    icon: "HeartPulse",
    features: [
      "Single-visit painless procedure",
      "Digital apex locator precision",
      "Saves your natural tooth from extraction",
      "Followed by durable ceramic crown"
    ],
  },
  {
    id: "scaling-cleaning",
    title: "Ultrasonic Scaling & Polishing (दाँत सफा गर्ने)",
    category: "General",
    shortDescription: "Gentle removal of tartar, calculus, and yellow stains using ultrasonic vibrations and airflow polishing.",
    fullDescription: "Prevent bleeding gums, bad breath, and loose teeth with our gentle ultrasonic scaling, air polishing, and deep fluoride protection.",
    duration: "30 - 45 Minutes",
    priceEstimate: "Rs. 1,500",
    popular: false,
    icon: "Clock",
    features: [
      "Painless ultrasonic plaque & tartar removal",
      "Airflow stain polishing",
      "Enamel strengthening fluoride gel",
      "Gum health assessment & oral hygiene guidance"
    ],
  },
];

export const doctorsData: Doctor[] = [
  {
    id: "dr-roshan-sharma",
    name: "Dr. Roshan Sharma, B.D.S., M.D.S.",
    role: "Chief Dental Surgeon & Implantologist",
    specialty: "Dental Implants, Full Mouth Reconstruction & Prosthodontics",
    credentials: "BPKIHS (Dharan) • M.D.S. (T.U. IOM) • NMC Regd. No. 8945",
    experienceYears: 14,
    image: "/images/doctor-roshan.jpg",
    bio: "Dr. Roshan Sharma is one of Butwal's most experienced implant surgeons. Trained at BPKIHS and Tribhuvan University, he specializes in pain-free computer-guided implantology and full-mouth rehabilitation.",
    education: [
      "B.D.S. - B.P. Koirala Institute of Health Sciences (BPKIHS, Dharan)",
      "M.D.S. in Prosthodontics & Implantology - T.U. Institute of Medicine",
      "Fellowship in Advanced Dental Implantology (ICOI)",
      "Nepal Medical Council (NMC) Registered Specialist (Reg: 8945)"
    ],
    daysAvailable: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  },
  {
    id: "dr-anjali-shrestha",
    name: "Dr. Anjali Shrestha, B.D.S., M.D.S.",
    role: "Consultant Orthodontist & Dento-Facial Specialist",
    specialty: "Clear Aligners, Invisible Braces & Pediatric Dentistry",
    credentials: "Kathmandu University • M.D.S. (Orthodontics) • NMC Regd. No. 10423",
    experienceYears: 10,
    image: "/images/doctor-anjali.jpg",
    bio: "Dr. Anjali Shrestha is dedicated to crafting beautiful, harmonious smiles for children, teenagers, and adults across the Lumbini region using the latest digital clear aligners and gentle aesthetic brackets.",
    education: [
      "B.D.S. - Kathmandu University School of Medical Sciences (KUSMS)",
      "M.D.S. in Orthodontics & Dento-Facial Orthopedics",
      "Certified Provider for Digital Clear Aligner Systems",
      "Member - Orthodontic & Dentofacial Orthopedic Association of Nepal (ODOAN)"
    ],
    daysAvailable: ["Sun", "Tue", "Wed", "Fri", "Sat"],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    patientName: "Bikash Thapa",
    location: "Milan Chowk, Butwal",
    treatment: "Dental Implant & Ceramic Crown",
    rating: 5,
    review: "बु Leonardo डर लागेको थियो इम्प्लान्ट गर्दा तर डा. रोशन सरले एकदमै सजिलोसँग बिना दुखाइ गर्नुभयो। Smile Dental Care Butwal मा आधुनिक मेसिनहरू छन् र स्टाफहरू पनि एकदमै सहयोगी छन्।",
    date: "1 week ago",
    verified: true,
  },
  {
    id: "t2",
    patientName: "Puja Gurung",
    location: "Drivertole, Tilottama",
    treatment: "Clear Aligners (Invisible Braces)",
    rating: 5,
    review: "Dr. Anjali helped me fix my crooked teeth with clear aligners. No one at my college could even tell I was wearing them! Best dental clinic experience in Butwal.",
    date: "3 weeks ago",
    verified: true,
  },
  {
    id: "t3",
    patientName: "Rabin Adhikari",
    location: "Golpark, Butwal",
    treatment: "Single-Sitting RCT & Whitening",
    rating: 5,
    review: "I had severe tooth pain at night. Visited Smile Dental Care next morning at Milan Chowk. RCT was finished in just 45 minutes with zero pain. Highly recommended to everyone in Rupandehi!",
    date: "1 month ago",
    verified: true,
  },
];

export const clinicPerks = [
  {
    title: "100% Painless Dentistry (दुखाइरहित उपचार)",
    description: "Modern computer-controlled local anesthesia and gentle techniques so patients never fear dental visits.",
    icon: "Sparkles",
  },
  {
    title: "Advanced 3D Digital Equipment",
    description: "Digital intraoral scanners and high-precision digital X-rays (RVG) with minimal radiation and zero messy impressions.",
    icon: "Cpu",
  },
  {
    title: "NMC Registered Specialists Only",
    description: "All treatments supervised by qualified M.D.S. specialists registered with the Nepal Medical Council.",
    icon: "BadgeCheck",
  },
  {
    title: "Convenient Location & Easy Payment",
    description: "Prime location at Milan Chowk, Butwal with easy parking and cashless payment via eSewa, Khalti, and Fonepay QR.",
    icon: "Clock",
  },
];

export const faqData: FaqItem[] = [
  {
    question: "Where is Smile Dental Care located in Butwal?",
    answer: "We are centrally located at Milan Chowk, Siddhartha Highway, Butwal-8, Rupandehi (directly opposite Siddhartha Bank). Easy access with private parking for bikes and cars.",
    category: "General",
  },
  {
    question: "Is Smile Dental Care open on Saturdays?",
    answer: "Yes! We understand our patients have busy working schedules during weekdays. We are open on Saturdays from 9:00 AM to 3:00 PM.",
    category: "Appointments",
  },
  {
    question: "What digital payment methods do you accept?",
    answer: "We accept all major Nepali payment options including Fonepay QR, eSewa, Khalti, ConnectIPS, and debit/credit cards (Visa/Mastercard), as well as cash.",
    category: "Insurance",
  },
  {
    question: "How much does a general dental checkup and consultation cost in Butwal?",
    answer: "Our standard comprehensive digital checkup and consultation fee is Rs. 500, which includes high-resolution intraoral imaging and a treatment cost estimate.",
    category: "Appointments",
  },
  {
    question: "What should I do during an emergency toothache or broken tooth?",
    answer: "Please call our direct emergency line at +977 98*******10. We prioritize emergency patients with same-day appointments to relieve acute pain immediately.",
    category: "Procedures",
  },
];
