import "./Tareas.css"
import { BotonesDelet } from './BotonDelet';
import { BotonEdit } from './BotonEdit';
import { Marcador } from './Marcador';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const ListaTarea = () => {
return (
    <div className="Container-Tareas">
        <article className="Lista-Tareas">
        <Marcador/>
        <input className="Tarea" type="text" />
        <BotonEdit editar ={<FiEdit/>}/>
        <BotonesDelet eliminar ={<RiDeleteBin6Line/>}/>
        </article>

    </div>
)
}
