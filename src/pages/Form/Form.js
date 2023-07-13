import './Form.css'
function Form() {
    return <div className="form">
        <div className="container">
            <div className="title">
                <h1>My account</h1>
            </div>
        </div>

        <div className="form_container">
            <div className='form_box'>
                <div className="return_user">
                    <div>
                        <h2>Returning Customer</h2>
                        <div>
                            <div className='inputbox'>
                                <label for="email">Email</label>
                                <input name='email' />
                            </div>
                            <div className='inputbox'>

                                <label>Password</label>
                                <input />
                            </div>
                        </div>
                        <input type='button' value="login" />
                        <div className="r_c_bottom">
                            <div className="check">
                                <input type="checkbox" />
                                <p>remember me</p>
                            </div>
                            <div className="lost_link">Lost Your Password?</div>
                        </div>
                    </div>
                </div>
                <div className='temp_div'></div>
                <div className="new_user">
                    <div>
                        <h2>New Customer</h2>
                        <div>
                            <div className='inputbox'>

                                <label>EMAIL ADDRESS *</label>
                                <input />
                            </div>
                            <div className='inputbox'>

                                <label>CREATE PASSWORD *</label>
                                <input />

                            </div>
                        </div>
                        <div className="checkbox-div">
                            <div className="check">
                                <input type="checkbox" />
                                <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                            </div>
                        </div>
                        <input type='button' value="register" />
                    </div>
                </div>
            </div>
        </div>
    </div>

}
export default Form