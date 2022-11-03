import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, FormGroup, Input, Button, Spinner } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'


class TambahAkunRW extends Component {

    render() {
        return (
            <div className="content">
                <Row>
                    <Col>
                        <Link to="/admindesa/dataakunrw" className="btn btn-secondary float-right">
                            Kembali
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Tambah Akun RW</CardTitle>
                            </CardHeader>
                            <CardBody>

                                <form className='offset-3'>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>Nomor RW</label>
                                                <Input type='number' name="nomorRw" />
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

export default TambahAkunRW
