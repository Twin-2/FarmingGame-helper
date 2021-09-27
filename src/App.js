import Form from "./components/form/form";
import Harvest from "./components/harvest/harvest";
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { useState } from 'react';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'

function App() {

  const [formdata, setFormdata] = useState({})

  const handleFormSubmit = (formData) => {
    setFormdata(formData)
  }

  return (
    <>
      <Header />
      <Form formSubmit={handleFormSubmit} />
      <Harvest formData={formdata} />
      <Footer />
    </>
  );
}

export default App;
