import './TaskLista.css'
import { Impus } from '../ImpusTaskLista/Impus'
import { ListaTarea } from '../TareasLista/ListaTarea';
export const TaskLista = () => {
return (
    <div className='TaskLista'>
        <h1>TodoLista</h1>
        <Impus/>
        <ListaTarea/>
    </div>
)
}
