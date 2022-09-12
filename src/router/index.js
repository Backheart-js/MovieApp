import configRouter from "../config/router";
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import Search from "../pages/Search"
import Detail from "../pages/Detail"


const router = [
    {path: configRouter.home, component: Home},
    {path: configRouter.catalog, component: Catalog},
    {path: configRouter.search, component: Search},
    {path: configRouter.detail, component: Detail},
]

export default router;

