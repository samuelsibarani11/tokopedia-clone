import Mail from "../Elements/Icon/Mail";
import Notification from "../Elements/Icon/Notification";
import SearchIcon from "../Elements/Icon/SearchIcon";
import Store from "../Elements/Icon/Store";
import Cart from "../Elements/Icons/cart";
import InputField from "../Elements/Input/Input";

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center px-5 shadow-sm">
        <div className="p-5">
          <a href="#">
            <img
              src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
              width={250}
            />
          </a>
        </div>

        <div className="px-4">
          <button className=" text-black hover:bg-gray-100 px-4 h-10 rounded-md text-start">
            <a href="#" className="flex items-center gap-2">
              <div>Kategori</div>
            </a>
          </button>
        </div>

        {/* SISAKAN INI KARENA HANYA MENYANGKUT SEARCHBAR */}
        <form className="w-full ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SearchIcon />
            </div>
            <InputField
              id="default-search"
              placeholder="Search Mockups, Logos..."
            />
          </div>
        </form>

        <div className="flex pl-12 pr-4">
          <a href="#" className="px-2">
            <Cart />
          </a>

          <a href="#" className="px-2">
            <Notification />
          </a>
          <a href="#" className="px-2">
            <Mail />
          </a>
        </div>
        <div className="h-6 w-px bg-gray-300"></div>

        <div className="relative group flex px-2 gap-2 items-center">
          <button className=" text-black hover:bg-gray-100 px-4 h-10 w-32 rounded-md text-start">
            <a href="#" className="flex items-center gap-2">
              <Store />
              <div>Toko</div>
            </a>
          </button>
          <button className=" text-black hover:bg-gray-100 px-4  h-10 w-32 rounded-md text-start">
            <a href="#" className="flex items-center gap-2">
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                width={30}
                alt="profile-picture"
                className="rounded-full"
              />
              <div>Samuel</div>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
