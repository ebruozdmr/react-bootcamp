import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle, getDataById } from "../redux/ToggleSlice";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  //read data from the redux store with useSelector
  const { singleData, value } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  console.log(value);

  // const { state } = useLocation();
  // console.log(useLocation());
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get(
  //       `https://jsonplaceholder.typicode.com/users/${id}`
  //     );
  //     console.log(data);
  //     setData(data);
  //   };
  //   getData();
  // }, [id]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getDataById(id));
    }, 500);
  }, [dispatch, id]);

  // async function getData() {
  //   //Error handling
  //   try {
  //     setIsLoading(true);
  //     const { data } = await axios.get(
  //       `https://fakestoreapi.com/products/${id}`
  //     );
  //     console.log(data);
  //     setData(data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // function getData() {
  //   setIsLoading(true);
  //   //fetch metodu doğrudan bir obje döndürmez, promise döndürür.
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //     .then((res) => {
  //       if (res.status != 200) {
  //         throw new Error("Error!");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => console.error(err));
  // }

  // return (
  //   // <div>
  //   //   <div>{state.user.name}</div>
  //   //   <div>{state.user.phone}</div>
  //   //   <div>{state.user.email}</div>
  //   //   <div>{state.user.company.name}</div>
  //   // </div>
  //   <div>
  //     <div>{data?.name}</div>
  //   </div>
  // );
  return !singleData ? (
    <div>Loading..</div>
  ) : (
    <div>
      <h2>{singleData?.title}</h2>
      <img style={{ width: "120px" }} src={singleData?.image} alt="" />
      <br />
      <button onClick={() => dispatch(modalToggle())}>Click Me!</button>
      <h3>{value.toString()}</h3>
    </div>
  );
};
export default Details;
