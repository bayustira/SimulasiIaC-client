<div className="card">
                            <div className="card-header">
                                <h3 className="card-title">{stackDetail.StackName}</h3>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                                <dl className="row">
                                    <dt className="col-sm-4">Stack ID</dt>
                                    <dd className="col-sm-6">{stackDetail.StackId}</dd>
                                    <dt className="col-sm-4">Stack Name</dt>
                                    <dd className="col-sm-6">{stackDetail.StackName}</dd>
                                    <dt className="col-sm-4">Description</dt>
                                    <dd className="col-sm-6">{stackDetail.Description}</dd>
                                    <dt className="col-sm-4">Cration Time</dt>
                                    <dd className="col-sm-6">{dateFormat(stackDetail.CreationTime, "dd/mm/yyyy h:MM:ss TT Z")}</dd>
                                    <dt className="col-sm-4">Status</dt>
                                    <dd className="col-sm-6">{stackDetail.StackStatus}</dd>
                                </dl>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}