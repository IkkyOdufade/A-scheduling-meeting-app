import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import {useDispatch} from 'react-redux';


export default function Time() {
    const dispatch = useDispatch()
//Reducer

const increment = () => {
    return{
    type:"INCREMENT"
    }
}


const decrement = () => {
return {
    type:"DECREMENT"
}   
}




const onChange=(value)=>{
 
}

const destinyClicked=()=>{
dispatch(increment())
}

const destinyUnclicked=()=>{
    dispatch(decrement())
}

    return (
        <div>
            <p>Time</p>
            <button onClick={destinyClicked}>Click me</button>
            <button onClick={destinyUnclicked}>Click again!!</button>
            <label>From </label>
            <DateTimePicker
            onChange={value=>{
                onChange(value)
            }}
           const value= {new Date()} 
        />
           <label>To </label>
            <DateTimePicker
            onChange={value=>{
                
            }}
           const value= {new Date()} 
        /> 
        </div>
    )
}
