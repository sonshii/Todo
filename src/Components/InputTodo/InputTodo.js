// import React from 'react'
import './InputTodo.css'
import { Button } from '@material-ui/core';
import React, { useState } from 'react';



const InputTodo = ({ AllToggle,onCreate }) =>{
    const [value, setValue] = useState('');
    return(
        <div className='InputTodo'>
            <label onClick={()=>AllToggle()}>
                
            </label>
            <input className="toggle-all" type="text" placeholder="New Task" value={value} onChange={e => setValue(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={() => onCreate(value)}>
                Add
            </Button>
           
        </div>
    )
}
export default InputTodo;
