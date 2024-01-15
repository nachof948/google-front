import React from 'react';

const Home = () => {
    const googleAuth = ()=>{
        window.open("https://google-back.vercel.app/auth/google", "_self")
    }
    return(
        <div>
            <button onClick={googleAuth}>Google</button>
            <a href="/usuario">Mi perfil</a>
        </div>
    )
}

export { Home }