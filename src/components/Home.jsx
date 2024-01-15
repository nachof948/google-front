import React from 'react';

const Home = () => {
    const googleAuth = ()=>{
        window.open("http://localhost:4500/auth/google", "_self")
    }
    return(
        <div>
            <button onClick={googleAuth}>Google</button>
            <a href="/usuario">Mi perfil</a>
        </div>
    )
}

export { Home }