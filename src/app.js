import React from 'react';
import {useState} from 'react';
import Info from './components/info';
import InputForm from './components/form';

function App(){
    const [comments,setComments] = useState([])

    const addComments = (userInput) =>{
        if(userInput){
            const newItem = {
                id:Math.random().toString(100).substr(2,9),
                comment:userInput,
            }
            setComments([...comments,newItem])
        }

    }

    const removeComments = () =>{
        
    }

    return(
        <div className="fixed-container">
            <Info />
            <InputForm addComments={addComments} />
            <h1>Comments {comments.length}</h1>
        </div>
    )
}

export default App;