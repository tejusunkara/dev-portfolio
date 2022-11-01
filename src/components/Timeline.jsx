import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from './Title';

const Timeline = () => {
  return (
    <div>
      <div className="w-7/12">
        <Title>Timeline</Title>
        {timeline.map(item => (
          <TimelineItem
            key={item.title}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;