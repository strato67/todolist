import React from "react";

const Modal = ({closeModal}) =>{

    return(
        <>
        <div className="modal" id="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h2 className="font-bold text-xl py-4 ">Add Event</h2>
                
                <form>
                <input type="text" placeholder="Add title" className="input input-bordered input-primary w-full max-w-md mb-3" required />
                <textarea className="textarea textarea-primary w-full mb-3" placeholder="Add description" required rows={4}></textarea>
                <input type='date' className="input input-bordered input-primary"/>

                <div className="modal-action">
                    <button className="btn btn-error" onClick={()=>closeModal(false)}><a href="#">Cancel</a></button>
                    <input type="submit" value="Add Event" className="btn btn-accent"/>
                                        
                </div>
                </form>
                
            </div>
        </div> 
        </>


    );
}

export default Modal;

