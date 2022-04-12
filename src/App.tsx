import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import { TodoList } from './component/TodoList';
import { ITodo } from './component/types/data';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null)

  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value)
  }

  const handlekeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addPost()
  }
  const addPost = () => {
    setTodos([...todos,
    {
      id: Date.now(),
      title: value,
      choice: false,
    }]
    )
    setValue('')
  }

  const removePost = (id: number): void => {
    setTodos(todos.filter(el => el.id !== id))
  }
  const togglePost = (id: number): void => {
    setTodos(todos.map(el => {
      if (el.id !== id) return el
      return {
        ...el,
        choice: !el.choice
      }
    }))
  }
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()

  }, [])
  return (
    <div className="App">
      <div>
        <input ref={inputRef} value={value} onKeyDown={handlekeyDown} onChange={handlerChange} />
        <button className='addPost' onClick={addPost}>addPost</button>
      </div>
      <TodoList items={todos} removePost={removePost} togglePost={togglePost} />
    </div>
  );
}

export default App;
