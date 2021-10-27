import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BTOanTuXi.css'
import KQGame from './KQGame'
import Player from './Player'
import PlayerComputer from './PlayerComputer'


class BTOanTuXi extends Component {
    render() {

        return (
            <div className='gameTX '>
                <div className='row mt-4'>
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4 text-center">
                        <KQGame />
                        <button className='btn btn-primary mt-5' onClick={() =>{
                            this.props.playGame()
                        }}>Play game</button>
                    </div>
                    <div className="col-4">
                        <PlayerComputer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0
            let randomItem = setInterval(() => {               
                dispatch({
                    type:"roBot",
                })
                count++
                if(count > 10){
                    clearInterval(randomItem)

                    dispatch({
                        type:"END_GAME"
                        
                    })
                }
            }, 100)
        }
    }
}


export default connect(null, mapDispatchToProps)(BTOanTuXi)