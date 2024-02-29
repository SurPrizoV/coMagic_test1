/* eslint-disable react/prop-types */
import s from './Button.module.css'

export const Button = ({children, setting, setSetting}) => {
    const changeSettings = () => {
        setSetting(!setting)
    }
    return (
        <button onClick={() => changeSettings()} className={setting ? `${s.light_grey} ${s.button}` : `${s.grey} ${s.button}`}>{children}</button>
    )
}