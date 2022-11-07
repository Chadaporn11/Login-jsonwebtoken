import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({
            type: 'LOGOUT',
            payload: null,
        });
        navigate('/');
    };

    return (
        <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
            <Menu.Item key="login" icon={<MailOutlined />}>
                <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="register" icon={<SettingOutlined />}>
                <Link to="/register">Register</Link>
            </Menu.Item>
            <Menu.Item key="logout" onClick={logout} icon={<AppstoreOutlined />}>
                Logout
            </Menu.Item>

        </Menu>
    )
}

export default Navbar