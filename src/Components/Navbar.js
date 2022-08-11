import React, { useState } from 'react';
import Modal from './Modal';


export default () => {
  


  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Todo List</a>
        </div>
        <div className="flex-none">
        <button className="btn btn-success" >
            <a className="normal-case text-lg">Add Event</a>
        </button>
        </div>
    </div>
  )
}