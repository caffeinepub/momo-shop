export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "momos-variety" | "signature" | "special" | "maggie";
  tags: string[];
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  reviewUrl?: string;
}

export interface HoursEntry {
  days: string;
  hours: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: HoursEntry[];
  googleMapsUrl: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
  };
}
