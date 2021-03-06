import React, { Component } from 'react'
import {
    NavBar,
    Icon
} from "antd-mobile"
import { withRouter } from "react-router-dom"

class Header extends Component {

    isDetail(path) {
        return path.indexOf('/detail') !== -1
    }
    isReptile(path) {
        return path.indexOf('/reptile') !== -1
    }

    render() {
        const { history, location } = this.props
        const { pathname } = location
        return <div className='header'>
            {
                this.isDetail(pathname) && <NavBar  icon={<Icon type="left" />} className="normalBar" leftContent="返回"
                    mode="light"
                    onLeftClick={() => history.go(-1)}
                >{location.state.title}</NavBar>
            }
            {
                this.isReptile(pathname) && <NavBar  icon={<Icon type="left" />} className="normalBar" leftContent="返回"
                    mode="light"
                    onLeftClick={() => history.push('/home')}
                >找找看</NavBar>
            }
            {
                pathname === '/user' && <NavBar className="normalBar" iconname="false"
                    mode="light"
                >我的</NavBar>
            }
            {
                pathname === '/collect' && <NavBar  icon={<Icon type="left" />} className="normalBar" leftContent="返回"
                    mode="light"
                    onLeftClick={() => history.go(-1)}
                >收藏</NavBar>
            }
        </div>

    }

}

export default withRouter(Header)