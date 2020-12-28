import React from 'react';
import style from './Task.module.scss';

export const Task: React.FC<any> = (props) => {
    let date = new Date(props.updated);

    return (
        <div className={style.container}>
            <p>Current Task: {props.description}</p>
            <p>Status: {props.status}</p>
            <p>
                Updated: {date.toDateString()} on {date.getHours()}:{' '}
                {date.getMinutes()}
            </p>
        </div>
    );
};
