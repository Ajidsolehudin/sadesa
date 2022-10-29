import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, FormGroup, Input, Button, Spinner } from 'reactstrap';


class TambahDataAdminDesa extends Component {

    render() {
        return (
            <div className="content">
                <Row>
                    <Col>
                        <Link to="/admin/dataadmindesa" className="btn btn-secondary float-right">
                            Kembali
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Tambah Admin Desa</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <form>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>NIP</label>
                                                <Input type='text' name="nip" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Nama Desa</label>
                                                <Input type="select" name="namaDesa" onChange={(event) => this.handleChanges(event)}>
                                                    <option></option>
                                                    <option>Desa Sukaasih</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Username</label>
                                                <Input type='text' name="username" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
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

export default TambahDataAdminDesa
