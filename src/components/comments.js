import React from 'react';

const Comments = ({userName,comment,removeComments},)=>{

    const hour = comment.fullDate.hour;
    const minute = comment.fullDate.minute;

    const declOfNum = (number, words) => {
        
        return words[(number % 100 > 4 && number % 100 < 20) ? 
            2 : 
                [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }
    
    return(
        <div key ={comment.id} className ="item-comment">
            <div className="flex-row">

                <div className="userName">
                    <span className="userName_span">Имя:</span>
                    {comment.name}
                    <div>Время написания: {hour + declOfNum(hour, [' час ', ' часа ', ' часов ']) + minute + declOfNum(minute, [' минута ', ' минуты ', ' минут '])}</div>
                </div>

                <p className="comment-text">
                    {comment.comment}
                </p>
            </div>


            <button className="item-delete" onClick={()=>removeComments(comment.id)}>
                X
            </button>
        </div>
    )
}

export default Comments;