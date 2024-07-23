import React from 'react';
import styles from '../styles/Login.module.scss';

interface CheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
    return (
        <label className={styles.checkboxContainer}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className={styles.checkmark}></span>
            {label}
        </label>
    );
};

export default Checkbox;
