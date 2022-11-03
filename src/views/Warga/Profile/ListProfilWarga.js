import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button } from 'reactstrap';
import logo from '../../../assets/img/user.png'



class ListProfilWarga extends Component {

    render() {
        return (
            <div className="content" style={{ fontSize: 12 }}>
                <Row>
                    <Col md="12">
                        <Card className='align-items-center'>

                            <CardHeader>
                                <CardTitle tag="h4">Data Diri</CardTitle>
                            </CardHeader>

                            <CardBody>
                                <Row>
                                    <Col md="4" className='text-center'>
                                        <img src={logo} width="250" alt="logo desa" />
                                        <hr></hr>
                                        <Table striped bordered hover size="sm">
                                            <tbody>
                                                <th>Nama Persyaratan</th>
                                                <th>File</th>
                                                <tr>
                                                    <td>KK</td>
                                                <td>
                                                    <Link className='btn btn-success'>Lihat</Link>
                                                </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>

                                    <Col md="7">
                                        <Table striped bordered hover size="sm">
                                            <tbody>
                                                <tr>
                                                    <td>No. Kartu Keluarga</td>
                                                    <td>3278032409010001</td>
                                                </tr>
                                                <tr>
                                                    <td>Nama Lengkap</td>
                                                    <td>NURJAMAN</td>
                                                </tr>
                                                <tr>
                                                    <td>No. Induk Kependudukan</td>
                                                    <td>3278032409010001</td>
                                                </tr>
                                                <tr>
                                                    <td>Jenis Kelamin</td>
                                                    <td>Laki Laki</td>
                                                </tr>
                                                <tr>
                                                    <td>Tempat, Tgl. Lahir</td>
                                                    <td>TASIKMALAYA, 2001-09-24</td>
                                                </tr>
                                                <tr>
                                                    <td>Agama</td>
                                                    <td>ISLAM</td>
                                                </tr>
                                                <tr>
                                                    <td>Pendidikan</td>
                                                    <td>DIPLOMA IV / STRATA I</td>
                                                </tr>
                                                <tr>
                                                    <td>Pekerjaan</td>
                                                    <td>Mahasiswa</td>
                                                </tr>
                                                <tr>
                                                    <td>Golongan Darah</td>
                                                    <td>O+</td>
                                                </tr>
                                                <tr>
                                                    <td>Status Perkawinan</td>
                                                    <td>Belum Kawin</td>
                                                </tr>
                                                <tr>
                                                    <td>Tanggal Perkawinan</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td>Status Hubungan Dalam Keluarga</td>
                                                    <td>Anak</td>
                                                </tr>
                                                <tr>
                                                    <td>Kewarganegaraan</td>
                                                    <td>WNI</td>
                                                </tr>
                                                <tr>
                                                    <td>No. PASPOR / KITAP</td>
                                                    <td>-/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Nama Ayah / Ibu Kandung</td>
                                                    <td>LILI/EHA JULAEHA</td>
                                                </tr>
                                                <tr>
                                                    <td>Alamat Lengkap</td>
                                                    <td>KP. GUNUNG JATI NO. 44 002 003 DESA SUKAASIH KECAMATAN SINGAPARNA</td>
                                                </tr>
                                                <tr>
                                                    <td>Kontak</td>
                                                    <td>+6283104952384<Link className='btn btn-warning ml-4'>Update</Link></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ListProfilWarga
