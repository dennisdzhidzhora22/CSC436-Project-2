import SelectedItem from "./SelectedItem"
import { CATEGORIES } from "../assets/parts"

export default function Cart({ selectedItems }) {
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
                <SelectedItem category={c} item={{name: "test"}} />
            )}
            </ul>
            <hr/>

            <p>Wattage: {0}W</p>
            <hr/>
            
            <p>Total: ${0}</p>
        </aside>
    )
}