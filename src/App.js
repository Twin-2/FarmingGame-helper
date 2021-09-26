import Form from "./form";
import Harvest from "./harvest";
import { useState } from 'react';

function App() {

  const [formdata, setFormdata] = useState({})

  const handleFormSubmit = (formData) => {
    setFormdata(formData)
  }

  return (
    <div className="App">
      <Harvest formData={formdata} />
      <Form formSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
