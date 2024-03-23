export type TExperience = {
    time: string;
    position: string;
    organization: string;
    details: string[];
};


const Experiences: TExperience[] = [
    {
        time: "Nov 2021 - Jan 2023",
        position: "Business Analyst",
        organization: "Interlink Engineering",
        details: [
            `Designed a sales performance dashboard using Power BI and automated data extraction by creating a reliable data pipeline leveraging SQL and SSIS, resulting in a 45% reduction in report development time.`,
            `Collaborated with the senior data analyst to develop
        internal data warehouses for customer data analysis,
        identified potential clients, and uncovered valuable
        patterns and trends for strategic decision-making.`,
            `Conducted extensive market research and competitive analysis to identify potential growth opportunities and proposed enhancements to the marketing strategy, resulting in a 6% increase in sales.`,
            `Conducted in-depth customer meetings and developed a root
        cause report to address problems with customer
        conversions, successfully revealing insights that boosted
        conversions by 7%.`,
            `Led market research to collect feedback on the company's product range that informed product improvements, resulting in a 15% increase in user satisfaction and a 10% decrease in customer complaints.`,
            `Collaborated with cross-functional teams to identify data
        sources and streamline data collection, ensuring data
        quality, integrity, and accuracy, resulting in a 28%
        reduction in report development time.`,
            `Developed Power BI dashboards to identify product features that correlated with customer attrition, leading to a 20% reduction in churn rate, and tracked product KPIs to facilitate strategic decision-making.`,
            `Collaborated with product managers on cohort analysis, identifying an opportunity to reduce pricing by 22% for a user segment, thus boosting yearly revenue by $132k.`
        ]
    },

];

export default Experiences
