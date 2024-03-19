export type TExperience = {
    time: string;
    position: string;
    organization: string;
    details: string[];
};


const Experiences: TExperience[] = [
    {
        time: "Jul 2023 - Mar 2023",
        position: "Business Analyst",
        organization: "Interlink Engineering",
        details: [
            `Designed a sales performance dashboard using Power BI, reducing report development time by 45%.`,
            `Collaborated with the senior data analyst to develop
        internal data warehouses for customer data analysis,
        identified potential clients, and uncovered valuable
        patterns and trends for strategic decision-making.`,
            `Conducted in-depth data analysis to analyze sales
        forecasting, identifying trends pivotal for strategic
        decision-making, resulting in a 6% increase in sales.`,
            `Conducted in-depth customer meetings and developed a root
        cause report to address problems with customer
        conversions, successfully revealing insights that boosted
        conversions by 7%.`,
            `Developed a self-service dashboard for the sales team,
        resulting in a 32% increase in data-driven
        decision-making.`,
            `Collaborated with cross-functional teams to identify data
        sources and streamline data collection, ensuring data
        quality, integrity, and accuracy, resulting in a 28%
        reduction in report development time.`
        ]
    },

];

export default Experiences