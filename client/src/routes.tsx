import { Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { NewChallenge } from './pages/NewChallenge/NewChallenge';

import ActiveChallengeContainer from './pages/ActiveChallenge/ActiveChallengeContainer';
import TaskArchiveContainer from './pages/TaskArchive/TaskArchiveContainer';
import ChallengeResultContainer from './pages/ChallengeResult/ChallengeResultContainer';

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route component={NewChallenge} path="/challenge" exact />
                <Route
                    component={ActiveChallengeContainer}
                    path="/activechallenge"
                    exact
                />
                <Route
                    component={TaskArchiveContainer}
                    path="/taskarchive"
                    exact
                />
                <Route
                    component={ChallengeResultContainer}
                    path="/challengeresult"
                    exact
                />
            </Switch>
        );
    } else {
        return (
            <Switch>
                <Route component={Login} path="/" exact />
            </Switch>
        );
    }
};
