import React from 'react';
import { Achievement } from '../../components/Achievement/Achievement';
import { Task } from '../../components/Task/Task';

export const ChallengeResult: React.FC<any> = (props) => {
    let isFinished =
        props.challengeState === 'Success' ||
        props.challengeState === 'Failure';

    let achievements: any = props.achievements.map((a: any) => {
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
            <div>
                <button onClick={props.finishChallenge}>
                    Start New Challenge
                </button>
            </div>
            <div>
                <b>Challenge Status:</b> {props.challengeState}
            </div>
            {isFinished && (
                <div>
                    <div>
                        <b>Achievements List:</b>
                        <div>{achievements}</div>
                    </div>
                    <div>
                        <b>Tasks List:</b>
                    </div>
                    <div>{taskArchive}</div>
                </div>
            )}
        </>
    );
};
