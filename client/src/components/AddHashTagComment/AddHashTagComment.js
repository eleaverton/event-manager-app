import React from "react";
import OverlayTrigger from "../../../node_modules/react-bootstrap/lib/OverlayTrigger";
import Tooltip from "../../../node_modules/react-bootstrap/lib/Tooltip";
import FormGroup from "../../../node_modules/react-bootstrap/lib/FormGroup";
import ControlLabel from "../../../node_modules/react-bootstrap/lib/ControlLabel";
import FormControl from "../../../node_modules/react-bootstrap/lib/FormControl";
import HelpBlock from "../../../node_modules/react-bootstrap/lib/HelpBlock";
import Button from "../../../node_modules/react-bootstrap/lib/Button";


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const AddHashTagComment = () => (
  <form>
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Add Your Comment About the Event</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Comment" />
    </FormGroup>

    <Button type="submit">
      Submit
    </Button>
  </form>
);

export default AddHashTagComment;