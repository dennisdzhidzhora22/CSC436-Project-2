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
    const psuWattage = selectedItems["PSU"]?.wattage ?? 0
    if (psuWattage < wattage) {
        compatIssues.push(`Power supply missing or wattage too low (Currently ${psuWattage}W)`)
    }
    // CPU and Motherboard chipset & socket compatibility check
    const chipsetMismatch = selectedItems["CPU"]?.chipset != selectedItems["Motherboard"]?.chipset
    const socketMismatch = selectedItems["CPU"]?.socket != selectedItems["Motherboard"]?.socket
    if (selectedItems["CPU"] && selectedItems["Motherboard"] && (chipsetMismatch || socketMismatch)) {
        compatIssues.push(`CPU and Motherboard chipset and/or socket mismatch`)
    }
    // RAM and Motherboard compatibility check
    const ramTypeMismatch = selectedItems["RAM"]?.ramType != selectedItems["Motherboard"]?.ramType
    if (selectedItems["RAM"] && selectedItems["Motherboard"] && ramTypeMismatch) {
        compatIssues.push(`RAM type mismatch (RAM: ${selectedItems["RAM"]?.ramType}, Motherboard: ${selectedItems["Motherboard"]?.ramType})`)
    }

    return (
        <aside className="cart">
            <h2>Selected Parts</h2>
            <hr/>

            <p>Compatibility: {compatIssues.length === 0 ? compatGood : compatBad}</p>
            <ol>
            {compatIssues.map((issue) => 
                <li>{issue}</li>
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