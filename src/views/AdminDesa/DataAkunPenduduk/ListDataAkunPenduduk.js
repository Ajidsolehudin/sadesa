import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'



class ListDataAkunPenduduk extends Component {

  render() {
    return (
      <div className="content" style={{ fontSize: 12 }}>
        <Row>
          <Col md="12">
            <Card>

              <CardHeader>
                <CardTitle tag="h4">Data Akun Penduduk</CardTitle>
                <Link to="/admindesa/dataakunpenduduk/tambah" className='btn btn-primary'>
                  Tambah Data
                </Link>
              </CardHeader>

              <CardBody>
                {/* <Table striped bordered hover responsive> */}
                <Table striped bordered hover size="sm" responsive>


                  <thead className='text-primary'>
                    <tr>
                      <th>NIK</th>
                      <th>Nama Lengkap</th>
                      <th>Nama Pengguna</th>
                      <th>Password</th>
                      <th>Detail</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>3278032409010001</td>
                      <td>NURJAMAN</td>
                      <td><i>@nurjaman</i></td>
                      <td>sadesa24</td>

                        <td>
                          <Button color='success' className='ml-2'>
                            <i className='nc-icon nc-alert-circle-i'></i>
                          </Button>
                        </td>


                      <td>
                        {/* <Link className='btn btn-warning'>
                            <i className='nc-icon nc-ruler-pencil'></i>
                          </Link> */}

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

export default ListDataAkunPenduduk
