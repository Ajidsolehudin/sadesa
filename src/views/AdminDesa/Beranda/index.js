import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button } from 'reactstrap';
import logo from '../../../assets/img/Logo_Kab_Tasik.png'



class Beranda extends Component {

    render() {
        return (
            <div className="content" style={{fontSize: 12}}>
                <Row>
                    <Col md="12">
                        <Card>

                            <CardHeader>
                                <CardTitle tag="h4">Desa Sukaasih</CardTitle>
                            </CardHeader>

                            <CardBody>
                                <Row>
                                    <Col md="4">
                                        <img src={logo} width="250" alt="logo desa" />
                                    </Col>

                                    <Col md="7">
                                        <Table striped bordered hover size="sm">
                                            <tbody>
                                                <tr>
                                                    <td>Nama Kepala Desa</td>
                                                    <td>:</td>
                                                    <td>M.UMAR MAHMUDI, S.S.I, M.PD.</td>
                                                </tr>
                                                <tr>
                                                    <td>Alamat Kantor Desa</td>
                                                    <td>:</td>
                                                    <td>Jln. Pahlawan K.H.Z.Mustopa No. 18 Kp. Cariwuh Kode Pos 46415</td>
                                                </tr>
                                                <tr>
                                                    <td>Kecamatan</td>
                                                    <td>:</td>
                                                    <td>Kecamatan Singaparna</td>
                                                </tr>
                                                <tr>
                                                    <td>Kabupaten</td>
                                                    <td>:</td>
                                                    <td>Kabupaten Tasikmalaya</td>
                                                </tr>
                                                <tr>
                                                    <td>Alamat Email</td>
                                                    <td>:</td>
                                                    <td>desasukaasih@email.com</td>
                                                </tr>
                                                <tr>
                                                    <td>No. Telepon</td>
                                                    <td>:</td>
                                                    <td>+6282128263000</td>
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

export default Beranda
