interface HeroSection {
    id: number;
    heading: string;
    description: string;
    imageUrl: string;
}

interface NavItem {
    id: number;
    link: string;
    label: string;
    children: Array<any>;
}

interface NewsCard {
    id: number;
    imgSrc: string;
    title: string;
    date: string;
}