import {observable, action} from 'mobx';
import loginApi from '../api/login';

const loginStore = observable({
    title: '登录页',
    userName: "",
    passWord: "",//登陆密码-加密前
    list: [],
    // newList: [],
    //获取首页数据
    /*@action async getUser() {
        this.list = await loginApi.getUser(this.userName,this.passWord);
        //alert("list数据：" + this.list.length);
    },*/
    async Login() {
        this.list = await loginApi.login();
        /*this.list.filter((item) => {
            this.newList.push(item.username);
            this.newList1.push(item.password);
        })*/
        for (let i in this.list) {
            if (this.list[i].username == this.userName && this.list[i].password == this.passWord) {
                return true;
                break;
            }
        }
        /*this.list.forEach((item => {
            this.newList.push(item.username);
        }))*/
    },
    async reset() {
        this.list = [];
        //alert("list数据：" + this.list.length);
    }
})

export default loginStore;
