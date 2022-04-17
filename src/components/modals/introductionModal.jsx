import { Button, Modal } from "react-bootstrap";
import cropsSection from "../../images/crops-section.png";
import harvestSection from "../../images/harvest-select-section.png";
import modifiersSection from "../../images/modifiers-section.png";
import opSection from "../../images/op-section.png";

function IntroductionModal(props) {
  const handleClose = () => props.setShowInstructions(false);

  return (
    <>
      <Modal show={props.showInstructions} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>How to use this Helper</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This helper can be used to handle the calculations of your harvests.
            Harvest roll and Operating Expense are auto-generated. The final
            number at the bottom is the <b>net</b> profit after everything is
            done.
          </p>
          <br />
          Use the <b>Add Player</b> button to add a new profile card for each
          player of the game. Don't forget to put in a name before adding the
          player!
          <br />
          Use the <b>Crops</b> section to keep track of a players acres for each
          type. Use the <b>up</b> or <b>down</b> buttons to add crops in the
          appropriate interval for that type.
          <img src={cropsSection} alt={"crops section"}/>
          <br />
          Use the <b>Harvest Modifier</b> section to add the appropriate
          multiplier for the <b>current</b> harvest.
          <img src={modifiersSection} alt={"modifiers section"}/>
          <br />
          Use the <b>Operating Expense Modifiers</b> section to keep track of
          those stats for the player.
          <img src={opSection} alt={"operating expense section"}/>
          <br />
          Use this section to select which crop you want to calculate your
          harvest for. Clicking will open a dropdown menu to select from.
          <img src={harvestSection} alt={"harvest section"}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default IntroductionModal;
