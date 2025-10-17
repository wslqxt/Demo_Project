import { createStore } from "vuex";
import User from "./user.js";

const store = createStore({
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules: {
        User,
    }
});

export default store;
