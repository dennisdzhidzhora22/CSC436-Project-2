import SelectedItem from "./SelectedItem"
import { CATEGORIES } from "../assets/parts"

export default function Cart({ selectedItems, handleRemove }) {
    const compatGood = "No issues."
    const compatBad = "Issues found."
    
    return (
        <aside className="cart">
            <h2>Selected Parts</h2>
            <hr/>

            <p>Compatibility: {compatGood}</p>
            <hr/>

            <ul>
            {CATEGORIES.map((c) => 
                <SelectedItem key={c} category={c} item={selectedItems[c]} onRemoveClick={() => handleRemove(c)} />
            )}
            </ul>
            <hr/>

            <p>Wattage: {0}W</p>
            <hr/>

            <p>Total: ${0}</p>
        </aside>
    )
}