import CategoryDrop from "../components/CategoryDrop";
import FoodBox from "../components/FoodBox";

const EditMenu = () => {
  return (
    <div className="flex">
      <CategoryDrop />
      <div>
        <FoodBox />
      </div>
    </div>
  );
};

export default EditMenu;
