import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, FormGroup, Input, Button, Spinner } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'


class EditJenisDokumen extends Component {

    render() {
        return (
            <div className="content">
                <Row>
                    <Col>
                        <Link to="/admindesa/jenisdokumen" className="btn btn-secondary float-right">
                            Kembali
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Edit Data</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <form className='offset-3'>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>Jenis Dokumen</label>
                                                <Input type="select" name="jenisDokumen" onChange={(event) => this.handleChanges(event)}>
                                                    <option value="">SURAT 1</option>
                                                    <option>SURAT 2</option>
                                                    <option>SURAT 3</option>
                                                    <option>SURAT 4</option>
                                                    <option>SURAT 5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <label>Persyaratan</label>
                                                <Input type='textarea' name="persyaratan" />
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

export default EditJenisDokumen
