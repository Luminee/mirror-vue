import {defineStore} from "pinia";
import axios from "axios";

export const useAxiosStore = defineStore('axios', {
    state: () => ({
        axios: axios
    }),

    actions: {
        get(url: string) {
            return this.axios.get(url)
        },
        post(url: string, data: any) {
            return this.axios.post(url, data)
        }
    }

})