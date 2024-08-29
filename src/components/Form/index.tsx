import React, { useState } from 'react';
import Button from '../Button';
import style from './Form.module.scss';
import { ITask } from '../../types/ITask';

interface IForms {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: IForms) {
  const [task, setTask] = useState<string>('');
  const [time, setTime] = useState<string>('00:00');

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks((prevTasks) => [...prevTasks, { task, time }]);

    setTask('');
    setTime('00:00');
  };

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor='tarefa'>Add a new study bro</label>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          type='text'
          name='tarefa'
          id='tarefa'
          placeholder='What do you wanna study?'
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='time'>Time</label>
        <input
          value={time}
          onChange={(event) => setTime(event.target.value)}
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          required
        />
      </div>
      <Button text='Add' type='submit' />
    </form>
  );
}

export default Form;
