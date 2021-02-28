import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
