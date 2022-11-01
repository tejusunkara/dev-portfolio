import React from "react";
import PortfolioItem from './PortfolioItem';
import items from "../data/portfolio";

const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div>
        {items.map(project => (
          <PortfolioItem
            key={project.title}
            title={project.title}
            stack={project.stack}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;