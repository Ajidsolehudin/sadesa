import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button } from 'reactstrap';
import logo from '../../../assets/img/LogoBaruSatuDesa.png'



class ListDataPenduduk extends Component {

  render() {
    return (
      <div className="content" style={{fontSize: 12}}>
        <Row>
          <Col md="12">
            <Card>

              <CardHeader>
                <CardTitle tag="h4">Data Penduduk</CardTitle>
                <Link to="/admindesa/datapenduduk/tambah" className='btn btn-primary'>
                  Tambah Data
                </Link>
              </CardHeader>

              <CardBody>
                {/* <Table striped bordered hover responsive> */}
                <Table striped bordered hover size="sm" responsive>


                  <thead className='text-primary'>
                    <tr>
                      <th>No Kartu Keluarga</th>
                      <th>Nama Lengkap</th>
                      <th>Nomor Induk Kependudukan</th>
                      <th>Jenis Kelamin</th>
                      <th>Alamat Lengkap</th>
                      <th>Jenis Pekerjaan</th>
                      <th>WNI/WNA</th>
                      <th>Nomor Handphone</th>
                      <th>Action</th>
                      
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>3278032409010001</td>
                      <td>NURJAMAN</td>
                      <td>3278032409010001</td>
                      <td>LAKI-LAKI</td>
                      <td>KP. GUNUNG JATI NO. 44 002/003 DESA SUKAASIH KECAMATAN SINGAPARNA KABUPATEN SINGAPARNA</td>
                      <td>MAHASISWA</td>
                      <td>WNI</td>
                      <td>6282128262881</td>


                      <td>
                        {/* <Link className='btn btn-warning'>
                            <i className='nc-icon nc-ruler-pencil'></i>
                          </Link> */}

                        <Col>
                          {/* <Link className='btn btn-warning' to={'/admindesa/datapenduduk/edit'}>
                            edit
                          </Link> */}

                          <Button color='warning' className='ml-2'>
                          <i className='nc-icon nc-ruler-pencil'></i>
                          </Button>

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

export default ListDataPenduduk
