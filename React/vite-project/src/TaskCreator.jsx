import { useState } from "react";

const TaskCreator = (props) => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  console.log(tasks);

  return (
    <>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const previousTasks = tasks;
          previousTasks.push(input);
          setTasks(previousTasks);
          setInput("");
        }}
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </>
  );
};

export default TaskCreator;
