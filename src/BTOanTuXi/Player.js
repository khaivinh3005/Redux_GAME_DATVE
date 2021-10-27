import React, { Component } from 'react'
import { connect } from 'react-redux'


class Player extends Component {
    render() {
        let { mangDatCuoc, tuXi } = this.props
        return (
            <div className='booby'>
                <div className='think'>
                    <div className='mt-4 ml-5'>
                        {<img style={{ width: '50px', height: '50px' }} src={mangDatCuoc.find(item =>item.datCuoc === true).img} alt="" /> }
                    </div>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: '150px', height: '150px' }} src="./img/imgGame/player.png" alt="" />
                <div className='row'>
                    {mangDatCuoc.map((item, index) => {
                       return  (
                           <div className="col-4" key={index}>
                            <button className='btn btn-outline-success bg-white '
                            onClick={() =>{
                                tuXi(item.ma)
                            }}
                            >
                                <img style={{ width: '30px', height: '30px' }} src={item.img} alt="" />
                            </button>
                        </div>
                        )

                    })}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        mangDatCuoc: state.BTOanTuXIReducer.mangDatCuoc,
        anHien:state.BTOanTuXIReducer.anHien
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tuXi: (maTuXi) => {
            dispatch({
                type:"TU_XI",
                maTuXi
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Player)