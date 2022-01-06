import React, { useState, useEffect }  from 'react';
import instance from '../utils/instance';
import dateFormat from "dateformat";
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';

export const AutoScalingGroupDetails = () => {
    const [asgDetail, setAsgDetail] = useState([]);
    const [asgActivities, setAsgActivities] = useState([]);
    const { asgname } = useParams();

    useEffect(() => {
        getAsgDetail();
        getAsgActivities();
    }, [])

    const getAsgDetail = async () => {
        try {
            const res = await instance.get(`/autoscalinggroups/details/${asgname}`);
            // console.log(res.data);
            setAsgDetail(res.data.AutoScalingGroups[0]);
          } catch (error) {
            console.error(error);
          }
    }

    const getAsgActivities = async () => {
        try {
            const res = await instance.get(`/autoscalinggroups/details/activity/${asgname}`);
            // console.log(res.data);
            setAsgActivities(res.data.Activities);
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
                                <h1>{asgname} Details</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/autoscalinggroups">Auto Scaling Group</Link></li>
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
                                                    <a className="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">Overview</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill" href="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false">Activity</a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a className="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill" href="#custom-tabs-one-messages" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Scaling Policies</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <div className="tab-content" id="custom-tabs-one-tabContent">
                                                <div className="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                                                    <dl className="row">
                                                        <dt className="col-sm-2">Amazon Resource Name (ARN)</dt>
                                                        <dd className="col-sm-9">{asgDetail.AutoScalingGroupARN}</dd>
                                                        <dt className="col-sm-2">Desired Capacity</dt>
                                                        <dd className="col-sm-9">{asgDetail.DesiredCapacity}</dd>
                                                        <dt className="col-sm-2">Minimum Capacity</dt>
                                                        <dd className="col-sm-9">{asgDetail.MinSize}</dd>
                                                        <dt className="col-sm-2">Maximum Capacity</dt>
                                                        <dd className="col-sm-9">{asgDetail.MaxSize}</dd>
                                                        <dt className="col-sm-2">Date Created</dt>
                                                        <dd className="col-sm-9">{dateFormat(asgDetail.CreatedTime, "dd/mm/yyyy h:MM:ss TT Z")}</dd>
                                                    </dl>
                                                </div>
                                                <div className="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
                                                    <div className="card-body table-responsive p-0">
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>Description</th>
                                                                    <th>Status</th>
                                                                    <th>Cause</th>
                                                                    <th>Start Time</th>
                                                                    <th>End Time</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {asgActivities.map((item, index) => (
                                                                    <tr key={index}>
                                                                        <td>{item.Description}</td>
                                                                        <td>{item.StatusCode}</td>
                                                                        <td>{item.Cause}</td>
                                                                        <td>{dateFormat(item.StartTime, "dd/mm/yyyy h:MM:ss TT Z")}</td>
                                                                        <td>{dateFormat(item.EndTime, "dd/mm/yyyy h:MM:ss TT Z")}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                {/* <div className="tab-pane fade" id="custom-tabs-one-messages" role="tabpanel" aria-labelledby="custom-tabs-one-messages-tab">
                                                    <dl>
                                                        <dt>Policy type:</dt>
                                                        <dd>{scalingPolicies.PolicyType}</dd>
                                                        <dt>Is policy enabled or disabled?</dt>
                                                        <dd>{scalingPolicies.Enabled ? `Enabled` : `Disabled`}</dd>
                                                        <dt>Predefined Metric Type</dt>
                                                        <dd></dd>
                                                        <dt>Threshold</dt>
                                                        <dd></dd>
                                                        <dt>Action:</dt>
                                                        <dd>Add or remove instance as required</dd>
                                                    </dl>
                                                </div> */}
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
