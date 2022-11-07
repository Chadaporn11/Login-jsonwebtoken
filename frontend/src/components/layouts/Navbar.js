import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const items = [
    {
        label: <Link to="/login">Login</Link>,
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: <Link to="/register">Register</Link>,
        key: 'app',
        icon: <AppstoreOutlined />,
    },
];

const Navbar = () => {

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Navbar