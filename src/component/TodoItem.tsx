import { ITodo } from "./types/data"

interface TodoItem extends ITodo {
    removePost: (id:number) => void
    togglePost:(id:number)=>void
 }
const TodoItem: React.FC<TodoItem> = (props) => {
    const { id, title, choice,removePost,togglePost } = props
    return <div className="item">
        <input type='checkbox' checked={choice} onChange={()=>togglePost(id)} />
        {title}
        <button onClick={()=>removePost(id)}>x</button>
    </div>
}

export { TodoItem }