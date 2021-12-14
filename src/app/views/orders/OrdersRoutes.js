import React from 'react'

const OrdersRoutes = [
    // {
    //     path: '/products/basic',
    //     component: React.lazy(() => import('./ProductForm')),
    // },
    // {
    //     path: '/updateproduct/:productid',
    //     component: React.lazy(() => import('./order-manage/Updateproduct')),
    // },
    {
        path: '/orders/manage',
        component: React.lazy(() => import('./order-manage/OrderManage')),
    }
]

export default OrdersRoutes
