import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'



class ListDataDesa extends Component {

  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>

              <CardHeader>
                <CardTitle tag="h4">Data Desa</CardTitle>
                <Link to="/admin/datadesa/tambah" className='btn btn-primary'>
                  Tambah Data
                </Link>
              </CardHeader>

              <CardBody>
                <Table striped bordered hover responsive>

                  <thead className='text-primary'>
                    <tr>
                      <th>Logo</th>
                      <th>Nama Desa</th>
                      <th>Nama Kepala Desa</th>
                      <th>Alamat Desa</th>
                      <th>Kecamatan</th>
                      <th>Kabupaten</th>
                      <th>Alamat Email</th>
                      <th>Telepon</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>

                      <td>
                        <img src={logo} width="70" alt="logo desa" />
                      </td>

                      <td>Desa Sukaasih</td>
                      <td>M.UMAR MAHMUDI, S.S.I, M.PD.</td>
                      <td>Jln. Pahlawan K.H.Z.Mustopa No. 18 Kp. Cariwuh Kode Pos 46415</td>
                      <td>KECAMATAN SINGAPARNA</td>
                      <td>KABUPATEN TASIKMALAYA</td>
                      <td>desasukaasih@email.com</td>
                      <td>6282128263000</td>


                      <td>
                        {/* <Link className='btn btn-warning'>
                            <i className='nc-icon nc-ruler-pencil'></i>
                          </Link> */}

                        <div>
                          <Link className='btn btn-warning' to={'/admin/datadesa/edit'}>
                            edit
                          </Link>

                          <Button color='danger' className='ml-2'>
                            delete
                          </Button>
                        </div>
                      </td>

                    </tr>

                    <tr>

                      <td>
                        <img src={logo} width="70" alt="logo desa" />
                      </td>

                      <td>Desa Sukaasih</td>
                      <td>M.UMAR MAHMUDI, S.S.I, M.PD.</td>
                      <td>Jln. Pahlawan K.H.Z.Mustopa No. 18 Kp. Cariwuh Kode Pos 46415</td>
                      <td>KECAMATAN SINGAPARNA</td>
                      <td>KABUPATEN TASIKMALAYA</td>
                      <td>desasukaasih@email.com</td>
                      <td>6282128263000</td>


                      <td>
                        <Link className='btn btn-warning' to={'/admin/datadesa/edit/'}>
                          edit
                        </Link>

                        {/* <Button color='warning' className='ml-2' to={'/admin/datadesa/edit/'>
                            edit
                          </Button> */}

                        <Button color='danger' className='ml-2'>
                          delete
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

export default ListDataDesa
