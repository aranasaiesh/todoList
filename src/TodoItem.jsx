import Button from "./Button";

export default function TodoItem(props) {
  const { todo, handleDone, handleDelete } = props;

  return (
    <div className="py-2 flex gap-1">
      <div className={`flex p-2 ${todo.done ? "line-through" : ""}`}>
        {todo.title}
        {todo.id}
      </div>
      <div className="flex gap-4 pl-6">
        <Button
          title={todo.done ? "Undo" : "Done"}
          onClick={() => handleDone(todo.id, todo.done)}
          color="green"
          size="small"
        />

        <Button
          title={"Delete"}
          onClick={() => handleDelete(todo.id)}
          color="delete"
          size="small"
        />
      </div>
    </div>
  );
}
