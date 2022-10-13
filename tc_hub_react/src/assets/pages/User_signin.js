import { UserNav } from '../modules/User_navbar';
import '../style/style.css';
export function UserSignIn()
{
    return(
        <>
        <UserNav/>
        <div class="bodyLogin">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card border-0 shadow rounded-3 my-5">
                        <div class="card-body p-4 p-sm-5">
                            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                            <form>
                                <div class="form-floating mb-3">
                                    <label for="floatingInput">Email address</label>
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        
                                </div>
                    
                                <div class="form-floating mb-3">
                                    <label for="floatingPassword">Password</label>
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                </div>
                    
                                <div class="d-grid">
                                    <a href="./">
                                        <button class="btn btn-primary btn-login text-uppercase fw-bold btn-block" type="submit">
                                            Sign in
                                        </button>
                                    </a>
                                </div>
                                <div class="d-grid">
                                    <a href="./register">
                                        <button class="btn btn-info btn-login text-uppercase fw-bold btn-block my-4" type="submit">
                                            Register Here
                                         </button>
                                    </a>
                                </div>

                                <hr class="my-4"/>
                                    <div class="d-grid mb-2">
                                </div>
                                
                                <div class="d-grid">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}