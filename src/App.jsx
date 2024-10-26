import { useState } from 'react';
import List from './components/list.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

 const handleDelete = (id) =>{
  setTasks(tasks.filter(task=>task.id!==id))} 
 const handleAddTask = () =>{
    if(newTask){
      setTasks([...tasks,{id:Date.now() , content:newTask}])
    setNewTask("")
    }
  }
    return (
    <>
      <div className='h-screen w-screen flex justify-center pt-5 pb-5'>
        <div className='w-3/4 rounded-3xl '>
          <h1 className="text-3xl font-bold underline text-center mt-7">
            Today's List
          </h1>
          <div className='flex flex-col items-center m-10'>
            <div className='flex flex-row justify-around'>
              <input
                type='text'
                placeholder='Type your goals'
                className='border-2 border-black rounded-3xl m-6 p-5' value={newTask} onChange={(e) => setNewTask(e.target.value)}
              ></input>
              <button className="border-2 border-black rounded-lg bg-[#F82C00] text-white p-4 h-14 mt-7 " onClick={handleAddTask} 
              >
                Submit
              </button>
            </div>
            {tasks.map(task => (
              <List
                key={task.id}
                content={task.content}
                onDelete={() => handleDelete(task.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
