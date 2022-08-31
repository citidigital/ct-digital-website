import React from 'react';
import CallOut from './callout';

const heading = "SM Management";
const notes = "A strategic voice that represents your distinctive qualities across all social and digital channels.";

const SmManagement = () => {
    return(
        <div>
            <CallOut 
            Heading = {heading}
            Notes = {notes}
            />
        </div>
    );
}


export default SmManagement