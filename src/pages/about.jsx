import React from 'react'
import {Link} from 'react-router-dom'
import {inject} from 'mobx-react';
import { Button } from 'antd';

@inject('aboutStore')

class About extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.aboutStore.title}</p>
                <Link to="/">go to Home</Link>
                <div className="App">
                    <Button type="primary">Button</Button>
                </div>
            </div>
        )
    }
}

export default About;