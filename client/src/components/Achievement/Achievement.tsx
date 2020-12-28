import React from 'react';
import style from './Achievement.module.scss';

export const Achievement: React.FC<{
    description: string;
    status: any;
    id: string;
    image: string;
}> = (props) => {
    return (
        <div className={style.container}>
            <div>
                <img src={props.image} alt="ava" className={style.ava} />
            </div>
            {props.description} : {props.status.state}
        </div>
    );
};