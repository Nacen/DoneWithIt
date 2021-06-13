import { Category } from "../components/AppPicker";

export const categories: Category[] = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "blue", icon: "email" },
  { label: "Games", value: 3, backgroundColor: "green", icon: "lock" },
];

export const LISTINGS_DATA = [
  {
    id: "1",
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale",
    price: "$100",
  },
  {
    id: "2",
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    price: "$1000",
  },
];
