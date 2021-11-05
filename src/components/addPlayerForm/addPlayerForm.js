import { Form, Button } from "react-bootstrap";

function AddPlayerForm(props) {
  return (
    <div className="addNameForm">
      <Form className="addName" onSubmit={(e) => props.addPlayer(e)}>
        <Form.Control id="name" type="text" placeholder="Player Name" />
        <Button type="submit" variant="warning">
          Add Player
        </Button>
      </Form>
    </div>
  );
}

export default AddPlayerForm;
