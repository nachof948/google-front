import React from 'react';

const Usuario = ({ userGoogle }) => {
    const cerrarSesion = () =>{
        window.open("/auth/logout", "_self")
    }
    return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", height: "100vh" }}>
      {userGoogle ? (
        <>
          <h1>{userGoogle.username}</h1>
          <img src={userGoogle.image} alt="Usuario" style={{ borderRadius: "50%" }} />
          <button onClick={cerrarSesion}>Cerrar Sesion</button>
          <a href="/">Volver</a>
        </>
      ):(
        <div>
        <h1>Cerraste la sesion</h1>
        <a href="/">Inicia la Sesion</a>
        </div>
      )}
    </div>
  );
}

export { Usuario };
