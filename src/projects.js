import Thumbnail_PortfolioWebsite from "./assets/images/Thumbnail_PortfolioWebsite.png";
import Thumbnail_Ertragsrechner from "./assets/images/Thumbnail_Ertragsrechner.webp";
import Thumbnail_IngGellert from "./assets/images/project_images/IngGellert/fg-thumbnail.webp";
import Thumbnail_Bodenstaendig from "./assets/images/project_images/Bodenstaendig/bodenstaendig-thumbnail.webp";
import Thumbnail_Bodenstaendigshop from "./assets/images/project_images/Bodenstaendig/bodenstaendig-thumbnail2.webp";
import Thumbnail_Tischlerei from "./assets/images/project_images/Tischlerei/tischlerei_img1.webp";
import Thumbnail_Widerrufsformular from "./assets/images/project_images/Widerrufsformular/widerruf_img3.webp";
import Thumbnail_AirBnB_DB from "./assets/images/project_images/AirBnBDB/airbnbdb_img2.webp";
import Thumbnail_HabitTracker from "./assets/images/project_images/HabitTracker/habittracker_thumbnail.webp";

import icon_html from "./assets/images/icon_html.webp";
import icon_css from "./assets/images/icon_css.webp";
import icon_js from "./assets/images/icon_js.webp";
import icon_react from "./assets/images/icon_react.webp";
import icon_python from "./assets/images/icon_python.webp";
import icon_sql from "./assets/images/icon_sql.webp";
import icon_wordpress from "./assets/images/icon_wordpress.webp";
import icon_php from "./assets/images/icon_php.webp";

const projects = [
  {
    id: 1,
    thumbnail: Thumbnail_Ertragsrechner,
    title: "Ertragsrechner",
    type: "Kleines Tool zum Berechnen des Ertrages von selbst angebautem Gemüse",
    logos: [icon_html, icon_css, icon_js],
    category: "HTML / CSS, JavaScript",
    url: "/ertragsrechner",
  },
  {
    id: 2,
    thumbnail: Thumbnail_HabitTracker,
    title: "Habit Tracker",
    type: "Mit Python erstellter Habit Tracker mit CLI",
    logos: [icon_python],
    category: "Python",
    url: "/habittracker",
  },

  {
    id: 3,
    thumbnail: Thumbnail_Bodenstaendigshop,
    title: "Bodenständig Shop",
    type: "Shopify: Redesigned und angepasste Sektionen",
    logos: [icon_html, icon_css],
    category: "HTML / CSS, Design",
    url: "/bodenstaendigshop",
  },

  {
    id: 4,
    thumbnail: Thumbnail_Tischlerei,
    title: "Tischlerei (Template)",
    type: "Simple HTML/CSS Website als Template",
    logos: [icon_html, icon_css],
    category: "HTML / CSS, Design",
    url: "/tischlerei",
  },

  {
    id: 5,
    thumbnail: Thumbnail_Widerrufsformular,
    title: "Widerrufsformular",
    type: "Mit php erstelltes Formular, das mit einer DB Daten austauscht",
    logos: [icon_php, icon_css, icon_sql],
    category: "HTML / CSS, SQL",
    url: "/widerrufsformular",
  },

  {
    id: 6,
    thumbnail: Thumbnail_AirBnB_DB,
    title: "AirBnB Database",
    type: "Mit sql angelegte AirBnB ähnliche Datenbank",
    logos: [icon_sql],
    category: "SQL",
    url: "/airbnbdb",
  },
  {
    id: 7,
    thumbnail: Thumbnail_PortfolioWebsite,
    title: "Portfolio Website",
    type: "Mit React.js erstellte Website zur Präsentation von verschiedenen Projekten.",
    logos: [icon_html, icon_css, icon_js, icon_react],
    category: "HTML / CSS, JavaScript, React",
    url: "/portfoliowebsite",
  },

  {
    id: 8,
    thumbnail: Thumbnail_Bodenstaendig,
    title: "Website Bodenständig",
    type: "Mit WordPress erstelle Website welche den Ertragsrechner beinhaltet",
    logos: [icon_css, icon_js, icon_wordpress],
    category: "HTML / CSS, WordPress, Design",
    url: "/bodenstaendig",
  },
  {
    id: 9,
    thumbnail: Thumbnail_IngGellert,
    title: "Website Ing.-Büro",
    type: "Mit WordPress erstellte Website für ein Konstruktionsbüro.",
    logos: [icon_css, icon_wordpress],
    category: "HTML / CSS, WordPress, Design",
    url: "/inggellert",
  },
];

export default projects;
