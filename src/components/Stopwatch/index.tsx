import Button from '../Button';
import Watch from './Watch';
import style from './Stopwatch.module.css';
import { ITask } from '../../types/ITask';
import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';

interface StopwatchProps {
  selected: ITask | undefined;
}

export default function Stopwatch({ selected }: StopwatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the stopwatch</p>
      <div className={style.relogioWrapper}>
        <Watch time={time}/>
      </div>
      <Button text='Start' />
    </div>
  );
}
