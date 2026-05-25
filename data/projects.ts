// Project data for the portfolio website, including title, status, description, and tags for each project. This data can be used to dynamically render project information on the website, allowing for easy updates and maintenance as new projects are added or existing ones are modified.

export type Project = {
    title: string;
    status: string;
    description: string;
    tags: string[];
};

export const projects: Project[] = [
    {
        title: "Personal Portfolio Website",
        status: "In Development",
        description: "A personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS for a modern and responsive design.",
        tags: ["TypeScript", "React", "Tailwind CSS", "Web Development"],
    },
    {
        title: "Felicia-Insights / 'Ask Felicia' AI Chatbot",
        status: "Planned",
        description: "An AI-powered chatbot designed to answer questions about Felicia's background, skills, and experience. Built with React and Node.js.",
        tags: ["TypeScript", "React", "Node.js", "AI Chatbot"],
    },
    {
        title: "Release Readiness Assistant",
        status: "Planned",
        description: "An AI-supported operations concept for evaluating release readiness, stakeholder impact, rollback concerns, risks, and communication. This tool will help ensure smooth and successful software releases.",
        tags: ["TypeScript", "AI", "Operations", "Release Management"],
    },
];