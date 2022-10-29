import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, FormGroup, Input, Button, Spinner } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'


class TambahAkunPenduduk extends Component {

    render() {
        return (
            <div className="content">
                <Row>
                    <Col>
                        <Link to="/admindesa/dataakunpenduduk" className="btn btn-secondary float-right">
                            Kembali
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Tambah Akun Penduduk</CardTitle>
                            </CardHeader>
                            <CardBody>

                                <form className='offset-3'>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>NIK | Nama Lengkap</label>
                                                <Input type="select" name="nik" onChange={(event) => this.handleChanges(event)}>
                                                    <option value=""></option>
                                                    <option>321463171673618318 | Nurjaman</option>
                                                    <option>321463171673618363 | Nurjaman</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>Nama Pengguna</label>
                                                <Input type='text' name="namaPengguna" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>Password</label>
                                                <Input type='text' name="password" />
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

export default TambahAkunPenduduk
