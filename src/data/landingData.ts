export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  rating: number;
  content: string;
  project: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Verma",
    role: "Civil Contractor",
    company: "Verma Infra Projects",
    city: "Gomti Nagar, Lucknow",
    rating: 5,
    content: "We buy all our Saint-Gobain Gyproc boards and 0.50mm GI channels from Qarat. Their wholesale prices are the best in Lucknow, and every bundle is 100% original. Never had any bending or sagging problem on site.",
    project: "Gomti Nagar Office Building (24,000 sq.ft ceiling)"
  },
  {
    id: "t2",
    name: "Ar. Ananya Saxena",
    role: "Interior Designer",
    company: "Studio Vistara",
    city: "Hazratganj, Lucknow",
    rating: 5,
    content: "Their charcoal louvers and 8x4 UV marble sheets give our villa projects a rich 5-star hotel look. Delivery is fast and direct dealer rates save money on every room.",
    project: "Duplex Villas, Sushant Golf City"
  },
  {
    id: "t3",
    name: "Mohd. Tariq Khan",
    role: "False Ceiling Contractor",
    company: "Al-Noor Ceilings",
    city: "Kanpur Road, Lucknow",
    rating: 5,
    content: "Sakarni POP plaster, Knauf drywall studs, and joint tapes are always ready in stock at their warehouse. Whenever we need extra material on site, they send a tempo within 2 hours.",
    project: "Showroom & Flat Ceilings"
  },
  {
    id: "t4",
    name: "Pooja Trivedi",
    role: "Home Interior Designer",
    company: "Elegance Living",
    city: "Indira Nagar, Lucknow",
    rating: 5,
    content: "Their WPC fluted wall panels and designer wallpapers look beautiful on living room TV walls. No termite risk, no dampness problems, and colors match exactly with the catalog.",
    project: "Residential Apartment Renovation"
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "ceilings" | "louvers" | "marble" | "commercial";
  categoryLabel: string;
  image: string;
  description: string;
  location: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Modern False Ceiling with Cove Lights",
    category: "ceilings",
    categoryLabel: "False Ceilings",
    image: "/images/gallery/hero-interior.jpg",
    description: "Multi-step gypsum ceiling with warm hidden LED strip lights and magnetic track spotlights in a Lucknow drawing room.",
    location: "Gomti Nagar, Lucknow"
  },
  {
    id: "g2",
    title: "WPC Louver TV Feature Wall",
    category: "louvers",
    categoryLabel: "Wall Louvers",
    image: "/images/gallery/gallery-wall-panels.jpg",
    description: "Charcoal fluted wooden louvers paired with a glossy white Statuario UV marble sheet for a luxury TV console wall.",
    location: "Sushant Golf City, Lucknow"
  },
  {
    id: "g3",
    title: "2x2 Modular Office Grid Ceiling",
    category: "commercial",
    categoryLabel: "Commercial Ceilings",
    image: "/images/gallery/gallery-office-grid.jpg",
    description: "Clean steel T-grid ceiling with waterproof washable tiles for a modern corporate office.",
    location: "Vibhuti Khand IT Park"
  },
  {
    id: "g4",
    title: "Living Room Gypsum False Ceiling",
    category: "ceilings",
    categoryLabel: "False Ceilings",
    image: "/images/gallery/gallery-false-ceiling.jpg",
    description: "Smooth flat ceiling made with Saint-Gobain 12.5mm boards and crack-free Sakarni POP plaster.",
    location: "Aliganj, Lucknow"
  },
  {
    id: "g5",
    title: "Glossy UV Marble Sheet Wall",
    category: "marble",
    categoryLabel: "UV Marble Sheets",
    image: "/images/gallery/gallery-living-luxury.jpg",
    description: "8x4 feet Italian Calacatta Gold marble sheet with brushed gold metal T-profile lines.",
    location: "Hazratganj, Lucknow"
  },
  {
    id: "g6",
    title: "Sound-Proof Partition Wall",
    category: "commercial",
    categoryLabel: "Commercial Ceilings",
    image: "/images/gallery/about-warehouse.jpg",
    description: "USG Knauf drywall partition made with galvanized steel studs to divide office cabins quickly.",
    location: "Kanpur Road, Lucknow"
  }
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Are your Gypsum boards and materials 100% original?",
    answer: "Yes, 100%. We are direct authorized dealers for Saint-Gobain Gyproc, Ramco Hilux, Sakarni, and USG Knauf. Every bundle has the company batch code and original stamps."
  },
  {
    id: "faq-2",
    question: "Can I buy both small retail quantities and wholesale truckloads?",
    answer: "Yes, you can. We supply builders and contractors who need full truckloads, as well as homeowners who need materials for just one room or a small flat. You get direct wholesale prices."
  },
  {
    id: "faq-3",
    question: "How fast do you deliver in Lucknow and nearby cities?",
    answer: "We offer same-day or next-day delivery anywhere in Lucknow (Gomti Nagar, Aliganj, Hazratganj, Indira Nagar, Kanpur Road, Golf City). For nearby areas like Kanpur, Ayodhya, Barabanki, and Sitapur, we deliver in 24 to 48 hours."
  },
  {
    id: "faq-4",
    question: "Do WPC and PVC panels protect against dampness and termites?",
    answer: "Yes. Our PVC and WPC panels are 100% waterproof and termites cannot damage them. Unlike real wood or MDF that swells during rainy season, these panels stay perfect for years with zero polish needed."
  },
  {
    id: "faq-5",
    question: "Do you supply matching channels, screws, and POP together?",
    answer: "Yes, we provide everything in one place. You get 0.50mm and 0.45mm GI channels, wall studs, black drywall screws, rawl plugs, joint tapes, and Sakarni POP so you don't have to run around to different shops."
  },
  {
    id: "faq-6",
    question: "How can I get an instant price quotation?",
    answer: "Simply click any 'Get Quote' button on this page, or message us on WhatsApp at +91 98765 43210. Tell us your room size or material list, and we will send you an itemized price estimate within 30 minutes."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Choose Your Materials",
    description: "Browse our gypsum boards, steel channels, waterproof WPC louvers, and glossy UV marble sheets."
  },
  {
    step: "02",
    title: "Get Best Price Quote",
    description: "Send us your room size or material list. We give you transparent wholesale dealer prices within minutes."
  },
  {
    step: "03",
    title: "Quality Check & Packing",
    description: "We check all sheets and channels at our Lucknow warehouse and pack them safely with corner guards."
  },
  {
    step: "04",
    title: "Delivery to Your Site",
    description: "Fast tempo or truck dispatch directly to your home or construction site with safe unloading."
  }
];
