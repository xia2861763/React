import React from 'react';
import {Link} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import {Input, Button, Row, Col} from 'antd';

/*import axios from 'axios';*/

@inject('loginStore')
@observer
class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 获取接口数据
        //this.props.loginStore.login();
    }

    // 定义按钮事件
    loginMethod = async () => {
        if (this.props.loginStore.userName === '') {
            alert('用户名不能为空！');
            return;
        } else {
            sessionStorage.setItem('username', this.props.loginStore.userName);
            console.log("用户名：" + sessionStorage.getItem('username'));
        }
        if (this.props.loginStore.passWord === '') {
            alert("密码不能为空！");
            return;
        } else {
            sessionStorage.setItem('pwd', this.props.loginStore.passWord);
        }
        //alert(this.props.loginStore.userName);
        //await this.props.loginStore.Login();

        const success = await this.props.loginStore.Login();
        if (success) {
            alert("登录成功");
            this.props.history.push("/about");     //页面跳转
        } else {
            alert("用户名或密码错误");
        }
    }

    cancelMethod = () => {
        this.props.loginStore.reset();
    }

    changeUserEvent = (e) => {
        this.props.loginStore.userName = e.target.value;
    }

    changePwdEvent = (e) => {
        this.props.loginStore.passWord = e.target.value;
    }

    render() {
        return (
            <div>
                <div>
                    <Row>
                        <Col span={12}>col-12</Col>
                        <Col span={12}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={8}>col-6</Col>
                        <Col span={8}>
                            <div>
                                <i className="user-icon"></i>
                                <Input className="logo1-icon" placeholder={'请输入用户名'} onChange={(e) => this.changeUserEvent(e)}/>
                            </div>
                            <div style={{marginTop: 20}}>
                                <i className="pwd-icon"></i>
                                <input className="logo1-icon" type={'password'} placeholder={'请输入密码'}
                                       onChange={(e) => this.changePwdEvent(e)}/>
                            </div>

                            <div>
                                <Button onClick={this.loginMethod} type={"submit"}>登录</Button>
                                <Button onClick={this.cancelMethod} type={"reset"}>取消</Button>
                            </div>
                            <Link to="/about">go to About</Link>
                            {/*<div>
                    <button onClick={this.handleClick}>测试接口</button>
                </div>*/}
                            {/*<div style={{textAlign: 'left', width: '450px', margin: 'auto'}}>
                    <p>下面是接口返回数据：</p>
                    <div>
                        {this.state.newData ?
                            this.state.newData.map(el => {
                                return (<p key={el.username}>{el.username}----{el.password}</p>)
                            })
                            : null}
                    </div>
                </div>*/}
                            <div style={{textAlign: 'left', width: '450px', margin: 'auto'}}>
                                <p>下面是列表数据：</p>
                                {
                                    this.props.loginStore.list && this.props.loginStore.list.map((el) => {
                                        return (<div key={el.username}>{el.username}：{el.password}</div>)
                                    })
                                }
                                {/*<p>测试数据：</p>
                    {
                        this.props.loginStore.newList && this.props.loginStore.newList.map((name, index) => {
                            return (<div key={index}>{name}</div>)
                        })
                    }*/}
                            </div>
                        </Col>
                        <Col span={8}>col-6</Col>
                    </Row>
                </div>
                <p>{this.props.loginStore.title}</p>

            </div>
        )
    }
}

export default Login