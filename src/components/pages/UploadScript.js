import React, { useState } from 'react';
import instance from '../utils/instance';
import Swal from 'sweetalert2';
import { MainLayout } from '../Layouts/MainLayout';


export const UploadScript = () => {
    const [stackName, setStackName] = useState('');
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');

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
            const res = await instance.post('/upload', formData);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Template uploaded, create stack in process...'
              });
            console.log(res.data);
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
                console.log(err.response.data.msg);
            }
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
                        <h1>Upload Script</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Upload Script</li>
                            </ol>
                        </div>
                    </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    {/* Default box */}
                    <div className="card">
                    <div className="card card-primary">
                        <div className="card-header">
                        <h3 className="card-title">Form Upload Script</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form onSubmit={onSubmit} enctype="multipart/form-data">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Nama Stack</label>
                                <input onChange={getName} name="namaStack" className="form-control" type="text" placeholder="Masukkan nama stack untuk script yang akan diunggah" required/>
                                <br />
                                <label htmlFor="exampleInputFile">File Script</label>
                                <div className="input-group">
                                    <div className="custom-file">
                                        <label className="custom-file-label" htmlFor="exampleInputFile">{filename}</label>
                                        <input type="file" className="custom-file" id="exampleInputFile" onChange={onChange} required/>
                                    </div>
                                </div>
                                {/* <label htmlFor="exampleInputFile">Format script JSON / YAML</label>
                                <input type="file" className="custom-file" name="template" accept=".json, .yml" /> */}
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Upload</button>
                        </div>
                        </form>
                    </div>
                    {/* /.card-footer*/}
                    </div>
                    {/* /.card */}
                </section>
                {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </MainLayout>
            

        </div>
    )
}
