export default function ItemCard({ name, onAddClick }) {
    return (
        <article className="item">
            <p>{name}</p>
            <button className="item-add-btn" onClick={onAddClick}>Add</button>
        </article>
    )
}