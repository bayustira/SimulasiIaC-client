import React, { useState, useEffect }  from 'react';
import instance from '../utils/instance';
import Swal from 'sweetalert2';
import { MainLayout } from '../Layouts/MainLayout';
import { Link, useParams } from 'react-router-dom';


export const Stacks = () => {
    const [listStack, setListStack] = useState([]);
    const [stackName, setStackName] = useState('');
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const { stackname } = useParams();

    useEffect(() => {
        // instance.get('/stackList')
        //     .then(function (res){
        //         console.log(res)
        //         setListStack(res.data.StackSummaries)
        //     })
        //     .catch(function (err){
        //         console.log(err)
        //     })
            getStackList();      
    }, [])

    const getName = e => {
        setStackName(e.target.value);
      };

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
      };

    const onSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', stackName);
        formData.append('file', file);

        try {
            const res = await instance.put(`/stack/update/${stackname}`, formData);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Template uploaded, update stack in process...'
              });
            // console.log(res);
            // const filePath = res;
            // console.log(`File uploaded! ${filePath}`);
        } catch (err) {
            if (err.response.status === 500) {
                const errorData = err.response.data.errors;
                const errorMessages = errorData.map(({ msg }) => msg)
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: errorMessages.toString()
                  });
                console.log('There was a problem with the server');
            } else {
                console.log(err);
            }
        }
    }

    const getStackList = async () => {
        try {
            const res = await instance.get('/stack');
            // console.log(res);
            setListStack(res.data.StackSummaries)
          } catch (error) {
            console.error(error);
          }
    }

    const onDelete = async (stackname) =>{
        Swal.fire({
            icon: 'warning',
            title: 'Delete Stack?',
            text: 'Once stack deleted, you have to upload script to create stack again',
            showCancelButton: true
        })
        .then((willDelete) => {
            if(willDelete) {
                instance.delete(`/stack/delete/${stackname}`)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                        Swal.fire({
                            icon: 'error',
                            title: err.data.status,
                            text: err.data.message,
                            showCancelButton: true
                        })
                    })
            }
            
        })
        // try {
        //     const res = await instance.delete(`/result/delete/${stackname}`);
        //     console.log(res);
        // } catch (error) {
        //     console.error(error);
        //     Swal.fire({
        //         icon: 'error',
        //         title: error.data.status,
        //         text: error.data.message,
        //         showCancelButton: true
        //     });
        //   }

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
                            <h1>Stacks</h1>
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Stack</li>
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
                                <h3 className="card-title">Stack List</h3>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Stack Name</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listStack.map((item, index) => (
                                                <tr v-for="item in tableItems" key={index}>
                                                    <td>{item.StackName}</td>
                                                    <td>{item.TemplateDescription}</td>
                                                    <td>{item.StackStatus}</td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <Link to={`/stack/details/${item.StackName}`} className="btn btn-default">Details</Link>
                                                            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">Update</button>
                                                            <button type="button" className="btn btn-default" onClick={() =>onDelete(item.StackName)}>Delete</button>
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
                    <div className="modal fade" id="modal-default">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Update Stack</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form enctype="multipart/form-data">
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Nama Stack</label>
                                                <input onChange={getName} name="namaStack" className="form-control" type="text" placeholder="Masukkan nama stack untuk template yang akan diunggah" />
                                                <br />
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <label className="custom-file-label" htmlFor="exampleInputFile">{filename}</label>
                                                        <input type="file" className="custom-file" id="exampleInputFile" onChange={onChange} />
                                                    </div>
                                                </div>
                                                {/* <label htmlFor="exampleInputFile">Format script JSON / YAML</label>
                                                <input type="file" className="custom-file" name="template" accept=".json, .yml" /> */}
                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                    </form>
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={onSubmit}>Update</button>
                                </div>
                            </div>
                            {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                    </div>
                    {/* /.modal */}
                </div>
                {/* /.content-wrapper */}
            </MainLayout>
        </div>
    )
}
