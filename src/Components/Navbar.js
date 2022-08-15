import React, { useState } from 'react';
import Modal from './Modal';

export default () => {
  
  const [useModal, setuseModal] = useState(false);

  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Todo List</a>
        </div>
        <div className="flex-none">
        <button className="btn btn-success" onClick={()=>setuseModal(true)} >
            <a className="normal-case text-lg " href='#modal'>Add Event</a>
        </button>
        {useModal && <Modal closeModal={setuseModal}/>}
        </div>
    </div>
  )
}