import Register from "./Components/Register/Register";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Products/Products";
import ProductDetail from "./Components/ProductDetail/productDetail";
import Login from "./Components/Login/Login";
import PaymentPlans from "./Components/PaymentPlans/PaymentPlans";
import Orders from "./Components/Orders/Orders";
import AdminDashBoard from "./Components/DashBoard/AdminDashBoard";
import Homepage from "./Components/Home/Index";

var routes = [
  {
    path: "/product-details/:productId",
    name: "ProductDetail",
    icon: "ni ni-key-25 text-info",
    component: ProductDetail,
    layout: "/index",
  },
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
  {
    path: "/",
    name: "Index",
    icon: "ni ni-key-25 text-info",
    component: Homepage,
    layout: "/index",
  },

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
