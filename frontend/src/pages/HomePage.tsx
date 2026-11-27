import { useEffect, useState } from "react";
import "../styles/Homepage.css";
import type { Pain } from "../types/pain";
import { Link } from "react-router";

export default function HomePage() {
  const [pains, setPain] = useState<Pain[]>([]);

  useEffect(() => {
    async function fetchdata() {
      const rawdata = await fetch("http://localhost:4512/pains");
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
              <Link to={`/${pain.id}`}>{pain.name}</Link>
            </p>
            <p className="ingredients">{pain.ingredients}</p>
            <img src={pain.img_url} />
          </section>
        );
      })}
    </>
  );
}
