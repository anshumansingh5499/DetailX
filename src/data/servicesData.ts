// data/servicesData.ts

// =============================
// VEHICLE SIZE TYPES
// =============================

export type Size = "XS" | "Small" | "Medium" | "Large" | "XL";

export const carSizes: Record<Size, string> = {
  XS: "Nano, Alto 800",
  Small: "i10, WagonR, Kwid, Celerio",
  Medium: "Baleno, Punch, Nexon, Dzire, i20",
  Large: "XUV, XL6, Verna, Amaze",
  XL: "Fortuner, Innova, Scorpio, XUV700",
};

// =============================
// TYPE DEFINITIONS
// =============================

export type PriceMap = Partial<Record<Size, number>>;

export interface FourWheelerService {
  title: string;
  note?: string;
  prices: PriceMap;
}

export interface TwoWheelerService {
  title: string;
  price?: number;
  priceRange?: string;
}

// =============================
// 4 WHEELER – WASHING
// =============================

export const fourWheelerWashing: FourWheelerService[] = [
  {
    title: "Combo Wash",
    prices: { XS: 400, Small: 500, Medium: 600, Large: 700, XL: 800 },
  },
  {
    title: "Foam Wash",
    prices: { XS: 200, Small: 250, Medium: 300, Large: 350, XL: 400 },
  },
  {
    title: "Water Wash",
    prices: { XS: 100, Small: 150, Medium: 200, Large: 250, XL: 300 },
  },
  {
    title: "Underbody Wash",
    prices: { XS: 50, Small: 100, Medium: 150, Large: 200, XL: 250 },
  },
  {
    title: "Interior & Exterior Polishing",
    prices: { XS: 100, Small: 150, Medium: 200, Large: 250, XL: 300 },
  },
  {
    title: "Vacuuming",
    prices: { XS: 100, Small: 150, Medium: 200, Large: 250, XL: 300 },
  },
];

// =============================
// 4 WHEELER – DETAILING
// =============================

export const fourWheelerDetailing: FourWheelerService[] = [
  {
    title: "2 Step Polishing",
    note: "No Warranty",
    prices: { Small: 2000, Medium: 2500, Large: 3000, XL: 3500 },
  },
  {
    title: "Engine Pressure Wash",
    prices: { Small: 50, Medium: 50, Large: 100, XL: 100 },
  },
  {
    title: "4 Step Teflon",
    note: "3 Month Warranty",
    prices: { Small: 3400, Medium: 4100, Large: 4700, XL: 5500 },
  },
  {
    title: "5 Step Teflon",
    note: "6 Month Warranty",
    prices: { Small: 4100, Medium: 4900, Large: 5500, XL: 6500 },
  },
  {
    title: "Interior Full Dry Cleaning",
    prices: { Small: 2000, Medium: 2500, Large: 3000, XL: 3500 },
  },
  {
    title: "Only Ceiling Dry Cleaning",
    prices: { Small: 1000, Medium: 1200, Large: 1400, XL: 1600 },
  },
  {
    title: "Only Interior Dry Cleaning",
    prices: { Small: 1500, Medium: 1800, Large: 2100, XL: 2400 },
  },
  {
    title: "Alloy Wheel Restoration",
    prices: { Small: 800, Medium: 1000, Large: 1200, XL: 1400 },
  },
  {
    title: "Underbody Anti Rust",
    prices: { Small: 2500, Medium: 3000, Large: 3500, XL: 4000 },
  },
  {
    title: "Diesel Wash",
    prices: { Small: 250, Medium: 300, Large: 350, XL: 400 },
  },
];

// =============================
// 2 WHEELER SERVICES
// =============================

export const twoWheelerServices: TwoWheelerService[] = [
  { title: "Foam Wash (Glossy)", price: 150 },
  { title: "Foam Wash (Matte)", price: 200 },
  { title: "Foam Wash + Polishing (Glossy)", price: 300 },
  { title: "Foam Wash + Polishing (Matte)", price: 400 },
  { title: "Chain Cleaning / Lubing", price: 50 },
  { title: "Bike Teflon Coating (2 Step)", price: 500 },
  { title: "Bike Teflon Coating (4 Step)", price: 800 },
  { title: "Bike Teflon Coating (5 Step)", price: 1000 },
  { title: "Engine Degreasing", priceRange: "100–300" },
  { title: "Engine Polishing", priceRange: "30–200" },
  { title: "Headlight Treatment (Pair)", priceRange: "300–400" },
  { title: "Water Mark Removal", priceRange: "1000–1700" },
  { title: "Black Trim Removal", priceRange: "100–600" },
  { title: "Number Plate Frame (4W)", priceRange: "500–650" },
  { title: "Number Plate Frame (2W)", price: 400 },
];