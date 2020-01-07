import React, {useState} from 'react';
import styled from 'styled-components';
import uuid4 from 'uuid4';



export const Column = (props) => {

    //column
        //colitem state
        //add colitem

    const colItemBoiler = {
        id:uuid4(),
        text:'Default Text',
        completed:false
    }

    const [colState, setColState] = useState([colItemBoiler])
    //add item

    const [itemInputState,setItemInputState] = useState(null);

    const addItem = () => {

        const newItem = Object.assign({},colItemBoiler,itemInputState);
        setColState([...colState,newItem]);

    }
     
    const handleChange = e => {
        let inputText = {};
        inputText[e.target.name] = e.target.value;
        setItemInputState(inputText);



    }

    return (

        <StyledColumn>
            <h1>{props.title}</h1>
            <input name='text' onChange={handleChange}></input>
            <button onClick={addItem}>Add Item</button>
            {colState.map(i => <li>{i.text}</li>)}

        </StyledColumn>
    )





}


const StyledColumn = styled.ul `

    max-width:100px;
    min-width:100px;
    border:1px solid green;
    display:flex;
    flex-direction:column;
    margin:0px;
    padding:0px;
    height:100%;
    list-style:none;



`