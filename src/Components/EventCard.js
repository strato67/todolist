import React from "react";

const EventCard = ()=>{

    return(
        <div className="mt-10 mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
                <div class="card w-96 bg-primary text-primary-content ">
                    <div class="card-body">
                    <h2 class="card-title">Reminder Name</h2>
                    <p>Reminder description</p>
                    <div class="card-actions flex justify-center gap-4 mt-2">
                        <button class="btn btn-accent">Mark as Complete</button>
                        <button class="btn btn-error">Delete</button>
                    </div>
                    </div>
                </div>

            </div>

        </div>

    );

}

export default EventCard;