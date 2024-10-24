import Button from "./Button"

const Card = () => {
    return(
        <>
        <figure>
            <img src="https://http2.mlstatic.com/D_NQ_NP_745969-MLA70234211612_072023-O.webp" />
            <figcaption>
                <h3>Colchon Aire Antiescaras Tubular Reforzado Obeso 200 Kilos</h3>
            </figcaption>
            <p>Colchón de material PVC atóxico, 18 Celdas individuales tubulares, 2 extensiones no inflables para doblarse debajo del colchón, cabecera y piecera. Apto para camas ortopédicas y camas tradicionales de 1 plaza</p>
            <Button/>
        </figure>
        <style jsx>{`
        figure {
            width: 200px;
            height: 275px;
            border: 2px solid black;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 100%;
            height: 45%;
            object-fit: cover;
        }
        h3 {
            font-size: 1rem;
            text-aling: center;
            line-height: 0;
        }
        p{
            font-size: 1rem;
            text-aling: center;
        }
        `}</style>
        </>
    )
}
export default Card