import { useState } from "react"
import "./impus.css"
export const Impus = () => {
    const [newTarea, setnewTarea ] = useState()
    const handlsubmit = (e) => {
        e.preventDefault();
        let tareas = localStorage.length +1;
        localStorage.setItem(tareas, newTarea);
        setnewTarea("");
    }
    return (
    <div className='imput-Tarea'>
        <form onSubmit={handlsubmit}>
        <input onChange={(e)=> setnewTarea(e.target.value)} className="Imput-TaskLista" placeholder="Escribe Tu Tarea" type="text" name="Tarea" id="" />
        <button onClick={()=> alert(newTarea)} className="Button-TaskLista">+</button>
        </form>
    </div>
)
}
