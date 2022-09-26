import configRouter from "../config/router";
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Search from "../pages/Search"
import Detail from "../pages/Detail"
import Genre from "../pages/Genre";
import View from "../pages/View";
import HeaderOnly from "../layout/HeaderOnly/HeaderOnly";

const router = [
    {path: configRouter.home, component: Home, layout: HeaderOnly},
    {path: configRouter.catalog, component: Catalog, layout: HeaderOnly},
    {path: configRouter.genre, component: Genre, layout: HeaderOnly},
    {path: configRouter.search, component: Search, layout: HeaderOnly},
    {path: configRouter.detail, component: Detail, layout: HeaderOnly},
    {path: configRouter.view, component: View},
]

export default router;

