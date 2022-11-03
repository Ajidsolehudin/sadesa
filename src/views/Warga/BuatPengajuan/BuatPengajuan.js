import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button, Input, FormGroup } from 'reactstrap';
import logo from '../../../assets/img/user.png'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { LinkOffOutlined } from '@material-ui/icons';

class BuatPengajuan extends Component {

    render() {
        return (
            <div className="content" style={{ fontSize: 12 }}>
                <Row>
                    <Col md="12">
                        <Card>

                            <CardBody className='mt-4'>
                                <Row>
                                    <Col md="5">
                                        <h4>Jenis Pengajuan yang tersedia</h4>
                                        <h6><small>Silahkan upload persyaratan di form yang tersedia!!</small></h6>                                        <div stlye={{}}>
                                            <Accordion className='bg-primary text-light mb-3'>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                >
                                                    <Typography
                                                        style={{
                                                            fontWeight: 4,
                                                        }}
                                                    >
                                                        <small>
                                                            SURAT KETERANGAN DOMISILI
                                                        </small>
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className='bg-light text-dark'>
                                                    <Typography>No Item</Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion className='bg-primary text-light mb-3'>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                >
                                                    <Typography
                                                        style={{
                                                            fontWeight: 4,
                                                        }}
                                                    >
                                                        <small>
                                                            SURAT KETERANGAN BELUM MENIKAH
                                                        </small>
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className='bg-light text-dark'>
                                                    <Typography>No Item</Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>

                                        <Accordion className='bg-primary text-light mb-3'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography
                                                    style={{
                                                        fontWeight: 4,
                                                    }}
                                                >
                                                    <small>
                                                        SURAT KETERANGAN MENIKAH
                                                    </small>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className='bg-light text-dark'>
                                                <Typography>No Item</Typography>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion className='bg-primary text-light mb-3'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography
                                                    style={{
                                                        fontWeight: 4,
                                                    }}
                                                >
                                                    <small>
                                                        SURAT KETERANGAN KELAHIRAN
                                                    </small>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className='bg-light text-dark'>
                                                <Typography>No Item</Typography>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion className='bg-primary text-light mb-3'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography
                                                    style={{
                                                        fontWeight: 4,
                                                    }}
                                                >
                                                    <small>
                                                        SURAT KETERANGAN KEMATIAN
                                                    </small>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className='bg-light text-dark'>
                                                <Typography>No Item</Typography>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion className='bg-primary text-light mb-3'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography
                                                    style={{
                                                        fontWeight: 4,
                                                    }}
                                                >
                                                    <small>
                                                        SURAT KETERANGAN USAHA
                                                    </small>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className='bg-light text-dark'>
                                                <Typography>No Item</Typography>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion className='bg-primary text-light mb-3'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography
                                                    style={{
                                                        fontWeight: 4,
                                                    }}
                                                >
                                                    <small>
                                                        SURAT UPCPK
                                                    </small>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className='bg-light text-dark'>
                                                <Typography>No Item</Typography>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion className='bg-primary text-light mb-3'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography
                                                    style={{
                                                        fontWeight: 4,
                                                    }}
                                                >
                                                    <small>
                                                        SURAT KETERANGAN TIDAK MAMPU
                                                    </small>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className='bg-light text-dark'>
                                                <Typography>No Item</Typography>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion className='bg-primary text-light mb-3'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography
                                                    style={{
                                                        fontWeight: 4,
                                                    }}
                                                >
                                                    <small>
                                                        SURAT SKCK
                                                    </small>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className='bg-light text-dark'>
                                                <Typography>No Item</Typography>
                                            </AccordionDetails>
                                        </Accordion>

                                        <Accordion className='bg-primary text-light mb-3'>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography
                                                    style={{
                                                        fontWeight: 4,
                                                    }}
                                                >
                                                    <small>
                                                        SURAT PINDAH
                                                    </small>
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className='bg-light text-dark'>
                                                <Typography>No Item</Typography>
                                            </AccordionDetails>
                                        </Accordion>

                                    </Col>

                                    <Col md="7">
                                        <Card className='border p-4'>
                                            <form>

                                                <Row>
                                                    <Col md={12}>
                                                        <h4>Buat Pengajuan Dokumen</h4>

                                                        <FormGroup>
                                                            <label><strong>Tanggal Pengajuan</strong></label>
                                                            <Input type='text' name="tanggalPengajuan" disabled />
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <label><strong>Nama Lengkap</strong></label>
                                                            <Input type="select" name="namaLengkap" disabled onChange={(event) => this.handleChanges(event)}>
                                                                <option value="">Nurjaman</option>
                                                            </Input>
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <label><strong>Nama Desa</strong></label>
                                                            <Input type="select" name="namaDesa" disabled onChange={(event) => this.handleChanges(event)}>
                                                                <option value="">Desa Sukaasih</option>
                                                            </Input>
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <label><strong>Jenis Dokumen</strong></label>
                                                            <Input type="select" name="jenisDokumen" onChange={(event) => this.handleChanges(event)}>
                                                                <option value="">Nurjaman</option>
                                                            </Input>
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <label><strong>Penyerahan</strong></label>
                                                            <Input type="select" name="penyerahan" onChange={(event) => this.handleChanges(event)}>
                                                                <option value="">Ambil Sendiri (Gratis)</option>
                                                                <option>Diantar Ke Rumah (Rp. 10.000,-)</option>
                                                                <option>Diantar Ke Luar Desa (Konfirmasi Ke Admin)</option>
                                                            </Input>
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <label><strong>Konfirmasi ke Admin</strong></label>
                                                            <Link className='btn btn-success ml-3'>Klik Disini</Link>
                                                        </FormGroup>

                                                        <Link className='btn btn-primary ml-3'>Ajukan Dokumen</Link>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <Card>

                            <CardHeader>
                                <CardTitle tag="h4">Persyaratan</CardTitle>
                                <Link to="/warga/tambahpersyaratan" className='btn btn-primary'>
                                    Tambah Data
                                </Link>
                            </CardHeader>

                            <CardBody>
                                <Table striped bordered hover size="sm" responsive>

                                    <thead className='text-primary'>
                                        <tr>
                                            <th>Nama Persyaratan</th>
                                            <th>File</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>KK</td>
                                            <td>
                                                <Link className='btn btn-warning'>
                                                    Lihat File
                                                </Link>
                                            </td>

                                            <td>
                                                {/* <Link className='btn btn-warning'>
                            <i className='nc-icon nc-ruler-pencil'></i>
                          </Link> */}

                                                <Button color='danger' className='ml-2'>
                                                    <i className='nc-icon nc-basket'></i>
                                                </Button>
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

export default BuatPengajuan
