import '../style/style.css';
export function User_footer()
{
    return(
        <>
          <footer
          class="  text-center text-dark-start footer text-dark "
          style={{backgroundColor: "#1c2331"}}
          >
   

    <section
             class="d-flex justify-content-between p-4"
             style={{backgroundColor: "#A49EC7"}}
             >
      <div class="me-2">
        <h3><span>Get connected with us on social networks:</span></h3>
      </div>

    </section>
   
    <section class="mx-0" id="footer">
      <div class="container text-center text-md-start mt-5 mx-0">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Arpan communication network </h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>


          <div class="col-md-4 col-lg-3 col-xl-3 mx-6 mb-md-0 mb-4 text-right">
            
            <h6 class="text-uppercase fw-bold">Contact us </h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p><i class="fas fa-home mr-3"></i> Konaje,Mangalore,DK </p>
            <p><i class="fas fa-envelope mr-3"></i> akashdsouza1999@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 91 9019552277</p>
          </div>
          
        </div>
       
      </div>
    </section>
    
    <div
         class="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div>
  </footer>
        </>
    );
}