import { ITask } from '../../types/ITask';
import Item from './Item';
import style from './List.module.scss';

interface ListProps {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item) => (
          <Item {...item} key={item.id} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
