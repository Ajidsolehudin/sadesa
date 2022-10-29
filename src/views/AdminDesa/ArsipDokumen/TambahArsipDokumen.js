import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, FormGroup, Input, Button, Spinner } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'


class TambahArsipDokumen extends Component {

    render() {
        return (
            <div className="content">
                <Row>
                    <Col>
                        <Link to="/admindesa/arsipdokumen" className="btn btn-secondary float-right">
                            Kembali
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Tambah Data</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <form className='offset-3'>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>Desa</label>
                                                <Input type="select" name="desa" onChange={(event) => this.handleChanges(event)}>
                                                    <option value="">DESA 1</option>
                                                    <option>DESA 2</option>
                                                    <option>DESA 3</option>
                                                    <option>DESA 4</option>
                                                    <option>DESA 5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>Penduduk</label>
                                                <Input type="select" name="penduduk" onChange={(event) => this.handleChanges(event)}>
                                                    <option value="">2125165367157351 | Warga 1</option>
                                                    <option>2125165367157351 | Warga 2</option>
                                                    <option>2125165367157351 | Warga 3</option>
                                                    <option>2125165367157351 | Warga 4</option>
                                                    <option>2125165367157351 | Warga 5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>Jenis Dokumen</label>
                                                <Input type="select" name="jenisDokumen" onChange={(event) => this.handleChanges(event)}>
                                                    <option value="">Dokumen 1</option>
                                                    <option>Dokumen 2</option>
                                                    <option>Dokumen 3</option>
                                                    <option>Dokumen 4</option>
                                                    <option>Dokumen 5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>File Dokumen</label>
                                                <Input type='file' name="fileDokumen" />
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
            </div >
        )
    }
}

export default TambahArsipDokumen
