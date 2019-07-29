import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {faClock}  from '@fortawesome/free-solid-svg-icons';
import meeting from './meeting.module.css';

export default function Meeting() {
    return (
        <div className={meeting.page}>
            <FontAwesomeIcon className={meeting.icon} icon={faClock}></FontAwesomeIcon>
           <h4 className={meeting.set}>Set up a meeting</h4>
           <p className={meeting.email}>We'll email your colleagues and remind them <br></br>closer to the time. </p>
        </div>
    )
}
