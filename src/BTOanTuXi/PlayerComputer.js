import React, { Component } from 'react'
import { connect } from 'react-redux'
class PlayerComputer extends Component {
    render() {
        let { computer } = this.props
        let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top: -50px}
            25% {top: 100px}
            50% {top: -50px}
            75% {top: 100px}
            100% {top: 0px}

        }`
        return (
            <div>
                <div className='booby'>
                    <style>
                        {keyframe}
                    </style>
                    <div className='think overflow-hidden'>
                        <div className='mt-4 position-relative'>
                            <img style={{
                                position: 'absolute',
                                left: '30%',
                                animation: `randomItem${Date.now()} 0.5s`,
                                width: '50px', height: '50px'
                            }} src={computer.img} alt="" />
                        </div>
                    </div>
                    <div className='speech-bubble'></div>
                    <img style={{ width: '150px', height: '150px' }} src="./img/imgGame/playerComputer.png" alt="" />


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.BTOanTuXIReducer.computer,

    }
}

export default connect(mapStateToProps)(PlayerComputer)
