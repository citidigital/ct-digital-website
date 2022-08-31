import React from 'react';
import {ReactComponent as Web} from './Web.svg'

const CallOut = ({Heading,Notes}) => {
    return (
        <div className='bg-verylight-blue w-80 h-60 p-10 rounded-2xl'>
            <Web/>
            <h3>{Heading}</h3>
            <p>{Notes}</p>
        </div>
    );
}

export default CallOut
