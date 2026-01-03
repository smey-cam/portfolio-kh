import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    padding-bottom: 5rem;
    padding-top: 3rem;
`;

const TimelineItem = styled.div`
    border-left: 2px solid #00bcd4;
    position: relative;
    padding-left: 30px;
    width: 99%;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        width: 100%;
        padding-left: 20px;
    }

    &::before {
        content: '';
        position: absolute;
        left: -7px;
        top: 10px;
        width: 12px;
        height: 12px;
        background-color: #00bcd4;
        border-radius: 50%;
    }
`;

const TimelineHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const CompanyInfo = styled.div`
    flex: 1;
`;

const CompanyName = styled.h3`
    font-size: 2rem;
    color: #9cc9e3;
    margin: 0 0 5px 0;
    font-weight: 600;
`;

const JobTitle = styled.h4`
    font-size: 1.6rem;
    color: #d4c0c0;
    margin: 0;
    font-weight: 400;
`;

const TimelineYear = styled.div`
    font-size: 1.6rem;
    color: #9cc9e3;
    font-weight: 600;
    
    @media (max-width: 768px) {
        margin-top: 5px;
    }
`;

const TimelineEvents = styled.ul`
    margin: 15px 0 0 0;
    padding-left: 20px;
    list-style-type: disc;
`;

const TimelineEvent = styled.li`
    margin: 10px 0;
    line-height: 1.6;
    font-size: 1.4rem;
    color: #e4e6e7;
`;

const Timeline = () => {
    const timelineData = [
        {
            year: '2021 - Present',
            company: 'ARH Technologies',
            title: 'Web Developer & Team Leader',
            events: [
                'Led a team of web developers to design and deliver customized web applications based on client requirements.',
                'Developed and maintained full-stack solutions using React.js, Next.js, Node.js.',
                'Integrated third-party and internal RESTful APIs to improve system functionality and performance.',
                'Optimized website performance, reducing load times through code refactoring and best-practice implementation.',
                'Mentored junior developers, conducted code reviews, and enforced Git version-control standards.',
                'Collaborated cross-functionally with designers and backend teams to ensure responsive and user-friendly UI/UX.'
            ],
        },
        {
            year: '2023 - 2024',
            company: 'Asia Euro University',
            title: 'Microsoft Office (Teacher)',
            events: [
                'Taught Microsoft Office tools including Word, Excel, PowerPoint, and Outlook to university students.',
                'Prepared structured lesson plans, learning materials, and practical exercises.',
                'Guided students in creating professional reports, presentations, and data-driven spreadsheets.',
                'Evaluated student progress and provided feedback to improve productivity and technical skills.'
            ]
        },
        {
            year: '2019 - 2020',
            company: 'Cambodian Distribution System',
            title: 'Database Administrator',
            events: [
                'Managed and maintained MySQL and SQL Server databases to ensure high availability and performance.',
                'Performed database optimization, query tuning, and regular system backups.',
                'Implemented data security measures, access control, and integrity checks.',
                'Collaborated with software developers to improve data access efficiency and application performance.',
                'Monitored database health and resolved performance or data-consistency issues.'
            ]
        },
        {
            year: '2018 - 2019',
            company: 'MM Pharma Co., LTD',
            title: 'Graphic Designer',
            events: [
                'Designed visual assets including logos, banners, social media graphics, posters, and marketing materials aligned with brand guidelines.',
                'Collaborated with marketing and development teams to create UI/UX visuals that enhanced user engagement and brand consistency.',
                'Used tools such as Adobe Photoshop, Illustrator, and Figma to produce high-quality designs for digital and print platforms.',
                'Translated client requirements into creative design solutions while meeting deadlines and quality standards.'
            ]
        }
    ];

    return (
        <TimelineContainer>
            {timelineData.map((data, idx) => (
                <TimelineItem key={idx}>
                    <TimelineHeader>
                        <CompanyInfo>
                            <CompanyName>{data.company}</CompanyName>
                            <JobTitle>{data.title}</JobTitle>
                        </CompanyInfo>
                        <TimelineYear>{data.year}</TimelineYear>
                    </TimelineHeader>
                    <TimelineEvents>
                        {data.events.map((event, eventIdx) => (
                            <TimelineEvent key={eventIdx}>{event}</TimelineEvent>
                        ))}
                    </TimelineEvents>
                </TimelineItem>
            ))}
        </TimelineContainer>
    );
};

export default Timeline;