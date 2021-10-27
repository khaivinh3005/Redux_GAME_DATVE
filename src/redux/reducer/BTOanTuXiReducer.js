/* eslint-disable default-case */
const stateDefault = {
    
    mangDatCuoc: [
        { ma: "keo", img: './img/imgGame/keo.png', datCuoc: false },
        { ma: "bao", img: './img/imgGame/bao.png', datCuoc: true },
        { ma: "bua", img: './img/imgGame/bua.png', datCuoc: false }

    ],
    ketQua: 'Im Iron Man',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: "bua", img: './img/imgGame/bua.png' }
}

export const BTOanTuXIReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "TU_XI": {
            // console.log(action)
            
            let mangCuocUpdate = [...state.mangDatCuoc]
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maTuXi) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangCuocUpdate
            return { ...state }
        }

        case "roBot": {
            // console.log(action)
            let ramdomNumber = Math.floor(Math.random() * 3)
            // console.log(ramdomNumber)
            state.computer = state.mangDatCuoc[ramdomNumber]

            return { ...state }
        }

        case "END_GAME": {
            let computer = state.computer 
            let player = state.mangDatCuoc.find(item => item.datCuoc === true)

            switch (player.ma) {
                case "keo":
                    if (computer.ma === 'keo') {
                        state.ketQua = "hòa nhau !!!"
                    } else if (computer.ma === "bua") {
                        state.ketQua = "Ăn may thôi lại"
                    } else {
                        state.ketQua = "I am iron. Im the one"
                        state.soBanThang += 1
                    } break;

                case "bua":
                    if (computer.ma === 'bua') {
                        state.ketQua = "hòa nhau !!!"
                    } else if (computer.ma === "bao") {
                        state.ketQua = "Ăn may thôi lại"
                    } else {
                        state.ketQua = "I am iron. Im the one"
                        state.soBanThang += 1
                    } break;

                case "bao":
                    if (computer.ma === 'bao') {
                        state.ketQua = "hòa nhau !!!"
                    } else if (computer.ma === "keo") {
                        state.ketQua = "Ăn may thôi lại"
                    } else {
                        state.ketQua = "I am iron. Im the one"
                        state.soBanThang += 1
                    } break;
                default: state.ketQua ="I am iron. I love you"
                
            }
            state.soBanChoi += 1
            return { ...state }
        }


        default: {

            return { ...state }
        }
    }
}

