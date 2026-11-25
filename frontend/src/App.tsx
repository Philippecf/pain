import Header from "./components/Header.tsx";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
