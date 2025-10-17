
export default {
    namespaced: true,
    state: {
        token: '',
        username: '',
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        // getUsername:(state)=>{
        //     return state.username;
        // }
        getUsername: (state) => state.username,

        isLogin(state) {
            // 已经登录，token和username都不为空
            return (!!state.username) && (!!state.token);
        }
    },
    mutations: {
        setTokenAndUsername(state, payload) {
            const { token, username } = payload;
            state.token = token;
            state.username = username;
            localStorage.setItem('myVue_x_token', token);
            localStorage.setItem('myVue_x_username', username);
        },
        clearTokenAndUsername(state) {
            state.token = '';
            state.username = '';
            localStorage.removeItem('myVue_x_token');
            localStorage.removeItem('myVue_x_username');
        }


    }

}