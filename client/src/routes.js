import Catalog from "./components/Catalog/Catalog";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { ADMIN_ROUTE, CATEGORY_ROUTE, HOME_ROUTE, PRODUCT_ROUTE } from "./utils/consts";

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
];