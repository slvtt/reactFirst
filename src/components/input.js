import React from 'react';

class Input extends React.Component{

    render() {
        return (
            <div>
                <textarea 
                type="text"
                placeholder="Комментарий"
                className="comment"
                >
                </textarea>
            </div>

        )
    }
}

export default Input;