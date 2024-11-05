"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface InputProps {
    label: string;
    type: string;
    name: string;
    value?: string;
    id: string;
    placeholder?: string;
    isPassword?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, type, name, onChange, value, id, placeholder, isPassword }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="input-container" style={{ position: 'relative' }}>
            <label className="form-label" htmlFor={id}>{label}</label>
            <input
                className="form-control"
                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                id={id}
                value={value}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                style={{ paddingRight: '2.5rem' }}
            />
            {isPassword && (
                <span
                    onClick={togglePasswordVisibility}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '75%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer'
                    }}
                >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
            )}
        </div>
    );
}
