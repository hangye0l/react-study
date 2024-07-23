import React from 'react';
import styles from '../styles/Login.module.scss';

interface InputProps {
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, value, onChange, className }) => {
    return (
        <input
            className={`${styles.input} ${className}`}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;

