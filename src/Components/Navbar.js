import React from 'react';



export default () => {



  return (
    <div class="navbar bg-base-100">
        <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Todo List</a>
        </div>
        <div class="flex-none">
        <button class="btn btn-success">
            <a class="normal-case text-lg">Add Event</a>
        </button>
        </div>
    </div>
  )
}