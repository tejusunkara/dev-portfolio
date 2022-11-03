import React from "react";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex items-center justify-center flex-col pt-20 pb-6"
    >
      <div
        className="text-center"
      >
        <h1
          className="text-4xl md:text-7xl dark:text-black mb-1 md:mb-3 font-bold"
        >
          Venkata
        </h1>
        <p
          className="text-base md:text-xl mb-3 font-medium"
        >
          Software Engineer - Web Developer{' '}
        </p>
        <p
          className="text-sm max-w-xl mb-6 font-bold"
        >
          I'm a full-stack developer building my own version of the digital world one application at a time.
          I aim to build projets from scratch, starting from planning and designing to implementing and scaling. I publish my content on my github
          &nbsp;
          <a
            href="https://github.com/tejusunkara"
            target="_blank"
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
            rel="noreferrer noopener"
          >
            tejusunkara
          </a> to track my progress.
        </p>
      </div>
    </section>
  )
}

export default Intro;
