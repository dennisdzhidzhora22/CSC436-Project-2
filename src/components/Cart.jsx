export default function Cart({ selectedItems }) {
    const compatGood = "Good, no issues."
    const compatBad = "Issues found."
    
    return (
        <aside className="cart">
            <ul>
                {selectedItems.map((item) => 
                <li>{item.name}</li>                
                )}
            </ul>

            <p>Compatibility: {compatGood}</p>
            <hr/>
            <p>Wattage: {0}W</p>
            <hr/>
            <p>Total: ${0}</p>
        </aside>
    )
}