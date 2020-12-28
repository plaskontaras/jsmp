import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
const qs = require('querystring');

export const Login: React.FC = () => {
    console.log(navigator.userAgent);
    const OS = navigator.platform;
    const auth = useContext(AuthContext);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const history = useHistory();

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const registerHandler = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            };

            axios
                .post(
                    'http://localhost:5000/api/signup',
                    qs.stringify({ ...form }),
                    config
                )
                .then((result) => {
                    alert(result.data.message);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.log(e);
        }
    };

    const loginHandler = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            };

            axios
                .post(
                    'http://localhost:5000/api/login',
                    qs.stringify({ ...form }),
                    config
                )
                .then((result) => {
                    const jwtToken = result.data.token;
                    const userId = result.data.userId;
                    auth.login(jwtToken, userId);
                })
                .then((res) => {
                    const data: any = window.localStorage.getItem('userData');

                    let config2 = {
                        params: {
                            secret_token: JSON.parse(data).token,
                            userId: JSON.parse(data).userId,
                        },
                    };

                    axios
                        .get('http://localhost:5000/api/challenge', config2)
                        .then((res) => {
                            if (res.data) {
                                history.push(`/activechallenge`);
                            } else {
                                history.push(`/challenge`);
                            }
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) { }
    };

    return (
        <div className="row">
            <div>
                <h1>Challenge</h1>
                <p>"Hello my {OS} friend" </p>
                <p>You are {navigator.onLine && 'online' || 'offline' !}</p>
                <div>
                    <div>
                        <span>Autorization</span>
                        <div>
                            <div>
                                <input
                                    placeholder="Enter your email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="first_name">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    placeholder="Enter your password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="first_name">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="login-button" onClick={loginHandler}>
                            Login
                        </button>
                        <button
                            className="login-button"
                            onClick={registerHandler}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
