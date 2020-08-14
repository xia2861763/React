import React from 'react';
import {Link} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import {Input, Button, Row, Col, Icon} from 'antd';

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

    onChangeUserName = (e) => {
        this.props.loginStore.userName = e.target.value;
    }

    changePwdEvent = (e) => {
        this.props.loginStore.passWord = e.target.value;
    }

    render() {
        return (
            <div className="wrap">
                <Row style={{height: '33%'}}>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <p>{this.props.loginStore.title}</p>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                <Row style={{height: '33%'}}>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Row gutter={16}>
                            <Col span={5}>
                                <div>
                                    {/*<Input
                                placeholder="Enter your userName"
                                prefix={<Icon type="user" />}
                                suffix={suffix}
                                value={userName}
                                onChange={this.onChangeUserName}
                                ref={node => this.userNameInput = node}
                            />*/}
                                    <i className="user-icon"></i>
                                    <input className="logo1-icon" placeholder={'请输入用户名'}
                                           onChange={(e) => this.changeUserEvent(e)}/>
                                </div>
                            </Col>
                            <Col span={5}>
                                <div>
                                    <i className="pwd-icon"></i>
                                    {/*<span className="icnn"></span>*/}
                                    <input className="logo1-icon" type={'password'} placeholder={'请输入密码'}
                                           onChange={(e) => this.changePwdEvent(e)}/>
                                </div>
                            </Col>
                            <Col span={5}>
                                <div>
                                    <i className="code-icon"/>
                                    {/*<span>|</span>*/}
                                    <input className="logo1-icon" placeholder={'请输入验证码'}
                                           onChange={(e) => this.changePwdEvent(e)}/>
                                </div>
                            </Col>
                            <Col span={5}>
                                <img id="codeImg" alt="点击刷新"/>

                            </Col>
                            <Col span={4}>
                                <div>
                                    <Button onClick={this.loginMethod} type={"submit"}>登录</Button>
                                    {/*<Button onClick={this.cancelMethod} type={"reset"}>取消</Button>*/}
                                </div>
                            </Col>
                        </Row>


                        {/* <div>
                            <Button onClick={this.loginMethod} type={"submit"}>登录</Button>
                            <Button onClick={this.cancelMethod} type={"reset"}>取消</Button>
                        </div>*/}
                        {/*<Link to="/about">go to About</Link>*/}

                    </Col>
                    <Col span={4}></Col>
                </Row>
            </div>
        )
    }
}

export default Login