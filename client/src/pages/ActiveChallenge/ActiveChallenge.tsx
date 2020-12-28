import React from 'react';
import { Achievement } from '../../components/Achievement/Achievement';
import { Task } from '../../components/Task/Task';
import style from './ActiveChallenge.module.scss';

export const ActiveChallenge: React.FC<{
    currentTask: any;
    achievements: any[];
    onFinishCurrentTask: any;
    startDate: any;
}> = (props) => {
    let achievements: any = props.achievements.map((a) => {
        return (
            <Achievement
                id={a.id}
                description={a.description}
                status={a.status}
                key={a.id}
                image={a.image}
            />
        );
    });

    return (
        <div className={style.container}>
            <div>Start Date: {props.startDate}</div>
            <Task
                description={props.currentTask.description}
                status={props.currentTask.status.state}
                updated={props.currentTask.status.updated}
            />
            <div>
                Achievements List:
                <div>{achievements}</div>
            </div>
            <button onClick={props.onFinishCurrentTask}>Finish Task</button>
        </div>
    );
};
