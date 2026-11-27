import "../styles/GlutenPage.css";
import type { Pain } from "../types/pain";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function HomePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pain, setPain] = useState<Pain | null>(null);

  useEffect(() => {
    async function fetchdata() {
      const rawdata = await fetch(`http://localhost:4512/pains/${id}`);
      const cleanData = (await rawdata.json()) as Pain;
      setPain(cleanData);
    }
    fetchdata();
  }, []);

  const DeletePain = async () => {
    if (confirm("êtes vous sur de votre choix?")) {
      await fetch(`http://localhost:4512/pains/${id}`, {
        method: "DELETE",
      });
      navigate("/");
    }
  };

  if (pain === null) {
    return <p>Waiting for Log n°{id}...</p>;
  }

  return (
    <>
      <h2>Gluten</h2>
      <article>
        <h3>
          {pain.name}(n°{id})<button onClick={DeletePain}>X</button>
        </h3>
        <p>{pain.ingredients}</p>
      </article>
    </>
  );
}
