import Button from '../Button';
import './style.scss';

const Form = () => {
  return (
    <form className='novaTarefa'>
      <div className='inputContainer'>
        <label htmlFor='tarefa'>Add a new study bro</label>
        <input
          type='text'
          name='tarefa'
          id='tarefa'
          placeholder='What do you wanna study?'
          required
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor='time'>Time</label>
        <input
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          max='04:00:00'
          required
        />
      </div>
      <Button />
    </form>
  );
};

export default Form;
