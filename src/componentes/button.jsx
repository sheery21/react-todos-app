import style from './btn.module.css'

const Button = ( {onClick ,label , className} ) => {

  
  return (
    <button  className={` ${style.button} ${className || ''} `} onClick={onClick}>
      {label}
      </button>
  )
}

export default Button