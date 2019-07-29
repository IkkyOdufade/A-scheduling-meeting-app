import React from 'react';
import submit from './submit.module.css';


export default function Submitbtn() {
    return (
        <div className={submit.page}>
         <button className={submit.button} type="button" size="lg">Send -></button>   
        </div>
    )
}
