import { useEffect, useState } from "react";

type Pain = {
  id: number;
  name: string;
  ingredients: string;
  img_url: string;
};
function App() {
  const [pains, setPain] = useState<Pain[]>([]);
  useEffect(() => {
    async function fetchdata() {
      const rawdata = await fetch("http://localhost:4512/pains");
      const cleanData = await rawdata.json();
      setPain(cleanData);
    }
    fetchdata();
  });

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

export default App;
