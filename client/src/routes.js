import { ACCOUNT_ROUTE, ADMIN_ROUTE, CART_ROUTE, CATEGORY_ROUTE, CHECKOUT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE } from "./utils/consts";
import Catalog from "./components/Catalog/Catalog";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";



export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
];
export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: CATEGORY_ROUTE,
        Component: Catalog
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },
    {
        path: CART_ROUTE,
        Component: Cart
    },
    {
        path: CHECKOUT_ROUTE,
        Component: Checkout
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
];