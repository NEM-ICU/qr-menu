import CategoryInputModal from "./CategoryInputModal";
import { useMenuStore } from "../store/menu-store";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import CategoryItem from "./CategoryItem";

const CategoryDrop = () => {
  const {
    menu,
    setSelectedCategory,
    selectedCategory,
    categories,
    moveCategory,
  } = useMenuStore((state) => ({
    menu: state.menu,
    selectedCategory: state.selectedCategory,
    setSelectedCategory: state.setSelectedCategory,
    categories: state.categories,
    moveCategory: state.moveCategory,
  }));

  console.log(categories, "categories");
  console.log(selectedCategory, "selected category");

  const selectedCategoryIndex = categories.findIndex(
    (item) => item.category == selectedCategory
  );

  console.log(menu[selectedCategoryIndex], "selectedCategoryIndex");

  const getTaskPos = (id) => categories.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    console.log(active, over);

    const originalPos = getTaskPos(active.id);
    const newPos = getTaskPos(over.id);

    console.log(active.id, "ACTIVE ID");

    if (active.id === over.id) {
      setSelectedCategory(categories[active.id -1].category);
    }

    const newCategoryArry = arrayMove(categories, originalPos, newPos);
    const newFoodsArray = arrayMove(menu, originalPos, newPos);

    console.log(newCategoryArry, "new Category Array");
    console.log(newFoodsArray, "new Foods Array");
    moveCategory(newCategoryArry, newFoodsArray);
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="w-72 mt-8">
        <div className="flex justify-between align-middle m-4 mb-6">
          <div className="text-2xl text-gray-500 font-bold">Categories</div>
          <CategoryInputModal />
        </div>

        <div className="w-64 m-4">
          <SortableContext
            items={categories}
            strategy={verticalListSortingStrategy}
          >
            {categories.map((item) => (
              <CategoryItem id={item.id} key={item.id} item={item} />
            ))}
          </SortableContext>
        </div>
      </div>
    </DndContext>
  );
};

export default CategoryDrop;
