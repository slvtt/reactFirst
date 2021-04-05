import React from 'react';

const Comments = ({comment,removeComments})=>{

    return(
        <div key ={comment.id} className ="item-comment">
            <div className="comment-text">
                {comment.comment}
            </div>
        <button className="item-delete" onClick={()=>removeComments(comment.id)}>
            X
        </button>
        </div>
    )
}

export default Comments;