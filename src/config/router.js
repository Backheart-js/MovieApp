const configRouter = {
    home: '/',
    catalog: '/:category',
    listMovie: '/:category/:type',
    search: '/:category/keyword=:keyword',
    detail: '/:category/infomation/id=:id',
    view: '/view/id=:id',
}

export default configRouter;