"use client"
import { useSelectedLayoutSegments } from 'next/navigation'
import React, { useEffect, useState, useSyncExternalStore } from 'react'

const page = () => {
  const[title,Settitle] = useState("");
  const[desc,Setdesc] = useState("");
  const[maintask,Setmaintask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();
    Settitle("");
    Setdesc("");
    Setmaintask([...maintask,{title,desc}]);
  }
  //const userName = prompt("what is your name");

  const date = new Date().toDateString();

  let renderTask = "no Task Available";
  if(maintask.length >0){
    renderTask= maintask.map((item,index) => <li key={index} >
      
      <div className='flex m-2 justify-between items-center'>
      <div className='flex gap-3 items-center  mr-4'>
      <input type="checkbox" onChange={() => toggleCompletion(index)} checked={item.completed} />
        <h5 className='text-2xl'>{item.title}</h5>
      </div>
        <p className='text-xl'>{item.desc}</p>
        <button className='text-white btn rounded m-2 bg-red-500 ps-4 pe-4 pt-2 pb-2'  onClick={()=>deleteHandler(index)}>Delete</button>
      </div> 
    </li>)

    let deleteHandler = (i) => {
      let copytask = [...maintask];
      copytask.splice(i,1);
      Setmaintask(copytask);
    }

    const toggleCompletion = (index) => {
      const updatedTasks = [...maintask];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      Setmaintask(updatedTasks);
    };
      
  };
  return (
   <>
   <div className='bg-zinc-900 h-screen w-full items-center text-white'>
    <div className="nav p-5 bg-black shadow-lg shadow-cyan-500/50 hover:shadow-indigo-500/40 flex justify-between">
      <h1>Todo App</h1>
      <h1>{date}</h1>
    </div>
   <div className='flex flex-col items-center justify-center w-50 text-black mt-20 '>
   <form onSubmit={submitHandler} className=''>
      <label className='text-white' htmlFor="task">Task: </label>
      <input className='rounded border-4 p-2 m-8 border-cyan-500/50' type="text" id="task" name="task" placeholder="Task Title" value={title}
      onChange={(e) => Settitle(e.target.value)}/>
      <label className='text-white' htmlFor="desc">Description: </label>
      <input className='rounded border-4 p-2 m-8 border-cyan-500/50' type="text" id="desc" name="task" placeholder="Descrription" value={desc} onChange={(e) => Setdesc(e.target.value)}/>
      <button className='btn ml-2  text-1xl text-white p-3 rounded  bg-cyan-500 shadow-lg hover:shadow-cyan-500/50'>Add Task</button>
    </form>
    <div className='bg-zinc-200 min-w-96'>
    <ul>
    {renderTask}
    </ul>
    </div>
   </div>
   </div>
   </>
  )
}

export default page
