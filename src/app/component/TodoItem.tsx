// import React from "react";

// const Button = () => {
//   return (
//     <div className="flex justify-between mt-5 gap-4">
//       <input
//         className=" border-solid border-9 border-b focus:outline-none w-[60%] p-2 ml-3 text-lg "
//         placeholder="Write movie name "
//       />
//        <input
//         className=" border-solid border-9 border-b focus:outline-none w-[20%] p-2 ml-3 text-lg "
//         placeholder="Write id "
//       />
//       <button className="bg-blue-500 rounded px-4 py-2 w-40 hover:bg-blue-400 text-white">
//         Add Movie
//       </button>
     
//     </div>
//   );
// };

// export default Button;





import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import { Button } from '@/app/component/button';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center bg-gray-100 p-3 rounded-lg transition-all duration-300 hover:shadow-md">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => toggleTodo(todo.id)}
        className="mr-2"
      >
        {todo.completed ? (
          <CheckCircle className="h-5 w-5 text-green-500" />
        ) : (
          <Circle className="h-5 w-5 text-gray-400" />
        )}
      </Button>
      <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
        {todo.text}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </li>
  );
};

export default TodoItem;

