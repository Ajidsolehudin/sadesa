import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, FormGroup, Input, Button, Spinner } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'


class TambahPersyaratan extends Component {

    render() {
        return (
            <div className="content">
                <Row>
                    <Col>
                        <Link to="/warga/pengajuan" className="btn btn-secondary float-right">
                            Kembali
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Tambah Persyaratan</CardTitle>
                            </CardHeader>
                            <CardBody>

                                <form className='offset-3'>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>Nama Persyaratan</label>
                                                <Input type='text' name="namaPersyaratan" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>File Persyaratan</label>
                                                <Input type='file' name="filePersyaratan" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Button color='primary' type='submit'>
                                                Simpan
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TambahPersyaratan
