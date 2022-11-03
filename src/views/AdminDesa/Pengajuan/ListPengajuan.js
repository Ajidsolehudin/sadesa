import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'



class ListPengajuan extends Component {

    render() {
        return (
            <div className="content" style={{ fontSize: 12 }}>
                <Row>
                    <Col md="12">
                        <Card>

                            <CardHeader>
                                <CardTitle tag="h4">Pengajuan Administrasi Warga</CardTitle>
                            </CardHeader>

                            <CardBody>
                                {/* <Table striped bordered hover responsive> */}
                                <Table striped bordered hover size="sm" responsive>


                                    <thead className='text-primary'>
                                        <tr>
                                            <th>Tanggal</th>
                                            <th>Detail Pengajuan</th>
                                            <th>Keterangan</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>01-07-2022 15:28:40</td>
                                            <td>NIK   : 3278032409010001
                                                <br></br>
                                                Nama  : NURJAMAN
                                                <br></br>
                                                DESA SUKAASIH
                                                <hr></hr>
                                                SURAT KETERANGAN DOMISILI</td>

                                            <td>No Item
                                                <hr></hr>
                                                Catatan :
                                                <br></br>
                                                test</td>


                                            <td>Selesai
                                                <br></br>
                                                <h6 className='text-danger'>TKSN1111</h6>
                                                <hr></hr>
                                                Ambil Sendiri (Rp. 0)</td>

                                            <td>
                                                <div>
                                                <Link className='btn btn-secondary' style = {{ marginLeft : 3 }}>
                                                    Catatan
                                                </Link>
                                                <Link className='btn btn-primary' style = {{ marginLeft : 3 }}>
                                                    Lihat
                                                </Link>
                                                <Link className='btn btn-warning' style = {{ marginLeft : 3 }}>
                                                    Cetak
                                                </Link>
                                                <hr></hr>
                                                <Link className='btn btn-success d-flex' style = {{ marginLeft : 3 }}>
                                                    Via WhatsApp
                                                </Link>
                                                </div>
                                            </td>

                                        </tr>

                                        <tr>
                                            <td>01-07-2022 15:28:40</td>
                                            <td>NIK   : 3278032409010001
                                                <br></br>
                                                Nama  : NURJAMAN
                                                <br></br>
                                                DESA SUKAASIH
                                                <hr></hr>
                                                SURAT KETERANGAN DOMISILI</td>

                                            <td>No Item
                                                <hr></hr>
                                                Catatan :
                                                <br></br>
                                                test</td>


                                            <td>Selesai
                                                <br></br>
                                                <h6 className='text-danger'>TKSN1111</h6>
                                                <hr></hr>
                                                Ambil Sendiri (Rp. 0)</td>

                                            <td>
                                                <div>
                                                <Link className='btn btn-secondary' style = {{ marginLeft : 3 }}>
                                                    Catatan
                                                </Link>
                                                <Link className='btn btn-primary' style = {{ marginLeft : 3 }}>
                                                    Lihat
                                                </Link>
                                                <Link className='btn btn-danger' style = {{ marginLeft : 3 }}>
                                                    Buat
                                                </Link>
                                                <hr></hr>
                                                <Link className='btn btn-success d-flex' style = {{ marginLeft : 3 }}>
                                                    Via WhatsApp
                                                </Link>
                                                </div>
                                            </td>

                                        </tr>

                                        <tr>
                                            <td>01-07-2022 15:28:40</td>
                                            <td>NIK   : 3278032409010001
                                                <br></br>
                                                Nama  : NURJAMAN
                                                <br></br>
                                                DESA SUKAASIH
                                                <hr></hr>
                                                SURAT KETERANGAN DOMISILI</td>

                                            <td>No Item
                                                <hr></hr>
                                                Catatan :
                                                <br></br>
                                                test</td>


                                            <td>Selesai
                                                <br></br>
                                                <h6 className='text-danger'>TKSN1111</h6>
                                                <hr></hr>
                                                Ambil Sendiri (Rp. 0)</td>

                                            <td>
                                                <div>
                                                <Link className='btn btn-secondary' style = {{ marginLeft : 3 }}>
                                                    Catatan
                                                </Link>
                                                <Link className='btn btn-primary' style = {{ marginLeft : 3 }}>
                                                    Lihat
                                                </Link>
                                                <Link className='btn btn-info' style = {{ marginLeft : 3 }}>
                                                    Selesai
                                                </Link>
                                                <hr></hr>
                                                <Link className='btn btn-success d-flex' style = {{ marginLeft : 3 }}>
                                                    Via WhatsApp
                                                </Link>
                                                </div>
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

export default ListPengajuan
