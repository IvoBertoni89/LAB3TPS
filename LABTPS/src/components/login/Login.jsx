import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleRegister = () => {
    if (username.trim() === '' || username.toLowerCase().includes('o')) {
      setErrorMessage('Nombre de Usuario no valido para registrarse, odio las o y las O >:) , mejor usa 0');
      return;
    }
    
    alert('¡Usuario registrado correctamente! :)');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese su nombre de usuario"
        onChange={handleInputChange}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{username}</p>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;

//import LoginForm from './components/login/Login';
//const App = () => {

  //return (
   // <div>
   //   <LoginForm />
   // </div>
  //);
//};