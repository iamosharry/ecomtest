import { assets, food_list } from "../assets";
import { motion } from "framer-motion";
import useCounter from "../services/useCounter";
import useCount from "../services/useCount";
import useCategory from "../services/useCategory";
import useScrollStore from "../services/useScrollStore";

const Dishes = () => {
  const { counterVisible, setCounterVisible } = useCounter();
  const { increment, decrement, increments, addToCart } = useCount();
  const { store } = useCategory();
  const { sectionId } = useScrollStore();

  const filteredFoodList =
    store.length > 0
      ? food_list.filter((item) => store.includes(item.category))
      : food_list;

  return (
    <section id={sectionId || undefined} className="py-10 border-t-2">
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">
        Top Dishes Near You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredFoodList.map(({ _id, image, name, description, price }) => (
          <div
            key={_id}
            className="w-full overflow-hidden rounded-2xl shadow-2xl"
          >
            <div className="relative">
              <img
                src={image}
                alt={name}
                className="w-full h-auto object-contain"
              />
              {counterVisible && (
                <div className="absolute bottom-[15px] right-[5px] bg-white flex items-center space-x-3 rounded-full">
                  <div
                    className="w-[30px] "
                    onClick={() => decrement(parseInt(_id))}
                  >
                    <img
                      src={assets.remove_icon_red}
                      alt=""
                      className="w-full h-auto cursor-pointer hover:border-2 border-[#FF4C24] rounded-full"
                    />
                  </div>
                  <span className="font-bold text-gray-700">
                    {increments[parseInt(_id)] || 0}
                  </span>
                  <div
                    className="w-[30px] "
                    onClick={() => {
                      increment(parseInt(_id));
                      const products = {
                        _id: parseInt(_id),
                        name: name,
                        image: image,
                        price: price,
                      };
                      addToCart(products);
                    }}
                  >
                    <img
                      src={assets.add_icon_green}
                      alt=""
                      className="w-full h-auto cursor-pointer hover:border-2 border-[#FF4C24] rounded-full"
                    />
                  </div>
                </div>
              )}

              <div
                onClick={() => {
                  setCounterVisible();
                }}
                className={`absolute bottom-[10px] w-[40px] right-[5px] ${
                  counterVisible ? "hidden" : "block"
                }`}
              >
                <motion.img
                  className="w-full h-auto cursor-pointer hover:border-2 border-[#FF4C24] rounded-full"
                  src={assets.add_icon_white}
                  alt=""
                />
              </div>
            </div>
            <div className="px-4 py-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-lg">{name}</p>
                <img
                  className="w-16"
                  src={assets.rating_starts}
                  alt="Rating stars"
                />
              </div>
              <p className="mb-3 text-[14px]">{description}</p>
              <p className="text-[#FF0000] font-semibold text-[20px]">
                ${price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dishes;
