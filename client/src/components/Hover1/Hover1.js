import React from "react";
import OverlayTrigger from "../../../node_modules/react-bootstrap/lib/OverlayTrigger";
import Tooltip from "../../../node_modules/react-bootstrap/lib/Tooltip";
import Image from "../../../node_modules/react-bootstrap/lib/Image";



const tooltip = (
  <Tooltip id="tooltip"><strong>Excellent Christmas Concert</strong> Tickets on Sale December 15th</Tooltip>
);

const Hover1 = () => (
  
    <OverlayTrigger placement="top" overlay={tooltip}>
      <a href=""><Image className="Image" src="/images/event.jpg" rounded responsive /></a>
    </OverlayTrigger>
  
);

export default Hover1;