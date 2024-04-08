import { useSortable } from "@dnd-kit/sortable";
import { useMenuStore } from "../store/menu-store";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { CSS } from "@dnd-kit/utilities";

const CategoryItem = ({ item, id }) => {
  const { menu, setSelectedCategory, selectedCategory, categories } =
    useMenuStore((state) => ({
      menu: state.menu,
      selectedCategory: state.selectedCategory,
      setSelectedCategory: state.setSelectedCategory,
      categories: state.categories,
    }));

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={`w-[95%] my-2 py-4 border-l-[5px] rounded-lg bg-gray-100 shadow-sm ${
        selectedCategory !== item.category ? "border-gray-300" : "border-purple-300"
      }`}
      onClick={() => {
        console.log("Category Clicked");
        setSelectedCategory(item.category);
      }}
    >
      <div className="flex justify-between p-2 align-middle">
        <div className="flex align-top">
          <PiDotsSixVerticalBold className="text-2xl" />
        </div>
        <div className="flex-1 text-[15px]">{item.category}</div>
        <div className="my-auto">
          <PiDotsThreeVerticalBold />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
