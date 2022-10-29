import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, FormGroup, Input, Button, Spinner } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'


class EditDataPenduduk extends Component {

    render() {
        return (
            <div className="content">
                <Row>
                    <Col>
                        <Link to="/admindesa/datapenduduk" className="btn btn-secondary float-right">
                            Kembali
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Edit Data Penduduk</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <form>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Nomor Kartu Keluarga</label>
                                                <Input type='text' name="nomorKartuKeluarga" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Nama Lengkap</label>
                                                <Input type='text' name="namaLengkap" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>NIK</label>
                                                <Input type='text' name="nik" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Jenis Kelamin</label>
                                                <Input type='text' name="jenisKelamin" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Tempat Lahir</label>
                                                <Input type='text' name="tempatLahir" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Tanggal Lahir</label>
                                                <Input type='date' name="tanggalahir" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Agama</label>
                                                <Input type="select" name="agama" onChange={(event) => this.handleChanges(event)}>
                                                    <option value="">Islam</option>
                                                    <option>Kristen</option>
                                                    <option>Hindu</option>
                                                    <option>Budha</option>
                                                    <option>Lainnya</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Pendidikan</label>
                                                <Input type="select" name="pendidikan" onChange={(event) => this.handleChanges(event)}>
                                                    <option value="">Tidak / Belum Sekolah</option>
                                                    <option>Belum Tamat SD / Sederajat</option>
                                                    <option>Tamat SD / Sederajat</option>
                                                    <option>Tamat SLTP / Sederajat</option>
                                                    <option>Tamat SLTA / Sederajat</option>
                                                    <option>Diploma IV / Strata I</option>
                                                    <option>Diploma I / II</option>
                                                    <option>Akademi / Diploma III / S. muda</option>
                                                    <option>Strata II</option>
                                                    <option>Strata III</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Jenis Pekerjaan</label>
                                                <Input type='text' name="jenisPekerjaan" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Golongan Darah</label>
                                                <Input type="select" name="golonganDarah" onChange={(event) => this.handleChanges(event)}>
                                                    <option value="">A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>B-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Status Perkawinan</label>
                                                <Input type="select" name="statusPerkawinan" onChange={(event) => this.handleChanges(event)}>
                                                    <option value="">Belum Kawin</option>
                                                    <option>Kawin</option>
                                                    <option>Cerai Hidup</option>
                                                    <option>Cerai Mati</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Tanggal Perkawinan</label>
                                                <Input type='date' name="tanggalPerkawinan" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>No Paspor</label>
                                                <Input type='text' name="noPaspor" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>No Kitap</label>
                                                <Input type='text' name="noKitap" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Ayah</label>
                                                <Input type='text' name="ayah" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Ibu Kandung</label>
                                                <Input type='text' name="ibuKandung" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Alamat</label>
                                                <Input type='text' name="alamat" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={2}>
                                            <FormGroup>
                                                <label>RT / RW</label>
                                                <div className='inline-block'>
                                                <Input type='number' name="rt" />
                                                /
                                                <Input type='number' name="rw" />
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Desa</label>
                                                <Input type="select" name="desa" onChange={(event) => this.handleChanges(event)}>
                                                    <option value="">Desa Sukaasih</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Kecamatan</label>
                                                <Input type='text' name="kecamatan" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <label>Kabupaten</label>
                                                <Input type='text' name="ayah" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <label>No Handphone Aktif</label>
                                                <Input type='text' name="ibuKandung" />
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

export default EditDataPenduduk
