import axios from 'axios';

export const usersAPI = {
    getCurrentTask(config: any) {
        return axios.get('http://localhost:5000/api/currenttask', config);
    },

    createChallenge: async () => {
        const data: any = window.localStorage.getItem('userData');
        try {
            const config = {
                params: {
                    secret_token: JSON.parse(data).token,
                    userId: JSON.parse(data).userId,
                },
            };

            axios
                .post(`http://localhost:5000/api/challenge`, {}, config)
                .then(() => {
                    let config2 = {
                        headers: {
                            Authorization: 'JWT ' + config.params.secret_token,
                        },
                        params: {
                            secret_token: JSON.parse(data).token,
                            userId: JSON.parse(data).userId,
                        },
                    };

                    axios.get('http://localhost:5000/api/currenttask', config2);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.log(e);
        }
    },

    getChallenge() {
        const data: any = window.localStorage.getItem('userData');
        const config2 = {
            params: {
                secret_token: JSON.parse(data).token,
                userId: JSON.parse(data).userId,
            },
        };

       return axios
        .get('http://localhost:5000/api/challenge', config2)
    },

    getTaskArchive() {
        const data: any = window.localStorage.getItem('userData');
        const config2 = {
            params: {
                secret_token: JSON.parse(data).token,
                userId: JSON.parse(data).userId,
            },
        };

      return axios
            .get('http://localhost:5000/api/taskarchive', config2)
    }
};
