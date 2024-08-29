import style from './Watch.module.css';

interface WatchProps {
  time: number | undefined;
}

export default function Watch({ time = 0 }: WatchProps) {
  const minuts = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutTen, minutsUnit] = String(minuts).padStart(2, '0');
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.relogioNumero}>{minutTen}</span>
      <span className={style.relogioNumero}>{minutsUnit}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondTen}</span>
      <span className={style.relogioNumero}>{secondUnit}</span>
    </>
  );
}
