// without custom hook using built in context hook
//import { useContext } from 'react';
//import { NavbarContext } from './Navbar';

//for custom hook
import { useAppContext } from './Navbar';


const UserContainer = () => {
  //With context hook
  //const { user, logout } = useContext(NavbarContext);
  // with custom hook
  const { user, logout} = useAppContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name?.toUpperCase()}</p>

          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
