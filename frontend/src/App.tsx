import Header from "./components/Header.tsx";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import GlutenPage from "./pages/GlutenPage.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gluten" element={<GlutenPage />} />
      </Routes>
    </>
  );
}

export default App;
