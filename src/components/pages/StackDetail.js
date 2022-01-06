import React, { useState, useEffect }  from 'react';
import instance from '../utils/instance';
import dateFormat from "dateformat";
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';

export const StackDetail = () => {
    const [stackDetail, setStackDetail] = useState([]);
    const [stackEvents, setStackEvents] = useState([]);
    const [stackResources, setStackResources] = useState([]);
    const [template, setTemplate] = useState('');
    const { stackname } = useParams();

    useEffect(() => {
        getStackDetail();
        getStackEvents();
        getStackResources();
        getTemplate();
    }, [])

    const getStackDetail = async () => {
        try {
            const res = await instance.get(`/stack/details/overview/${stackname}`);
            // console.log(res.data);
            setStackDetail(res.data.Stacks[0])
          } catch (error) {
            console.error(error);
          }
    }

    const getStackEvents = async () => {
        try {
            const res = await instance.get(`/stack/details/events/${stackname}`);
            // console.log(res.data);
            setStackEvents(res.data.StackEvents)
          } catch (error) {
            console.error(error);
          }
    }

    const getStackResources = async () => {
        try {
            const res = await instance.get(`/stack/details/resources/${stackname}`);
            // console.log(res.data);
            setStackResources(res.data.StackResources)
          } catch (error) {
            console.error(error);
          }
    }

    const getTemplate = async () => {
        try {
            const res = await instance.get(`/stack/details/template/${stackname}`);
            // console.log(res.data);
            setTemplate(res.data.TemplateBody)
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
                                <h1>{stackname} Details</h1>
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
                                                <a className="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">Overview</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill" href="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false">Events</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill" href="#custom-tabs-one-messages" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Resources</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="custom-tabs-one-settings-tab" data-toggle="pill" href="#custom-tabs-one-settings" role="tab" aria-controls="custom-tabs-one-settings" aria-selected="false">Template</a>
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <div className="tab-content" id="custom-tabs-one-tabContent">
                                                <div className="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                                                    <dl className="row">
                                                        <dt className="col-sm-2">Stack ID</dt>
                                                        <dd className="col-sm-9">{stackDetail.StackId}</dd>
                                                        <dt className="col-sm-2">Stack Name</dt>
                                                        <dd className="col-sm-9">{stackDetail.StackName}</dd>
                                                        <dt className="col-sm-2">Description</dt>
                                                        <dd className="col-sm-9">{stackDetail.Description}</dd>
                                                        <dt className="col-sm-2">Cration Time</dt>
                                                        <dd className="col-sm-9">{dateFormat(stackDetail.CreationTime, "dd/mm/yyyy h:MM:ss TT Z")}</dd>
                                                        <dt className="col-sm-2">Status</dt>
                                                        <dd className="col-sm-9">{stackDetail.StackStatus}</dd>
                                                    </dl>
                                                </div>
                                                <div className="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
                                                    <div className="card-body table-responsive p-0">
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>Logical ID</th>
                                                                    <th>Timestamp</th>
                                                                    <th>Status</th>
                                                                    <th>Status Reason</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {stackEvents.map((item, index) => (
                                                                        <tr key={index}>
                                                                            <td>{item.LogicalResourceId}</td>
                                                                            <td>{dateFormat(item.Timestamp, "dd/mm/yyyy h:MM:ss TT Z")}</td>
                                                                            <td>{item.ResourceStatus}</td>
                                                                            <td>{item.ResourceStatusReason ? item.ResourceStatusReason : `-`}</td>
                                                                        </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="custom-tabs-one-messages" role="tabpanel" aria-labelledby="custom-tabs-one-messages-tab">
                                                    <div className="card-body table-responsive p-0">
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>Logical ID</th>
                                                                    <th>Physical ID</th>
                                                                    <th>Type</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {stackResources.map((item, index) => (
                                                                        <tr key={index}>
                                                                            <td>{item.LogicalResourceId}</td>
                                                                            <td>{item.PhysicalResourceId}</td>
                                                                            <td>{item.ResourceType}</td>
                                                                        </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="custom-tabs-one-settings" role="tabpanel" aria-labelledby="custom-tabs-one-settings-tab">
                                                    <div className="mb-3">
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={25} defaultValue={template} readOnly />
                                                    </div>
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
