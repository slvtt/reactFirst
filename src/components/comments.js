import React from 'react';

const Comments = ({comment,removeComments},)=>{

    const hour = comment.fullDate.hour;
    const minute = comment.fullDate.minute;

    return(
        <div key ={comment.id} className ="item-comment">
            <div className="flex-row">

                <div className="userName">
                    <span className="userName_span">Имя:</span>
                    {comment.name}
                    <div>Время написания: {hour}: {minute} </div>
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