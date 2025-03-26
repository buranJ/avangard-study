interface ApartmentInfo {
    title: string;
    address: string;
    description: string;
    second: string;
    blocks: number;
    apartments: number;
    buttons: { label: string; size: string }[];
}

const mockData: ApartmentInfo = {
    title: "О жилом комплексе",
    address: "Нуркамал Жетикашкаева 10А",
    description:
        "Представьте идеальное утро в собственном уютном доме среди живописной природы. Вы просыпаетесь и первое, что видите из окна спальни - захватывающие виды на горы, озаренные первыми лучами солнца.",
    second:
        "Насладившись потрясающим видом, Вы спускаетесь в просторную гостиную. Высокие потолки, светлые стены и панорамное остекление создают ощущение легкости и наполняют комнату воздухом и солнцем.",
    blocks: 13,
    apartments: 151,
    buttons: [
        { label: "1 комнатная", size: "от 40м2" },
        { label: "2 комнатная", size: "от 70м2" },
        { label: "3 комнатная", size: "от 80м2" },
        { label: "4 комнатная", size: "от 90м2" },
    ],
};

export default mockData;
