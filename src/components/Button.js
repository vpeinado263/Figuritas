const Button = () => {
    return(
        <>
        <button>Comprar ahora</button>
        <style jsx>{`
            button {
                color: white;
                background-color: rgb(52, 131, 250);
                border: none;
                border-radius: .5rem;
                box-shadow: 1px 2px 2px black;
                padding: 10px 20px;
                font-weight: bold;
                transition: 0.3s;
                margin: auto;
            }       
            button:hover {
                transform: translateY(2px);
                box-shadow: none;
            }
        `}</style>
        </>
    )
}
export default Button