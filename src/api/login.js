import axios from 'axios';

export default {
    /**
     * 获取首页列表页数据
     * @returns {Promise.<*>}
     */
    async getUser() {
        return await axios.get('data.json').then((res) =>
            res.data.result.list
        );
    },
    async login() {
        return await axios.get('data.json').then((res) =>
            res.data.result.list
        );
    }
}