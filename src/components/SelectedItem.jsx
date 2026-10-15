export default function SelectedItem({ category, item }) {
    return (
        <li className="selected-item">
            <p>{category}: {item.name}</p>
        </li>
    )
}