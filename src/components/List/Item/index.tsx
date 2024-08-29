import { ITask } from '../../../types/ITask';
import style from '../List.module.scss';

interface ItemProps extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: ItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ''} ${
        completed ? style.itemCompletado : ''
      }`}
      onClick={() =>
        !completed && selectTask({ task, time, selected, completed, id })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.concluido} area-label='Finished task'></span>
      )}
    </li>
  );
}
