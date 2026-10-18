const projectsData = [
    {
        id: 1,
        title: 'Royal Bournemouth Hospital Coast Building Ward Extension',
        name: "Weisheng He",
        date: '2025',
        mainImage: "/Royal-Bournemouth-Hospital-Cost-Building.png",
        type: 'shapediver',
         images: ["/Royal-Bournemouth-Hospital-Cost-Building.png"],
    },
    {
        id: 2,
        title: 'MONG KOK PEDESTRIAN FOOTBRIDGE, HONG KONG',
        name: "Weisheng He",
        date: '2026',
        mainImage: "/MONG KOK PEDESTRIAN/pj-06-1.jpg",
        type: 'shapediver and images',
        firstImage: "/MONG KOK PEDESTRIAN/pj-06-1.jpg",
        shapediverApp: {
            My_App_URL: "https://appbuilder.shapediver.com/v1/main/latest/?slug=260318-hk-bridge-shape-diver-3",
            modelName: "Mong Kok Bridge",
        },
        video: "/MONG KOK PEDESTRIAN/pj-6-compressed.mp4",
        images: Array.from({length: 11}, (_, i) => 
            `/MONG KOK PEDESTRIAN/pj-06-${i + 2}.jpg`
        )
    },
    {
        id: 3,
        title: 'HEHE Custom Shelf',
        name: "Weisheng He",
        date: '2026',
        mainImage: "/HEHE-Custom-Shelf.png",
        type: 'shapediver',
        shapediverConfig: {
            My_Model_View_URL: "https://sdr8euc1.eu-central-1.shapediver.com",
            My_Ticket: "2ef243edd8e2b2e116e5566759a65fb1b41173099b3b8076e20cd506019f79609c795e82710dda10f30a34db36ed4dfde417cac91e12096cf7f9cd265372d0f1d48bc84300ac5315308be7171e0bd2a9db10e1658b355c3690c7d8b22350a4ad14879e228483a4-53f3e9cf75469a1b7677109b93fc0ad7",
            //ticket2: e7c30419aabfc4cc59a4578d57ee2539a03624fe0d436f84b6580c8e42a95759d491a388d914d5e70d278cafc81afb2ac0071a39d52814d90f0042371e59527760a7a51f90d15b282082567536edbf37d64ea39df78bbc123829d1ec684974e45314cf0f350204-a0820f04acb66770eb7273f51b2cf134
            modelName: "260323 HEHE Custom Shelf",
            requiresAuth: true
        },
    },
    {
        id: 4,
            title: 'GOSPORT FERRY STATION',
            name: "Weisheng He",
            date: '2025',
            mainImage: "/GOSPORT FERRY STATION/pj-5.jpg",
            images: Array.from({length: 7}, (_, i) =>
                `/GOSPORT FERRY STATION/pj-05-${i + 1}.jpg`
            )

    },
    {
        id: 5,
        title: 'Parametric Remodel of the Mediopadana Station by Santiago Calatrava',
        name: "Weisheng He",
        date: '2024',
        mainImage: "/Mediopadana-Station.png",
        type: 'shapediver',
        shapediverApp: {
            My_App_URL: "https://appbuilder.shapediver.com/v1/main/latest/?slug=260326-trainstation-sd-7",
            modelName: "241123 Parametric Remodel of the Mediopadana Station by Santiago Calatrava",
        },
    },
    {
        id: 6,
            title: 'CUMBERLAND BASIN',
            name: "Weisheng He",
            date: '2022',
            mainImage: "/CUMBERLAND BASIN/pj-1.jpg",
            images: Array.from({length: 12}, (_, i) =>
                `/CUMBERLAND BASIN/pj-01-${i + 1}.jpg`
            )
    },
    {
        id: 7,
            title: 'BRISTOL NURSERY',
            name: "Weisheng He",
            date: '2020',
            mainImage: "/BRISTOL NURSERY/pj-2.jpg",
            images: Array.from({length: 6}, (_, i) =>
                `/BRISTOL NURSERY/pj-02-${i + 1}.jpg`
            )

    },
    {
        id: 8,
            title: 'GOSPORT HERITAGE FLAT',
            name: "Weisheng He",
            date: '2022',
            mainImage: "/GOSPORT HERITAGE FLAT/pj-3.jpg",
            images: Array.from({length: 3}, (_, i) =>
                `/GOSPORT HERITAGE FLAT/pj-03-${i + 1}.jpg`
            ) 

    },
    {
        id: 9,
            title: 'WORKS AT 3BD ARCHITECTS',
            name: "Weisheng He",
            date: '2023',
            mainImage: "/WORKS AT 3BD ARCHITECTS/pj-4.jpg",
            images: Array.from({length: 7}, (_, i) =>
                `/WORKS AT 3BD ARCHITECTS/pj-04-${i + 1}.jpg`
            )
    },
    {
        id: 10,
            title: "TESTING VIEWER",
            name: "ShapeDiver",
            date: "2026",
            mainImage: "/HEHE-Custom-Shelf.png",
            type: 'shapediver',
            shapediverConfigTest: {
                My_Model_View_URL: "https://sdr8euc1.eu-central-1.shapediver.com",
                My_Ticket: "2ef243edd8e2b2e116e5566759a65fb1b41173099b3b8076e20cd506019f79609c795e82710dda10f30a34db36ed4dfde417cac91e12096cf7f9cd265372d0f1d48bc84300ac5315308be7171e0bd2a9db10e1658b355c3690c7d8b22350a4ad14879e228483a4-53f3e9cf75469a1b7677109b93fc0ad7",
                modelName: "260323 HEHE Custom Shelf",
                requiresAuth: true
            }
    },

]

export default projectsData;