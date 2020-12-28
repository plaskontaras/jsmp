import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Navbar } from './pages/Navbar/Navbar';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { useRoutes } from './routes';

const App: React.FC = () => {
    const {
        token,
        login,
        logout,
        userId,
    } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
                userId,
                isAuthenticated,
            }}
        >
            <BrowserRouter>
                <div className="container">
                    {
                        isAuthenticated && <Navbar />
                    }
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default hot(module)(App);
