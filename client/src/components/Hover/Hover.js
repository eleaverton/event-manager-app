import React from "react";
import ButtonToolbar from "../../../node_modules/react-bootstrap/lib/ButtonToolbar";
import OverlayTrigger from "../../../node_modules/react-bootstrap/lib/OverlayTrigger";
import Button from "../../../node_modules/react-bootstrap/lib/Button";
import Tooltip from "../../../node_modules/react-bootstrap/lib/Tooltip";
import Image from "../../../node_modules/react-bootstrap/lib/Image";



const tooltip = (
  <Tooltip id="tooltip"><strong>Dandelions in December</strong> Showing Now Through January 7th</Tooltip>
);

const Hover = () => (
 	
    <OverlayTrigger placement="top" overlay={tooltip}>
     <a HREF="/event"><Image className="Image" src="/images/winterjpg.jpg" rounded responsive /></a>
    </OverlayTrigger>
	    
);

export default Hover;
