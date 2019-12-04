import Books from "./components/books/Books";
// import EBooks from "./components/ebooks/EBooks";
import AudioBooks from "./components/audiobooks/AudioBooks";
// import Magazines from "./components/magazines/Magazines";
// import Calendars from "./components/calendars/Calendars";
// import Gadgets from "./components/gadgets/Gadgets";
import random_id from './randomI_id';

const routes = [
  { path: "/Books", component: Books },
  { path: "/EBooks",  },
  { path: "/AudioBooks", component: AudioBooks },
  { path: "/Magazines", },
  { path: "/Calendars", },
  { path: "/Gadgets",   }
];

routes.forEach(route => route.id = random_id())

export default routes;
