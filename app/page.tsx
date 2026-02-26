"use client";

import Todoinputs from "@/components/Todoinputs";
import Todolist from "@/components/Todolist";

const Page = () => {
  return (
    <div>
      <p>Here is the todo list</p>
      <Todoinputs />
      <Todolist />
    </div>
  );
};
export default Page;
