export default function SelectedItem({ category, item, onRemoveClick }) {
    return (
        <li className="selected-item">
            <p>{category}: {item.name}</p>
            {Object.keys(item).length > 1 && <button onClick={onRemoveClick}>Remove</button>}
        </li>
    )
}