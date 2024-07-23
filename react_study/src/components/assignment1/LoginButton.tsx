import React from 'react';
import styles from '../styles/Login.module.scss';

interface LoginButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick, children }) => {
    return (
        <button className={styles.loginButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default LoginButton;
