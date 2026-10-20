import { IMAGES } from '../assets/images/images.js'

export default function ItemCard({ item, category, disabled, onAddClick }) {
    let itemCardContent

    switch (category) {
        case "CPU":
            itemCardContent = 
            <p>
                {item.manufacturer} {item.name}<br/><br/>
                Cores: {item.cores}<br/>
                TDP: {item.tdp}W<br/>
                Socket: {item.socket}<br/><br/>
                ${item.price}
            </p>;
            break
        case "RAM":
            itemCardContent = 
            <p>
                {item.manufacturer} {item.name}<br/><br/>
                Speed: {item.ramType}-{item.speed}<br/>
                Modules: {item.modules}<br/><br/>
                ${item.price}
            </p>;
            break
        case "Motherboard":
            itemCardContent = 
            <p>
                {item.manufacturer} {item.name}<br/><br/>
                Socket: {item.socket}<br/><br/>
                ${item.price}
            </p>;
            break
        case "GPU":
            itemCardContent = 
            <p>
                {item.manufacturer} {item.name}<br/><br/>
                VRAM: {item.vram}<br/>
                TDP: {item.tdp}W<br/><br/>
                ${item.price}
            </p>;
            break
        case "Storage":
            itemCardContent = 
            <p>
                {item.manufacturer} {item.name}<br/><br/>
                Size: {item.size}<br/>
                Type: {item.type}<br/><br/>
                ${item.price}
            </p>;
            break
        case "Case":
            itemCardContent = 
            <p>
                {item.manufacturer} {item.name}<br/><br/>
                Form Factor: {item.formFactor}<br/><br/>
                ${item.price}
            </p>;
            break
        case "PSU":
            itemCardContent = 
            <p>
                {item.manufacturer} {item.name}<br/><br/>
                Wattage: {item.wattage}<br/>
                Efficiency Rating: {item.rating}<br/><br/>
                ${item.price}
            </p>;
            break
    }

    return (
        <article className="item">
            <img className="item-img" src={IMAGES[item.id]} />
            {itemCardContent}
            <button className="item-add-btn" onClick={onAddClick} disabled={disabled}>Add</button>
        </article>
    )
}