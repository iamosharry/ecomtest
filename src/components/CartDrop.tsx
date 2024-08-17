import { FaTrash } from "react-icons/fa";
import useCount from "../services/useCount";
import Header from "./Header";
import AuthForm from "./AuthForm";
import useSignIn from "../services/useSignIn";

const CartDrop = () => {
  const { carts, sum, removeFromCart, increments } = useCount();
  const { signIn } = useSignIn();

  return (
    <>
      {signIn && (
        <div className="fixed z-[200] w-full h-[100vh] bg-[#00000052] top-0 left-0 flex justify-center items-center">
          <AuthForm />
        </div>
      )}
      <div className="w-[93%] lg:w-[80%] mx-auto  my-0">
        <Header />

        <div className="bg-white py-10">
          <div className="overflow-x-auto">
            <table className="min-w-full mb-10">
              <thead>
                <tr className="border-b">
                  <td className="text-gray-700 lg:font-semibold py-6 text-sm lg:text-base">
                    Items
                  </td>
                  <td className="text-gray-700 lg:font-semibold py-6 text-sm lg:text-base">
                    Title
                  </td>
                  <td className="text-gray-700 lg:font-semibold py-6 text-sm lg:text-base">
                    Price
                  </td>
                  <td className="text-gray-700 lg:font-semibold py-6 text-sm lg:text-base">
                    Quantity
                  </td>
                  <td className="text-gray-700 lg:font-semibold py-6 text-sm lg:text-base">
                    Total
                  </td>
                  <td className="text-gray-700 lg:font-semibold py-6 text-sm lg:text-base">
                    Remove
                  </td>
                </tr>
              </thead>
              <tbody>
                {carts.map((item) => {
                  const quantity = increments[item._id] || 0; // Get quantity from increments
                  const totalPrice = item.price * quantity; // Calculate total price for this item

                  return (
                    <tr
                      key={item._id}
                      className="border-b text-sm lg:text-base"
                    >
                      <td>
                        <img
                          className="w-[70px] lg:w-[100px] py-2"
                          src={item.image}
                          alt={item.name}
                        />
                      </td>
                      <td className="py-2">{item.name}</td>
                      <td className="py-2">${item.price.toFixed(2)}</td>
                      <td className="text-center py-2">{quantity}</td>
                      <td className="py-2">${totalPrice.toFixed(2)}</td>
                      <td className="py-2 text-center">
                        <button onClick={() => removeFromCart(item._id)}>
                          <FaTrash className="text-[orangered] hover:text-red-600 transition duration-200" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="">
              <h3 className="text-[1.5em] font-bold mb-4">Cart Totals</h3>
              <p className="border-b-2 max-w-[500px] flex justify-between items-center mb-2">
                <span>Subtotal</span> <span>${sum().toFixed(2)}</span>
              </p>
              <p className="border-b-2 pb-2 max-w-[500px] flex justify-between items-center mb-4">
                Total <span>${sum().toFixed(2)}</span>
              </p>
              <div>
                <button className="w-[300px] text-center bg-[orangered] text-white py-4">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrop;
