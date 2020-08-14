import React from 'react';
import {Link} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import { Input,Button } from 'antd';
/*import '../../public/css/myCss.css';*/

/*import axios from 'axios';*/

@inject('homeStore')
@observer
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newData: []
        }
    }

    componentDidMount() {
        // axios.get('data.json', {})
        //     .then(res => {
        //         if (res.data.status === 1) {
        //             this.setState({newData: res.data.result.list});
        //             //alert("newData:" + this.newData);
        //         }
        //     })
        this.props.homeStore.getList();
    }

    // 2. 定义handleClick事件
    handleClick = () => {
        /*var arr = [];
        arr.push(this.props.homeStore.list);
        alert(arr);
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].username + arr[i].password);
        }*/
        //console.log("接口数据:" + this.props.homeStore.list)
        /*let a = null;
        console.log("事件触发");
          $.ajax({
              url: 'data.json',
              type: 'get',
              dataType: "json",
              // async: false,
              success: function (data) {
                  a = data.result
                  console.log('json数据：' + a);
              },
              error: function () {
                  alert("失败")
              }
          });*/
    }

    render() {
        return (
            <div>
                <p>{this.props.homeStore.title}</p>
                <div>
                    <i className="user-icon"></i>
                    <Input className="logo1-icon"  placeholder={'请输入用户名'}/>
                </div>
                <div style={{marginTop:20}}>
                    <i className="pwd-icon"></i>
                    <input className="logo1-icon" type={'password'} placeholder={'请输入密码'}/>
                </div>

                <div>
                    <Button type={"submit"}>登录</Button>
                    <Button type={"reset"}>取消</Button>
                </div>
                <Link to="/about">go to About</Link>
                <div>
                    <button onClick={this.handleClick}>测试接口</button>
                </div>
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
                <div style={{ textAlign: 'left', width: '450px', margin: 'auto' }}>
                    <p>下面是列表数据：</p>
                    {
                        this.props.homeStore.list && this.props.homeStore.list.map( ( el ) => {
                            return ( <div key={el.username}>{el.username}：{el.password}</div> )
                        } )
                    }
                </div>

            </div>
        )
    }
}

export default Home