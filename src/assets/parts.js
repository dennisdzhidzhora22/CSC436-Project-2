export const CATEGORIES = ['CPU', 'RAM', 'Motherboard', 'GPU', 'Storage', 'Case', 'PSU']

export const PARTS = {
    "CPU": [
        {id: "cpu1", name: "i5-9400F", cores: 6, frequency: 4.1, tdp: 65, socket: "LGA1151", price: 182},
        {id: "cpu2", name: "i9-9900K", cores: 8, frequency: 5, tdp: 95, socket: "LGA1151", price: 488},
        {id: "cpu3", name: "i5-11600K", cores: 6, frequency: 4.9, tdp: 95, socket: "LGA1200", price: 262},
        {id: "cpu4", name: "i7-13700", cores: 16, frequency: 5.2, tdp: 65, socket: "LGA1700", price: 389},
        {id: "cpu5", name: "U7 270K+", cores: 24, frequency: 5.5, tdp: 125, socket: "LGA1851", price: 265},
    ],
    "RAM": [
        {id: "ram1", name: "Corsair Vengeance LPX 32 GB", modules: "2 x 16GB", speed: "DDR4-3200", price: 75},
    ],
    "Motherboard": [
        {id: "motherboard1", name: "Z890", price: 250}
    ],
    "GPU": [
        {id: "gpu1", name: "RTX 3060", vram: "12GB", tdp: 170, price: 329}
    ],
    "Storage": [
        {id: "storage1", name: "Samsung", size: "1TB", price: 199}
    ],
    "Case": [
        {id: "case1", name: "Lian-Li", formFactor: "ATX", price: 100}
    ],
    "PSU": [
        {id: "psu1", name: "Corsair", wattage: 600, price: 140}
    ]
}