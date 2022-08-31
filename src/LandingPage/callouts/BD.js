import React from 'react';
import CallOut from './callout';

const heading = "Brand Design";
const notes = "Outstanding designs and logos that will showcase your brand's beauty and truth.";

const BD = () => {
    return(
        <div>
            <CallOut 
            Heading = {heading}
            Notes = {notes}
            />
        </div>
    );
}


export default BD