export default function SelectedItem({ category, item, onRemoveClick }) {
    return (
        <li className="selected-item">
            <p>{category}: {item === null ? "None" : item.name}</p>
            {item !== null && <button onClick={onRemoveClick}>Remove</button>}
        </li>
    )
}