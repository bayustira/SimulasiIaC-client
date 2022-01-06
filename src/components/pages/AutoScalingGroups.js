import React, { useState, useEffect }  from 'react';
import instance from '../utils/instance';
import { Link } from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';

export const AutoScalingGroups = () => {
    const [listAsg, setListAsg] = useState([]);

    useEffect(() => {
        getListAutoScalingGroups();      
    }, [])
  
    const getListAutoScalingGroups = async () => {
        try {
            const res = await instance.get('/autoscalinggroups');
            // console.log(res.data);
            setListAsg(res.data.AutoScalingGroups)
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
                            <h1>Auto Scaling Group</h1>
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Auto Scaling Group</li>
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
                                        <h3 className="card-title">Auto Scaling Group List</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body table-responsive p-0">
                                        <table className="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Launch Configuration</th>
                                                    <th>Instances</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {listAsg.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.AutoScalingGroupName}</td>
                                                        <td>{item.LaunchConfigurationName}</td>
                                                        <td>{item.Instances.length}</td>
                                                        <td>{item.Status ? item.Status : `-`}</td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <Link to={`/autoscalinggroups/details/${item.AutoScalingGroupName}`} className="btn btn-default">Details</Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
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
