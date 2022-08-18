import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import EventCard from './Components/EventCard';
import Tasklist from './Tasks';
import './app.css';

const App = ()=>{
    const [todo, setTodo] = useState(Tasklist);

    const addTask = (task)=>{
        let copy = [...todo];
        if(copy.length == 0){
            task._id = 1;
        }else{
            const lastElementId = copy.at(-1)._id;
            task._id = lastElementId+1;
        }
        copy.push(task);
        setTodo(copy);
    }

    const deleteTask = (id)=>{
        let copy = todo.filter(task=>task._id !== id);
        setTodo(copy);
    }

    const completeTask = (id)=>{
        let copy = [...todo];
        copy.find((o,i)=>{
            if(o._id === id){
                if(!copy[i].complete){
                    copy[i].complete = true;
                }
                
            }
        });
        setTodo(copy)
    }
    return(<>
        <Navbar newTask ={addTask}/>      
        <EventCard tasks={todo} deleteBtn={deleteTask} completeBtn={completeTask}/>

    </>
    );

}

export default App;