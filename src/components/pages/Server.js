import React, { useState, useEffect }  from 'react';
import instance from '../utils/instance';
import { MainLayout } from '../Layouts/MainLayout';
import { Link } from 'react-router-dom';


export const Server = () => {
    const [listInstance, setListInstance] = useState([]);

    useEffect(() => {
        getListInstance();      
    }, [])
  
    const getListInstance = async () => {
        try {
            const res = await instance.get('/server');
            console.log(res.data);
            setListInstance(res.data.Reservations)
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <div>
            <MainLayout>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                            <h1>Server</h1>
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Server</li>
                            </ol>
                            </div>
                        </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        {/* /.row */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">EC2 Instance List</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body table-responsive p-0">
                                        <table className="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Instance ID</th>
                                                    <th>Availability Zone</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            {listInstance.map((item, index) => {
                                                    return (
                                                        <tbody key={index}>
                                                            {item.Instances.map((instance) => {
                                                                return (
                                                                    <tr key={instance.InstanceId}>
                                                                        <td>{instance.Tags.find((tag) => tag.Key === "Name").Value}</td>
                                                                        <td>{instance.InstanceId}</td>
                                                                        <td>{instance.Placement.AvailabilityZone}</td>   
                                                                        <td>{instance.State.Name}</td>
                                                                        <td>
                                                                            <div className="btn-group">
                                                                                <Link to={`/server/details/${instance.InstanceId}`} className="btn btn-default">Details</Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}
                                                        </tbody>
                                                    );
                                            })}
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                                
                            </div>
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </MainLayout>
        </div>
    )
}
