import React from 'react';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {
        isLogIn,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        error,
        handleRegistration,
        handleResetPassword,
        handleGoogleSignIn
    } = useAuth();
    return (
        <div className="mx-auto d-grid justify-content-md-center">
            {/* login form */}
            <form onSubmit={handleRegistration} className="mx-4 p-3 rounded-3 shadow">
                <h2 className="text-primary">Please {isLogIn ? 'Login' : 'Register'}</h2>
                {!isLogIn && <div class="row mb-3">
                    <label for="inputAddress" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} class="form-control" id="inputAddress" placeholder="your name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">{isLogIn ? 'Login' : 'Register'}</button>
                <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm mx-4">Reset Password</button>
            </form>
            {/* google login */}
            <div className="my-4 p-3 rounded-3 shadow">
                <h2 className="text-primary">Do you want to login with google?</h2>
                <button onClick={handleGoogleSignIn} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;