import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Button } from 'reactstrap';



class ListDataAdminDesa extends Component {

  render() {
    return (
      <div className="content" style={{fontSize: 12}}>
        <Row>
          <Col md="12">
            <Card>

              <CardHeader>
                <CardTitle tag="h4">Data Admin Desa</CardTitle>
                <Link to="/admin/dataadmindesa/tambah" className='btn btn-primary'>
                  Tambah Data
                </Link>
              </CardHeader>

              <CardBody>
                <Table striped bordered hover size="sm" responsive>

                  <thead className='text-primary'>
                    <tr>
                      <th>NIP</th>
                      <th>Nama Desa</th>
                      <th>Username</th>
                      <th>Password</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>11223344556677889910</td>
                      <td>DESA SUKAASIH</td>
                      <td>@sukaasih24</td>
                      <td>sukaasih24</td>

                      <td>
                        {/* <Link className='btn btn-warning'>
                            <i className='nc-icon nc-ruler-pencil'></i>
                          </Link> */}

                        <Button color='danger' className='ml-2'>
                          <i className='nc-icon nc-basket'></i>
                        </Button>
                      </td>
                    </tr>

                    <tr>
                      <td>11223344556677889910</td>
                      <td>DESA SUKAASIH</td>
                      <td>@sukaasih24</td>
                      <td>sukaasih24</td>

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

export default ListDataAdminDesa
