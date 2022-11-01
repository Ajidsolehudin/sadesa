import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'



class ListJenisDokumen extends Component {

    render() {
        return (
            <div className="content" style={{ fontSize: 12 }}>
                <Row>
                    <Col md="12">
                        <Card>

                            <CardHeader>
                                <CardTitle tag="h4">Jenis Dokumen</CardTitle>
                                <Link to="/admindesa/jenisdokumen/tambah" className='btn btn-primary'>
                                    Tambah Data
                                </Link>
                            </CardHeader>

                            <CardBody>
                                {/* <Table striped bordered hover responsive> */}
                                <Table striped bordered hover size="sm" responsive>


                                    <thead className='text-primary'>
                                        <tr>
                                            <th>Jenis Dokumen</th>
                                            <th>Persyaratan</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>SURAT KETERANGAN DOMISILI</td>
                                            <td>-</td>


                                            <td>
                                                {/* <Link className='btn btn-warning'>
                            <i className='nc-icon nc-ruler-pencil'></i>
                          </Link> */}


                                                <Col>
                                                    {/* <Link className='btn btn-warning' to={'/admindesa/jenisdokumen/edit'}>
                                                        edit
                                                    </Link> */}
                                                    <Button color='warning' className='ml-2'>
                                                        <i className='nc-icon nc-ruler-pencil'></i>
                                                    </Button>

                                                    <Button color='danger' className='ml-2'>
                                                        <i className='nc-icon nc-basket'></i>
                                                    </Button>
                                                </Col>
                                            </td>

                                        </tr>

                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ListJenisDokumen
