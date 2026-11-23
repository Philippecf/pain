import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();
const PORT = process.env.API_PORT;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Bosphore",
      ingredients:
        "eau, levain, levure, sel, farine, huile d'olive, miel, prép. caramel & noisettes ",
      imgUrl: "http://painrisien.com/wp-content/uploads/2012/09/DSC03693.jpg",
    },
    {
      id: 2,
      name: "Complet",
      ingredients: "farine T150, farine blanche, sel,eau,levure,levain",
      imgUrl:
        "https://www.lesgourmandisesdolivier.com/wp-content/uploads/2024/06/Pain-complet-500x333.jpg",
    },
    {
      id: 3,
      name: "Le Nordique",
      ingredients:
        "farine d'épeautre, farine T65, seigle T130, mélange de graines,sel, levain,miel, levure, pate fermentée, eau",
      imgUrl:
        "https://www.newlita.fr/wp-content/uploads/2026/11/image-recovery-ac6c3eb922addb2d6c65d403b2ce1d.jpg",
    },
    {
      id: 4,
      name: "Petit Epautre",
      ingredients: "farine de petit épautre, sel, levure, levain, eau",
      imgUrl:
        "https://www.paul.fr/media/catalog/product/p/a/pain_e_peautre.jpg",
    },
    {
      id: 5,
      name: "Pain du WK",
      ingredients:
        "farine de kamut, farine d'épautre, farine de meule, farine de tradition, eau, sel, miel, levain, levure ,raisin, pistaches,noisettes",
      imgUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyy9KhxeAxqAtvvP4p6Rongu71QMp17u_-EO6BSCCuevhCooVRLEZSVEkgJzza-8SOsM0mDXy5jOy51cuVe7I7hys8kUYKb9-_2QLL9I2DoPCd21vmCMxno9vT6jCOQud_dpDDdg/s400/P1150814ra.jpg",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
