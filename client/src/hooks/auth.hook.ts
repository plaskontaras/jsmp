import { useCallback, useState, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isChallenge, setIsChallenge] = useState(false);

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken);
        setUserId(id);

        localStorage.setItem(
            storageName,
            JSON.stringify({
                userId: id,
                token: jwtToken,
            })
        );
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setIsChallenge(false);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const loc = window.localStorage.getItem(storageName);
        if (loc) {
            const data = JSON.parse(loc);
            if (data && data.token) {
                login(data.token, data.userId);
            }
        }
    }, [login]);

    return {
        login,
        logout,
        token,
        userId,
        isChallenge,
    };
};
