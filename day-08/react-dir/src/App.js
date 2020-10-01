import React from 'react';
import WelcomeText from './components/WelcomeText';

const App = () => {
    const style = {
        color: "blue"
    }
    const name = "창석"
    return (
        <>
            <h1 style={style}>{`HELLO ${name}`}</h1>
            <button onClick={() => alert(name)}>BUTTON</button>
            <WelcomeText name={"주은"}/>
            <WelcomeText name={"수호"}/>
            <WelcomeText name={"수정"}/>
            <WelcomeText name={"주현"}/>
        </>
    );
};

export default App;