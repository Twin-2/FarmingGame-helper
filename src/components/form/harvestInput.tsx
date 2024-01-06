import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Player } from "../../App";

type HarvestInputProps = {
  setPlayer: React.Dispatch<React.SetStateAction<Player | undefined>>
  setModifier: React.Dispatch<React.SetStateAction<2 | 1 | 0.5>>
}

function HarvestInput(props: HarvestInputProps) {
  const [crop, setCrop] = useState("hay");
  const [acresHay, setAcresHay] = useState(10);
  const [acresGrain, setAcresGrain] = useState(10);
  const [acresFruit, setAcresFruit] = useState(0);
  const [acresCows, setAcresCows] = useState(0);
  const [debt, setDebt] = useState(10000);
  const [equipment, setEquipment] = useState({
    tractor: false,
    harvester: false,
  });

  const formSubmit = (e:React.BaseSyntheticEvent) => {
    e.preventDefault();
  };

  const handleEquipmentSet = (e:React.BaseSyntheticEvent) => {
    if (e.target.value === "tractor") {
      setEquipment({ ...equipment, tractor: !equipment[e.target.value] });
    } else {
      setEquipment({ ...equipment, harvester: !equipment[e.target.value] });
    }
  };

  useEffect(() => {
    let profile:Pick<Player, "crops" | "equipment" | "debt"> = {
      crops: {
        hay: acresHay,
        grain: acresGrain,
        fruit: acresFruit,
        cows: acresCows,
      },
      equipment: equipment,
      debt: debt,
    };
    props.setPlayer(profile);
  }, [crop, acresCows, acresFruit, acresHay, acresGrain, debt, equipment]);

  return (
    <section>
      <Form onSubmit={(e) => formSubmit(e)}>
        <Form.Group>
          <Form.Label>Crops: </Form.Label>
          <Container className="cropsInput">
            <Row>
              <Col xs={12}>
                <label>Hay </label>
                <input
                  onChange={(e) => setAcresHay(parseInt(e.target.value))}
                  type="number"
                  name="hay"
                  placeholder="acres"
                  min="10"
                  step="10"
                />
              </Col>
              <Col xs={12}>
                <label>Grain </label>
                <input
                  onChange={(e) => setAcresGrain(parseInt(e.target.value))}
                  type="number"
                  name="gain"
                  placeholder="acres"
                  min="10"
                  step="10"
                />
              </Col>
              <Col xs={12}>
                <label>Fruit </label>
                <input
                  onChange={(e) => setAcresFruit(parseInt(e.target.value))}
                  type="number"
                  name="fruit"
                  placeholder="acres"
                  min="0"
                  step="5"
                />
              </Col>
              <Col xs={12}>
                <label>Cows </label>
                <input
                  onChange={(e) => setAcresCows(parseInt(e.target.value))}
                  type="number"
                  name="cows"
                  placeholder="acres"
                  min="0"
                  step="10"
                />
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <Form.Group onChange={(e) => props.setModifier(e.target.value)}>
          <Form.Label>Harvest Modifier:</Form.Label>
          <div className="modifyerInput">
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
          </div>
        </Form.Group>
        <Form.Label>Operating Expense Modifiers: </Form.Label>
        <div className="opInput">
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
          <Form.Group>
            <Form.Control
              as="input"
              placeholder="debt"
              name="debt"
              onChange={(e) => setDebt(parseInt(e.target.value))}
            />
          </Form.Group>
        </div>
        <Form.Group id="selectCrop">
          <Form.Label>Select crop to harvest: </Form.Label>
          <Form.Control as="select" onChange={(e) => setCrop(e.target.value)}>
            <option value="hay">Hay</option>
            <option value="grain">Grain</option>
            <option value="fruit">Fruit</option>
            <option value="cows">Cows</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </section>
  );
}

export default HarvestInput;
