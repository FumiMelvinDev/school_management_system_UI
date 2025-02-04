"use client";

import BigCalendar from "@/components/BigCalendar";
import SchoolCalendar from "@/components/School_Calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const ClassesPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Grade 8A</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3">
        <SchoolCalendar />
      </div>
    </div>
  );
};

export default ClassesPage;
