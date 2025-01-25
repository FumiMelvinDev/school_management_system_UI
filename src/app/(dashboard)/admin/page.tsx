import LearnersChart from "@/components/LearnersChart";
import MatricChart from "@/components/MatricChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="px-4 flex flex-col md:flex-row gap-4">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* UserCard */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Matric Student" />
          <UserCard type="Total Staff" />
        </div>

        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <MatricChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <LearnersChart />
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default AdminPage;
