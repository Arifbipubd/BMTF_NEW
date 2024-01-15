interface HeroSection {
    id: number;
    heading: string;
    description: string;
    videoUrl: string;
}

interface SliderSection {
    id: number;
    heading: string;
    description: string;
    imageUrl: string;
    link: string;
}

interface NavItem {
    id: number;
    link: string;
    label: string;
    children?: Array<any>;
}

interface NewsCard {
    id: number;
    imgSrc: string;
    title: string;
    date: string;
}