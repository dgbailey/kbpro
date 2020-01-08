import React, {useState} from 'react';

import styled from 'styled-components';


//some takaways here
//toggling ui state does not mean mutating object state
//filtering was based on object state here and not UI state
//additionally the reducer function signature is reducer(state,action)
//the initial state in the useReducer hook does not take an action object

export const Item = (props) => {

    const [completeState,setCompleteState] = useState(false);
    const {m} = props;


    const toggleState = () => {
        m();
        setCompleteState(!completeState);
    }

    return (
        <StyledItem className={`styled-item ${completeState ? 'green':''}`} onClick={toggleState}>{props.children}</StyledItem>
    )




}


const StyledItem = styled.li `
    height:100px;
    width:100%;
    border:1px solid black;
    &:hover{
        cursor:pointer;
    }

    &.green{
        background:green;
    }





`