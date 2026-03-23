import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
}

const Input = ({ name, placeholder, value, onChange }: InputProps) => {
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default Input;
