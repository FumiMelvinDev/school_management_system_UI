import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-sedieLightPurple even:bg-sedieLightYellow p-4 flex-1 min-w-[130px]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          {new Date().getFullYear()}
        </span>
        <Image src="/more.png" alt="more icon" width={20} height={20} />
      </div>
      <h1 className="text-xl font-semibold my-2">2310</h1>
      <h2 className="text-sm text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
