import { Link } from "react-router-dom";
import { PiCoins } from "react-icons/pi";

function Navbar(props) {
  const logOut = () => {
    localStorage.removeItem('token');
  }
  return (
    <nav className="bg-black text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white hover:text-gray-300 transition duration-150">
            <PiCoins className="h-8 w-8" />
            <span>Penny-Pilot</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {props.tokenProp ? (
                <Link 
                to="/" 
                className="px-6 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-150"
                >
                <button onClick = {logOut}>Log Out</button>
                </Link>
            ) : (
                <Link 
                to="/login" 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
                >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;