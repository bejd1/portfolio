import fieldFinder from "../../images/field-finder.png";
import landOfFootball from "../../images/land-of-football-transformed.png";
import portfolio from "../../images/portfolio.png";
import notebook from "../../images/notemain.png";

export const ProjectList = [
  {
    id: 0,
    name: "Notebook",
    description:
      "I wrote an online notebook project in react ts with MUI and Firebase. In Firebase, I use realtime database and authenticator to be able to log in to the application via email, gmail or github. I wrote the applications for all those who want to keep their notes in one place and easily access, add, edit, copy and search them. In addition, notes can be written using Markdown, I think it's a great idea. I recommend everyone to test light and dark mode. Below is the link to the live site. I hope you check.",
    descriptionPlus:
      "Feel free to check out the Project by visiting the Live Link.",
    image: notebook,
    technologies: ["react", "typescript", "firebase", "MUI"],
    github: "https://github.com/bejd1/notebook",
    live: "https://bejd1.github.io/notebook/",
  },
  {
    id: 1,
    name: "Portfolio",
    description:
      "Portfolio project that I wrote to present my person and projects. Here you can find information about me and links to github and linkedin. At main page in contact section you can leave a message for me with any question! Using my frontend programming skills, I built a site for users on all types of devices.",
    descriptionPlus:
      "Feel free to check out the Project by visiting the Live Link.",
    image: portfolio,
    technologies: ["react", "typescript", "css"],
    github: "https://github.com/bejd1/Portfolio",
    live: "https://bejd1.github.io/portfolio/",
  },
  {
    id: 2,
    name: "Land of Football",
    description:
      "Land of football is a project I wrote using Redux to easily manage the cart and the items in it. Additionally, there are options such as sorting by categories and prices. Realtime Database I create in firebase. Using my frontend programming skills, I built a website for users on all types of devices.",
    descriptionPlus:
      "Feel free to check out the Project by visiting the Live Link.",
    image: landOfFootball,
    technologies: ["react", "typescript", "redux", "css"],
    github: "https://github.com/bejd1/land-of-football",
    live: "https://bejd1.github.io/land-of-football/",
  },
  {
    id: 3,
    name: "Field Finder",
    description:
      "The field finder project is an idea I came up with because sometimes it's hard to find a field in the area and this would be a great site to help us. Using my frontend programming skills, I built the website and wanted it to stand out from the competition and provide a better user experience on all types of devices.",
    descriptionPlus:
      "Feel free to check out the Project by visiting the Live Link.",
    image: fieldFinder,
    technologies: ["react", "typescript", "css"],
    github: "https://github.com/bejd1/field-finder",
    live: "https://bejd1.github.io/field-finder/",
  },
];
