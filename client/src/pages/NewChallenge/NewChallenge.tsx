import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const qs = require('querystring');

export const NewChallenge: React.FC<any> = (props) => {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const createChallnege = async () => {
        const data: any = window.localStorage.getItem('userData');
        try {
            const config = {
                params: {
                    secret_token: JSON.parse(data).token,
                    userId: JSON.parse(data).userId,
                },
            };

            axios
                .post(
                    `http://localhost:5000/api/challenge`,
                    qs.stringify({ ...form }),
                    config
                )
                .then((result) => {
                    let config2 = {
                        headers: {
                            Authorization: 'JWT ' + config.params.secret_token,
                        },
                        params: {
                            secret_token: JSON.parse(data).token,
                            userId: JSON.parse(data).userId,
                        },
                    };

                    axios
                        .get('http://localhost:5000/api/currenttask', config2)
                        .then((res) => {
                            history.push(`/activechallenge`);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {}
    };

    return (
        <div>
            NewChallenge <br />
            <div className="card-action">
                <button
                    className="btn yellow darken-4"
                    onClick={createChallnege}
                >
                    Create Challenge
                </button>
            </div>
        </div>
    );
};
