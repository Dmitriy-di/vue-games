import { v4 as uuidv4 } from "uuid";
export default function () {
  return {
    products: [
      {
        id: uuidv4(),
        pretitle: "BH Fitness F1 G6414V",
        title: "Беговая дорожка",
        oldprice: 64990,
        todayprice: 61990,
        type: "Электрическая",
        speed: 22,
        option: "Есть"
      },
      {
        id: uuidv4(),
        pretitle: "BH Fitness F1 G6414V",
        title: "Беговая дорожка",
        oldprice: 64990,
        todayprice: 61990,
        type: "Электрическая",
        speed: 22,
        option: "Есть"
      }
    ]
  }
}
