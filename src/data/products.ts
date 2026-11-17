export interface ProductCardItem {
  id: string;
  name: string;
  subtitle?: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  category: "gypsum" | "framing";
}

export const PRODUCTS_LIST: ProductCardItem[] = [
  // 1. Gypsum Boards & Plaster
  {
    id: "saint-gobain-gyproc",
    name: "Saint-Gobain Gyproc Plasterboards",
    tagline: "Authorized Wholesale Supply",
    description: "Original 12.5mm Gyproc boards for false ceilings and drywall partitions. Available in regular, moisture-resistant (MR), and firestop types.",
    image: "/images/qarat/materials/qarat-gyproc-saint-gobain-material-02.webp",
    badge: "100% Original",
    category: "gypsum"
  },
  {
    id: "ramco-hilux",
    name: "Ramco Hilux Calcium Silicate Boards",
    subtitle: "(Authorized Stockist)",
    tagline: "Fire & Moisture Resistant Boards",
    description: "Original Ramco Hilux calcium silicate boards for high-performance false ceilings and drywall partitions. Exceptional moisture resistance, fire protection, and termite-proof durability.",
    image: "/images/qarat/materials/qarat-india-gypsum-board-stock-01.webp",
    badge: "Fire & Moisture Proof",
    category: "gypsum"
  },
  {
    id: "usg-knauf",
    name: "USG Knauf Drywall & Ceiling Systems",
    tagline: "Commercial Partition Systems",
    description: "Heavy-duty USG Knauf 12.5mm plasterboards for office partitions and commercial fit-outs. Blocks sound and provides a clean flat wall.",
    image: "/images/qarat/materials/qarat-usg-knauf-drywall-systems-03.webp",
    badge: "Commercial Grade",
    category: "gypsum"
  },
  {
    id: "sakarni-pop",
    name: "Gypsum Jointing Compounds & Sakarni POP",
    tagline: "Crack-Free Seamless Finish",
    description: "Sakarni POP plaster, Gyproc Elite-90, Knauf jointing powder, and joint tapes for a crack-free, super smooth white ceiling finish.",
    image: "/images/qarat/materials/qarat-sakarni-pop-gypsum-plaster-01.webp",
    badge: "Premium Finish",
    category: "gypsum"
  },

  // 2. Ceiling Framing & Hardware
  {
    id: "gi-ceiling-channels",
    name: "GI Ceiling & Perimeter Channels",
    tagline: "Rust-Proof Galvanized Iron",
    description: "Galvanized iron ceiling sections, intermediate channels, and wall angles in 0.45mm and heavy 0.50mm thickness. Strong screw grip.",
    image: "/images/qarat/materials/qarat-gi-channel-ceiling-framing-03.webp",
    badge: "0.50mm Heavy Gauge",
    category: "framing"
  },
  {
    id: "drywall-studs",
    name: "Drywall Partition Studs & Tracks",
    tagline: "Frames for Room Dividing Walls",
    description: "Galvanized C-studs and floor tracks to build strong, sound-proof partition walls quickly. Pre-cut holes make electrical wiring simple.",
    image: "/images/qarat/materials/qarat-gi-channel-ceiling-framing-01.webp",
    badge: "Sturdy Partition",
    category: "framing"
  },
  {
    id: "t-grid",
    name: "2x2 Modular T-Grid Suspension & Tiles",
    tagline: "Washable Drop Ceilings for Offices",
    description: "Main runners, cross tees, and white washable PVC laminated ceiling tiles for corporate office modular drop ceilings.",
    image: "/images/qarat/ceiling/qarat-gypsum-2x2-grid-ceiling-01.webp",
    badge: "Modular 2x2",
    category: "framing"
  },
  {
    id: "screws-fasteners",
    name: "Drywall Screws, Fasteners & Murga Jali",
    tagline: "Industrial Fasteners & Wire Mesh",
    description: "Black bugle drywall screws (25mm, 35mm, 50mm), metal rawl plugs, ceiling clips, and heavy-gauge Murga Jali wire mesh.",
    image: "/images/qarat/materials/drywall-screws-fasteners-murga-jali-v2.jpg",
    badge: "Hardware & Mesh",
    category: "framing"
  }
];

export const FILTER_PILLS = [
  { id: "all", label: "All", shortLabel: "All" },
  { id: "gypsum", label: "Gypsum Boards & Plaster", shortLabel: "Gypsum & Plaster" },
  { id: "framing", label: "Ceiling Framing & Hardware", shortLabel: "Framing & Hardware" },
];
