import React from 'react';
import { useHistory } from 'react-router-dom';
import { Task } from '../../components/Task/Task';

export const TaskArchive: React.FC<any> = (props) => {
    const history = useHistory();

    if (props.taskArchive.length === 0) {
        return <div>There are no tasks in archive yet!</div>;
    }

    const taskArchive = props.taskArchive.map((t: any) => {
        return (
            <Task
                key={t.id}
                description={t.description}
                status={t.status.state}
                updated={t.status.updated}
            />
        );
    });

    return (
        <>
            <div>{taskArchive}</div>
            <button
                className="btn"
                onClick={() => history.push('/activechallenge')}
            >
                Back
            </button>
        </>
    );
};
