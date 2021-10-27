import React, { Component } from 'react'
import { connect } from 'react-redux'
import { datGheAction } from '../redux/action/DatVeXemPhimAction'
class DayGhe extends Component {

    renderGhe = () => {
        // console.log(this.props.soHangGhe)
        return this.props.ghe.danhSachGhe.map((ghe, index) => {
            // console.log(ghe)
            let cssGheDaDat = ''
            let disable = false
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon"
                disable = true
            }
            // Ghế đang đặt
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }

            return (
                <button onClick={() => {
                    this.props.datGhe(ghe)
                }}
                    disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>{ghe.soGhe}</button>
            )

        })
    }

    renderSoHang = () => {
        return this.props.ghe.danhSachGhe.map((hang, index) => {
            return (
                <button key={index} className='rowNumber'>{hang.soGhe}</button>
            )
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div>
                {this.props.ghe.hang}
                {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.ghe.hang}
                {this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <div className='ml-2 mt-3 text-light' style={{ fontSize: 20 }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.DatVeXemPhimReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {           
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayGhe)