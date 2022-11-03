import React from "react";
import PortfolioItem from './PortfolioItem';
import items from "../data/portfolio";

const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map(project => (
          <PortfolioItem
            key={project.title}
            title={project.title}
            stack={project.stack}
            thumbnail={project.thumbnail}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;