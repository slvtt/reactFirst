import React from 'react';
import {useState} from 'react';

const InputForm =({addComments})=>{
    const [userInput,setUserInput] = useState('');
    const [userName,setUserNameInput] = useState('');

    const handleChangeUserInput = (ev) => {
        setUserNameInput(ev.currentTarget.value);
    }

    const handleChangeComment = (ev) =>{
        setUserInput(ev.currentTarget.value);
    }

    const handleSubmit = (ev) =>{
        ev.preventDefault();
        addComments(userInput,userName);
        setUserInput('');
        setUserNameInput('');
    }

    const handleKeyPress = (ev) =>{
        if(ev.key === 'Enter'){
            handleSubmit(ev)
        }
    }

        return (
            <form
                className="fixed-container"
                onSubmit={handleSubmit}
            >
                <input 
                    className ="user-name_input"
                    value={userName}
                    type="text"
                    onChange={handleChangeUserInput}
                    placeholder="ваше имя"
                />
                <input
                    className ="comment"
                    value={userInput}
                    type="text"
                    onChange={handleChangeComment}
                    onKeyDown={handleKeyPress}
                    placeholder="Ваш комментарий"
                />
                <button className="btn_submit">Отправить</button>
            </form>

        )
}

export default InputForm;