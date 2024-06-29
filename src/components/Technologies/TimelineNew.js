import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    padding-bottom:5rem;
    padding-top: 3rem
`;

const TimelineItem = styled.div`
    border-left: 2px solid #00bcd4;
    position: relative;
    padding-left: 20px;
    width: 99%;

    @media (max-width: 768px) {
        width: 100%;
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

const TimelineYear = styled.div`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const TimelineEvents = styled.div`
    margin-left: 10px;
    padding-bottom: 2rem
`;

const TimelineEvent = styled.div`
    margin: 5px 0;
`;

const Timeline = () => {
    const timelineData = [
        {
            year: '2021 - Present',
            events: [
                'Working at ARH Technology as Web Developer and Leader Team'
            ]
        },
        {
            year: 'April - 2023 ',
            events: [
                'Lecturer at AEU as Office Application'
            ]
        },
        {
            year: '2019 - 2021',
            events: [
                'MM Pharma Co.,LTD as Digital Marketing Social Media & IT Support'
            ]
        },
        {
            year: '2018 - 2019',
            events: [
                'Cambodian Distribution System as Database Administrator'
            ]
        }
    ];

    return (
        <TimelineContainer>
            {timelineData.map((data, idx) => (
                <TimelineItem key={idx}>
                    <TimelineYear style={{ fontWeight: 600 }}>{data.year}</TimelineYear>
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
