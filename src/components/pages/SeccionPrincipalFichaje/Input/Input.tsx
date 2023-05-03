import React, { useState } from 'react';
import styles from './Input.module.css';
// import bootstrap from "GlobalStyle/bootstrap.min.css";

interface IInput {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  register?: any;
  type: string;
}

const Input = ({ onChange, name, register, type = 'text' }: IInput) => {
  const [valor, setValor] = useState('');

  const handleOnChange = (e: any) => {
    if (onChange) onChange(e.target.value);
    setValor(e.target.value);
  };

  return (
    <input
      ref={register}
      name={name}
      className={styles.input}
      value={valor}
      type={type}
      onChange={handleOnChange}
      autoComplete='off'
    />
  );
};

export default Input;
