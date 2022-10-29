import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, FormGroup, Input, Button, Spinner } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'


class EditDataDesa extends Component {

  render() {
    return (
      <div className="content">
        <Row>
          <Col>
            <Link to="/admin/datadesa" className="btn btn-secondary float-right">
              Kembali
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Edit Data Desa</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <img src={logo} width="200" alt="Logo Desa" />
                  </Col>
                </Row>
                <form>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <label>Logo Desa</label>
                        <Input type='file'/>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <label>Nama Desa</label>
                        <Input type='text' name="namaDesa" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <label>Nama Kepala Desa</label>
                        <Input type='text' name="namaKepalaDesa" />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <label>Alamat Desa</label>
                        <Input type='text' name="alamatDesa" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <label>Kecamatan</label>
                        <Input type='text' name="kecamatan" />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <label>Kabupaten</label>
                        <Input type='text' name="kabupaten" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <label>Email</label>
                        <Input type='text' name="alamatEmail" />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <label>Telepon</label>
                        <Input type='text' name="telepon" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Button color='primary' type='submit'>
                       Update
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

export default EditDataDesa
