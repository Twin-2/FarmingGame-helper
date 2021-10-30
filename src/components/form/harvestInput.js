import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function HarvestInput(props) {
  const [crop, setCrop] = useState("hay");
  const [acres, setAcres] = useState(0);
  const [roll, setRoll] = useState(0);
  const [debt, setDebt] = useState(0);
  const [equipment, setEquipment] = useState({
    tractor: false,
    harvester: false,
  });

  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.tractor.value);
    let formData = { crop, acres, roll, debt, equipment };
    props.formSubmit(formData);
  };

  const handleEquipmentSet = (e) => {
    if (e.target.value === "tractor") {
      setEquipment({ ...equipment, tractor: !equipment[e.target.value] });
    } else {
      setEquipment({ ...equipment, harvester: !equipment[e.target.value] });
    }
  };

  return (
    <section>
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
        <Form.Group>
          <Form.Control
            as="input"
            placeholder="debt"
            name="debt"
            onChange={(e) => setDebt(e.target.value)}
          />
        </Form.Group>
        <Form.Group onClick={(e) => handleEquipmentSet(e)}>
          <Form.Check
            inline
            label="Tractor"
            name="tractor"
            type="checkbox"
            value="tractor"
          />
          <Form.Check
            inline
            label="Harvester"
            name="harvester"
            type="checkbox"
            value="harvester"
          />
        </Form.Group>
        <Button type="submit" variant="warning">
          Harvest!
        </Button>
      </Form>
    </section>
  );
}

export default HarvestInput;
