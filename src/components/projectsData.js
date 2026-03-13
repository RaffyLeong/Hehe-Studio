const projectsData = [
    {
        id: 1,
        title: 'HEHE Custom Shelf',
        name: "Weisheng He",
        date: '2026',
        type: 'shapediver',
        shapediverConfig: {
            modelUrl: "https://appbuilder.shapediver.com/v1/main/latest/?slug=260411-adding-material-attribute-4",
            ticket: "61e0a1c1abfe5105b0233705b399901fb441558764d1618ea614e0153d8ff616d97c1dc93d155350b96c7ba5bd9366c0a16f34ae971e5578409a8e4d15ca0df09f088760db979031e3ea593fe9eb72a8aad04013c6e0f6168bfc4b16e4c0123d8c623024dac12f-7088b623e5280fb610643af25b842adb",
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