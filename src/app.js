import React from 'react';
import {useState} from 'react';
import Info from './components/info';
import InputForm from './components/form';
import Comments from './components/comments'

function App(){
    const [comments,setComments] = useState([]);
    const [userName,setName] = useState([]);

    const addComments = (userInput,userInputName) =>{
        if(userInput){
            const newItem = {
                id:Math.random().toString(36).substr(2,9),
                comment:userInput,
                name:userInputName
            }
            console.log(userInputName)
            setComments([...comments,newItem])
            setName([...userName,newItem])
        }

    }

    const removeComments = () =>{
        
    }

    const handleComment = () =>{


    }

    const getDate = ()=>{
        const data = new Date(),
            hour = data.getHours(),
            minuts = data.getMinutes(),
            date = data.getDate();
        
    }

    return(
        <div className="fixed-container">
            <Info />
            <InputForm addComments={addComments} />
            <h1>Comments {comments.length}</h1>
            {comments.map((comment,userName) => {
                return(
                    <Comments
                    date ={getDate}
                        userName={userName}
                        comment={comment}
                        key={comment.id}
                        toggleComment={handleComment}
                        removeComments={removeComments}
                    />
                )
            })}
        </div>
    )
}

export default App;