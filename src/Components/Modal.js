/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Modal = ({closeModal, addTask}) => {
    
    const [eventInfo, setEventInfo] = useState({
        name:'',
        description:'',
        complete: false,
        date:''

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(eventInfo);
        setEventInfo({
            name:'',
            description:'',
            complete: false,
            date:''
        })
    }

    const eventNameHandler = (e) => {
        setEventInfo((values) => ({
            ...values,
            name: e.target.value,
        }));
    }

    const eventDescHandler = (e) => {
        setEventInfo((values) => ({
            ...values,
            description: e.target.value,
        }));
    }
    const eventDateHandler = (e) => {
        setEventInfo((values) => ({
            ...values,
            date: e.target.value,
        }));
    }
    return(
        <>
        <div className="modal" id="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h2 className="font-bold text-xl py-4 ">Add Event</h2>
                
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add title" value={eventInfo.name} className="input input-bordered input-primary w-full max-w-md mb-3" required onChange={eventNameHandler}/>
                <textarea className="textarea textarea-primary w-full mb-3" value={eventInfo.description} placeholder="Add description" rows={4} onChange={eventDescHandler}></textarea>
                <input type='date' className="input input-bordered input-primary" value={eventInfo.date} onChange={eventDateHandler}/>

                <div className="modal-action">
                    <button className="btn btn-error" onClick={()=>closeModal(false)}><a href="#">Close</a></button>
                    <input type="submit" value="Add Event" className="btn btn-accent"/>
                                        
                </div>
                </form>
                
            </div>
        </div> 
        </>


    );
}

export default Modal;

