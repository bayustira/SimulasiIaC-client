import React, { useState, useEffect }  from 'react';
import instance from '../utils/instance';
import dateFormat from "dateformat";
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';

export const InstanceDetail = () => {
    const [instanceDetail, setInstanceDetail] = useState([]);
    const { instanceid } = useParams();

    useEffect(() => {
        // instance.get(`/server/details/${instanceid}`)
        //     .then(function (res){
        //         console.log(res.data)
        //         setInstanceDetail(res.data.Reservations[0].Instances[0])
        //     })
        //     .catch(function (err){
        //         console.log(err)
        //     })
        getInstanceDetail();
    }, [])

    const getInstanceDetail = async () => {
        try {
            const res = await instance.get(`/server/details/${instanceid}`);
            // console.log(res.data);
            setInstanceDetail(res.data.Reservations[0].Instances[0]);
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
                                <h1>Instance Details</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/stack">Stack</Link></li>
                                    <li className="breadcrumb-item active">Details</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="col-md-12">
                        {/* ./row */}
                        <div className="row">
                                <div className="col-12">
                                    <div className="card card-primary card-tabs">
                                        <div className="card-header p-0 pt-1">
                                            <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">Summary</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <div className="tab-content" id="custom-tabs-one-tabContent">
                                                <div className="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                                                    <dl className="row">
                                                        <dt className="col-sm-2">AMI ID</dt>
                                                        <dd className="col-sm-9">{instanceDetail.ImageId}</dd>
                                                        <dt className="col-sm-2">Instance ID</dt>
                                                        <dd className="col-sm-9">{instanceDetail.InstanceId}</dd>
                                                        <dt className="col-sm-2">Instance Type</dt>
                                                        <dd className="col-sm-9">{instanceDetail.InstanceType}</dd>
                                                        <dt className="col-sm-2">Launch Time</dt>
                                                        <dd className="col-sm-9">{dateFormat(instanceDetail.LaunchTime, "dd/mm/yyyy h:MM:ss TT Z")}</dd>
                                                        <dt className="col-sm-2">Private IPv4 DNS</dt>
                                                        <dd className="col-sm-9">{instanceDetail.PrivateDnsName}</dd>
                                                        <dt className="col-sm-2">Private IPv4 Address</dt>
                                                        <dd className="col-sm-9">{instanceDetail.PrivateIpAddress}</dd>
                                                        <dt className="col-sm-2">Public IPv4 DNS</dt>
                                                        <dd className="col-sm-9">{instanceDetail.PublicDnsName ? instanceDetail.PublicDnsName : `-` }</dd>
                                                        <dt className="col-sm-2">Public IPv4 Address</dt>
                                                        <dd className="col-sm-9">{instanceDetail.PublicIpAddress ? instanceDetail.PublicIpAddress : `-`}</dd>
                                                        <dt className="col-sm-2">Subnet ID</dt>
                                                        <dd className="col-sm-9">{instanceDetail.SubnetId}</dd>
                                                        <dt className="col-sm-2">VPC ID</dt>
                                                        <dd className="col-sm-9">{instanceDetail.VpcId}</dd>
                                                        <dt className="col-sm-2">Platform Details</dt>
                                                        <dd className="col-sm-9">{instanceDetail.PlatformDetails}</dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.card */}
                                    </div>
                                </div>
                            </div>
                    </div>
                    {/* ./col */}
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}
            </MainLayout>
        </div>
    )
}
