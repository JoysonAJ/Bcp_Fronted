import { UserNav } from '../modules/User_navbar';
import '../style/style.css';
export function UserRegister()
{
    return(
    <>
    <UserNav/>
            <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-9 mx-auto">
                <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                  <div class="card-img-left d-none d-md-flex">
                  </div>
                  <div class="card-body p-4 p-sm-5">
                    <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
                    <form>
        
                      <div class="form-floating mb-3">
                        <label for="floatingInputUsername">Username</label>
                        <input type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus/>
                        
                      </div>
        
                      <div class="form-floating mb-3">
                        <label for="floatingInputEmail">Email address</label>
                        <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com"/>
                        
                      </div>
        
                      <hr/>
        
                      <div class="form-floating mb-3">
                        <label for="floatingPassword">Phone</label>
                        <input type="text" class="form-control" id="floatingPassword" placeholder="Contact number"/>
                        
                      </div>
        
                      <div class="form-floating mb-3">
                        <label for="floatingPasswordConfirm">Address</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        
                      </div>
                
                    <div class="form-group"> 
                        <label for="city_id" class="control-label">City</label>
                        <select class="form-control" id="dk">
                            <option value="AL">Dakshina kannada </option>
                            <option value="AK">Udupi </option>
                        </select>
                    </div>									
                                            
                    <div class="form-group">
                        <label for="state_id" class="control-label">State</label>
                        <select class="form-control" id="state_id">
                            <option value="AL">karnataka</option>
                            <option value="AK">Kerala</option>
                        </select>					
                    </div>
                    
                    <div class="form-group"> 
                        <label for="zip_id" class="control-label">Zip Code</label>
                        <input type="text" class="form-control" id="zip_id" name="zip" placeholder="#####"/>
                    </div>	
                    
                    <div class="form-group">
                        <label class="form-label" for="customFile">Adhar Card   </label>
                        <input class="form-control form-control-lg" id="formFileLg" type="file" />
                    </div>

                    <div class="d-grid mb-2">
                        <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase btn-block" type="submit">Register</button>
                    </div>
                    
                    </form>
    
                
                </div>
                </div>
            </div>
            </div>
        </div>
    </>);
}
