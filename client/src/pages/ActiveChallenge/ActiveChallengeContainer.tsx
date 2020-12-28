import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ActiveChallenge } from './ActiveChallenge';
import axios from 'axios';
import { setCurrentTask } from '../../redux/challenge-reducer';
import { setCurrentAchievements } from '../../redux/challenge-reducer';
import { finishCurrentTask } from '../../redux/challenge-reducer';
import { setStartDate } from '../../redux/challenge-reducer';
import { setChallengeState } from '../../redux/challenge-reducer';

const qs = require('querystring');

class ActiveChallengeContainer extends React.Component<any> {
    componentDidMount() {
        axios
            .get('http://localhost:5000/api/currentachievement', this.config2)
            .then((res) => {
                this.props.setCurrentAchievements(res.data);
            });

        axios
            .get('http://localhost:5000/api/currenttask', this.config2)
            .then((res) => {
                this.props.setCurrentTask(res.data);
            });

        axios
            .get('http://localhost:5000/api/challenge', this.config2)
            .then((res) => {
                this.props.setStartDate(res.data.startDate);
            });
    }

    data: any = window.localStorage.getItem('userData');

    config2 = {
        params: {
            secret_token: JSON.parse(this.data).token,
            userId: JSON.parse(this.data).userId,
        },
    };

    onFinishCurrentTask = (achievements: any) => {
        axios
            .post('http://localhost:5000/api/cas', {}, this.config2)
            .then((res) => {
                this.props.finishCurrentTask(res.data);
            })
            .then((res) => {
                axios
                    .get('http://localhost:5000/api/currenttask', this.config2)
                    .then((res) => {
                        this.props.setCurrentTask(res.data);
                    });
            })
            .then((res) => {
                let endOfChallengeDate = new Date(
                    Date.parse(this.props.startDate) + 30 * 24 * 3600 * 1000
                ).getDate();
                let endOfChallengeMonth = new Date(
                    Date.parse(this.props.startDate) + 30 * 24 * 3600 * 1000
                ).getMonth();

                let presentDate = new Date().getDate();
                let presentMonth = new Date().getMonth();

                if (
                    endOfChallengeDate === presentDate &&
                    endOfChallengeMonth === presentMonth
                ) {
                    axios
                        .put(
                            'http://localhost:5000/api/challenge',
                            {},
                            this.config2
                        )
                        .then((res) => {
                            this.props.setChallengeState(
                                res.data.challengeState
                            );
                        })
                        .then((res) => {
                            axios
                                .get(
                                    'http://localhost:5000/api/currentachievement',
                                    this.config2
                                )
                                .then((res) => {
                                    this.props.setCurrentAchievements(res.data);
                                    this.props.history.push('/challengeresult');
                                });
                        });
                }
            });
    };

    render() {
        return (
            <ActiveChallenge
                currentTask={this.props.currentTask}
                achievements={this.props.achievements}
                startDate={this.props.startDate}
                onFinishCurrentTask={this.onFinishCurrentTask}
            />
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        currentTask: state.currentChallenge.currentTask,
        achievements: state.currentChallenge.achievements,
        taskArchive: state.currentChallenge.taskArchive,
        startDate: state.currentChallenge.startDate,
    };
};

export default connect(mapStateToProps, {
    setCurrentTask,
    setCurrentAchievements,
    finishCurrentTask,
    setStartDate,
    setChallengeState,
})(withRouter(ActiveChallengeContainer));
