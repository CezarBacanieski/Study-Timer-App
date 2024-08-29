import Button from '../Button';
import Watch from './Watch';
import style from './Stopwatch.module.css';
import { ITask } from '../../types/ITask';
import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';

interface StopwatchProps {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Stopwatch({ selected, finishTask }: StopwatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the stopwatch</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button text='Start' onClick={() => regressive(time!)} />
    </div>
  );
}
