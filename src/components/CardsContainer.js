import Card from "./Card"

const x = [1, 2, 3, 4, 5, 6]

const CardContainer = () => {
    return (
    <>
        <div>
            {
                x.map(x => <Card/>)
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