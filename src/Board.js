import React, {useState} from 'react';
import styled from 'styled-components';
import uuid4 from 'uuid4';
import {column, Column} from './Column';



export const Board = () => {

    //board
        //column state
        //add column
        //column boiler plate
    
    const colBoilerPlate = {
        id:uuid4(),
        items:[],
        title:'Default Title'
    }
    
    const [boardState,setBoardState] = useState([colBoilerPlate]);
    const [colNameInputState,setColNameInputState] = useState(null);

    //add column

    const addColumn = () => {
        const newCol = Object.assign({},colBoilerPlate,colNameInputState);
        setBoardState([...boardState,newCol])
    }

    const handleChange = e => {
        let colDetail = {};
        colDetail[e.target.name] = e.target.value;
        setColNameInputState(colDetail);
        console.log(colDetail)

    }

    return(
        <StyledBoard>
            <button onClick={addColumn}>Add Col</button>
            <input onChange={handleChange} name='title'></input>
            <div className='col-container'>
                {boardState.map(c => <Column title={c.title}></Column>)}
            </div>
       
        </StyledBoard>
       
    )






}



const StyledBoard = styled.div `

    width:1000px;
    height:600px;
    border:1px solid black;
    margin:100px auto;
    display:flex;
    flex-direction:column;

    .col-container{
        width:100%;
        height:100%;
        display:flex;
        
        
    }

`