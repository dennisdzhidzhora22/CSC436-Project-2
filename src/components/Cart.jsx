import { useState } from 'react'
import SelectedItem from "./SelectedItem"
import { CATEGORIES } from "../assets/parts"

export default function Cart({ selectedItems, handleRemove }) {
    const compatIssues = []
    const compatGood = "No issues."
    const compatBad = "Issues found."

    const wattage = Object.values(selectedItems).reduce((acc, item) => {
        return acc + (item?.tdp ?? 0)
    }, 0)
    const total = Object.values(selectedItems).reduce((acc, item) => {
        return acc + (item?.price ?? 0)
    }, 0)

    // PSU Wattage check
    if ((selectedItems["PSU"]?.wattage ?? 0) < wattage) {
        compatIssues.push("Power supply wattage too low")
    }
    
    return (
        <aside className="cart">
            <h2>Selected Parts</h2>
            <hr/>

            <p>Compatibility: {compatIssues.length === 0 ? compatGood : compatBad}</p>
            <ol>
            {compatIssues.map((issue) => 
                <li key={issue}>{issue}</li>
            )}
            </ol>
            <hr/>

            <ul>
            {CATEGORIES.map((c) => 
                <SelectedItem key={c} category={c} item={selectedItems[c]} onRemoveClick={() => handleRemove(c)} />
            )}
            </ul>
            <hr/>

            <p>Wattage: {wattage}W</p>
            <hr/>

            <p>Total: ${total}</p>
        </aside>
    )
}