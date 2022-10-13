import '../style/style.css';
export function UserNav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#" ><img id="MDB-logo"
                        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png" alt="MDB Logo"
                        draggable="false" height="30" /></a>

                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-3 ">
                            <li class="nav-item me-3">
                                <a class="nav-link d-flex align-items-end" href="./about">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center me-3" href="./sign">
                                    <i class="fas fa-bookmark pe-2"></i>Sign In
                                </a>
                            </li>

                            <li class="nav-item" >

                                <a class="nav-link d-flex align-items-center" href="./register">
                                    Rigister
                                </a>
                            </li>

                            <li class="nav-item" >

                                <a class="nav-link d-flex align-items-center" href="/#footer">
                                    Contact Us
                                </a>
                            </li>

                            <li class="nav-item dropdown p-md-0">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    User info
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="./profile">Username</a></li>
                                    <li><a class="dropdown-item" href="./community">Community</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">
                                        <button type="button" class="btn btn-primary btn-sm">Sign Out</button>
                                    </a></li>
                                </ul>
                            </li>


                        </ul>
                    </div>
                </div>

            </nav>
        </>
    );
}