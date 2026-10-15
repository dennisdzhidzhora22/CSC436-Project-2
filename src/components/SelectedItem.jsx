export default function SelectedItem({ category, item, onRemoveClick }) {
    return (
        <li className="selected-item">
            <p>{category}: {item.name}</p>
            <button onClick={onRemoveClick}>Remove</button>
        </li>
    )
}