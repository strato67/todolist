import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import EventCard from './Components/EventCard';
import Tasklist from './Tasks';
import './app.css';

const App = ()=>{
    const [todoVar, setTodo] = useState(Tasklist);

    return(<>
        <Navbar/>      
        <EventCard tasks={todoVar}/>

    </>
    );

}

export default App;