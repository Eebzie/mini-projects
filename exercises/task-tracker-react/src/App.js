import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Work on personal website',
            day: 'March 1 at 1:30 PM',
            reminder: true,
        },
        {
            id: 2,
            text: 'Read BME802 lectures',
            day: 'March 3 at 2:30 PM',
            reminder: true,
        },
        {
            id: 3,
            text: 'Read The Dispossessed',
            day: 'March 4 at 5:00 PM',
            reminder: false,
        },
    ]
)
// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}
// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !==id))
}
  
// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task)=> 
      task.id === id ? {...task, reminder: 
        !task.reminder} : task
    )
  )
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder}
        />
      ) : (
        'No Tasks to Show'
      )}

    </div>
  );
}

export default App;
