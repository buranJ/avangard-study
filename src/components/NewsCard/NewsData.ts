import img from "../../assets/images/Dastan/image.svg"
import img2 from "../../assets/images/Dastan/image2.svg"
import img3 from "../../assets/images/Dastan/image3.svg"

export interface IRaport {
    id: number;
    title: string;
    date: string;
    image: string;
}



export const mockData: IRaport[] = [
    {
        id: 1,
        title: "Стандарт паркинга в современном ЖК",
        date: "25.07.2024",
        image: img,  

    },
    {
        id: 2,
        title: "Москва Сити Июнь 2024",
        date: "25.07.2024",
        image: img2,
    },
    {
        id: 3,
        title: "Елисейские поля Июнь 2024",
        date: "24.07.2024",
        image: img3,  

    },
    // {
    //     id: 4,
    //     title: "Москва Сити Июнь 2024",
    //     date: "25.07.2024",
    //     image: img2,
    // },
    // {
    //     id: 5,
    //     title: "Стандарт паркинга в современном ЖК",
    //     date: "25.07.2024",
    //     image: img,  

    // },
    // {
    //     id: 6,
    //     title: "Елисейские поля Июнь 2024",
    //     date: "24.07.2024",
    //     image: img3,  

    // },


    
];
