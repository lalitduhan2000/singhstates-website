export type Property = {
  id: string;
  type: "Apartment"|"Villa"|"Plot"|"Commercial";
  title: string;
  city: string;
  address: string;
  price: number; // INR
  beds?: number;
  baths?: number;
  area?: number; // sqft
  image: string;
};

export const properties: Property[] = [
  {
    id: "p1",
    type: "Apartment",
    title: "Modern 3BHK Apartment",
    city: "Rohtak",
    address: "Sector 2",
    price: 12500000,
    beds: 3, baths: 3, area: 1650,
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "p2",
    type: "Villa",
    title: "Premium 4BHK Villa with Lawn",
    city: "Rohtak",
    address: "Model Town",
    price: 38000000,
    beds: 4, baths: 4, area: 3200,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "p3",
    type: "Plot",
    title: "Corner Residential Plot (200 sq. yd.)",
    city: "Rohtak",
    address: "SunCity Sector 35",
    price: 8200000,
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c68e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "p4",
    type: "Commercial",
    title: "Showroom Space on Main Road",
    city: "Rohtak",
    address: "Hissar Road",
    price: 26000000,
    area: 2200,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "p5",
    type: "Apartment",
    title: "2BHK Starter Home near University",
    city: "Rohtak",
    address: "Near MDU",
    price: 6500000,
    beds: 2, baths: 2, area: 980,
    image: "https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1200&auto=format&fit=crop"
  }
];
