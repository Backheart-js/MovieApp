const configRouter = {
    home: '/',
    search: '/:category/search/:keyword',
    catalog: '/:category',
    genre: '/:category/genre=:genre',
    detail: '/infomation?id=:id',
    view: '/view/:category?id=:id',
}

export default configRouter;