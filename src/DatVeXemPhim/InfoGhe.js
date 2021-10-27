/* eslint-disable jsx-a11y/scope */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/action/DatVeXemPhimAction'

class InfoGhe extends Component {
    render() {
        // console.log(this.props.gheDat)
        return (
            <div className='container-fluid'>
                <div className='text-white mt-5'>
                    <div className=''>
                        <button className='gheDuocChon mb-3'></button> <span style={{ fontSize: '20px' }}>Ghế đã đặt</span>
                    </div>
                    <div>
                        <button className='gheDangChon mb-3'></button> <span style={{ fontSize: '20px' }}>Ghế đang đặt</span>
                    </div>
                    <div>
                        <button className='ghe ml-0'></button> <span style={{ fontSize: '20px' }}>Ghế trống</span>
                    </div>
                </div>
                <div className='mt-5'>
                    <table className="table text-light" border='2'>
                        <thead>
                            <tr className='text-light' style={{ fontSize: 15 }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.gheDat.map((ghe, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{ghe.soGhe}</td>
                                        <td>{ghe.gia}</td>
                                        <td>
                                            <button className='btn btn-danger align-items-center'
                                                onClick={() => {
                                                    this.props.dispatch(huyGheAction(ghe.soGhe))
                                                }}>X</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>
                                    {this.props.gheDat.reduce((sum, ghe, index) => {
                                        return sum += ghe.gia
                                    }, 0)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gheDat: state.DatVeXemPhimReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(InfoGhe)