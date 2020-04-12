import React from 'react';
import classnames from 'classnames';

const TextInputGroup = ({ name,
    label,
    value,
    type,
    placeholder,
    refName,
    error
}) => {

   
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': error
                    })}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    defaultValue={value}
                    ref={refName}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
            )
    
}

export default TextInputGroup;