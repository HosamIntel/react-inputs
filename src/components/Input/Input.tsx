import React, { Fragment } from 'react';

interface InputProps {
  label: string;
  type: string;
}

function Input(props: InputProps) {
  return (
    <Fragment>
      <label htmlFor='input'>{props.label}</label>
      <input type={props.type} />
    </Fragment>
  );
}

export default Input;
