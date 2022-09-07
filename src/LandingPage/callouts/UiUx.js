import React from 'react';
import CallOut from './callout';

const heading = "UI/UX Design";
const notes = "Interactions and effective communication are encouraged by our user-friendly design.";

const UiUx = () => {
    return(
        <div>
            <CallOut 
            Heading = {heading}
            Notes = {notes}
            />
        </div>
    );
}


export default UiUx