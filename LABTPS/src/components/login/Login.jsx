import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    if (value.toLowerCase().includes('o')) {
        errorMessage = alert('Por favor, ¡Nombres de usuario sin la letra o!');
    }
  };

  const handleRegister = () => {
    if (username.trim() === '' || username.toLowerCase().includes('o')) {
      setErrorMessage(errorMessage = alert('“Usuario inválido para registrarse”'));
      return;
    }

    errorMessage = alert('“¡Usuario registrado correctamente!”');
  };

  return (
    <div>
      <input type="text" placeholder="Ingrese su nombre de usuario" onChange={handleInputChange}/>
      <button onClick={handleRegister}>Registrarse</button>
      <p>{username}</p>
    </div>
  );
};

export default LoginForm;

//const App = () => {

//  return (
//    <div>
//      <LoginForm />
//    </div>
//  );
//};