import React from 'react';
import {useState} from 'react';
import Info from './components/info';
import InputForm from './components/form';
import Comments from './components/comments'

function App(){
    const [comments,setComments] = useState([])

    const addComments = (userInput) =>{
        if(userInput){
            const newItem = {
                id:Math.random().toString(36).substr(2,9),
                comment:userInput,
            }
            setComments([...comments,newItem])
        }

    }

    const removeComments = () =>{
        
    }

    const handleComment = () =>{


    }

    return(
        <div className="fixed-container">
            <Info />
            <InputForm addComments={addComments} />
            <h1>Comments {comments.length}</h1>
            {comments.map((comment) => {
                return(
                    <Comments 
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