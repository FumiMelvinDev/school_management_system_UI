const Announcements = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-sedieBlue p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
              ipsam.
            </h2>
            <span className="text-xs text-gray-400 bg-white p-1 rounded-md">
              2025-02-05
            </span>
          </div>
          <p className="text-sm mt-2 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            atque beatae, minima distinctio repudiandae culpa facilis, autem
            quam quo id aspernatur dolores quidem, nemo sapiente dignissimos
            impedit aliquam neque praesentium!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
