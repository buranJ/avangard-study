import img from "../../assets/images/Dastan/image.svg"
import img2 from "../../assets/images/Dastan/image2.svg"
import img3 from "../../assets/images/Dastan/image3.svg"
import img4 from "../../assets/images/Dastan/moscow_pic.png"
import img5 from "../../assets/images/Dastan/8_march.png"

export interface IRaport {
    id: number;
    title: string;
    date: string;
    image: string;
    slug: string;

}



export const mockData: IRaport[] = [
    {
        id: 1,
        title: "Стандарт паркинга в современном ЖК",
        date: "25.07.2024",
        image: img,
        slug: "excursion-student"

    },
    {
        id: 2,
        title: "Москва Сити Июнь 2024",
        date: "25.07.2024",
        image: img2,
        slug: "salkyn-tor"
    },
    {
        id: 3,
        title: "Елисейские поля Июнь 2024",
        date: "24.07.2024",
        image: img3,
        slug: "premium-class"

    },
    {
        id: 4,
        title: "Москва фотоотчет за Февраль 2025",
        date: "25.07.2024",
        image: img4,
        slug: "moscow-city"

    },
    {
        id: 5,
        title: "8 марта | Международный женский день",
        date: "25.07.2024",
        image: img5,
        slug: "standart-city"

    },
    {
        id: 6,
        title: "Елисейские поля Июнь 2024",
        date: "24.07.2024",
        image: img3,
        slug: "pet-studio"


    },



];
