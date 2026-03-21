const projectsData = [
    {
        id: 1,
        title: 'MONG KOK PEDESTRIAN FOOTBRIDGE, HONG KONG',
        name: "Weisheng He",
        date: '2026',
        mainImage: "/MONG KOK PEDESTRIAN/pj-06-1.jpg",
        type: 'shapediver and images',
        shapediverConfig: {
            modelUrl: "https://appbuilder.shapediver.com/v1/main/latest/?slug=260318-hk-bridge-shape-diver-2",
            ticket: "bbd3497d8a993a7ba52b48a57085f3214a1ab397e335429ead3944dcbf8b4b0a3adeaaa86a45c7ead545e01e51747d4e82c4a5c611371b532d3730c541d216e327c3de7583a48c6c5b3dc62c48ebc921e3d201af090505a90eadce699fb8e16e982aebc73bd091-5d30c347bedade9910ed31d876aefb27",
            modelName: "Mong Kok Bridge",
            requiresAuth: true
        },
        video: "/MONG KOK PEDESTRIAN/pj-6-compressed.mp4",
        images: Array.from({length: 12}, (_, i) => 
            `/MONG KOK PEDESTRIAN/pj-06-${i + 1}.jpg`
        )
    },
    {
        id: 2,
        title: 'HEHE Custom Shelf',
        name: "Weisheng He",
        date: '2026',
        mainImage: "/HEHE-Custom-Shelf.png",
        type: 'shapediver',
        shapediverConfig: {
            modelUrl: "https://appbuilder.shapediver.com/v1/main/latest/?slug=260411-custom-shelf-7",
            ticket: "55e6e7a4aec6c783e238f5d4b4a55ad9bf567528114b56b3c22685509401c0e391c64317beb6238e1f9ef7f6edbdcb26bf0ebdfda2415e89c8fe27ccdc8887a6858c7827e97abad7731e890e4abff0fb08b0458e50498a46b96e23adc8dfc961f75803e97dbc54-5f98e31c1cad5418db7cc0c56acf4286",
            modelName: "260323 HEHE Custom Shelf",
            requiresAuth: true
        },
    },
    {
        id: 3,
            title: 'GOSPORT FERRY STATION',
            name: "Weisheng He",
            date: '2025',
            mainImage: "/GOSPORT FERRY STATION/pj-5.jpg",
            images: Array.from({length: 7}, (_, i) =>
                `/GOSPORT FERRY STATION/pj-05-${i + 1}.jpg`
            )

    },
    {
        id: 4,
        title: 'Parametric Remodel of the Mediopadana Station by Santiago Calatrava',
        name: "Weisheng He",
        date: '2024',
        mainImage: "/Mediopadana-Station.png",
        type: 'shapediver',
        shapediverConfig: {
            modelUrl: "https://appbuilder.shapediver.com/v1/main/latest/?slug=260326-trainstation-sd-7",
            ticket: "8b9bf322ee447d6fda7d1133d29c1364cf2513f85bacc54d478f75609aa5fc8faf9b3de590cd0a22d5be04950b98e54e534e20a5f1b3ef569d54c5963633147b164e17cd0c59eb4ad0610c6ebde9a738e947e8b1d84f5e2c0b900d2b2bd880b58fc38fdd9739d4-ec4f471058e83ea06f1e53801771418a",
            modelName: "241123 Parametric Remodel of the Mediopadana Station by Santiago Calatrava",
            requiresAuth: true
        },
    },
    {
        id: 5,
            title: 'CUMBERLAND BASIN',
            name: "Weisheng He",
            date: '2022',
            mainImage: "/CUMBERLAND BASIN/pj-1.jpg",
            images: Array.from({length: 12}, (_, i) =>
                `/CUMBERLAND BASIN/pj-01-${i + 1}.jpg`
            )
    },
    {
        id: 6,
            title: 'BRISTOL NURSERY',
            name: "Weisheng He",
            date: '2020',
            mainImage: "/BRISTOL NURSERY/pj-2.jpg",
            images: Array.from({length: 6}, (_, i) =>
                `/BRISTOL NURSERY/pj-02-${i + 1}.jpg`
            )

    },
    {
        id: 7,
            title: 'GOSPORT HERITAGE FLAT',
            name: "Weisheng He",
            date: '2022',
            mainImage: "/GOSPORT HERITAGE FLAT/pj-3.jpg",
            images: Array.from({length: 3}, (_, i) =>
                `/GOSPORT HERITAGE FLAT/pj-03-${i + 1}.jpg`
            ) 

    },
    {
        id: 8,
            title: 'WORKS AT 3BD ARCHITECTS',
            name: "Weisheng He",
            date: '2023',
            mainImage: "/WORKS AT 3BD ARCHITECTS/pj-4.jpg",
            images: Array.from({length: 7}, (_, i) =>
                `/WORKS AT 3BD ARCHITECTS/pj-04-${i + 1}.jpg`
            )
    },

]

export default projectsData;