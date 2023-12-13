import React from 'react';

const SubmitButton = (props) => {
    if(props.submit===false){
        return  <button onClick={props.onClick} type="submit" className={props.className}>{props.text}</button>
    }else {
        return (
            <button disabled={true} className={props.className}> <p className=' inline-block animate-bounce text-xl' >😊</p>  {props.wait}</button>
        );
    }
};
export default SubmitButton;