export const sliderSection: Array<SliderSection> = [
    {
        id: 1,
        imageUrl: "/assets/images/verticals/Footwear_and_leather.png",
        heading: "Footwear Industry and Leather Industry",
        description: "Massa voluptate quisquam corporis varius luctus faucibus adipiscing? Lacus pretium ipsum sagittis nulla vitae proin. Deserunt expedita", 
        link: "/verticals/footwear-&-leather",
    },
    {
        id: 2,
        imageUrl: "/assets/images/verticals/Footwear_and_leather_02.png",
        heading: "Furniture",
        description: 'arcu ligula molestiae velit, veritatis! Similique laudantium consequat odio? Senectus fusce! Porttitor aliquam.',
        link: "/verticals/furniture",
    },
    {
        id: 3,
        imageUrl: "/assets/images/verticals/Pool_and_pile.png",
        heading: "Pole & Pile",
        description: 'Porta eiusmod torquent. Sapien, quas, aperiam hymenaeos ea tempore exercitation quisque eum, inventore sapien',
        link: "/verticals/pole-&-pile",
    },
    {
        id: 4,
        imageUrl: "/assets/images/verticals/Vehicle_assembly.png",
        heading: "Vehicle Assembly",
        description: '',
        link: "/verticals/vehicle-assembly",
    },
    {
        id: 5,
        imageUrl: "/assets/images/verticals/Steel_structure.png",
        heading: "Steel Structure Manufacturing",
        description: 'Doloremque nullam, dignissim vivamus maxime maecenas aptent itaque mollis laudantium habitant aliquip',
        link: "/verticals/steel-structure-manufacturing",
    },
    {
        id: 6,
        imageUrl: "/assets/images/verticals/Electronic_Assembly_01.png",
        heading: "Electronic Assembly",
        description: 'Proident eiusmod etiam at id nisl quasi facilisi vulputate voluptates, nibh hymenaeos, inceptos nisi possimus quas sapiente',
        link: "/verticals/electronic-assembly",
    },
    {
        id: 7,
        imageUrl: "/assets/images/verticals/Crafties.png",
        heading: "BMTF Crafties",
        description: 'ultrices mattis enim, justo, quae leo vestibulum minima dapibus possimus',
        link: "/verticals/BMTF-crafties",
    },
    {
        id: 8,
        imageUrl: "/assets/images/verticals/CFL.png",
        heading: "CFL AND LED BULB",
        description: 'ligula aliquid ad, sociis adipisicing esse atque vulputate urna, quasi tincidunt blanditiis litora felis et. Nunc gravida exercitationem. Provident.',
        link: "/verticals/cFL-&-LED-bulb",
    },
    {
        id: 9,
        imageUrl: "/assets/images/verticals/Central_toolling.png",
        heading: "Central Tooling Department",
        description: 'Molestie magnam incididunt, sed hymenaeos. Blandit elementum torquent ligula porttitor repellendus',
        link: "/verticals/central-tooling-department",
    },
    {
        id: 10,
        imageUrl: "/assets/images/verticals/Forge_shop.png",
        heading: "Forge Shop",
        description: 'Quia, recusandae. Optio ultricies, ullamco perferendis? Suscipit luctus culpa sequi per sapien',
        link: "/verticals/forge-shop",
    },
    {
        id: 11,
        imageUrl: "/assets/images/verticals/Foundry_shop.png",
        heading: "Foundry Shop",
        description: '',
        link: "/verticals/foundry-shop",
    },
    {
        id: 12,
        imageUrl: "/assets/images/verticals/Galvanizing.png",
        heading: "Galvanizing Plant",
        description: 'Sagittis adipisicing tempor ab, blandit illum do nam, fames quo arcu tellus! Iusto pede',
        link: "/verticals/galvanizing-plant",
    },
    {
        id: 13,
        imageUrl: "/assets/images/verticals/Machine_shop.png",
        heading: "Machine Shop",
        description: 'Provident mollis nisl facilisi luctus, iaculis quia consequat nesciunt quas rutrum, curabitur',
        link: "/verticals/machine-shop",
    },
    {
        id: 14,
        imageUrl: "/assets/images/verticals/Army_shop.png",
        heading: "Army Pharma",
        description: 'rutrum quisquam nonummy perspiciatis, litora doloribus pretium malesuada',
        link: "/verticals/army-pharma",
    },
    {
        id: 15,
        imageUrl: "/assets/images/verticals/Packaging.png",
        heading: "Packaging Unit",
        description: "sit laboris lectus, odio aptent similique explicabo libero necessitatibus",
        link: "/verticals/packaging-unit",
    },
    {
        id: 16,
        imageUrl: "/assets/images/verticals/Pattern_shop.png",
        heading: "Pattern Shop",
        description: "Montes reiciendis voluptate vestibulum, sunt, tempora tortor rerum pellentesque maiores sapien voluptates tristique elit iure totam mi turpis",
        link: "/verticals/pattern-shop",
    },
];

export const navItems: Array<NavItem> = [
    {
        id: 1,
        label: "About",
        children: [
            {
                id: 1,
                label: "About Us",
                menuItems: [
                    {
                        id: 21,
                        link: "/about",
                        label: "About Us",
                    },
                    {
                        id: 22,
                        link: "/our-history",
                        label: "Our History",
                    },
                    {
                        id: 24,
                        link: "/our-client",
                        label: "Our Client",
                    },
                    {
                        id: 26,
                        link: '/corporate-social-responsibility',
                        label: 'Corporate Social Responsibility'
                    }
                ]
            }
        ],
    },
    {
        id: 2,
        label: "Verticals",
        children: [
            {
                id: 2,
                label: 'Varticals',
                menuItems: [
                    {
                        id: 25,
                        link: "/verticals",
                        label: "All Verticals",
                    },
                ]
            },
            {
                id: 3,
                label: 'All Vericals',
                menuItems: [
                    {
                        id: 1,
                        label: 'Footwear & Leather',
                        link: '/verticals/footwear-&-leather'
                    },
                    {
                        id: 2,
                        label: 'Furniture',
                        link: '/verticals/furniture'
                    },
                    {
                        id: 3,
                        label: 'Pole & Pile',
                        link: '/verticals/pole-&-pile'
                    },
                    {
                        id: 4,
                        label: 'Vehicle Assembly',
                        link: '/verticals/vehicle-assembly'
                    },
                    {
                        id: 5,
                        label: 'Steel Structure Manufacturing',
                        link: '/verticals/steel-structure-manufacturing'
                    },
                    {
                        id: 6,
                        label: 'Electronic Assembly',
                        link: '/verticals/electronic-assembly'
                    },
                    {
                        id: 7,
                        label: 'BMTF Crafties',
                        link: '/verticals/BMTF-crafties'
                    },
                    {
                        id: 8,
                        label: 'CFL & LED Bulb',
                        link: '/verticals/CFL-&-LED-bulb'
                    },
                    {
                        id: 9,
                        label: 'Central Tooling Department',
                        link: '/verticals/central-tooling-department'
                    },
                    {
                        id: 10,
                        label: 'Forge Shop',
                        link: '/verticals/forge-shop'
                    },
                    {
                        id: 11,
                        label: 'Foundry Shop',
                        link: '/verticals/foundry-shop'
                    },
                    {
                        id: 12,
                        label: 'Galvanizing Plant',
                        link: '/verticals/galvanizing-plant'
                    },
                    {
                        id: 13,
                        label: 'Heat And Surface Treatment',
                        link: '/verticals/heat-and-surface-treatment'
                    },
                    {
                        id: 14,
                        label: 'Machine Shop',
                        link: '/verticals/machine-shop'
                    },
                    {
                        id: 15,
                        label: 'Army Pharma',
                        link: '/verticals/army-pharma'
                    },
                    {
                        id: 16,
                        label: 'Packaging Unit',
                        link: '/verticals/packaging-unit'
                    },
                    {
                        id: 17,
                        label: 'Pattern Shop',
                        link: '/verticals/pattern-shop'
                    }
                ]
            }
        ],
    },
    {
        id: 3,
        label: "Accreditations",
        children: [
            {
                id: 1,
                label: "Accreditations",
                menuItems: [
                    {
                        id: 1,
                        label: 'Accreditation',
                        link: '/accreditations-and-certificate/'
                    },
                    {
                        id: 2,
                        label: 'Certificates',
                        link: '/accreditations-and-certificate#certificate'
                    },
                ]
            },
        ],
    },
    {
        id: 4,
        label: "Notice board",
        children: [
            {
                id: 1,
                label: "Noc and Notice",
                menuItems: [
                    {
                        id: 1,
                        label: "Noc And Notice",
                        link: "/noc-and-notice",
                    },
                    {
                        id: 2,
                        link: '/news-and-tenders',
                        label: 'News and Tenders'
                    }
                ]
            },
        ],
    },
    {
        id: 5,
        label: "gallery",
        children: [
            {
                id: 1,
                label: "Gallery",
                menuItems: [
                    {
                        id: 1,
                        label: "Gallery",
                        link: "/image-&-video-gallery",
                    }
                ]
            },
        ],
    },
    {
        id: 6,
        label: "Contact",
        children: [
            {
                id: 1,
                label: "Contact Us",
                menuItems: [
                    {
                        id: 1,
                        label: "Contact Us",
                        link: "/contact",
                    },
                    {
                        id: 2,
                        label: "Career Oppurtunities",
                        link: "/career",
                    }
                ]
            }
        ],
    },
];

export const experienceLists: Array<any> = [
    {
        id: 111,
        experience: "Biggest State Owned Production facility."
    },
    {
        id: 112,
        experience: "Successfully serving 50+ Clients."
    },
    {
        id: 113,
        experience: "Digital & Smart Integrated Factory."
    },
    {
        id: 114,
        experience: "Most dedicated & passionate team."
    },
    {
        id: 115,
        experience:"No compromise in quality control."
    }
];



export const capabilities: Array<any> = [
    {
        id: 221,
        capability: "Production and assembly of diverse machinery, components, tools & spares, vehicle bodies, and defense equipment.",
    },
    {
        id: 222,
        capability: "Fabrication of heavy steel structures, trusses, architecturally exposed infrastructures, electric transmission towers, bailey bridges, sandwich panels, C & Z purlins, and roof sheets.",
    },
    {
        id: 223,
        capability: "Crafting top-tier wooden and metal furniture known for its quality and craftsmanship.",
    },
    {
        id: 224,
        capability: "Offering galvanization, heat treatment, and surface treatment services for various structural and general steel products.",
    },
    {
        id: 225,
        capability: "Crafting metallic & nonmetallic crafts, decorative items such as military ranks, badges, sports items like medals, crests, trophies, and gift items like lapel pins, key rings, and souvenirs.",
    },
    {
        id: 226,
        capability: "Providing supply, construction, and trading services for projects and commercial ventures feasible for BMTF, contributing to various sectors.",
    }
];

export const extended: Array<any> = [
    {
        id: 331,
        capability: "Manufacturing of foundry and forging items, including electrical line hardware, and various other products.",
    },
    {
        id: 332,
        capability: "Crafting high-quality, long-lasting concrete products like poles, piles, and railway sleepers, ensuring durability and low maintenance.",
    },
    {
        id: 333,
        capability: "Assembly of both military and commercial vehicles, showcasing our adeptness in automotive manufacturing.",
    },
    {
        id: 334,
        capability: "Producing a diverse range of footwear including military, para-military, formal, casual, and sports varieties, along with fine leather products.",
    },
    {
        id: 335,
        capability: "Manufacturing and assembling electronic products, gadgets, CFL & LED, and solar street lighting solutions with a focus on quality.",
    },
    {
        id: 336,
        capability: "Developing and manufacturing healthcare and hygiene products to ensure well-being and cleanliness.",
    },
    {
        id: 337,
        capability: "Producing eco-friendly, export-oriented food-grade paper bags and packages, aligning with sustainable practices.",
    }
];

export const membersOne = [
    {
        id: 1,
        text: "Director of Weapon, Equipments & Statistics (DWE&S)",
    },
    {
        id: 2,
        text: "Director of Weapon, Equipments & Statistics (DWE&S)",
    },
    {
        id: 3,
        text: "Director of Weapon, Equipments & Statistics (DWE&S)",
    },
    {
        id: 4,
        text: "Director of Weapon, Equipments & Statistics (DWE&S)",
    },
    {
        id: 5,
        text: "Director of Weapon, Equipments & Statistics (DWE&S)",
    },
];

export const timeline = [
    {
        id: 1,
        dayString: "27th july in",
        year: "2000",
        imageSrc: "/assets/images/history/timeline/Timeline_1.png",
        text: `On July 27, 2000 Honorable Prime Minister Sheikh Hasina handed 
        over The BMTF industry to Bangladesh Army to increase the efficiency. 
        The whole operating system of BMTF is officially going under Bangladesh Army 
        and it has been a remarkable journey since then.`,
    },
    {
        id: 2,
        dayString: "6th july in",
        year: "1994-2000",
        imageSrc: "/assets/images/history/timeline/Timeline_2.png",
        text: `On July 27, 2000 Honorable Prime Minister Sheikh Hasina handed over The 
        BMTF industry to Bangladesh Army to increase the efficiency. The whole operating 
        system of BMTF is officially going under Bangladesh Army and it has been a remarkable 
        journey since then.`,
    },
    {
        id: 3,
        dayString: "6th july in",
        year: "1994-2000",
        imageSrc: "/assets/images/history/timeline/Timeline_3.png",
        text: `On July 27, 2000 Honorable Prime Minister Sheikh Hasina handed over The 
        BMTF industry to Bangladesh Army to increase the efficiency. The whole operating 
        system of BMTF is officially going under Bangladesh Army and it has been a remarkable 
        journey since then.`,
    },
    {
        id: 4,
        dayString: "6th july in",
        year: "1994-2000",
        imageSrc: "/assets/images/history/timeline/Timeline_4.png",
        text: `On July 27, 2000 Honorable Prime Minister Sheikh Hasina handed over The 
        BMTF industry to Bangladesh Army to increase the efficiency. The whole operating 
        system of BMTF is officially going under Bangladesh Army and it has been a remarkable 
        journey since then.`,
    },
    {
        id: 5,
        dayString: "6th july in",
        year: "1994-2000",
        imageSrc: "/assets/images/history/timeline/Timeline_5.png",
        text: `On July 27, 2000 Honorable Prime Minister Sheikh Hasina handed over The 
        BMTF industry to Bangladesh Army to increase the efficiency. The whole operating 
        system of BMTF is officially going under Bangladesh Army and it has been a remarkable 
        journey since then.`,
    },
    {
        id: 6,
        dayString: "6th july in",
        year: "1994-2000",
        imageSrc: "/assets/images/history/timeline/Timeline_6.png",
        text: `On July 27, 2000 Honorable Prime Minister Sheikh Hasina handed over The 
        BMTF industry to Bangladesh Army to increase the efficiency. The whole operating 
        system of BMTF is officially going under Bangladesh Army and it has been a remarkable 
        journey since then.`,
    },
];

export const latestNews: Array<NewsCard> = [
    {
        id: 1,
        imgSrc: "/assets/images/home/BMTF_News_1.png",
        title: "BMTF to provide 3 crore blank smart cards to EC",
        date: "23 Sep 2023",
    },
    {
        id: 2,
        imgSrc: "/assets/images/home/BMTF_News_2.jpeg",
        title: "Chief of Army Staff inaugurates Army Pharma Limited in Gazipur",
        date: "21 Dec 23",
    },
    {
        id: 3,
        imgSrc: "/assets/images/home/BMTF_News_3.png",
        title: "Bangladesh Machine Tools Factory Limited wins global ISO certification",
        date: "23 Sep 2023",
    },
];


export const verticals = [
    {
        id: 1,
        imageSrc: "/assets/images/verticals/Footwear_and_leather.png",
        title: "Footwear Industry and Leather Industry",
        link: "/verticals/footwear-&-leather",
    },
    {
        id: 2,
        imageSrc: "/assets/images/verticals/Footwear_and_leather_02.png",
        title: "Furniture",
        link: "/verticals/furniture",
    },
    {
        id: 3,
        imageSrc: "/assets/images/verticals/Pool_and_pile.png",
        title: "Pole & Pile",
        link: "/verticals/pole-&-pile",
    },
    {
        id: 4,
        imageSrc: "/assets/images/verticals/Vehicle_assembly.png",
        title: "Vehicle Assembly",
        link: "/verticals/vehicle-assembly",
    },
    {
        id: 5,
        imageSrc: "/assets/images/verticals/Steel_structure.png",
        title: "Steel Structure Manufacturing",
        link: "/verticals/steel-structure-manufacturing",
    },
    {
        id: 6,
        imageSrc: "/assets/images/verticals/Electronic_Assembly_01.png",
        title: "Electronic Assembly",
        link: "/verticals/electronic-assembly",
    },
    {
        id: 7,
        imageSrc: "/assets/images/verticals/Crafties.png",
        title: "BMTF Crafties",
        link: "/verticals/BMTF-crafties",
    },
    {
        id: 8,
        imageSrc: "/assets/images/verticals/CFL.png",
        title: "CFL AND LED BULB",
        link: "/verticals/cFL-&-LED-bulb",
    },
    {
        id: 9,
        imageSrc: "/assets/images/verticals/Central_toolling.png",
        title: "Central Tooling Department",
        link: "/verticals/central-tooling-department",
    },
    {
        id: 10,
        imageSrc: "/assets/images/verticals/Forge_shop.png",
        title: "Forge Shop",
        link: "/verticals/forge-shop",
    },
    {
        id: 11,
        imageSrc: "/assets/images/verticals/Foundry_shop.png",
        title: "Foundry Shop",
        link: "/verticals/foundry-shop",
    },
    {
        id: 12,
        imageSrc: "/assets/images/verticals/Galvanizing.png",
        title: "Galvanizing Plant",
        link: "/verticals/galvanizing-plant",
    },
    {
        id: 13,
        imageSrc: "/assets/images/verticals/Machine_shop.png",
        title: "Machine Shop",
        link: "/verticals/machine-shop",
    },
    {
        id: 14,
        imageSrc: "/assets/images/verticals/Army_shop.png",
        title: "Army Pharma",
        link: "/verticals/army-pharma",
    },
    {
        id: 15,
        imageSrc: "/assets/images/verticals/Packaging.png",
        title: "Packaging Unit",
        link: "/verticals/packaging-unit",
    },
    {
        id: 16,
        imageSrc: "/assets/images/verticals/Pattern_shop.png",
        title: "Pattern Shop",
        link: "/verticals/pattern-shop",
    },
];

export const contactCard = [
    {
        id: 1,
        imageSrc: "/assets/images/contact/building.png",
        title: "Corporate Office",
        address: "House # 41, Road # 7 , Dhaka Cantonment, Bangladesh",
        tel: "+880-2-8871150",
        email: "bmtfpackagingfactory@gmail.com",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.08594857317!2d90.37702227607197!3d23.744314289008656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b3f78ee00b%3A0xd9d2ff933cd37a9a!2s41%20Rd%207%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1705332482461!5m2!1sen!2sbd",
    },
    {
        id: 2,
        imageSrc: "/assets/images/contact/Facctory.png",
        title: "Factory",
        address: "Joydebpur Gazipur – 1700, Bangladesh",
        tel: "+880-2-996618072-7",
        email: "bmtfpackagingfactory@gmail.com",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14581.875762841328!2d90.37074636505966!3d23.97921226206099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755db6710a83b69%3A0x7fa80a594efb99e1!2sGazipur%201700!5e0!3m2!1sen!2sbd!4v1705332707097!5m2!1sen!2sbd",
    },
    {
        id: 3,
        imageSrc: "/assets/images/contact/Packaging.png",
        title: "Packaging Unit (BMTF-2)",
        address: "Kholishajani, Fulbaria, Kaliakoir, Gazipur.",
        tel: "+880 1769041207",
        email: "bmtfpackagingfactory@gmail.com",
        iframeSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.08594857317!2d90.37702227607197!3d23.744314289008656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b3f78ee00b%3A0xd9d2ff933cd37a9a!2s41%20Rd%207%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1705332482461!5m2!1sen!2sbd",
    },
];

export const allIndustries = [
    {
        id: 1,
        label: 'Footwear & Leather',
        link: '/verticals/footwear-&-leather'
    },
    {
        id: 2,
        label: 'Furniture',
        link: '/verticals/furniture'
    },
    {
        id: 3,
        label: 'Pole & Pile',
        link: '/verticals/pole-&-pile'
    },
    {
        id: 4,
        label: 'Vehicle Assembly',
        link: '/verticals/vehicle-assembly'
    },
    {
        id: 5,
        label: 'Steel Structure Manufacturing',
        link: '/verticals/steel-structure-manufacturing'
    },
    {
        id: 6,
        label: 'Electronic Assembly',
        link: '/verticals/electronic-assembly'
    },
    {
        id: 7,
        label: 'BMTF Crafties',
        link: '/verticals/BMTF-crafties'
    },
    {
        id: 8,
        label: 'CFL & LED Bulb',
        link: '/verticals/CFL-&-LED-bulb'
    },
    {
        id: 9,
        label: 'Central Tooling Department',
        link: '/verticals/central-tooling-department'
    },
    {
        id: 10,
        label: 'Forge Shop',
        link: '/verticals/forge-shop'
    },
    {
        id: 11,
        label: 'Foundry Shop',
        link: '/verticals/foundry-shop'
    },
    {
        id: 12,
        label: 'Galvanizing Plant',
        link: '/verticals/galvanizing-plant'
    },
    {
        id: 13,
        label: 'Heat And Surface Treatment',
        link: '/verticals/heat-and-surface-treatment'
    },
    {
        id: 14,
        label: 'Machine Shop',
        link: '/verticals/machine-shop'
    },
    {
        id: 15,
        label: 'Army Pharma',
        link: '/verticals/army-pharma'
    },
    {
        id: 16,
        label: 'Packaging Unit',
        link: '/verticals/packaging-unit'
    },
    {
        id: 17,
        label: 'Pattern Shop',
        link: '/verticals/pattern-shop'
    }
]

