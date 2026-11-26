import { useEffect, useState } from "react";
import "../styles/Homepage.css";

type Pain = {
  id: number;
  name: string;
  ingredients: string;
  img_url: string;
};

export default function HomePage() {
  const [pains, setPain] = useState<Pain[]>([]);
  useEffect(() => {
    async function fetchdata() {
      console.log("start");
      const rawdata = await fetch("http://localhost:4512/pains");
      console.log(rawdata);
      const cleanData = (await rawdata.json()) as Pain[];
      setPain(cleanData);
    }
    fetchdata();
  }, []);

  return (
    <>
      <h2>Les Pains</h2>
      {pains.map((pain) => {
        return (
          <section className="bloc-pains">
            <p key={pain.id} className="nom-pain">
              {pain.name}
            </p>
            <p className="ingredients">{pain.ingredients}</p>
            <img src={pain.img_url} />
          </section>
        );
      })}
    </>
  );
}
