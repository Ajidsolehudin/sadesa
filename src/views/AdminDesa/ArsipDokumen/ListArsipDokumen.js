import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'



class ListArsipDokumen extends Component {

    render() {
        return (
            <div className="content" style={{ fontSize: 12 }}>
                <Row>
                    <Col md="12">
                        <Card>

                            <CardHeader>
                                <CardTitle tag="h4">Arsip Dokumen</CardTitle>
                                <Link to="/admindesa/arsipdokumen/tambah" className='btn btn-primary'>
                                    Tambah Data
                                </Link>
                            </CardHeader>

                            <CardBody>
                                {/* <Table striped bordered hover responsive> */}
                                <Table striped bordered hover size="sm" responsive>


                                    <thead className='text-primary'>
                                        <tr>
                                            <th>NIK</th>
                                            <th>Nama Penduduk</th>
                                            <th>Desa/Kelurahan</th>
                                            <th>Jenis Dokumen</th>
                                            <th>File Dokumen</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>32178979812798219</td>
                                            <td>Nurjaman</td>
                                            <td>Sukaasih</td>
                                            <td>SURAT KETERANGAN DOMISILI</td>
                                            <td>
                                                <Button color='success' className='ml-2'>
                                                    <i className='nc-icon nc-alert-circle-i'></i>
                                                </Button>
                                            </td>
                                            <td>
                                                <Col>

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

export default ListArsipDokumen
