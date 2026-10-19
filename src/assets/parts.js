export const CATEGORIES = ['CPU', 'RAM', 'Motherboard', 'GPU', 'Storage', 'Case', 'PSU']

export const PARTS = {
    "CPU": [
        {id: "cpu1", manufacturer: "Intel", name: "i5-9400F", cores: 6, frequency: 4.1, tdp: 65, socket: "LGA1151", chipset: "300", price: 182},
        {id: "cpu2", manufacturer: "Intel", name: "i9-9900K", cores: 8, frequency: 5, tdp: 95, socket: "LGA1151", chipset: "300", price: 488},
        {id: "cpu3", manufacturer: "Intel", name: "i5-11600K", cores: 6, frequency: 4.9, tdp: 95, socket: "LGA1200", chipset: "500", price: 262},
        {id: "cpu4", manufacturer: "Intel", name: "i7-13700", cores: 16, frequency: 5.2, tdp: 65, socket: "LGA1700", chipset: "700", price: 389},
        {id: "cpu5", manufacturer: "Intel", name: "U7 270K+", cores: 24, frequency: 5.5, tdp: 125, socket: "LGA1851", chipset: "800", price: 265},
    ],
    "RAM": [
        {id: "ram1", manufacturer: "Corsair", name: "Vengeance LPX 32 GB", modules: "2 x 16GB", type: "DDR4", speed: "3200", price: 75},
    ],
    "Motherboard": [
        {id: "motherboard1", manufacturer: "Gigabyte", name: "Z890 EAGLE WIFI7 PLUS", socket: "LGA1851", chipset: "800", ramType: "DDR5", price: 250}
    ],
    "GPU": [
        {id: "gpu1", manufacturer: "NVIDIA", name: "RTX 3060", vram: "12GB", tdp: 170, price: 329}
    ],
    "Storage": [
        {id: "storage1", manufacturer: "Samsung", name: "990 PRO", size: "1TB", type: "NVME", price: 199}
    ],
    "Case": [
        {id: "case1", manufacturer: "Lian-Li", name: "LANCOOL 216", formFactor: "ATX", price: 100}
    ],
    "PSU": [
        {id: "psu1", manufacturer: "Corsair", name: "SF600", wattage: 600, rating: "80 PLUS Gold", price: 140}
    ]
}