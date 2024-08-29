import { ITask } from '../../types/ITask';
import Item from './Item';
import style from './List.module.scss';

interface ListProps {
  tasks: ITask[];
}

function List({ tasks }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
