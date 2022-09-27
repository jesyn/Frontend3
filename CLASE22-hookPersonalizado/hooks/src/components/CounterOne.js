import React from 'react'
import {useState} from 'react'
import useToggle from '../hooks/useToggle';

function CounterOne() {
    const [count, setCount] = useState(0)
    const [changeCounter, setChangeCounter] = useToggle();

    const increase = () =>{
        if(changeCounter){
            setCount(count +1)
        }else{
            setCount(count +10)
        }
    }
    const reset = () => {
        setCount(0)
        
    }
    

    return (
        <div className='container'>
        {count}
        <button onClick={increase}> {changeCounter ? 'one to one' : 'ten to ten'}</button>
        <button onClick={setChangeCounter}>change Counter</button>
        <button onClick={reset}>reset</button>
        </div>
        
    )
}

export default CounterOne

