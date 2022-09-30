import configRouter from "../config/router";
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Search from "../pages/Search"
import Detail from "../pages/Detail"
import View from "../pages/View";
import HeaderOnly from "../layout/HeaderOnly/HeaderOnly";
import ListMovie from "../pages/ListMovie";
import NonHeader from "../layout/NonHeader/NonHeader";

const router = [
    {path: configRouter.home, component: Home, layout: HeaderOnly},
    {path: configRouter.catalog, component: Catalog, layout: HeaderOnly},
    {path: configRouter.listMovie, component: ListMovie, layout: HeaderOnly},
    {path: configRouter.search, component: Search, layout: HeaderOnly},
    {path: configRouter.detail, component: Detail, layout: HeaderOnly},
    {path: configRouter.view, component: View, layout: NonHeader},
]

export default router;

