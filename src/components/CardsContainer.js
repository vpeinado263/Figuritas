import Card from "./Card"

const x = [1, 2, 3, 4]

const CardContainer = () => {
    return (
    <>
        <div>
            {
                x.map(x => <Card/>)
            }
        </div>
    </>
    )
}
export default CardContainer