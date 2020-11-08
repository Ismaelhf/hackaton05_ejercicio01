import React,{useState} from 'react'
import './index.css'

const Form = () => {

    const [amount, setAmount] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');


const sendForm = (e) =>{
    e.preventDefault();
    // document.querySelector('#amountForm').value = amount;
    console.log({to});
    if (from ==='USD' && to ==='SOL') {
        document.querySelector('#exchangeRate').value = 3.59 *amount+' SOL';
    }else if(from ==='SOL' && to ==='USD'){
        document.querySelector('#exchangeRate').value = 3.62*amount+' USD';
    }else if (from === to){
        alert('No se puede calcular el mismo tipo de modena');
    }
    // document.querySelector('#exchangeRate').value = to;
    // document.querySelector('#commentForm').value = comment;
}

    return (
        <section className="login">
            <h1>Simple Currrrency Converter</h1>
            <div className="loginContainer">
                <form onSubmit={sendForm} className="form form-registro">

                        <div className="container">   

                            <label>Exchange Rate</label>
                            <div className="itemExchange">
                                <label  value=""></label>
                                <input type="text"  value="0"id="exchangeRate" disabled/>
                            </div>

                                <label>Amount</label>
                            <div className="item amount">
                                <input type="text" required value={amount} onChange={({target: {value}})=> setAmount(value)} autoComplete="off"/>
                                {/* <p className="errorMsg">{emailError}</p> */}
                            </div>
                            <div className="change">
                                <div className="change2">
                                    <label>From</label>
                                    <div className="item">
                                        <select id="from" onChange={({target: {value}})=> setFrom(value)} required>
                                            <option value={""}>seleccionar</option>
                                            <option value={"USD"}>USD</option>
                                            <option value={"SOL"}>Perú</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-repeat"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>

                                </div>
                                <div className="change2">
                                    <label>To</label>
                                    <div className="item">
                                        <select id="to" onChange={({target: {value}})=> setTo(value)} required>
                                            <option value={""}>seleccionar</option>
                                            <option value={"USD"}>USD</option>
                                            <option value={"SOL"}>Perú</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="btnContainer">
                                <input type="submit" id="btnSubmit" value="CONVERT"/>
                            </div>
                        </div>
                  
                </form>

            </div>
                {/* <div>form data:{JSON.stringify({name,email,to,comment})}</div> */}

        </section>
    )
}


export default Form;
