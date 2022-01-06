import React, { useState, useEffect }  from 'react';
import instance from '../utils/instance';
import Swal from 'sweetalert2';
import dateFormat from "dateformat";
import { MainLayout } from '../Layouts/MainLayout';
import { Link } from 'react-router-dom';

export const LoadBalancer = () => {
    const [listLoadBalancer, setListLoadBalancer] = useState([]);

    useEffect(() => {
        getListLoadBalancer();      
    }, [])
  
    const getListLoadBalancer = async () => {
        try {
            const res = await instance.get('/loadbalancer');
            // console.log(res.data);
            setListLoadBalancer(res.data.LoadBalancers)
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
                            <h1>Load Balancer</h1>
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Load Balancer</li>
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
                                        <h3 className="card-title">Load Balancer List</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body table-responsive p-0">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>DNS Name</th>
                                                    <th>Status</th>
                                                    <th>Type</th>
                                                    <th>Availability Zones</th>
                                                    <th>VPC ID</th>
                                                    <th>Created At</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {listLoadBalancer.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.LoadBalancerName}</td>
                                                        <td>{item.DNSName}</td>
                                                        <td>{item.State.Code}</td>
                                                        <td>{item.Type}</td>
                                                        <td>{item.AvailabilityZones.map(({ZoneName}) => ZoneName).toString()}</td>
                                                        <td>{item.VpcId}</td>
                                                        <td>{dateFormat(item.CreatedTime, "dd/mm/yyyy h:MM:ss TT Z")}</td>
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
