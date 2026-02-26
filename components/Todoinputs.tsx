import { addTodo } from "@/features/todo/todoslice";
import { useAppDispatch } from "@/store/hooks";
import React from "react";

const Todoinputs = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo here"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Todoinputs;
