export const carData = {
  BMW: ["320D", "330i", "X1", "X3", "X5", "M340i", "i4"],
  Audi: ["A3", "A4", "A6", "Q3", "Q5", "Q7", "RS5"],
  Mercedes: ["C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE", "AMG C43"],
  Toyota: ["Fortuner", "Innova Crysta", "Camry", "Corolla", "Hilux"],
  Hyundai: ["Creta", "Verna", "Tucson", "i20", "Venue"],
  Honda: ["City", "Civic", "Amaze", "CR-V", "WR-V"],
  Kia: ["Seltos", "Sonet", "Carens", "EV6"],
  Tata: ["Harrier", "Safari", "Nexon", "Altroz", "Punch"],
  Mahindra: ["Scorpio N", "XUV700", "Thar", "Bolero"],
  Volkswagen: ["Virtus", "Taigun", "Tiguan", "Polo"],
} as const;

/* 🔥 IMPORTANT: Export brand type */
export type CarBrand = keyof typeof carData;
