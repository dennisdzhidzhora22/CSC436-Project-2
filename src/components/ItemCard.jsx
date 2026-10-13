export default function ItemCard({ name }) {
    return (
        <article className="item">
            <p>{name}</p>
            <button className="item-add-btn">Add</button>
        </article>
    )
}