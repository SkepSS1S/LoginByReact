import { useState } from 'react';
import { Input } from './input';
import './App.css';

function App() {
  const [formValue, setFormValue] = useState({});
  const [isMatch, setIsMatch] = useState({
    login: true,
    password: true
  });

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const validateForm = () => {
    const isAnyInvalid = Object.values(isMatch).some((valid) => !valid);
    return !isAnyInvalid;
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <Input 
        name={'login'} 
        label={'Login '} 
        regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/} 
        setForm={setFormValue}
        setIsMatch={setIsMatch} />

        <Input
        name={'password'} 
        label={'Password'} 
        regex={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/} 
        setForm={setFormValue}
        setIsMatch={setIsMatch} />

        <button type='submit' disabled={!validateForm()}>Login</button>
      </form>
    </div>
  );
}

export default App;