import style from './Button.module.scss';

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return <button className={style.botao}>{text}</button>;
}

export default Button;
