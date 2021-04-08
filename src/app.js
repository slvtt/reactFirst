import React from 'react';
import {useState} from 'react';
import Info from './components/info';
import InputForm from './components/form';
import Comments from './components/comments'

function App(){
    const [comments,setComments] = useState([]);

    const addComments = (userInput,userInputName) =>{
        if(userInput){
            const NewDate = new Date();
            const hour = NewDate.getHours();
            const minute = NewDate.getMinutes();
            const date = NewDate.getDate();

            const newItem = {
                id:Math.random().toString(36).substr(2,9),
                comment:userInput,
                name:userInputName,
                fullDate:{
                    hour:hour + declOfNum(hour,[' час ', ' часа ', ' часов ']),
                    minute:minute + declOfNum(minute,[' минута ', ' минуты ', ' минут ']),
                    date:date
                }
            }

            setComments([...comments,newItem])
        }

    }

    const declOfNum = (number, words) => {

        return words[(number % 100 > 4 && number % 100 < 20) ? 
            2 : 
                [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
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
            <ul>
            {comments.map((comment,userName) => {
                return(
                        <li key={comment.id}>
                        <Comments
                            userName={userName}
                            comment={comment}
                            key={comment.id}
                            toggleComment={handleComment}
                            removeComments={removeComments}
                        />
                        </li>
                )
            })}
            </ul>
        </div>
    )
}

export default App;