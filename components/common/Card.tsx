import CardArgs from "./CardArgs";

function Card(props: any) {
    let args: CardArgs = props.cardArgs;
    return (
        <div className="card">
            {props.children}
            <h3>{props.title}</h3>
        </div>
    );
}
export default Card;