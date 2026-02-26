import { deleteTodo } from "@/features/todo/todoslice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";

const Todolist = () => {
  const selector = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="gap-5">
      {selector.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-center items-center flex-col gap-4"
        >
          <span key={todo.id} className="gap-4">
            {todo.text}
          </span>
          <button className="p-4" onClick={() => handleDelete(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
