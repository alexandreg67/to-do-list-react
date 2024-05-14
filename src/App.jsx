import { useState, setState } from 'react'
import { nanoid } from 'nanoid'
import ListItem from './components/ListItem'

function App() {

  const [todoList, setTodoList] = useState([
    { id: nanoid(8), content: "item 1" },
    { id: nanoid(8), content: "item 2" },
    { id: nanoid(8), content: "item 3" },
  ])
  // console.log(todoList);

  const [newTodo, setNewTodo] = useState('')
  const [showValidation, setShowValidation] = useState(false)

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (newTodo === '') {
      setShowValidation(true)
      return
    }

    setTodoList([...todoList, { id: nanoid(8), content: newTodo }])
    setNewTodo('')
    setShowValidation(false)
  }

  return (
    <div className="h-screen">

      <div className="max-w4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do liste</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"
            id="todo-item"
            className="mt-1 block w-full rounded" />

          {showValidation && <p className="text-red-600">Veuillez entrer une tâche</p>}

          <button className="mt-4 mb-8 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>

        </form>

        <ul>
          {todoList.length === 0 && <li className="text-slate-50">Pas de tâche à faire...</li>}
          {todoList.length > 0 && todoList.map((item) => (
            <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
          ))}
        </ul>

      </div>

    </div>
  )
}

export default App
