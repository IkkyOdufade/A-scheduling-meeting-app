import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import duration from './duration.module.css';
import {useSelector} from 'react-redux';

export default function Duration() {

  const durations =[
    {
      amountTime:30,
      display:'30 minutes',
      active:true
    },
 
    {
      amountTime:45,
      display:'45 minutes',
      active:false
    },
    {
      amountTime:60,
      display:'1 hour',
      active:false
    },
    {
      amountTime:90,
      display:'1.5 hours',
      active:false
    },
    {
      amountTime:120,
      display:'2 hours',
      active:false
    },
    {
      amountTime:150,
      display:'2.5 hours',
      active:false
    },
    {
      amountTime:180,
      display:'3 hours',
      active:false
    },
    {
      amountTime:210,
      display:'3.5 hours',
      active:false
    },
    {
      amountTime:240,
      display:'4 hours',
      active:false
    },
    {
      amountTime:270,
      display:'4.5 hours',
      active:false
    },
    {
      amountTime:300,
      display:'5 hours',
      active:false
    },
    {
      amountTime:720,
      display:'12 hours',
      active:false
    }
  ]
  const state= useSelector((state)=>{return state
  })
console.log(state);

    return (
        <div className={duration.page}>
          <p className={duration.dur}>Duration</p>
          <p style={{'color':'black'}} >Switch it up {state}</p>
         <Row className={duration.row}>
           {durations.map((number)=>{
             return(
               <Col className={duration.col}> 
               <div className={number.active?duration.activeduration:duration.nactiveduraction}><p> {number.display}</p>
               </div>
               </Col>
             )
           }
             
             )}
         </Row>
        </div>
    )
}
