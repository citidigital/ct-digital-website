import React from 'react';
import CallOut from './callout';

const heading = "Web Development";
const notes = "Websites that are simple to navigate and have a sense of creativity and confidence.";

const WebProgramming = () =>{
    return(
        <div>
            <CallOut 
            Heading = {heading}
            Notes = {notes}
            />
        </div>
    );
}


export default WebProgramming