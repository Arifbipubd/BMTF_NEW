/** @format */

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
  link?: any;
  children?: Array<any>;
}

interface NewsCard {
  id: number;
  imgSrc: string;
  title: string;
  date: string;
  url: string;
}

interface LatestNews {
  id: number;
  date: string;
  description: string;
  feature_image: string;
  is_featured: number;
  title: string;
  short_intro: string;
  status: number;
}