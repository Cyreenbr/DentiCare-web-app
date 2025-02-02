import {
    FaHome,
    FaCalendarAlt,
    FaUser,
    FaCog,
    FaSignOutAlt
}  from "react-icons/fa";
import {
    NavLink
} from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar=()=> {
    return (<div className="sidebar" > <div className="sidebar-head" > {
            /* Logo Section */
        }

        <div className="logo-container" > <img src= {
            logo
        }

        alt="Logo" className="logo" /> </div> {
            /* User Info Section */
        }

        <div className="user-info" > {
            /*<h2>Welcome!</h2>*/
        }

        <p>Dr. Nesrine Berrbibe</p> </div> </div> {
            /* Navigation Links */
        }

        <nav className="sidebar-nav" > <ul> <li> <NavLink to="/home" className= {
            ({
                isActive
            })=> isActive ? "nav-link active" : "nav-link"
    }

    > <FaHome className="nav-icon" /> <span>Home</span> </NavLink> </li> <li> <NavLink to="/appointments" className= {
        ({
            isActive
        })=> isActive ? "nav-link active" : "nav-link"
}

> <FaCalendarAlt className="nav-icon" /> <span>Appointments</span> </NavLink> </li> <li> <NavLink to="/patients" className= {
    ({
        isActive
    })=> isActive ? "nav-link active" : "nav-link"
}

> <FaUser className="nav-icon" /> <span>Patients</span> </NavLink> </li> <li> <NavLink to="/settings" className= {
    ({
        isActive
    })=> isActive ? "nav-link active" : "nav-link"
}

> <FaCog className="nav-icon" /> <span>Settings</span> </NavLink> </li> </ul> </nav> {
    /* Logout Button */
}

<div className="logout" > <NavLink to="/logout" className= {
    ({
        isActive
    })=> isActive ? "nav-link active" : "nav-link"
}

> <FaSignOutAlt className="nav-icon" /> <span>Logout</span> </NavLink> </div> </div>);
}

;

export default Sidebar;
