import React, { Component, Fragment } from 'react'
import "./BaiTapBookingTicket.css"
import InfoGhe from './InfoGhe'
import danhSachGheData from "../data/danhSachGhe.json"
import DayGhe from './DayGhe'

export default class BaiTapVeXemPhim extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((ghe, index) => {
            return (
                <div key={index}>
                    <DayGhe ghe={ghe} soHangGhe={index}/>
                </div>
            )
        })

        
    }

    render() {
        return (
            <div className='bookingMovie' style={{ position:'fixed', width: "100%", height: "100%", background: "url('./img/imgVeXemPhim/bgmovie.jpg')", backgroundRepeat:'no-repeat', backgroundSize:'cover',}}>
                <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: 'rgba(0,0,0,0.5)', overflowY:'scroll', overflowX:'hidden'}}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <h1 className='text-warning'>Đặt vé xem phim Cyber Learn</h1>
                                <h4 className='mt-3 mb-2 text-light'>Màn hình</h4>
                                <div className='d-flex justify-content-center '>
                                    <div className='screen'></div>
                                </div>
                                    {this.renderHangGhe()}
                            </div>
                            <div className='col-4'>
                                <h2 className='text-success mt-1'>Danh sách ghế bạn chọn</h2>
                                <InfoGhe />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
