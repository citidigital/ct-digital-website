import React from "react";
import {ReactComponent as WebProgramming} from './images/web-programming.svg'

const Callout = (props) => {
    const calloutHeading = props.calloutHeading;
    const calloutNotes = props.calloutNotes;

    return(
        <div className="Callout">
            <div>
                <WebProgramming />
            </div>
        </div>
    );
}


export default Callout