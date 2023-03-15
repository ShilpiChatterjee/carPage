import { Navigate } from "react-router-dom";
import { useSelector } from"react-redux"
import Swal from "sweetalert2";


export default function Privateroutes({ children }) {
  const { isAuth } = useSelector((state)=>state.auth)
  
  if (!isAuth) {
    Swal.fire({
      icon: 'error',
      title: 'Sorry...',
      text: 'Login first!',
      footer: '<a href="">Go to login?</a>'
    })
   
    return <Navigate to="/login" />;
  }
  return children;
}