import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Label, Row, Input } from 'reactstrap'
import logo from '../../assets/img/LogoBaruSatuDesa.png'


export default class Login extends Component {
    render() {
        return (
            <Row className='justify-content-center mt-5'>
                <Col md='4' className='mt-5'>
                    <Card className='lg'>
                        <CardHeader className='text-center'>
                            <img src={logo} className='rounded mx-auto d-block' alt='Logo' width='200' />
                        </CardHeader>

                        <CardBody>


                            <form onSubmit={(event) => this.handleSubmit(event)}>
                                <FormGroup>
                                    <Label for="nama_pengguna"><b>Nama Pengguna</b></Label>
                                    <Input
                                        type="text"
                                        name="nama_pengguna"
                                        placeholder="Contoh : sadesa24"
                                        onChange={(event) => this.handleChange(event)}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="password"><b>Password</b></Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="******"
                                        onChange={(event) => this.handleChange(event)}
                                    />
                                </FormGroup>

                                {/* <FormGroup>
                                    <label><strong>Akses</strong></label>
                                    <Input type="select" name="akses" onChange={(event) => this.handleChanges(event)}>
                                        <option value="">--Pilih Akses--</option>
                                        <option>Admin</option>
                                        <option>Admin Desa</option>
                                        <option>Warga</option>
                                    </Input>
                                </FormGroup> */}


                                <div className="d-grid gap-2 text-right">
                                    <Button variant="primary" size="md" color='primary' onClick={() => this.props.history.push("/admin/dashboard")}>
                                    <i className='nc-icon nc-key-25'></i>  Login
                                    </Button>
                                </div>
                            </form>

                            <br></br>

                            <div className='text-center'>
                                <a href="https://api.whatsapp.com/send?phone=098765432435678&text=Hallo%20Admin,%20Saya%20Mau%20Daftar%20Akun%20Warga,%20Bagaimana%20Caranya?" className='text-secondary'>
                                    Belum punya akun? <strong>Klik disini</strong>
        
                                </a>
                            </div>

                        </CardBody>

                    </Card>
                </Col>
            </Row>
        )
    }
}
