import React from "react";

const ToDolist =(props)=>{

    return(<>
    <div className="todostyle">
    <i className ="fa fa-times" aria-hidden = "true" onClick={()=>{props.onSelect(props.id)}}/>
     <li>{props.text}</li>
     </div>
     </>
    );
}
export default ToDolist;
