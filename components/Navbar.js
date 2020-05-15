import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = (props) => { 

  const toggleMenu = () => {
    let hamburger = document.getElementById('hamburgerbtn');
    let mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('toggled');
    }
    const router = useRouter();
    const liClassName = "text-green-900 uppercase hover:underline rounded-sm pr-5";
    return (
        <React.Fragment>
            <div className="container mx-auto bg-green-500 p-5 rounded-sm">
              <nav className="md:flex md:justify-between">
                <div className="flex justify-between">
                  <div className="flex justify-start items-center"> 
                    <Link href="/"><a><img src="images/B2M-logo-sm.png" alt="logo"/></a></Link>
                    <span className="font-bold uppercase text-green-900">Bourne To Maintain</span>
                  </div>
                  <button onClick={toggleMenu} id="hamburgerbtn" className="md:hidden text-green-900 focus:outline-none">
                        <i className="fa fa-bars fa-2x"></i>
                  </button>  
                </div>
                <ul className="hidden md:flex md:flex-row md:justify-between md:items-center" id="mobileMenu">
                  <li className={(router.pathname === '/') ? "active " + liClassName: "" + liClassName}><Link href="/"><a>Home</a></Link></li>
                  <li className={(router.pathname === '/about') ? "active " + liClassName: "" + liClassName}><Link href="/about"><a>About</a></Link></li>
                  <li className={(router.pathname === '/our_work') ? "active " + liClassName: "" + liClassName}><Link href="/our_work"><a>Our Work</a></Link></li>
                  <li className="text-green-900 uppercase rounded-sm pr-5"><a href="tel:246-265-0501"><i className="pt-2 fa fa-phone fa-lg"></i> Call Us</a></li>
                </ul>
              </nav>
            </div>
      </React.Fragment>
    )
  }

  export default Navbar;