import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/product/product.actions";

const Profile = () => {
  const { auth, product } = useSelector((state) => state);
  console.log(auth, product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts("https://mock123232.onrender.com/users/getprofile", {
        userId: auth.userId,
      })
    );
  }, []);


  return (
    <div>
      <div>
        <h5>{product.data.name}</h5>
        <h5>{product.data.email}</h5>
        <h5>{product.data.createdAt}</h5>
      </div>
    </div>
  );
};

export default Profile;
