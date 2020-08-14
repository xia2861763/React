import axios from 'axios';

export default {

    /**
     * 获取首页列表页数据
     * @returns {Promise.<*>}
     */
    async getList() {
        return await axios.get('data.json').then((res) =>
            res.data.result.list
        );
    }
}