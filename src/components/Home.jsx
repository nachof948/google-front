import React from 'react';

const Home = () => {
    const googleAuth = ()=>{
        window.open("http://localhost:4500/auth/google", "_self")
    }
    return(
        <button onClick={googleAuth}>Google</button>
    )
}

export { Home }