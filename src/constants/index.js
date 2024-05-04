import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navlinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About - Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact - Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  {
    value: "1k+",
    label: "Brands",
  },
  {
    value: "500+",
    label: "Shops",
  },
  {
    value: "250k+",
    label: "Customers",
  },
];

export const products = [
  {
    imageUrl: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imageUrl: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imageUrl: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imageUrl: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imageUrl: truckFast,
    label: "Free Shipping",
    subText: "Enjoy Seamless shopping wiith our complimentary shipping servce",
  },
  {
    imageUrl: shieldTick,
    label: "Secure Payment",
    subText:
      "Experience worry-free transactions with our secure payments options",
  },
  {
    imageUrl: support,
    label: "Love to help you",
    subText: "Our dedicated team is here to assist you every step of the way",
  },
];

export const reviews = [
  {
    imageUrl: customer1,
    customerName: "Morich Brown",
    ratings: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly Recommmended!",
  },
  {
    imageUrl: customer2,
    customerName: "lota Mongeskar",
    ratings: 4.5,
    feedback:
      "The product not only meet the exceeeded my expectations. I will definetely be a returning customer !",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Nike Waffle Racer ", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Abou Us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy POlicy", link: "/" },
      { name: "Payment Policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+9234768954", link: "tel:022-65470923" },
    ],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
  },
  {
    src: twitter,
    alt: "twitter logo",
  },
  {
    src: instagram,
    alt: "instagram logo",
  },
];
