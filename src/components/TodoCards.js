import React from "react";

function TodoCards(props) {
  return (
    <div className="container d-flex justify-content-center my-3">
    <div className="row row-cols-1  g-4" >
      <div className="card text-center">
        <div className="card-header">
            
            <div className="d-flex justify-content-between">
            <i className="fa-solid fa-pen-to-square" onClick={()=>props.editTask(props.taskItem.id)}></i>    
            Editor: {props.taskItem.editor}       
            <i class="fa-solid fa-trash-can" onClick={()=>props.deleteTask(props.newKey)}></i>
            </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.taskItem.title}</h5>
          <p className="card-text">
            {props.taskItem.description}
          </p>
        </div>
        <div className="card-footer text-muted">Start Date: {props.taskItem.startDate} End Date: {props.taskItem.endDate}</div>
      </div>
    </div>
    </div>
  );
}

export default TodoCards;
