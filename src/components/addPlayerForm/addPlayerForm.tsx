import { Form, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useState,  } from "react";
import Feedback from "react-bootstrap/esm/Feedback";

type AddPlayerFormProps = {
  addPlayer: (e:React.BaseSyntheticEvent) => void;
}

function AddPlayerForm(props: AddPlayerFormProps) {
  const [isNewPlayerNameValid, setIsNewPlayerNameValid] = useState(false)
  console.log(isNewPlayerNameValid)

  const validatePlayerName = (name: string) => {
    if(!name){
      setIsNewPlayerNameValid(false)
      console.log('1')
    }
    else{
      console.log('2')
      setIsNewPlayerNameValid(true)
    }
  }

  const tooltip = (
    <Tooltip id="tooltip">
     Please enter a name
    </Tooltip>
  );

  return (
    <div className="addNameForm">
      <Form className="addName" onSubmit={(e) => props.addPlayer(e)}>
          <OverlayTrigger placement="bottom" overlay={tooltip} trigger={isNewPlayerNameValid ? 'focus': 'hover'}>
            <Form.Control id="name" type="text" placeholder="Player Name" className={isNewPlayerNameValid ? '.is-valid' : 'is-invalid'} onChange={(e)=> validatePlayerName(e.target.value)}/>
          </OverlayTrigger>
          <Feedback type="invalid" tooltip={true}>
            Please enter a name!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          </Feedback>

        <Button type="submit" variant="warning" disabled={!isNewPlayerNameValid}>
          Add Player
        </Button>
      </Form>
    </div>
  );
}

export default AddPlayerForm;
