import React from "react";
import { setCurrenUser } from "../../store/test/test.reducer";
import { useDispatch } from 'react-redux';

const TestComponent = () => {
    const dispatch = useDispatch()
    
    return <button onClick={() => dispatch(setCurrenUser("test"))}>test</button>
}


export default TestComponent;

