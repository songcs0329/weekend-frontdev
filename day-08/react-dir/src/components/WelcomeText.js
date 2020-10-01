import React from 'react';

const WelcomeText = ({name}) => { // props
    return (
        <p>{name}님 안녕하세요!</p> // props.name
    );
};

export default WelcomeText;