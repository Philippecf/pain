import { useEffect, useState } from "react";

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
      <h1>Les Pains</h1>
      {pains.map((pain) => {
        return (
          <section>
            <p>{pain.name} </p>
            <p>{pain.ingredients}</p>
            <img src={pain.img_url} />
          </section>
        );
      })}
    </>
  );
}
