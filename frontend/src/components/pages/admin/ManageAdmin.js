import React, { useState, useEffect } from 'react';
import MenubarAdmin from '../../layouts/MenubarAdmin';
import { useSelector } from 'react-redux';
import { Switch, Select, Tag, Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import moment from 'moment/min/moment-with-locales';


//function
import {
    listUser,
    changeStatus,
    changeRole,
    removeUser,
    resetPassword
} from '../../functions/users';


const ManageAdmin = () => {

    const { user } = useSelector((state) => ({ ...state }));
    const [data, setData] = useState([]);
    const roleData = ['admin', 'user'];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState({
        id: "",
        password: "",
    });

    const showModal = (id) => {
        setIsModalOpen(true);
        setValue({ ...value, id: id, });

    };

    const handleChangePassword = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleOk = () => {
        setIsModalOpen(false);
        console.log(value);
        resetPassword(user.token, value.id, {value})
            .then(res => {
                console.log(res);
                loadData(user.token);

            }).catch(err => {
                console.log(err.response);

            });

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const loadData = (authtoken) => {
        //code
        listUser(authtoken)
            .then(res => {
                setData(res.data);

            }).catch(err => {
                console.log(err.response.data);

            });
    }

    const handleOnChange = (e, id) => {
        const value = {
            id: id,
            enabled: e,
        }
        changeStatus(user.token, value)
            .then(res => {
                console.log(res);
                loadData(user.token);

            }).catch(err => {
                console.log(err.response);

            });

    };

    const handleOnChangeRole = (e, id) => {
        const value = {
            id: id,
            role: e,
        }
        console.log(value);

        changeRole(user.token, value)
            .then(res => {
                console.log(res);
                loadData(user.token);

            }).catch(err => {
                console.log(err.response);

            });
    };

    const handleRemove = (id) => {
        if (window.confirm("Are youe sure Delete!")) {
            removeUser(user.token, id)
                .then(res => {
                    console.log(res);
                    loadData(user.token);

                }).catch(err => {
                    console.log(err.response);

                });

        }
    }




    useEffect(() => {
        //code
        loadData(user.token);

    }, []);


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <MenubarAdmin />
                </div>
                <div className='col'>
                    <h1>Manage Admin</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">username</th>
                                <th scope="col">role</th>
                                <th scope="col">status</th>
                                <th scope="col">created</th>
                                <th scope="col">updated</th>
                                <th scope="col">action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr>
                                    <th scope="row">{item.username}</th>
                                    <td>
                                        <Select
                                            style={{ width: '100%' }}
                                            value={item.role}
                                            onChange={(e) => handleOnChangeRole(e, item._id)}>
                                            {roleData.map((item, index) =>
                                                <Select.Option value={item} key={index}>
                                                    {item == 'admin'
                                                        ? <Tag color='green'>{item}</Tag>
                                                        : <Tag color='red'>{item}</Tag>
                                                    }
                                                </Select.Option>
                                            )}
                                        </Select>
                                    </td>
                                    <td>{item.enabled}
                                        <Switch checked={item.enabled} onChange={(e) => handleOnChange(e, item._id)} /></td>
                                    <td>{moment(item.createdAt).locale('th').format('LLL')}</td>
                                    <td>{moment(item.updatedAt).locale('th').startOf(item.updatedAt).fromNow()}</td>
                                    <td>
                                        <DeleteOutlined onClick={() => handleRemove(item._id)} />
                                        <EditOutlined onClick={() => showModal(item._id)} />
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>New password:</p>
                        <input type="text" name="password" onChange={handleChangePassword} />
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default ManageAdmin;