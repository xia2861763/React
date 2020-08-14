import {observable, action} from 'mobx';
import HomeApi from '../api/home';

const HomeStore = observable({
    title: '这是登录页',
    list: [],
    //获取首页数据
    async getList() {
        this.list = await HomeApi.getList();
        //alert("list数据：" + this.list.length);
    }
})

export default HomeStore;