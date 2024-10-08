// import React from "react";
// import Button from "./component/button";

// const Page = () => {
//   return (
//     <div className="mx-auto max-w-4xl p-5">
//       <h1 className="text-center text-4xl underline">Todo App</h1>
//       <Button />
//       <h1 className="text-center text-4xl underline pt-5">Movies List</h1>

//       <div className="grid grid-cols-2 gap-6 mt-5">

//   <div className="bg-red-300 p-4">
//     <div className="flex justify-between ">
//       <span>1</span>
//       <span>X</span>
//     </div>
//     <div>
//       Movies Name
//     </div>
//   </div>
 
//   <div className="bg-blue-300 p-4">02</div>
// </div>

//     </div>
//   );
// };

// export default Page;






'use client';

import { useState, useEffect } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/app/component/button';
import { Input } from '@/app/component/input';
import TodoItem from '@/app/component/TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo App</h1>
        <div className="flex mb-4">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-grow mr-2"
          />
          <Button onClick={addTodo}>
            <PlusCircle className="h-5 w-5" />
          </Button>
        </div>
        <ul className="space-y-2">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
