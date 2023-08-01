import './App.css';
import { useEffect, useState } from 'react';
import MyTable from './MyTable';

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw"
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
}

function App() {
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://api.sec.or.th/FundFactsheet/fund/amc", requestOptions)
      .then(response => response.json())
      .then(result => { setNameList(result); })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <div style={style.container}>
        <div style={style.box}>
          <h1>SEC Investment Fund</h1>
          <div style={{ width: "70%", margin: "0px 0px 48px" }}>
            <MyTable data={nameList} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
