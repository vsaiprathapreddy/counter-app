import React ,{ useState } from 'react'

function Counter(props) {
    const[ count,setCount ] = useState(0);
    return (
        <div>
            <p>{props.label}</p>
            <button onClick={()=>setCount(0)}>Reset</button><br />
            <button onClick= {() => setCount(count-1)}>Decrement</button>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>

        </div>
    )
}

export default Counter
    
//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