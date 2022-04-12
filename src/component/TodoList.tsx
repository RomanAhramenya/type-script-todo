import {ITodo} from './types/data'
import { TodoItem } from './TodoItem'
interface TodoList {
items:ITodo[]
removePost:(id:number)=>void;
togglePost:(id:number)=>void;
}
const TodoList: React.FC<TodoList> = (props) => {
    const {items,removePost,togglePost} = props
    return <div className='todoList'>
        {items.map(el=><TodoItem key={el.id} {...el} removePost={removePost} togglePost={togglePost}/>)}
    </div>
}

export {TodoList}