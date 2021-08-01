import style from './Button.modul.css'

export const Button = (props) => {
    return (
        <button className = {style}>
            {props.text}
          </button>
    )
}