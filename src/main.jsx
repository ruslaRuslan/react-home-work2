import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/Home/Index.css'

import aliImage from './components/Home/ali.jpg';
import bedbext_developer from './components/Home/bedbext_developer.jpg';
import duman from './components/Home/duman.jpg';
import js_oyrenen_shexs from './components/Home/js_oyrenen_shexs.jpg';
import novxvani from './components/Home/novxani.jpg';
import qarli_daglar from './components/Home/qarli_daglar.jpg';
import qoca_cinar from './components/Home/qoca_cinar.jpg';
import visselka from './components/Home/visselka.jpg';

function A() {
  return <>
    <div style={{ display: "flex", gap: "10px", textAlign: "center", flexWrap: "wrap", justifyContent: "center" }} >
      <div style={{ border: "1px solid", borderRadius: "10px", width: "300px", height: "500px" }}>
        <img style={{ width: "300px", height: "350px", borderRadius: "10px" }} src={aliImage} alt="" />
        <h1>Ali</h1>
        <p>developer</p>
      </div>
      <div style={{ border: "1px solid", borderRadius: "10px", width: "300px", height: "500px" }}>
        <img style={{ width: "300px", height: "350px", borderRadius: "10px" }} src={bedbext_developer} alt="" />
        <h1>bedbext_developer</h1>
        <p>test2</p>
      </div>
      <div style={{ border: "1px solid", borderRadius: "10px", width: "300px", height: "500px" }}>
        <img style={{ width: "300px", height: "350px", borderRadius: "10px" }} src={duman} alt="" />
        <h1>duman</h1>
        <p>test3</p>
      </div>
      <div style={{ border: "1px solid", borderRadius: "10px", width: "300px", height: "500px" }}>
        <img style={{ width: "300px", height: "350px", borderRadius: "10px" }} src={js_oyrenen_shexs} alt="" />
        <h1>js_oyrenen_shexs</h1>
        <p>test4</p>
      </div>
      <div style={{ border: "1px solid", borderRadius: "10px", width: "300px", height: "500px" }}>
        <img style={{ width: "300px", height: "350px", borderRadius: "10px" }} src={novxvani} alt="" />
        <h1>novxvani</h1>
        <p>test5</p>
      </div>
      <div style={{ border: "1px solid", borderRadius: "10px", width: "300px", height: "500px" }}>
        <img style={{ width: "300px", height: "350px", borderRadius: "10px" }} src={qarli_daglar} alt="" />
        <h1>qarli_daglar</h1>
        <p>test6</p>
      </div>
      <div style={{ border: "1px solid", borderRadius: "10px", width: "300px", height: "500px" }}>
        <img style={{ width: "300px", height: "350px", borderRadius: "10px" }} src={qoca_cinar} alt="" />
        <h1>qoca_cinar</h1>
        <p>test7</p>
      </div>
      <div style={{ border: "1px solid", borderRadius: "10px", width: "300px", height: "500px" }}>
        <img style={{ width: "300px", height: "350px", borderRadius: "10px" }} src={visselka} alt="" />
        <h1>visselka</h1>
        <p>test8</p>
      </div>
    </div>
  </>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <A />

  </div>
)
