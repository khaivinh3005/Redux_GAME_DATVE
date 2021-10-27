import React, { Component } from 'react'
import { connect } from 'react-redux'
class KQGame extends Component {
    render() {

        let { ketQua, soBanThang, soBanChoi } = this.props


        return (
            <div className=''>

                <div className='display-4 text-info mb-5'>{ketQua}</div>
                <div className='display-6 text-danger '>So ban thang: <span>{soBanThang}</span></div>
                <div className='display-6 text-success '>So ban choi: <span>{soBanChoi}</span> </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.BTOanTuXIReducer.ketQua,
        soBanThang: state.BTOanTuXIReducer.soBanThang,
        soBanChoi: state.BTOanTuXIReducer.soBanChoi,

    }
}

export default connect(mapStateToProps)(KQGame)
