import style from './Button.module.scss';

interface ButtonProps {
  text: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
  onClick?: () => void;
}

function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button className={style.botao} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
