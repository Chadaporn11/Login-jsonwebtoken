import React, { useState, useEffect} from 'react';
import MenubarAdmin from '../../layouts/MenubarAdmin';
import { useSelector } from 'react-redux';

//function
import { listUser } from '../../functions/users';


const ManageAdmin = () => {

    const { user } = useSelector((state) => ({...state}));
    const [ data, setData ] = useState([]);

    const loaddata = (authtoken) => {
        //code
        listUser(authtoken)
        .then(res => {
            setData(res.data);

        }).catch(err =>{
            console.log(err.response.data);

        });
    }

    console.log(data);


    useEffect(()=> {
        //code
        loaddata(user.token);

    },[]);


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
                                <td>{item.role}</td>
                                <td>{item.enable}</td>
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