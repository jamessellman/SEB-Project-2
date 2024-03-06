import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              {/* // ! Instead of div elements, these will need to be Link components to the correct routes. Replace the divs with Link */}
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link to="/characterList" className="navbar-item">
                Characters
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

// return(
//      <>
//       <header>
//         <nav className="navbar is-light">
//           <div className="container">
//             <div >
//               <Link to="/" className="navbar-item">
//                 Home
//               </Link>
//               <div className="navbar-end">
//                 <div className="navbar-brand navbar-end">
//                   <Link to="/characterList" className="navbar-item">
//                     Characters
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
