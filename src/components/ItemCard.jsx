export default function ItemCard({ item, disabled, onAddClick }) {
    return (
        <article className="item">
            <p>{item.name}</p>
            <button className="item-add-btn" onClick={onAddClick} disabled={disabled}>Add</button>
        </article>
    )
}