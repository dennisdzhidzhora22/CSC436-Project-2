export default function SelectedItem({ category, item, onRemoveClick }) {
    return (
        <li className="selected-item">
            <p>{category}: {item === null ? "None" : `${item.manufacturer} ${item.name}`}</p>
            {item !== null && <button className="selected-item-remove-btn" onClick={onRemoveClick}>Remove</button>}
        </li>
    )
}