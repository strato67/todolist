import React from "react";


const EventCard = ({tasks})=>{

return(
    <>   
        <div className="mt-10 mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
            {tasks.map((task)=>{

            return(


                <div className="card w-96 bg-primary text-primary-content" key={task._id}>
                    <div className="card-body">
                    <h2 className="card-title">{task.name}</h2>
                    <p>{task.description}</p>
                    <div className="card-actions flex justify-center gap-4 mt-2">
                        <button className="btn btn-accent">Mark as Complete</button>
                        <button className="btn btn-error">Delete</button>
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