import React from 'react';
import "../../css/login/login.css";
import User from "../../images/user.png";

export default class Login extends React.Component {
    render() {
        return (
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    <div class="fadeIn first">
                        <img src={User} id="icon" alt="User Icon" style={{width:"35px"}} />
                        Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                    </div>

                    <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
                        <input type="submit" class="fadeIn fourth" value="Log In"/>
                    </form>

                    <div id="formFooter">
                        <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        )
    }                             
}