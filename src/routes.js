import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
//import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    //path: "/icons",
    //name: "Dashboard",
    icon: "fa fa-bars text-white",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/index",
    //name: "Icons",
    icon: "fa fa-home text-white",
    component: Index,
    layout: "/admin",
  },
  {
    //path: "/maps",
    //name: "Maps",
    icon: "fa fa-th-large text-white",
    component: Maps,
    layout: "/admin",
  },
  {
    //path: "/user-profile",
    //name: "User Profile",
    icon: "fa fa-file-excel text-white",
    component: Profile,
    layout: "/admin",
  },
  {
    //path: "/tables",
    //name: "Tables",
    icon: "fa fa-signal text-white",
    component: Tables,
    layout: "/admin",
  },
  {
    //path: "/login",
    //name: "Login",
    icon: "fa fa-comment text-white",
    component: Login,
    layout: "/auth",
  },

];
export default routes;
