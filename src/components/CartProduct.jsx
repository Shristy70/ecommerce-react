import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { cartreDel, addqnty, DelQnty } from "./CartSlice";
import { FaMinusCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CartProduct = () => {
  const mycart = useSelector((state) =>state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartRecDel = (id) => {
    dispatch(cartreDel(id));
  };
  const qtyInc = (id) => {
    dispatch(addqnty(id));
  };
  const qtyIDec = (id) => {
    dispatch(DelQnty(id));
  };
  const checkOut = () => {
    navigate("/checkout");
  };
  let totalAmount = 0;
  const ans = mycart.map((key) => {
    totalAmount += key.price * key.qnty;
    return (
      <>
        <tr>
          <td>
            <img src={"../images/" + key.images} style={{width:"150px" , height:"100px"}} />
          </td>
          <td>{key.name}</td>
          <td>{key.description}</td>
          <td>{key.price}</td>
          <td>
            <a href="#">
              <FaMinusCircle
                onClick={() => {
                  qtyIDec(key.id);
                }}
              />
            </a>
            <span
              style={{
                paddingLeft: "5px",
                paddingRight: "5px",
                fontWeight: "bold",
              }}
            >
              {key.qnty}
            </span>
            <a href="#">
              <IoIosAddCircle
                onClick={() => {
                  qtyInc(key.id);
                }}
              />
            </a>
          </td>
          <td>{key.price * key.qnty}</td>
          <td>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                cartRecDel(key.id);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <h1> your product cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ans}
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Total Amount :</th>
            <th>{totalAmount}</th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <Button variant="primary" onClick={checkOut}>
                CheckOut
              </Button>
            </th>
            <th></th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default CartProduct;
