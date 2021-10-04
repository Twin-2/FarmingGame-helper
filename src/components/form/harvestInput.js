import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function HarvestInput(props) {
  const [crop, setCrop] = useState("hay");
  const [acres, setAcres] = useState(0);
  const [roll, setRoll] = useState(0);

  const formSubmit = (e) => {
    e.preventDefault();
    let formData = { crop, acres, roll };
    props.formSubmit(formData);
  };

  return (
    <>
      <Form onSubmit={(e) => formSubmit(e)}>
        <Form.Group>
          <Form.Control as="select" onChange={(e) => setCrop(e.target.value)}>
            <option value="hay">Hay</option>
            <option value="grain">Grain</option>
            <option value="fruit">Fruit</option>
            <option value="cows">Cows</option>
          </Form.Control>
          <span>Acres: </span>
          <Form.Control
            as="textarea"
            onChange={(e) => setAcres(e.target.value)}
            type="text"
            name="Acres"
            placeholder="acres"
          />
          <span>Roll: </span>
          <Form.Control
            as="textarea"
            onChange={(e) => setRoll(e.target.value)}
            type="number"
            placeholder="roll"
          />
          <Button type="submit" variant="warning">
            Harvest!
          </Button>
        </Form.Group>
        <p>Harvest Modifier</p>
        <Form.Group onChange={(e) => props.setModifier(e.target.value)}>
          <Form.Check
            inline
            label="Cut Harvest in Half"
            name="group1"
            type="radio"
            value=".5"
          />
          <Form.Check
            inline
            label="Double Harvest"
            name="group1"
            type="radio"
            value="2"
          />
          <Form.Check
            inline
            label="Normal Harvest"
            name="group1"
            type="radio"
            value="1"
          />
        </Form.Group>
      </Form>
    </>
  );
}

export default HarvestInput;
