import styles from './Navbar.module.scss';
import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    };

    return (
        <nav>
            <div className={styles.wrapper}>
                <a href="/" className={styles.logo}>
                    Challenge
                </a>
                <ul id="nav-mobile" className={styles.nav}>
                    <li>
                        <NavLink
                            to="/activechallenge"
                            activeClassName={styles.active}
                        >
                            ActiveChallenge
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/taskarchive"
                            activeClassName={styles.active}
                        >
                            TaskArchive
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/challengeresult"
                            activeClassName={styles.active}
                        >
                            ChallengeResult
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
