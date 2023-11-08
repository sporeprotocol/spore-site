import { MenuItem } from '@/types/Menu';
import { DocUrl } from "@/data/links";

const MenuItems: MenuItem[] = [
    {
        link: `${DocUrl.baseUrl}${DocUrl.basic}`,
        title: 'Spore Basics',
        intro: 'Learn Spore fundamentals'
    },
    {
        link: `${DocUrl.baseUrl}${DocUrl.tutorial}`,
        title: 'Spore Tutorial',
        intro: 'Learn with examples'
    },
    {
        link: `${DocUrl.baseUrl}${DocUrl.howToRecipes}`,
        title: 'How to recipes',
        intro: 'Build with solutions'
    },
    {
        link: `${DocUrl.baseUrl}${DocUrl.resources}`,
        title: 'Resources',
        intro: 'Power tools for devs'
    },
];

export default MenuItems;
