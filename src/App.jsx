import { useState } from "react";
import Button from "./Button";
import TodoItem from "./TodoItem";

// Utgå från hur datat ska se ut och förändras.

// Data = Array med object. Varje object är en todo och innehåller titel, är gjort eller inte (boolean)
// och ID

// Kunna förändra data CRUD
// 1. - skapa todo
// 2. - ta bort todo
// 3. - uppdatera todo
// 4. - läsa todolist

let count = 1;

function App() {
  const [list, setList] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");

  function handleChange(e) {
    setTodoTitle(e.target.value);
  }

  function handleAdd(e) {
    const todo = {
      title: todoTitle,
      done: false,
      id: count++,
    };

    const newList = [...list];

    newList.push(todo);
    setList(newList);
  }

  function handleDone(id, done) {
    const newList = [...list];

    for (let i = 0; i < newList.length; i++) {
      const todo = newList[i];

      if (todo.id == id) {
        todo.done = !done;
      }
    }

    setList(newList);
  }

  function handleDelete(id) {
    const newList = [...list];

    for (let i = 0; i < newList.length; i++) {
      const todo = newList[i];

      if (todo.id == id) {
        newList.splice(i, 1);
        break;
      }
    }

    setList(newList);
  }

  return (
    <div className="p-8">
      <h1 className="flex font-bold justify-center p-4 text-3xl">
        My Todo-list
      </h1>
      <div className="flex flex-col gap-2">
        <input
          className="border-2 border-gray-500"
          type="text"
          onChange={handleChange}
        />
        <Button
          title="Add todo"
          onClick={handleAdd}
          color="primary"
          size="small"
        />

        {list.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
