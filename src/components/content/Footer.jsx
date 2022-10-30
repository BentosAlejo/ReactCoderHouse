import {memo} from 'react';

const Footer = () => {
    return (
        <>
            <footer className="text-center text-white footer" >
                <div className="container pt-4">
                    <section className="">
                        <p className="btn btn-link btn-floating btn-lg text-secondary m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-facebook-f"></i></p>
                        <a className="btn btn-link btn-floating btn-lg text-secondary m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-twitter"></i></a>
                        <a className="btn btn-link btn-floating btn-lg text-secondary m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-google"></i></a>
                        <a className="btn btn-link btn-floating btn-lg text-secondary m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-instagram"></i></a>
                        <a className="btn btn-link btn-floating btn-lg text-secondary m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-linkedin"></i></a>
                        <a className="btn btn-link btn-floating btn-lg text-secondary m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i class="fab fa-github"></i></a>
                        <p>© 2022 Copyright PIMP LUXURY</p>
                    </section>
        
                </div>
            </footer>  
        </>
    );
}
export default memo(Footer);
