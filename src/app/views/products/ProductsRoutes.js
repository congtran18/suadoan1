import React from 'react'

const ProductsRoutes = [
    {
        path: '/products/basic',
        component: React.lazy(() => import('./ProductForm')),
    },
    {
        path: '/updateproduct/:productid',
        component: React.lazy(() => import('./product-manage/Updateproduct')),
    },
    {
        path: '/products/manage',
        component: React.lazy(() => import('./product-manage/ProductManage')),
    },
    {
        path: '/category/manage',
        component: React.lazy(() => import('./product-manage/CategoryManage')),
    }
]

export default ProductsRoutes
