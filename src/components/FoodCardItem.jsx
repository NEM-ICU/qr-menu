import { LuGripVertical } from "react-icons/lu";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const FoodCardItem = ({ item, id }) => {
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
      className="my-8 mx-4 bg-gray-200 p-2 rounded-md"
    >
      <div className="flex justify-between">
        <div className="flex gap-4 align-middle">
          <LuGripVertical className="my-auto text-2xl" />
          <img
            className="h-14 w-14 rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAQLTZ-d3GdDNG0uQ3JjnwIBDY1bw2yvLXvxsKocxhg&s"
            alt="img"
          />
          <div className="my-auto">
            <h2>{item?.name}</h2>
            <p>{item?.description}</p>
          </div>
        </div>
        <div className="flex w-40 justify-between">
          <span className="my-auto">{item?.price} $</span>
          <FaEllipsisVertical className="my-auto" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardItem;
