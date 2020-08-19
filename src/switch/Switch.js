import React, { useState } from 'react';
import skull from './skull-emoji.png'

// styling
import './Switch.css';

const Switch = () => {
    const [switchOn, setSwitchOn] = useState(false)

    const setCircleClass = () => {
        const classArr = ["switch-circle"]
        if (switchOn) classArr.push('switch-right')
        return classArr.join(' ')
    }

    const setSkullClass = () => {
        const classArr = ["skull"]
        if (switchOn) classArr.push('skull-on')
        return classArr.join(' ')
    }

    return (
        <div className="Switch cfb">  
            <div className="switch-track"></div>
            <div onClick={()=>setSwitchOn(!switchOn)} className={setCircleClass()}>
                <img src={skull} className={setSkullClass()}/>
            </div>
        </div>
    );
}

export default Switch;
