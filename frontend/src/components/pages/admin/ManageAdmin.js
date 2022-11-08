import React, { useState, useEffect } from 'react';
import MenubarAdmin from '../../layouts/MenubarAdmin';
import { useSelector } from 'react-redux';
import { Switch, Select, Tag } from 'antd';


//function
import { listUser, changeStatus, changeRole } from '../../functions/users';


const ManageAdmin = () => {

    const { user } = useSelector((state) => ({ ...state }));
    const [data, setData] = useState([]);
    const roleData = ['admin', 'user'];

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

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr>
                                    <th scope="row">{item.username}</th>
                                    <td>
                                        <Select
                                            style={{ width: '100%' }}
                                            defaultValue={item.role}
                                            onChange={(e) => handleOnChangeRole(e, item._id)}>
                                            {roleData.map((item, index) =>
                                                <Select.Option value={item} key={index}>
                                                    { item == 'admin'
                                                    ? <Tag color='green'>{item}</Tag> 
                                                    : <Tag color='red'>{item}</Tag>
                                                }
                                                </Select.Option>
                                            )}
                                        </Select>
                                    </td>
                                    <td>{item.enabled}
                                        <Switch checked={item.enabled} onChange={(e) => handleOnChange(e, item._id)} /></td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.updatedAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageAdmin;