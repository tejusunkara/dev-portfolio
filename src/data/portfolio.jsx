import nogginyThumbnail from '../assets/nogginy-tn_adobe_express.svg';
import simpleTweetThumbnail from '../assets/SimpleTweet.png';
import portfolioThumbnail from '../assets/portfolio_adobe_express.svg';

const items = [
  {
    title: "Nogginy",
    thumbnail: nogginyThumbnail,
    stack: [
      "Python",
      "ReactJS",
      "Postgres",
      "Heroku",
    ],
    projectUrl: "https://nogginy2.herokuapp.com/"
  },
  {
    title: "SimpleTweet",
    thumbnail: simpleTweetThumbnail,
    stack: [
      "Java",
      "AndroidStudios",
      "Android Async HTTP",
      "Glide",
    ],
    projectUrl: "https://github.com/tejusunkara/SimpleTweet"
  },
  {
    title: "Portfolio",
    thumbnail: portfolioThumbnail,
    stack: [
      "ReactJS",
      "TailwindCSS",
      "Vite",
      "Vercel"
    ],
    projectUrl: "https://github.com/tejusunkara/dev-portfolio"
  },
];

export default items;
