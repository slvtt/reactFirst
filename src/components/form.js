import React from 'react';
import {useState} from 'react';

const InputForm =({addComments})=>{
    const {userInput,setUserInput} = useState('');

    const handleChange = (ev) =>{
        setUserInput(ev.currentTarget.value);
    }

    const handleSubmit = (ev) =>{
        ev.preventDefault();
        addComments(userInput);
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
                    className ="comment"
                    value={userInput}
                    type="text"
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Ваш комментарий"
                />
                <button className="btn_submit">Отправить</button>
            </form>

        )
}

export default InputForm;