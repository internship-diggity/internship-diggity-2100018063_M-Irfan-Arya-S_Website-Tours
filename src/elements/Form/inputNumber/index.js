import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import './index.scss';

export default function Number(props) {
    const { value, placeholder, name, min, max, prefix, suffix, outerClassName, onChange, isSuffixPlural } = props;
    const formatValue = (value) => {
        const pluralSuffix = isSuffixPlural && value > 1 ? 's' : '';
        return `${prefix}${value}${suffix}${pluralSuffix}`;
    };

    const [inputValue, setInputValue] = useState(formatValue(value));

    useEffect(() => {
        setInputValue(formatValue(value));
    }, [value, prefix, suffix, isSuffixPlural]);

    const handleChange = (e) => {
        let newValue = e.target.value;
        if (prefix) newValue = newValue.replace(prefix, '');
        if (suffix) newValue = newValue.replace(suffix, '');
        if (isSuffixPlural) newValue = newValue.replace(/s$/, '');

        const patternNumeric = new RegExp('^[0-9]*$');
        const isNumeric = patternNumeric.test(newValue);

        if (isNumeric && +newValue <= max && +newValue >= min) {
            onChange({
                target: {
                    name: name,
                    value: +newValue,
                },
            });
            setInputValue(formatValue(newValue));
        }
    };

    const minus = () => {
        if (value > min) {
            onChange({
                target: {
                    name: name,
                    value: +value - 1,
                },
            });
        }
    };

    const plus = () => {
        if (value < max) {
            onChange({
                target: {
                    name: name,
                    value: +value + 1,
                },
            });
        }
    };

    return (
        <div className={['input-number mb-3', outerClassName].join(' ')}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text minus" onClick={minus}>
                        -
                    </span>
                </div>
                <input
                    min={min}
                    max={max}
                    name={name}
                    pattern="[0-9]*"
                    className="form-control"
                    placeholder={placeholder ? placeholder : '0'}
                    value={inputValue}
                    onChange={handleChange}
                />
                <div className="input-group-append">
                    <span className="input-group-text plus" onClick={plus}>
                        +
                    </span>
                </div>
            </div>
        </div>
    );
}

Number.defaultProps = {
    min: 1,
    max: 1,
    prefix: '',
    suffix: '',
    isSuffixPlural: false,
};

Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func,
    placeholder: propTypes.string,
    isSuffixPlural: propTypes.bool,
    outerClassName: propTypes.string,
    min: propTypes.number,
    max: propTypes.number,
    prefix: propTypes.string,
    suffix: propTypes.string,
};
