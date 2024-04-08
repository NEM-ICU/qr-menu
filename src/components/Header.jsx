import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <div className="flex justify-between align-middle border-b pb-4">
      <div className="mx-8">
        <h1 className="text-2xl mt-2 capitalize">{pathname == "/" ? "Dashboard" :  pathname.slice(1)}</h1>
      </div>
      <div className="flex gap-4 mr-14 justify-center align-middle mt-1">
        <div className="bg-purple-500 w-10 h-10 rounded-md mt-1 relative">
          <h2 className="absolute top-1 right-1/2 translate-x-1/2 text-center text-lg">J</h2>
        </div>
        <span className="text-lg m-auto">Jones</span>
        <div className="flex text-lg m-auto cursor-pointer">🞃</div>
      </div>
    </div>
  );
};

export default Header;
