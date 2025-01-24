import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-1 ring-gray-300 px-2 py-1">
        <Image src="/search.png" alt="search icon" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message icon" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="announcement icon"
            width={20}
            height={20}
          />
          <div className="absolute -top-2 -right-2 w-4 h-4 text-xs bg-purple-500 rounded-full text-white flex items-center justify-center">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] font-light text-gray-500 text-right">
            Admin
          </span>
        </div>
        <Image
          src="/avatar.png"
          alt="user icon"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
