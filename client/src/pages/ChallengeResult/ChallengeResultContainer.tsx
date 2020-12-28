import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setChallengeState } from '../../redux/challenge-reducer';
import { ChallengeResult } from './ChallengeResult';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ChallengeResultContainer extends React.Component<any> {
    componentDidMount() {
        usersAPI.getChallenge()
            .then((res) => {
                this.props.setChallengeState(res.data.challengeState);
            });
    }

    data: any = window.localStorage.getItem('userData');
    config2 = {
        params: {
            secret_token: JSON.parse(this.data).token,
            userId: JSON.parse(this.data).userId,
        },
    };

    finishChallenge = async () => {
        await axios.delete('http://localhost:5000/api/challenge', this.config2);
        this.props.history.push('/challenge');
    };

    render() {
        return (
            <ChallengeResult
                challengeState={this.props.challengeState}
                achievements={this.props.achievements}
                taskArchive={this.props.taskArchive}
                finishChallenge={this.finishChallenge}
            />
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        challengeState: state.currentChallenge.challengeState,
        achievements: state.currentChallenge.achievements,
        taskArchive: state.currentChallenge.taskArchive,
    };
};

export default connect(mapStateToProps, { setChallengeState })(
    withRouter(ChallengeResultContainer)
);
