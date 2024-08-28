import Item from './Item';
import style from './List.module.scss';

const List = () => {
  const tasks = [
    {
      task: 'React',
      time: '02:00:00',
    },
    {
      task: 'TypeScript',
      time: '03:00:00',
    },
    {
      task: 'PostgreSQL',
      time: '01:00:00',
    },
  ];
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
};

export default List;
