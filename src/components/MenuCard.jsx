import { BiFoodMenu } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";

const MenuCard = () => {
  return (
    <div className="w-52 h-52 bg-gray-200 rounded-lg mt-8 mb-10 relative">
      <BiFoodMenu className="text-7xl absolute opacity-30 top-1/2 left-1/2 translate-y-[-80%] translate-x-[-50%]" />
      <div>
        <div className="absolute top-0 right-0 mr-2">
          <button className="bg-gray-400 p-3 rounded-[50%] relative">
            <span className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] m-auto">
              <HiDotsVertical />
            </span>
          </button>
        </div>
        <div className="absolute bottom-0 m-4">
          <h2 className="mb-1 text-lg text-gray-600">Sample Menu</h2>
          <button className=" bg-transparent border border-green-600 rounded-md p-1 text-[12px] text-green-600">
            Active
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
