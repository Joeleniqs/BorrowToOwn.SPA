/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Register from "./Components/Register/Register";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import PaymentPlans from "./Components/PaymentPlans/PaymentPlans";
import Orders from "./Components/Orders/Orders";
import AdminDashBoard from "./Components/DashBoard/AdminDashBoard";

var routes = [
  {
    path: "/Index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: AdminDashBoard,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-planet text-blue",
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "ni ni-pin-3 text-orange",
    component: Categories,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "ni ni-single-02 text-yellow",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/Payment-plans",
    name: "Payment - Plans",
    icon: "ni ni-bullet-list-67 text-red",
    component: PaymentPlans,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/index",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/index",
  },
  //   {
  //     path: "/Index",
  //     name: "Index",
  //     icon: "ni ni-key-25 text-info",
  //     component: Login,
  //     layout: "/front-channel"
  //   },
  //   {
  //     path: "/Index/Product/:id",
  //     name: "Product By Id",
  //     icon: "ni ni-circle-08 text-pink",
  //     component: Register,
  //     layout: "/front-channel"
  //   },
  //   {
  //     path: "/Checkout",
  //     name: "Checkout",
  //     icon: "ni ni-circle-08 text-pink",
  //     component: Register,
  //     layout: "/front-channel"
  // }
];
export default routes;
