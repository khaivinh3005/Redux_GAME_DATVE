// import logo from './logo.svg';
import './App.css';
import BTOanTuXi from './BTOanTuXi/BTOanTuXi';
import { Provider } from 'react-redux';
import { store } from './redux/reducer/RootReducer';
import BaiTapVeXemPhim from './DatVeXemPhim/BaiTapVeXemPhim';


function App() {
  return (
    <div>
      <Provider store={store}>
        <BTOanTuXi />
        {/* <BaiTapVeXemPhim /> */}
      </Provider>
    </div>
  );
}

export default App;
