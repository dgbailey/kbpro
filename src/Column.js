import React, {useState,useReducer} from 'react';
import styled from 'styled-components';
import uuid4 from 'uuid4';
import {Item} from './Item';



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
    //fiter

    //state first then action
    function reducer(state,action){
        switch(action.type){
            case 'ALL':
                return 'ALL';

            case 'COMPLETE':
                return 'COMPLETE';

            default:
                return state;
        }
    }

    const initialState = 'ALL';
    const [state,dispatch] = useReducer(reducer,initialState);
   

    const filteredState = colState.filter(item =>{

        

        if (state === 'COMPLETE' && item.completed ){
            return true;
        }

        if(state === 'ALL'){
            
            return true;
        }

        return false;

       

    })
        
    
    const mutateCompleteStatus = item => () => {
        item.completed = !item.completed;
    }


    //add item component/toggle for complete
    //create filtering aspect

    return (

        <StyledColumn>
            <h1>{props.title}</h1>
            <input name='text' onChange={handleChange}></input>
            <button onClick={()=>{dispatch({type:'COMPLETE'})}}>COMPLETED</button>
            <button onClick={()=>{dispatch({type:'ALL'})}}>ALL</button>
            <button onClick={addItem}>Add Item</button>
            {filteredState.map(i => <Item key={i.id} m={mutateCompleteStatus(i)} itemObj={i}>{i.text}</Item>)}
            {/* react key property here was key as filtering the list results in items changing position. React needs keys to know that theses are not new items and does not need to remount */}
        </StyledColumn>
    )





}


const StyledColumn = styled.ul `

    max-width:200px;
    min-width:100px;
    border:1px solid green;
    display:flex;
    flex-direction:column;
    margin:0px;
    padding:0px;
    height:100%;
    list-style:none;



`