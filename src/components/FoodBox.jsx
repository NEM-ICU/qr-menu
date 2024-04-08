import SearchBar from "./SearchBar";
import FoodInputModal from "./FoodInputModal";
import { useMenuStore } from "../store/menu-store";
import { DndContext, closestCorners } from "@dnd-kit/core";
import FoodCardItem from "./FoodCardItem";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const FoodBox = () => {
  const { menu, selectedCategory, moveFoodItems } = useMenuStore((state) => ({
    menu: state.menu,
    selectedCategory: state.selectedCategory,
    moveFoodItems: state.moveFoodItems,
  }));

  const selectedItems = menu.find(
    (item) => item[0].category == selectedCategory
  );

  console.log(selectedItems, "selectedItems");

  const getTaskPos = (id) => selectedItems.findIndex((item) => item.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    console.log(active, over);

    const originalPos = getTaskPos(active.id);
    const newPos = getTaskPos(over.id);

    moveFoodItems(arrayMove(selectedItems, originalPos, newPos));
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="w-[1200px] h-[850px] bg-gray-100 p-2 mt-8 shadow">
        <div>
          <div className="flex justify-between m-4">
            <div>
              <h2 className="text-2xl text-gray-500 font-bold">Food</h2>
              <span>Today's Special</span>
            </div>
            <FoodInputModal />
          </div>
          <div className="m-4 mt-8">
            <SearchBar />
          </div>
          <div className="h-[650px] overflow-scroll overflow-x-hidden">
            <SortableContext
              items={selectedItems}
              strategy={verticalListSortingStrategy}
            >
              {selectedItems?.map((item) => (
                <FoodCardItem id={item.id} key={item.id} item={item} />
              ))}
            </SortableContext>
            {/*  */}
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default FoodBox;
