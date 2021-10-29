import HarvestInput from "./components/form/harvestInput";
import Harvest from "./components/harvest/harvest";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";

function App() {
  const [player, setPlayer] = useState({});
  const [modifier, setModifier] = useState(1);
  // console.log(modifier);
  const handleFormSubmit = (formData) => {
    setPlayer(formData);
  };

  return (
    <>
      <Header />
      <HarvestInput formSubmit={handleFormSubmit} setModifier={setModifier} />
      <Harvest player={player} modifier={modifier} />
      <Footer />
    </>
  );
}

export default App;
