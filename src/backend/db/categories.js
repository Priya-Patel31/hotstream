import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "State",
    },
  {
    _id: uuid(),
    categoryName: "Country",
    },
  {
    _id: uuid(),
    categoryName: "Town",
  },
  {
    _id: uuid(),
    categoryName: "Union Territory",
  },
  {
    _id: uuid(),
    categoryName: "City",
  },
];
