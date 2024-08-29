import style from './Button.module.scss';

interface ButtonProps {
  text: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
}

function Button({ text, type }: ButtonProps) {
  return (
    <button className={style.botao} type={type}>
      {text}
    </button>
  );
}

export default Button;
