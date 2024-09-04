type func = () => void;
type funcProps = (prop: any) => void;
type func2Props = (prop: any, prop2: any) => void;
type funcEvent = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
type movie = {
  name: string;
  slug: string;
  original_name: string;
  thumb_url: string;
  poster_url: string;
  created: string;
  modified: string;
  description: string;
  total_episodes: number;
  current_episode: string;
  time: string | null;
  quality: string;
  language: string;
  director: string | null;
  casts: string | null;
};
type navTypes = {
  isShowNavBar: boolean;
  onToggleNavbar: func;
  // user: any;
  // isAuthenticated: boolean;
  openMenuCategory: string;
  onToggleOpenMenuCategory: any;
  convertHeader: any;
  isMobile: boolean;
  // onShowPopup: func;
};
// type MenuGenresAndRegions = {
//   category: string[] | number[] | any[] | null;
//   regions: string[] | number[] | any[] | null;
//   typeMovie: string[] | number[] | any[] | null;
//   topMovies: string[] | number[] | any[] | null;
// };
type popup = {
  sharePopup: string;
  trailerPopup: string;
  packages: string;
  info: string;
  popupYesNo: string;
  logins: string;
  search: string;
};

// type comment = [
//   {
//     id: number;
//     uid: string;
//     slug: string;
//     date: string;
//     name: string;
//     content: string;
//     avatar: string;
//     likes: number;
//     usersLike: string | any;
//     repComments: any;
//   }
// ];
// type itemComment = {
//   id: number;
//   uid: string;
//   slug: string;
//   date: string;
//   name: string;
//   content: string;
//   avatar: string;
//   usersLike: string | any;
//   repComments: any;
//   likes: number;
// };

// type PayMoMo = { method: string; price: string; fullname: string; type: number; title: string };
// type PayItem = { type: string; deadline: number };
type menuCategory = [
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
  { id: string, name: string, path: string },
]
  