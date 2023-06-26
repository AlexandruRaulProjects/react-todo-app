import { useState, useEffect } from "react";
import { FaTimes} from 'react-icons/fa'

function getTasks() {
  return [
    {
      id: 1,
      text: "Dentist",
      day: "5 aprilie, 12:30",
    },

    {
      id: 2,
      text: "Sedinta",
      day: "6 aprilie, 10:00",
    },
  ];
}

function App() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);
  //daca vrem sa importam o functie, mergem la finalul cuvantului si apasam ctrl+space si apoi enter

  useEffect(() => {
    const data = getTasks();
    setTodos(data);
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="container">
      <header className="header">
        <h1>TODO App</h1>
        <Button 
          color={showAddTodo ? 'cornflowerblue' : 'royalblue'}
          text={showAddTodo ? 'Close' : 'Add'}
          handleClick={() => setShowAddTodo(!showAddTodo)}
        />
      </header>
      {showAddTodo && (
        <AddTask onAdd={addTodo} />
      )}
      {todos.length > 0
        ? todos.map((todo) => (
            <div key={todo.id} className="task">
              {/* avem nevoie de prop-ul key pentru ca react sa stie ca fiecare element este unic*/}
              <h3>{todo.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => deleteTodo(todo.id)}/>
              </h3>
              <p>{todo.day}</p>
            </div>
          ))
        : 'No Todos To Show!'}
    </div>
  );
}

// Button = componenta noua
function Button(props) {
  return (
    <>
      <button
      onClick={props.handleClick}
      style={{ backgroundColor: props.color}}
      className="btn"
      >
        {props.text}
      </button>
    </>
  )
}

// AddTask = componenta noua
function AddTask(props) {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!text || !day){
      alert('Please add todo name and date!');
      return;
    }

    props.onAdd({ text, day });

    setText('');
    setDay('');
  }


  return (
    <form className ="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Todo</label>
        <input type="text" placeholder="Add Todo" value={text} 
        onChange={(event) => setText(event.target.value)} />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" value={day}
        onChange={(event) => setDay(event.target.value)} />
      </div>
      <input type="submit" value='Save Todo' className="btn btn-block"/>
    </form>
  )
}

export default App;
