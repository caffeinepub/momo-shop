import type { ContactInfo, MenuItem, Testimonial } from "../types";

export const menuItems: MenuItem[] = [
  // — Momos Variety —
  {
    id: "veg-steamed",
    name: "Veg Steamed",
    description:
      "Fresh cabbage, carrots, and paneer blended with ginger, garlic, and Himalayan herbs. Light, wholesome, and fragrant.",
    price: 80,
    category: "momos-variety",
    tags: ["Vegetarian", "Healthy"],
    image: "/assets/generated/veg-momos.dim_600x500.jpg",
  },
  {
    id: "chicken-steamed",
    name: "Chicken Steamed",
    description:
      "Juicy minced chicken tossed with green onions, ginger, and our secret spice blend. A crowd-pleasing classic.",
    price: 100,
    category: "momos-variety",
    tags: ["Bestseller", "Non-Veg"],
    image: "/assets/generated/chicken-momos.dim_600x500.jpg",
    popular: true,
  },
  {
    id: "veg-fried",
    name: "Veg Fried",
    description:
      "Golden deep-fried dumplings with a crunchy shell hiding a flavourful vegetable filling. Perfectly crispy every time.",
    price: 100,
    category: "momos-variety",
    tags: ["Vegetarian", "Crispy"],
    image: "/assets/generated/kothey-momos.dim_600x500.jpg",
  },
  {
    id: "chicken-fried",
    name: "Chicken Fried",
    description:
      "Fried to a deep golden crunch, packed with spiced chicken filling. Great for snacking or sharing with friends.",
    price: 120,
    category: "momos-variety",
    tags: ["Crispy", "Non-Veg"],
    image: "/assets/generated/kothey-momos.dim_600x500.jpg",
  },
  {
    id: "veg-kothey",
    name: "Veg Kothey",
    description:
      "Pan-fried dumplings with crispy golden bottoms and soft steamed tops. A beautiful texture contrast with veggie filling.",
    price: 100,
    category: "momos-variety",
    tags: ["Vegetarian", "Crispy"],
    image: "/assets/generated/kothey-momos.dim_600x500.jpg",
  },
  {
    id: "chicken-kothey",
    name: "Chicken Kothey",
    description:
      "Half-fried, half-steamed chicken momos — crispy on one side, pillowy on the other. Served with house chili sauce.",
    price: 130,
    category: "momos-variety",
    tags: ["Fan Favorite", "Non-Veg"],
    image: "/assets/generated/kothey-momos.dim_600x500.jpg",
    popular: true,
  },
  {
    id: "veg-jhol",
    name: "Veg Jhol",
    description:
      "Steamed vegetable momos served in our signature tomato-sesame-chili broth. Soul-warming and deeply flavourful.",
    price: 120,
    category: "momos-variety",
    tags: ["Vegetarian", "Spicy"],
    image: "/assets/generated/jhol-momos.dim_600x500.jpg",
  },
  {
    id: "chicken-jhol",
    name: "Chicken Jhol",
    description:
      "Our most-loved dish — tender chicken momos bathed in a fiery, tangy tomato-achar broth. An absolute must-try.",
    price: 150,
    category: "momos-variety",
    tags: ["Bestseller", "Spicy"],
    image: "/assets/generated/jhol-momos.dim_600x500.jpg",
    popular: true,
  },

  // — Signature Dish —
  {
    id: "veg-c-momo",
    name: "Veg C-Momo",
    description:
      "Fried veg momos tossed in a vibrant, sticky chilli sauce with bell peppers and onions. Spicy, saucy, unforgettable.",
    price: 130,
    category: "signature",
    tags: ["Vegetarian", "Spicy"],
    image: "/assets/chilli-momos.png",
  },
  {
    id: "chicken-c-momo",
    name: "Chicken C-Momo",
    description:
      "Fried chicken momos tossed in our bold chilli sauce with crunchy vegetables. A fiery crowd favourite.",
    price: 160,
    category: "signature",
    tags: ["Bestseller", "Spicy"],
    image: "/assets/butter-chicken-momos.png",
    popular: true,
  },

  // — Special Dish —
  {
    id: "paneer-momo",
    name: "Paneer Momo",
    description:
      "Succulent chunks of fresh paneer seasoned with aromatic spices, wrapped in soft momo dough. Rich and satisfying.",
    price: 150,
    category: "special",
    tags: ["Vegetarian", "Special"],
    image: "/assets/generated/veg-momos.dim_600x500.jpg",
  },
  {
    id: "cheese-momo",
    name: "Cheese Momo",
    description:
      "Oozy, melted cheese blended with herbs and chili, stuffed in thin-rolled wrappers. Indulgent and irresistible.",
    price: 150,
    category: "special",
    tags: ["Vegetarian", "Indulgent"],
    image: "/assets/generated/veg-momos.dim_600x500.jpg",
    popular: true,
  },

  // — Maggie —
  {
    id: "veg-maggie",
    name: "Veg Maggie",
    description:
      "Classic Maggie noodles cooked with fresh vegetables, tossed in our signature spice mix. Comfort food at its best.",
    price: 60,
    category: "maggie",
    tags: ["Vegetarian"],
    image: "/assets/generated/veg-momos.dim_600x500.jpg",
  },
  {
    id: "masala-maggie",
    name: "Masala Maggie",
    description:
      "Maggie noodles loaded with bold Indian masala spices and aromatic herbs. A spicy twist on the beloved classic.",
    price: 70,
    category: "maggie",
    tags: ["Vegetarian", "Spicy"],
    image: "/assets/generated/veg-momos.dim_600x500.jpg",
  },
  {
    id: "egg-maggie",
    name: "Egg Maggie",
    description:
      "Fluffy scrambled egg mixed through hot Maggie noodles for a hearty, protein-packed street-style snack.",
    price: 90,
    category: "maggie",
    tags: ["Non-Veg"],
    image: "/assets/generated/chicken-momos.dim_600x500.jpg",
  },
  {
    id: "chicken-maggie",
    name: "Chicken Maggie",
    description:
      "Tender chicken pieces tossed with Maggie noodles and our house spice blend. Filling, flavourful, and oh-so-satisfying.",
    price: 110,
    category: "maggie",
    tags: ["Non-Veg", "Bestseller"],
    image: "/assets/generated/chicken-momos.dim_600x500.jpg",
    popular: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rohan Mehta",
    avatar: "RM",
    rating: 5,
    comment:
      "Best momos in Nerul, hands down! The chicken steamed momos are perfectly soft and the chutney pairs so well. Found my go-to spot in Navi Mumbai.",
    date: "3 days ago",
    reviewUrl: "https://maps.app.goo.gl/PTUyHdY5mC6ydHfZ8",
  },
  {
    id: "t2",
    name: "Pooja Nair",
    avatar: "PN",
    rating: 5,
    comment:
      "Visited with my college group after exams — we ordered jhol momos and everyone was fighting over the last piece! The spicy broth is absolutely addictive.",
    date: "1 week ago",
    reviewUrl: "https://maps.app.goo.gl/eG7MCWp8FN1dLbm3A",
  },
  {
    id: "t3",
    name: "Amit Kulkarni",
    avatar: "AK",
    rating: 5,
    comment:
      "The pan-fried kothey momos are perfectly crispy on the bottom and soft on top. Great value for money and generous portions. Will definitely be back!",
    date: "2 weeks ago",
    reviewUrl: "https://maps.app.goo.gl/ZRBYRXvM4zVRZQvPA",
  },
  {
    id: "t4",
    name: "Sneha Joshi",
    avatar: "SJ",
    rating: 5,
    comment:
      "Tried the C-Momo for the first time and I was completely blown away. That sticky chilli sauce with the fried momos is a combination I didn't know I needed!",
    date: "3 days ago",
    reviewUrl: "https://maps.app.goo.gl/7nYGWsMSqLQ6AqSq8",
  },
  {
    id: "t5",
    name: "Karan Verma",
    avatar: "KV",
    rating: 5,
    comment:
      "Quick service, really cosy little place. The veg steamed momos are fresh and light — you can tell they use quality ingredients. Staff is super friendly too.",
    date: "1 week ago",
    reviewUrl: "https://maps.app.goo.gl/PQ9aZ6SJ3AYiNpjX9",
  },
  {
    id: "t6",
    name: "Divya Pillai",
    avatar: "DP",
    rating: 4,
    comment:
      "Great spot for a quick bite after college! The fried momos are honestly the best I've had anywhere in Navi Mumbai. Will keep coming back for sure.",
    date: "2 weeks ago",
    reviewUrl: "https://maps.app.goo.gl/1g4C6bd4hXj6CWDWA",
  },
  {
    id: "t7",
    name: "Nikhil Bhatt",
    avatar: "NB",
    rating: 5,
    comment:
      "Chicken jhol momos with extra chutney is the ultimate combo. This place never disappoints — consistent quality every single visit. A true gem in Sector 28.",
    date: "3 weeks ago",
    reviewUrl: "https://maps.app.goo.gl/jcobnuZJLqoeAdMa9",
  },
  {
    id: "t8",
    name: "Priyanka Singh",
    avatar: "PS",
    rating: 5,
    comment:
      "The Maggie here is so comforting and full of flavour! I paired the masala Maggie with steamed momos and it was the perfect meal. A must-visit in Nerul.",
    date: "1 month ago",
    reviewUrl: "https://maps.app.goo.gl/gPiti8nDAa8kPbaP6",
  },
  {
    id: "t9",
    name: "Aryan Sharma",
    avatar: "AS",
    rating: 4,
    comment:
      "Awesome place for group outings! We ordered three different varieties and all were excellent. The chicken C-Momo was the standout. Highly recommend to everyone.",
    date: "3 weeks ago",
    reviewUrl: "https://maps.app.goo.gl/U6NUUuRe2EbigQtJA",
  },
  {
    id: "t10",
    name: "Meera Patil",
    avatar: "MP",
    rating: 5,
    comment:
      "Such a cosy and warm little spot! The pan-fried kothey momos are my absolute favourite — crispy outside, juicy inside. Already planning my next visit!",
    date: "1 week ago",
    reviewUrl: "https://maps.app.goo.gl/ZTbc8moBjFi2o6BV8",
  },
];

export const contactInfo: ContactInfo = {
  address: "22H8+5G Navi Mumbai, Maharashtra",
  phone: "09082530249",
  email: "hello@missmomo.in",
  hours: [{ days: "All Days", hours: "5:00 PM – 11:30 PM" }],
  googleMapsUrl:
    "https://www.google.com/maps/place/Miss+momos/@19.0281063,73.0164081,18z/data=!4m15!1m8!3m7!1s0x3be7c300534fd649:0x508218d2b6495dfe!2sMiss+momos!8m2!3d19.0279153!4d73.0163142!10e9!16s%2Fg%2F11wtvvxn_r!3m5!1s0x3be7c300534fd649:0x508218d2b6495dfe!8m2!3d19.0279153!4d73.0163142!16s%2Fg%2F11wtvvxn_r?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D",
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export const fanFavorites = menuItems.filter((item) =>
  ["chicken-jhol", "chicken-c-momo", "cheese-momo", "chicken-kothey"].includes(
    item.id,
  ),
);
