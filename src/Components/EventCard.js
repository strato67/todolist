/* eslint-disable react/prop-types */
import React from "react";

const EventCard = ({tasks, deleteBtn, completeBtn})=>{

return(
    <>   
        <div className="mt-10 mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
            {tasks.map((task)=>{

            return(

                <div className="card w-96 bg-primary text-primary-content" key={task._id}>
                    <div className="card-body">
                    <h2 className={task.complete? 'card-title line-through' : 'card-title'}>{task.name}</h2>
                    <p className={task.complete? 'line-through' : ''}>{task.description}</p>
                    <p className={task.complete? 'line-through' : ''}>{task.date}</p>
                    <div className="card-actions flex justify-center gap-4 mt-2">
                        <button className={task.complete ? ' btn btn-disabled btn-accent' : 'btn btn-accent'} onClick={()=>completeBtn(task._id)}>{task.complete ? 'Completed' :'Mark as complete'}</button>
                        <button className="btn btn-error" onClick={()=>deleteBtn(task._id)}>Delete</button>
                    </div>
                    </div>
                </div>

            );
        })}
        </div>
        </div>
    </>);

}

export default EventCard;