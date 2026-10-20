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
        {id: "ram1", manufacturer: "Corsair", name: "Vengeance LPX 32 GB", modules: "2 x 16GB", ramType: "DDR4", speed: "3200", price: 75},
        {id: "ram2", manufacturer: "G.Skill", name: "Flare X5 32 GB", modules: "2 x 16GB", ramType: "DDR5", speed: "6000", price: 85},
        {id: "ram3", manufacturer: "Corsair", name: "Vengeance RGB 16 GB", modules: "2 x 8GB", ramType: "DDR5", speed: "5200", price: 70},
        {id: "ram4", manufacturer: "G.Skill", name: "Ripjaws V 16 GB", modules: "2 x 8GB", ramType: "DDR4", speed: "3200", price: 33},
        {id: "ram5", manufacturer: "Corsair", name: "Vengeance 64 GB", modules: "2 x 32GB", ramType: "DDR5", speed: "5200", price: 157},
    ],
    "Motherboard": [
        {id: "motherboard1", manufacturer: "Gigabyte", name: "Z890 EAGLE WIFI7 PLUS", socket: "LGA1851", chipset: "800", ramType: "DDR5", price: 250},
        {id: "motherboard2", manufacturer: "ASUS", name: "PRIME Z390-A", socket: "LGA1151", chipset: "300", ramType: "DDR4", price: 190},
        {id: "motherboard3", manufacturer: "ASUS", name: "TUF Gaming Z590-PLUS WIFI", socket: "LGA1200", chipset: "500", ramType: "DDR4", price: 250},
        {id: "motherboard4", manufacturer: "MSI", name: "MAG Z790 TOMAHAWK WIFI", socket: "LGA1700", chipset: "700", ramType: "DDR5", price: 210},
        {id: "motherboard5", manufacturer: "MSI", name: "Z370-A PRO", socket: "LGA1151", chipset: "300", ramType: "DDR4", price: 120},
    ],
    "GPU": [
        {id: "gpu1", manufacturer: "MSI", name: "GeForce RTX 3060 Ventus 2X", vram: "12GB", tdp: 170, price: 329},
        {id: "gpu2", manufacturer: "ASRock", name: "Challenger OC Arc B580", vram: "12GB", tdp: 190, price: 270},
        {id: "gpu3", manufacturer: "ASUS", name: "DUAL OC GeForce RTX 5060 Ti", vram: "16GB", tdp: 180, price: 495},
        {id: "gpu4", manufacturer: "ASUS", name: "ROG Astral OC GeForce RTX 5090", vram: "32GB", tdp: 575, price: 2800},
        {id: "gpu5", manufacturer: "Sapphire", name: "PULSE Radeon RX 9060 XT", vram: "16GB", tdp: 170, price: 380},
    ],
    "Storage": [
        {id: "storage1", manufacturer: "Samsung", name: "990 Pro", size: "1TB", type: "NVME SSD", price: 100},
        {id: "storage2", manufacturer: "Crucial", name: "P310", size: "2TB", type: "NVME SSD", price: 130},
        {id: "storage3", manufacturer: "Seagate", name: "BarraCuda", size: "4TB", type: "HDD", price: 85},
        {id: "storage4", manufacturer: "Samsung", name: "870 Evo", size: "1TB", type: "SATA SSD", price: 100},
        {id: "storage5", manufacturer: "ADATA", name: "Legend 710", size: "512GB", type: "NVME", price: 55},
    ],
    "Case": [
        {id: "case1", manufacturer: "Lian-Li", name: "LANCOOL 216", formFactor: "ATX", price: 100},
        {id: "case2", manufacturer: "Phanteks", name: "XT PRO", formFactor: "ATX", price: 50},
        {id: "case3", manufacturer: "Lian-Li", name: "Vector V100R", formFactor: "ATX", price: 75},
        {id: "case4", manufacturer: "NZXT", name: "H5 Flow", formFactor: "ATX", price: 70},
        {id: "case5", manufacturer: "Lian-Li", name: "O11 VISION COMPACT", formFactor: "ATX", price: 125},
    ],
    "PSU": [
        {id: "psu1", manufacturer: "Corsair", name: "SF600", wattage: 600, rating: "80 PLUS Gold", price: 140},
        {id: "psu2", manufacturer: "Corsair", name: "RM850e", wattage: 850, rating: "Cybenetics Gold", price: 125},
        {id: "psu3", manufacturer: "MSI", name: "MAG A750GL", wattage: 750, rating: "80 PLUS Gold", price: 90},
        {id: "psu4", manufacturer: "Corsair", name: "SF1000", wattage: 1000, rating: "80 PLUS Platinum", price: 200},
        {id: "psu5", manufacturer: "Thermaltake", name: "Smart 500W", wattage: 500, rating: "80 PLUS White", price: 40},
    ]
}