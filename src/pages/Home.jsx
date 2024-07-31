import Text from "../components/Text";
import Button from "../components/Button";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../redux/ToggleSlice";

const Home = () => {
  // useState kullanılarak yapılan state güncellemelerinde ise component tekrardan render edilir.
  // const [name, setName] = useState("React");
  // const [counter, setCounter] = useState(0);
  // const [inputVal, setInputVal] = useState(null);
  // const [inputData, setInputData] = useState([]);

  // const [productData, setProductData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const  products  = useSelector((state) => state.toggle.allData);
  console.log(products);
  const navigate = useNavigate();
  // useRef sayesinde DOM elemanlarına doğrudan erişim sağlanır.
  //Oluşturulan ref nesnesinin değeri değiştiğinde component tekrardan render edilmez.
  const inputRef = useRef(null); // ilk değeri null, sonraki değeri input elemanı
  console.log(inputRef.current);

  const countRef = useRef(0);
  console.log(countRef.current);

  //useState hook'u genellikle kullanıcı etkileşimlerinde ve UI'yı etkileyebilecek verilerin yönetiminde kullanılır.
  //Eğer bir değerin değişikliği UI'yı etkilemeyecekse useRef hook'u tercih edilmelidir.

  //   let name = "React";
  //   let name2 = "";
  // function changeNameHandler() {
  //   setName("React Değişti");
  //   console.log(name);
  // }
  // function changeCounterHandler() {
  //   if (counter <= 0) return;
  //   setCounter(counter - 1);
  // }
  // const targetVal = (e) => {
  //   console.log(e.target.value);
  //   setInputVal(e.target.value);
  // };
  // const addHandlerFn = () => {
  //   setInputData((prev) => [...prev, inputVal]);
  // };

  // const handleCounterIncFn = () => {
  //   //Counter değeri her arttığında component tekrardan render edilmez.
  //   countRef.current++;
  //   console.log(countRef.current);
  // };

  //useEffect herhangi bir dependecy almadığı için sayfa yüklendiğinde API'den ver çekilir.
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllData());
    }, 1000);
  }, [dispatch]);

  //API çağrımları asenkron yapıdadır ve bu nedenle bir promise döndürür.
  // Burada ise promise yapıdaki response'u karşılamak için async-await kullanılmıştır.
  // const getData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     setProductData(response.data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.error("error:", err);
  //   }
  // };

  console.log(products);
  return (
    <div>
      {products?.map((product) => (
        <div
          key={product?.id}
          style={{ display: "flex", padding: "5px", cursor: "pointer" }}
          // onClick={() => navigate(`details/${user.id}`, { state: { user } })}
          onClick={() => navigate(`/details/${product?.id}`)}
        >
          <div style={{ color: "purple", fontWeight: "bold" }}>
            {product?.category}
          </div>
          <div style={{ paddingLeft: "10px" }}>{product?.price + "$"}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
