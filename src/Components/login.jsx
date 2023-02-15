//Display Hello React
import React from 'react';
import ReactDOM from 'react-dom';
//import logo png 
import logo from '../logo.png';
import background from '../wallpaper.jpeg';
function Login() {
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="absolute flex bg-pink py-">
                
            <div className="grid v-screen place-items-center py-12 bg-yellow-300 ">
                    <img className="h-18 w-32" src={logo} alt="logo" />
                    <div>
                        <h1 className="bold text-center">Login</h1>
                        <form>
                            <div className=" form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>


                            <button type="submit" className="btn btn-primary btn-block" onClick={(e) => {   
                                e.preventDefault();
                                console.log("Login button clicked");
                            }}>Submit</button>

                            

                            <p className="forgot-password text-right">
                                Forgot <a href="">password?</a>
                            </p>
                        </form>
                </div>
            </div>
        </div>
    </section>
    );
}

    
// Export the Login component so that it can be used in other files
export default Login;



