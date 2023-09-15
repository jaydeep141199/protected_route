import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate=useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    navigate("/")
  };

  return (
    <button onClick={handleLogout} className='bg-red-500 p-2 font-bold'>
      Logout
    </button>
  );
};

export default LogoutButton;
