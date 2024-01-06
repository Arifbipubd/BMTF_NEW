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