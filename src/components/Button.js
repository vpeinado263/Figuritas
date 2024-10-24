const Button = () => {
    return(
        <>
        <button>Comprar?</button>
        <style jsx>{`
            button {
                color: white;
                background-color: blue;
                border: none;
                border-radius: .5rem;
                box-shadow: 1px 2px 2px black;
                padding: 10px 20px;
                text-transform: uppercase;
                font-weight: bold;
            }       
            button:hover {
                transform: traslateY(2px);
            }
        `}</style>
        </>
    )
}
export default Button