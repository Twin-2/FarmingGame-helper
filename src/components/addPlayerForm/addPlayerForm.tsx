import { Form, Button } from "react-bootstrap";
import { useState,  } from "react";

type AddPlayerFormProps = {
  addPlayer: (e:React.BaseSyntheticEvent) => void;
}

function AddPlayerForm(props: AddPlayerFormProps) {
  const [isNewPlayerNameValid, setIsNewPlayerNameValid] = useState(false)

  const validatePlayerName = (name: string) => {
    if(!name){
      setIsNewPlayerNameValid(true)
    }
    else(setIsNewPlayerNameValid(false))
  }

  return (
    <div className="addNameForm">
      <Form className="addName" onSubmit={(e) => props.addPlayer(e)}>
        <Form.Control id="name" type="text" placeholder="Player Name" className={isNewPlayerNameValid ? '.is-valid' : 'is-invalid'} onChange={(e)=> validatePlayerName(e.target.value)}/>
        <Button type="submit" variant="warning" disabled={isNewPlayerNameValid}>
          Add Player
        </Button>
      </Form>
    </div>
  );
}

export default AddPlayerForm;
