import {ExploreItemsProps} from "@/types/Elxpore";
import {DocUrl} from "@/data/links";

export const ItemDatails:ExploreItemsProps[] = [
    {
        title: "Basics",
        content: "Learn Spore Fundamentals - Quickly grasp the core concepts and components.",
        link: `${DocUrl.baseUrl}${DocUrl.basic}`
    },
    {
        title: "Tutorial",
        content: "Follow Along - Build a toy project, dive in with easy to follow steps and examples.",
        link: `${DocUrl.baseUrl}${DocUrl.tutorial}`,
    },
    {
        title: "How to recipes",
        content: "Simplified Solutions - Find concise recipes to streamline your production.",
        link: `${DocUrl.baseUrl}${DocUrl.howToRecipes}`,
    },
    {
        title: "Resources",
        content: "Power tools - SDK, API, Contracts, and more!",
        link: `${DocUrl.baseUrl}${DocUrl.resources}`,
    }
];
export const DocsDetail:ExploreItemsProps = {
    title: "Documentations",
    content: "Get started mastering Spore Protocol, from basics to building your next project.",
    link: `${DocUrl.baseUrl}`,
};
``

