import "../styles/GlutenPage.css";
import type { Pain } from "../types/pain";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function HomePage() {
  const { id } = useParams();

  const [pain, setPain] = useState<Pain | null>(null);

  useEffect(() => {
    async function fetchdata() {
      const rawdata = await fetch(`http://localhost:4512/pains/${id}`);
      const cleanData = (await rawdata.json()) as Pain;
      setPain(cleanData);
    }
    fetchdata();
  }, []);

  if (pain === null) {
    return <p>Waiting for Log n°{id}...</p>;
  }

  return (
    <>
      <h2>Gluten</h2>
      <p>
        {pain.name}(n°{id})
      </p>
    </>
  );
}
