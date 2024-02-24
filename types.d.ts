interface HeroSection {
    id: number;
    heading: string;
    description: string;
    assetUrl: string;
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
    label: string;
    children?: Array<any>;
}

interface NewsCard {
    id: number;
    imgSrc: string;
    title: string;
    date: string;
}