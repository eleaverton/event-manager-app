import React from "react";
import Bootstrap from "react-bootstrap";

const EventBox = () => (
 <div>
 <div className="container">
    <div className="row">
        <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src="../public/images/event.jpg" alt="..." />
                <div className="caption">
                    <h3>Thumbnail label</h3>
                    <p>Text describing the event goes here.</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                </div>
            </div>
        </div> 
    </div> 
</div>
</div>  
);


export default EventBox;