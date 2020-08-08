import React from "react";
import {Link} from "react-router-dom";


const Navbar = (props) => {
    return (
        <nav className="navbar">        
            <div className="logo-wrapper">
                <Link to="/" className="logo-link">
                    <p className="logo">RumRoll</p>
                </Link>
            </div>
            <div className="nav-group-1">
                <Link to="/" className="products-link">
                    <p className="products">Products</p>
                </Link>          
                <Link to="/cart">
                    <button className="my-cart">
                        <i className="fas fa-cart-plus" /> <span>My Cart</span>
                    </button>
                </Link>
            </div>
            
        </nav>
    )
}

export default Navbar;


















































// export default class Navbar extends Component {
//     render() {
//         return (
//             <NavWrapper>
//                 <Link to="/">
//                     <div className="logo-wrapper">
//                         <img src={logo} alt="store" className="navbar-brand" />
//                     </div>
                                    
//                 </Link>
//                 <ul className="navbar-nav align-items-center">
//                     <li className="nav-item ml-5">
//                         <Link to="/" className="nav-link">
//                             products
//                         </Link>
//                     </li>
//                 </ul>
//                 <Link to="/cart" className="ml-auto">
//                     <button className="my-cart">
//                         <span className="mr-2">
//                             <i className="fas fa-cart-plus" />
//                         </span>                       
//                         my cart
//                     </button>
//                 </Link>
//             </NavWrapper>
//         );
//     }
// }


// const NavWrapper = styled.nav`
//     background: var(--mainRed);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 10px;
//     max-height: 4rem;
//     overflow: hidden;
//     .nav-link{
//         color: var(--mainWhite) !important;
//         font-size: 1.3rem;
//         text-transform: capitalize;
//     }
//     .navbar-brand {
//         width: 11rem;
    
//     }
//     .logo-wrapper {
//         max-height: 100%;
//     }

//     button {
//         text-transform: capitalize;
//         font-size: 1.4rem;
//         background: transparent;
//         border: 0.05rem solid var(--lightBlue);
//         border-radius: 0.5rem;
//         padding: 0.2rem 0.5rem;
//         cursor: pointer;
//         margin: 0.2rem 0.5rem 0.2rem 0;
//         transition: all 0.5s ease-in-out;
//     }

//     button:hover {
//         background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
//         color: var(--mainBlue);
//     }

//     button:focus {
//         outline: none;
//     }
    
// `




// navbar navbar-expand-sm navbar-dark px-sm-5
// <i className="fas fa-cart-plus" />