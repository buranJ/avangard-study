type Equipment = {
    id: number;
    name: string;
    description: string;
    image: string;
};

type Video = {
    id: number;
    title: string;
    url: string;
    thumbnail: string;
    year: number;
};

type TechnicalBase = {
    id: number;
    title: string;
    description: string;
    statistics: string[];
    videos: Video[];
    equipment: Equipment[];
};

const mockTechnicalBase: TechnicalBase = {
    id: 1,
    title: "Техническая база",
    description:
        "«Авангард Стиль» по праву гордится своей технической базой, благодаря которой строительство объектов непрекращается и объекты сдаются вовремя.Только у «Авангард Стиль» есть собственный автопарк:",
    statistics: [
        "Более 105 единиц техники",
        "Собственный парк грузового авто общей грузоподъемностью до 100 000 тонн",
        "11 высотных кранов",
        "Собственный парк спецтехники: бетонномешалки, экскаваторы, краны, катки, самосвалы и другие",
    ],
    videos: [
        {
            id: 1,
            title: "Честный обзор Авангард Стиль: База vol.1",
            url: "https://www.youtube.com/watch?v=example",
            thumbnail: "https://example.com/video-thumbnail.jpg",
            year: 2019,
        },
    ],
    equipment: [
        {
            id: 1,
            name: "Экскаватор",
            description: "Мощный экскаватор для строительных работ.",
            image: "https://example.com/excavator.jpg",
        },
        {
            id: 2,
            name: "Кран",
            description: "Высотный кран для монтажа больших конструкций.",
            image: "https://example.com/crane.jpg",
        },      
        {
            id: 3,
            name: "Самосвал",
            description: "Грузовой самосвал для перевозки стройматериалов.",
            image: "https://example.com/dump-truck.jpg",
        },
    ],
};

export default mockTechnicalBase;
