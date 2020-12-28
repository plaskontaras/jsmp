import React from 'react';

function noop() {}

export const AuthContext = React.createContext<any>({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isChallenge: false,
});
