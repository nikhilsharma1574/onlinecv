    import React from 'react';

    const MyButton = ({ buttonText,style="",functionn}) => {
    return (
        <>
        <button className={style} onClick={functionn}>
        {buttonText}
        </button>
        </>
    );
    };

    export default MyButton;
