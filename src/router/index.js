import configRouter from "../config/router";
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Search from "../pages/Search"
import Detail from "../pages/Detail"
import HeaderOnly from "../layout/HeaderOnly/HeaderOnly";
import MainLayout from "../layout/MainLayout/MainLayout";



const router = [
    {path: configRouter.home, component: Home, layout: HeaderOnly},
    {path: configRouter.catalog, component: Catalog, layout: MainLayout},
    {path: configRouter.search, component: Search, layout: HeaderOnly},
    {path: configRouter.detail, component: Detail, layout: HeaderOnly},
]

export default router;

