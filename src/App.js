import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Usuario } from './components/Usuario';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [userGoogle, setUserGoogle] = useState(null);

  
useEffect(() => {
  const getUser = async () => {
    try {
      const response = await axios.get("https://google-back.vercel.app/auth/exito", {
        withCredentials: true, // Esto es equivalente a 'credentials: "include"' en fetch
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setUserGoogle(response.data.user);
      } else {
        throw new Error("La autenticación ha fallado");
      }
    } catch (err) {
      console.log(err);
    }
  };

  getUser();
}, []);

  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuario" element={<Usuario userGoogle={userGoogle} />} />
        </Routes>

    </div>
  );
}

export default App;
