import style from  './Button.module.css'

type ButtonProps = {
    content:string,
    type:string,
    higher?: boolean,
    wider?: boolean
}
const Button = ( {content, type, higher, wider}:ButtonProps ) => {

    const setType = (type:string) => {
        switch(type){
            case 'primary': {
                return style.primary
            }
            case 'secondary': {
                return style.secondary
            }
            case 'tertiary': {
                return style.tertiary
            }
            case 'fourth': {
                return style.fourth
            }
        }
    }

    return(
        <button className={`${style.button} ${setType(type)} ${higher? style.higher: ''} ${wider? style.wider: ''}`}>
            {content}
        </button>
    )
}

export { Button }