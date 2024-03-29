import React from 'react';
import logo from '../images/Logo .svg'
function Footer(props) {
    return (
        <footer>
            <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
               <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
              <h3>Important Links</h3>
              <ul>
                 <li><a href='/'>Home</a></li>
                 <li><a href='/'>About</a></li>
                 <li><a href='/'>Menu</a></li>
                 <li><a href='/'>Reservations</a></li>
                 <li><a href='/'>Order Online</a></li>
                 <li><a href='/'>Login</a></li>

              </ul>
            </div>
             <div>
             <h3>Contact</h3>
             <ul>
             <li>Address: <br/> 123 Township, USA</li>
             <li>Phone: <br/> ++ 0123 456 7890</li>
             <li>Email: <br/>Little@Lemon.com</li>

             </ul>
             </div>

             <div>
             <h3>Socail Media</h3>
             <ul>
             <li><a href='/'>Facebook</a></li>
             <li><a href='/'>Instagram</a></li>
             <li><a href='/'>Twitter</a></li>

             </ul>
             </div>

            </section>
        </footer>
    );
}

export default Footer;