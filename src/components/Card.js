import Button from "./Button"

const Card = () => {
    return(
        <>
        <figure>
            <img src="https://dcdn.mitiendanube.com/stores/001/539/668/products/colchon-antiescaras21-60e5d4495d1e7736b216132282351257-1024-1024.jpg" />
            <figcaption>
                <h3>Colchon Aire Antiescaras</h3>
            </figcaption>
            <p>Colchón de material PVC atóxico, 18 Celdas individuales tubulares, 2 extensiones no inflables para doblarse debajo del colchón, cabecera y piecera. Apto para camas ortopédicas y camas tradicionales de 1 plaza</p>
            <Button/>
        </figure>
        <style jsx>{`
        figure {
            width: 300px;
            height: 450px;
            border: 2px solid black;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 100%;
            height: 50%;
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