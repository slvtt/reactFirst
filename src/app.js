import React from 'react';
import {useState,useEffect} from 'react';
import Info from './components/info';
import InputForm from './components/form';
import Comments from './components/comments';

function App(){
    const [comments,setComments] = useState([]);


    useEffect(()=>{
        const raw = localStorage.getItem('comments');
        
        if(raw){
            setComments(JSON.parse(raw));
        }

    },[])

    useEffect(() =>{
        localStorage.setItem('comments',JSON.stringify(comments));
    },[comments])

    const addComments = (userInput,userInputName) =>{
        if(userInput && userInputName){
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
        else{
            alert('Заполните,пожалуйста, все поля!')
        }

    }

    const declOfNum = (number, words) => {

        return words[(number % 100 > 4 && number % 100 < 20) ? 
            2 : 
                [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }

    const removeComments = (id) =>{
        setComments(comments.filter(comment => {
            return comment.id != id
        }))
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