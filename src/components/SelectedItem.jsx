export default function SelectedItem({ category, item }) {
    return (
        <div className="selected-item">
            <p>{category}: {item.name}</p>
        </div>
    )
}