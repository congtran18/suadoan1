import './App.scss'
import '../fake-db'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import AppContext from './contexts/AppContext'
import history from 'history.js'
import routes from './RootRoutes'
import { Store } from './redux/Store'
import { GlobalCss, AdminSuspense, AdminTheme, AdminLayout } from 'app/components'
import sessionRoutes from './views/sessions/SessionRoutes'
import AuthGuard from './auth/AuthGuard'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import ProductContextProvider from 'app/contexts/ProductContext'

const App = () => {
    return (
        <>
            <AppContext.Provider value={{ routes }}>
                <Provider store={Store}>
                    <SettingsProvider>
                    <ProductContextProvider>
                            <AdminTheme>
                                <GlobalCss />
                                <BrowserRouter basename={process.env.PUBLIC_URL}>
                                    <Router history={history}>
                                        <AuthProvider>
                                            <AdminSuspense>
                                                <Switch>
                                                    {/* AUTHENTICATION PAGES (SIGNIN, SIGNUP ETC.) */}
                                                    {sessionRoutes.map((item, i) => (
                                                        <Route
                                                            key={i}
                                                            path={item.path}
                                                            component={item.component}
                                                        />
                                                    ))}
                                                    {/* AUTH PROTECTED DASHBOARD PAGES */}
                                                    <AuthGuard>
                                                        <AdminLayout />{' '}
                                                        {/* RETURNS <Layout1/> component */}
                                                    </AuthGuard>
                                                </Switch>
                                            </AdminSuspense>
                                        </AuthProvider>
                                    </Router>
                                </BrowserRouter>
                            </AdminTheme>
                        </ProductContextProvider>
                    </SettingsProvider>
                </Provider>
            </AppContext.Provider>
        </>
    )
}

export default App
