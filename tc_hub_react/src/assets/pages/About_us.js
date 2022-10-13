import { User_footer } from '../modules/User_footer';
import { UserNav } from '../modules/User_navbar';
import '../style/style.css';
export function AboutUs()
{
    return(
        <>
        <UserNav/>
            <div class="bg-light">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
              <h1 class="display-4">About us page</h1>
              <p class="lead text-muted mb-0">Create a minimal about us page using Bootstrap 4.</p>
              <p class="lead text-muted">Snippet by <a href="https://bootstrapious.com/snippets" class="text-muted"> 
                          <u>Bootstrapious</u></a>
              </p>
            </div>
            <div class="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid"/></div>
          </div>
        </div>
      </div>
      
      <div class="bg-white py-5">
        
        <div class="container py-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">Arpan Cable Operator</h2>
              <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
          </div>
          
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
            <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">Contact Us</h2>
              <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
          </div>

        </div>

    </div>
    <User_footer/>
        </>
    );
}