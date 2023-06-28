import food1 from "../assets/foodcat/food1.png";
import food2 from "../assets/foodcat/food2.png";
import food3 from "../assets/foodcat/food3.png";
import food4 from "../assets/foodcat/food4.png";

////////////////////////////////////////////

import drink1 from "../assets/foodcat/drink1.png";
import drink2 from "../assets/foodcat/drink2.png";
import drink3 from "../assets/foodcat/drink3.png";
import drink4 from "../assets/foodcat/drink4.png";

/////////////////////////////////////////////

import fruit1 from "../assets/foodcat/fruit1.png";
import fruit2 from "../assets/foodcat/fruit2.png";
import fruit3 from "../assets/foodcat/fruit3.png";
import fruit4 from "../assets/foodcat/fruit4.png";

//////////////////////////////////////////////////

import popular1 from "../assets/popular/popular1.png";
import popular2 from "../assets/popular/popular2.png";
import popular3 from "../assets/popular/popular3.png";
import popular4 from "../assets/popular/popular4.png";
import popular5 from "../assets/popular/popular5.png";
import popular6 from "../assets/popular/popular6.png";
import popular7 from "../assets/popular/popular7.png";
import popular8 from "../assets/popular/popular8.png";

//////////////////////////////////////////////////////

import flash1 from "../assets/flashdeals/flash1.png";
import flash2 from "../assets/flashdeals/flash2.png";
import flash3 from "../assets/flashdeals/flash3.png";
import flash4 from "../assets/flashdeals/flash4.png";
import flash5 from "../assets/flashdeals/flash5.png";
import flash6 from "../assets/flashdeals/flash6.png";
import flash7 from "../assets/flashdeals/flash7.png";
import flash8 from "../assets/flashdeals/flash8.png";
import flash9 from "../assets/flashdeals/flash9.png";

/////////////////////////////////////////////////////

import promo1 from "../assets/delivery/promo1.png";
import promo2 from "../assets/delivery/promo2.png";
import promo3 from "../assets/delivery/promo3.png";

export const foods = [
  {
    id: 12,
    cat: food1,
    name: "Lunch",
  },
  {
    id: 13,
    cat: food2,
    name: "Salad",
  },
  {
    id: 14,
    cat: food3,
    name: "Breakfast",
  },
  {
    id: 15,
    cat: food4,
    name: "Dinner",
  },
];
export const drinks = [
  {
    id: 112,
    cat: drink1,
    name: "Juices",
  },
  {
    id: 113,
    cat: drink2,
    name: "Soda",
  },
  {
    id: 114,
    cat: drink3,
    name: "Cocktails",
  },
  {
    id: 115,
    cat: drink4,
    name: "Beers",
  },
];
export const fruits = [
  {
    id: 1112,
    cat: fruit1,
    name: "Apple",
  },
  {
    id: 1113,
    cat: fruit2,
    name: "Pineapple",
  },
  {
    id: 1114,
    cat: fruit3,
    name: "Watermelon",
  },
  {
    id: 1115,
    cat: fruit4,
    name: "Strawberries",
  },
];

export const popular = [
  {
    id: 147,
    pop: popular1,
    name: "freets",
    price: 8,
    discount: 20,
    quantity: 1,
    category: "Juices",
    subCategories: ["Apple", "Pineapple", "Watermelon"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
    obcaecati tempora eaque ad impedit eos, doloribus dolor quasi cumque
    vitae possimus dicta nulla amet, sapiente consectetur laboriosam,
    reiciendis esse. Corrupti aliquid cumque eveniet impedit cum officia
    assumenda, voluptatem quis? Quia tenetur magnam repudiandae
    voluptatem neque sit eveniet exercitationem perspiciatis labore!`,
  },
  {
    id: 148,
    pop: popular2,
    name: "Beers",
    price: 18,
    discount: 30,
    quantity: 1,
    category: "Juices",
    subCategories: ["Juices", "Fruits", "Seeds"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
    obcaecati tempora eaque ad impedit eos, doloribus dolor quasi cumque
    vitae possimus dicta nulla amet, sapiente consectetur laboriosam,
    reiciendis esse. Corrupti aliquid cumque eveniet impedit cum officia
    assumenda, voluptatem quis? Quia tenetur magnam repudiandae
    voluptatem neque sit eveniet exercitationem perspiciatis labore!`,
  },
  {
    id: 149,
    pop: popular3,
    name: "Fennel Bulb",
    price: 10,
    discount: 16,
    quantity: 1,
    category: "Cereals",
    subCategories: ["Vegetables", "Mangoes", "chikenodes"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
    obcaecati tempora eaque ad impedit eos, doloribus dolor quasi cumque
    vitae possimus dicta nulla amet, sapiente consectetur laboriosam,
    reiciendis esse. Corrupti aliquid cumque eveniet impedit cum officia
    assumenda, voluptatem quis? Quia tenetur magnam repudiandae
    voluptatem neque sit eveniet exercitationem perspiciatis labore!`,
  },
  {
    id: 150,
    pop: popular4,
    name: "Lettuce",
    price: 13,
    discount: 36,
    quantity: 1,
    category: "Cereals",
    subCategories: ["Juices", "Fruits", "Seeds"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
    obcaecati tempora eaque ad impedit eos, doloribus dolor quasi cumque
    vitae possimus dicta nulla amet, sapiente consectetur laboriosam,
    reiciendis esse. Corrupti aliquid cumque eveniet impedit cum officia
    assumenda, voluptatem quis? Quia tenetur magnam repudiandae
    voluptatem neque sit eveniet exercitationem perspiciatis labore!`,
  },
  {
    id: 151,
    pop: popular5,
    name: "Mini Pumpkin",
    price: 20,
    discount: 43,
    quantity: 1,
    category: "fruits",
    subCategories: ["Juices", "Fruits", "Seeds"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
    obcaecati tempora eaque ad impedit eos, doloribus dolor quasi cumque
    vitae possimus dicta nulla amet, sapiente consectetur laboriosam,
    reiciendis esse. Corrupti aliquid cumque eveniet impedit cum officia
    assumenda, voluptatem quis? Quia tenetur magnam repudiandae
    voluptatem neque sit eveniet exercitationem perspiciatis labore!`,
  },
  {
    id: 152,
    pop: popular6,
    name: "Haitian Mangoe",
    price: 14,
    discount: 25,
    quantity: 1,
    category: "Vegetables",
    subCategories: ["Juices", "Fruits", "Seeds"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
    obcaecati tempora eaque ad impedit eos, doloribus dolor quasi cumque
    vitae possimus dicta nulla amet, sapiente consectetur laboriosam,
    reiciendis esse. Corrupti aliquid cumque eveniet impedit cum officia
    assumenda, voluptatem quis? Quia tenetur magnam repudiandae
    voluptatem neque sit eveniet exercitationem perspiciatis labore!`,
  },
  {
    id: 153,
    pop: popular7,
    name: "Bicolor Sweet Corn",
    price: 17,
    discount: 37,
    quantity: 1,
    category: "Beers",
    subCategories: ["Juices", "Fruits", "Seeds"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
    obcaecati tempora eaque ad impedit eos, doloribus dolor quasi cumque
    vitae possimus dicta nulla amet, sapiente consectetur laboriosam,
    reiciendis esse. Corrupti aliquid cumque eveniet impedit cum officia
    assumenda, voluptatem quis? Quia tenetur magnam repudiandae
    voluptatem neque sit eveniet exercitationem perspiciatis labore!`,
  },
  {
    id: 154,
    pop: popular8,
    name: "Organic Cherry Tomato",
    price: 18,
    discount: 23,
    quantity: 1,
    category: "Organics",
    subCategories: ["Juices", "Fruits", "Seeds"],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
    obcaecati tempora eaque ad impedit eos, doloribus dolor quasi cumque
    vitae possimus dicta nulla amet, sapiente consectetur laboriosam,
    reiciendis esse. Corrupti aliquid cumque eveniet impedit cum officia
    assumenda, voluptatem quis? Quia tenetur magnam repudiandae
    voluptatem neque sit eveniet exercitationem perspiciatis labore!`,
  },
];

export const flashs = [
  {
    id: 147,
    pop: flash1,
    name: "freets",
    starts: 4.5,
    price: 8,
    reduce: 30,
  },
  {
    id: 148,
    pop: flash2,
    name: "Beers",
    starts: 4,
    price: 18,
    reduce: 90,
  },
  {
    id: 149,
    pop: flash3,
    name: "Fennel Bulb",
    starts: 5,
    price: 10,
    reduce: 50,
  },
  {
    id: 150,
    pop: flash4,
    name: "Lettuce",
    starts: 4,
    price: 13,
    reduce: 10,
  },
  {
    id: 151,
    pop: flash5,
    name: "Mini Pumpkin",
    starts: 4.5,
    price: 20,
    reduce: 60,
  },
  {
    id: 152,
    pop: flash6,
    name: "Haitian Mangoe",
    starts: 5,
    price: 14,
    reduce: 80,
  },
  {
    id: 153,
    pop: flash7,
    name: "Bicolor Sweet Corn",
    starts: 4.5,
    price: 17,
    reduce: 65,
  },
  {
    id: 154,
    pop: flash8,
    name: "Organic Cherry Tomato",
    starts: 3.5,
    price: 18,
    reduce: 95,
  },
  {
    id: 154,
    pop: flash9,
    name: "Cherry Organic",
    starts: 4.5,
    price: 18,
    reduce: 75,
  },
];

export const promotion = [
  {
    id: 225,
    promo: promo1,
    title: "Express Delivery",
    subTitle: "With selected Items",
    btnTitle: "Save now",
    color: "#60a5fa",
  },
  {
    id: 226,
    promo: promo2,
    title: "Cash On Deliver",
    subTitle: "With selected Items",
    btnTitle: "Save now",
    color: "#00c893",
  },
  {
    id: 227,
    promo: promo3,
    title: "Ocean Of Gifts",
    subTitle: "With selected Items",
    btnTitle: "Save now",
    color: "#9333ea",
  },
];