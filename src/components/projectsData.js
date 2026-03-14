const projectsData = [
    {
        id: 1,
        title: 'HEHE Custom Shelf',
        name: "Weisheng He",
        date: '2026',
        type: 'shapediver',
        shapediverConfig: {
            modelUrl: "https://appbuilder.shapediver.com/v1/main/latest/?slug=260411-custom-shelf-7",
            ticket: "55e6e7a4aec6c783e238f5d4b4a55ad9bf567528114b56b3c22685509401c0e391c64317beb6238e1f9ef7f6edbdcb26bf0ebdfda2415e89c8fe27ccdc8887a6858c7827e97abad7731e890e4abff0fb08b0458e50498a46b96e23adc8dfc961f75803e97dbc54-5f98e31c1cad5418db7cc0c56acf4286",
            modelName: "260323 HEHE Custom Shelf",
            requiresAuth: true
        },
    },
    {
        id: 2,
            title: 'MONG KOK PEDESTRIAN FOOTBRIDGE, HONG KONG',
            name: "Weisheng He",
            date: '2026',
            mainImage: "/MONG KOK PEDESTRIAN/pj-06-1.jpg",
            video: "/MONG KOK PEDESTRIAN/pj-6-compressed.mp4",
            images: Array.from({length: 12}, (_, i) => 
                `/MONG KOK PEDESTRIAN/pj-06-${i + 1}.jpg`
            )

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
            title: 'CUMBERLAND BASIN',
            name: "Weisheng He",
            date: '2022',
            mainImage: "/CUMBERLAND BASIN/pj-1.jpg",
            images: Array.from({length: 12}, (_, i) =>
                `/CUMBERLAND BASIN/pj-01-${i + 1}.jpg`
            )
    },
    {
        id: 5,
            title: 'BRISTOL NURSERY',
            name: "Weisheng He",
            date: '2020',
            mainImage: "/BRISTOL NURSERY/pj-2.jpg",
            images: Array.from({length: 6}, (_, i) =>
                `/BRISTOL NURSERY/pj-02-${i + 1}.jpg`
            )

    },
    {
        id: 6,
            title: 'GOSPORT HERITAGE FLAT',
            name: "Weisheng He",
            date: '2022',
            mainImage: "/GOSPORT HERITAGE FLAT/pj-3.jpg",
            images: Array.from({length: 3}, (_, i) =>
                `/GOSPORT HERITAGE FLAT/pj-03-${i + 1}.jpg`
            ) 

    },
    {
        id: 7,
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