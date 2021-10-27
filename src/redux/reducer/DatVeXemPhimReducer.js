import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVe"

const stateDefault = {
    danhSachGheDangDat :[
        
    ]
}


const DatVeXemPhimReducer = (state = stateDefault, action) => {
    switch(action.type){
        case DAT_GHE:{
            // console.log(action.ghe)
            let danhSachGheUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheUpdate.findIndex(gheDat => gheDat.soGhe === action.ghe.soGhe)
            if(index !== -1){
                danhSachGheUpdate.splice(index, 1)
            }else{
                danhSachGheUpdate.push(action.ghe)  
            }
            console.log(danhSachGheUpdate)
            state.danhSachGheDangDat = danhSachGheUpdate
            return {...state}
        }

        case HUY_GHE:{
            // console.log(action.ghe)
            let danhSachGheUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheUpdate.findIndex(gheDat => gheDat.soGhe === action.soGhe)
            if(index !== -1){
                danhSachGheUpdate.splice(index, 1)
            }
            // console.log(danhSachGheUpdate)
            state.danhSachGheDangDat = danhSachGheUpdate
            return {...state}
        }
        default :{
            return {...state}
        }
    }
}

export default DatVeXemPhimReducer