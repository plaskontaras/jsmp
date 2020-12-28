import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setTaskArchive } from '../../redux/challenge-reducer';
import { TaskArchive } from './TaskArchive';
import { usersAPI } from '../../api/api';

class TaskArchiveContainer extends React.Component<any> {
    componentDidMount() {
            usersAPI.getTaskArchive()
            .then((res) => {
                if (res.data) {
                    this.props.setTaskArchive(res.data);
                }
            });
    }

    render() {
        return <TaskArchive taskArchive={this.props.taskArchive} />;
    }
}

const mapStateToProps = (state: any) => {
    return {
        taskArchive: state.currentChallenge.taskArchive,
    };
};

export default connect(mapStateToProps, { setTaskArchive })(
    TaskArchiveContainer
);
