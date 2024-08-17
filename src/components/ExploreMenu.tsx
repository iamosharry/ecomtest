import { menu_list } from "../assets";
import useCategory from "../services/useCategory";
import { useState } from "react";

const ExploreMenu = () => {
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  const { setStore, store } = useCategory();

  const handleMenuClick = (menu_name: string, id: number) => {
    if (store.includes(menu_name)) {
      setStore([]); // Show the full food_list
      setActiveMenuId(null);
    } else {
      setStore([menu_name]); // Show the filtered list,
      setActiveMenuId(id);
    }
  };

  return (
    <section>
      <h2 className="text-[30px] font-semibold text-gray-900 mb-2">
        Explore our menu
      </h2>
      <p className="max-w-[680px] mb-10 text-gray-700">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="overflow-x-auto flex space-x-10 scroll_width">
        {menu_list.map(({ menu_image, menu_name, id }) => (
          <div
            key={id}
            className="flex-shrink-0"
            onClick={() => handleMenuClick(menu_name, id)}
            aria-label={`View ${menu_name}`}
          >
            <img
              className={`w-[100px] h-auto object-contain ${
                activeMenuId === id
                  ? "activeCircle transition-all duration-[0.2s]"
                  : ""
              }`}
              src={menu_image}
              alt={`${menu_name} image`}
            />
            <p className="text-center mt-2 font-semibold text-gray-800">
              {menu_name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreMenu;
