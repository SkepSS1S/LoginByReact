import { useState } from "react"

export const Input = ({ name, label, regex, setForm, setIsMatch }) => {
    const [value, setValue] = useState("");
    const [isMatch, setIsMatchLocal] = useState(true);

    const onChange = (e) => {
        const inputValue = e.target.value;
        const isValid = inputValue.match(regex);
        setIsMatchLocal(!!isValid);
        setValue(inputValue);
        setForm((oldValue) => ({ ...oldValue, [name]: inputValue }));
        setIsMatch((prevIsMatch) => ({ ...prevIsMatch, [name]: !!isValid }));
    }
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input onChange={onChange} value={value} name={name}></input>
            {!isMatch && <div className="error-message">Не верный формат</div>}
        </div>
    )
}