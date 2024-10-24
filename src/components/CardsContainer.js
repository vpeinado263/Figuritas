import Card from "./Card"

const x = [1, 2, 3, 4]

const CardContainer = () => {
    return (
    <>
        <div>
            {
                x.map(item => (
                    <Card key={item} value={item}/> //Aqui pasamos una 'key' y una propiedad 'value'
                ))
            }
        </div>
        <style jsx>{`
        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        `}</style>
    </>
    )
}
export default CardContainer