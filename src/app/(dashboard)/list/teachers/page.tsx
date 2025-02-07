import Pagination from "@/components/Pagination";
import TableComponent from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";

type Teacher = {
  id: number;
  name: string;
  position: string;
  email?: string;
  classes: string[];
  photo: string;
};

const columns = [
  {
    header: "info",
    accessor: "info",
  },
  {
    header: "position",
    accessor: "position",
  },
  {
    header: "classes",
    accessor: "classes",
    classNames: "hiddem md:table-cell",
  },
  {
    header: "actions",
    accessor: "actions",
  },
];

const TeachersListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr key={item.id}>
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt={item.name}
          width={40}
          height={40}
          className="md:hidded xl:block h-10 w-10 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-500 text-xs">{item.email}</p>
        </div>
      </td>
      <td>{item.position}</td>
      <td>{item.classes.join(",")}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button>
              <Image
                src={"/view.png"}
                alt="view button"
                width={16}
                height={16}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-sedieLightBlue"
              />
            </button>
          </Link>
          {role === "admin" && (
            <button>
              <Image
                src={"/delete.png"}
                alt="view button"
                width={16}
                height={16}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-sedieLightBlue"
              />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center bg-sedieLightPurple rounded-full">
              <Image src={"/filter.png"} alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-sedieLightPurple rounded-full">
              <Image src={"/sort.png"} alt="sort" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-sedieLightPurple rounded-full">
              <Image src={"/plus.png"} alt="plus" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      <TableComponent
        columns={columns}
        renderRow={renderRow}
        data={teachersData}
      />
      <Pagination />
    </div>
  );
};

export default TeachersListPage;
