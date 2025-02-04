import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const menuItems = [
    {
      title: "menu",
      items: [
        {
          icon: "/home.png",
          label: "Home",
          href: "/",
        },
        {
          icon: "/teacher.png",
          label: "Teachers",
          href: "/teachers",
        },
        {
          icon: "/class.png",
          label: "Classes",
          href: "/classes",
        },
        {
          icon: "/exam.png",
          label: "Exams",
          href: "/exams",
        },
        {
          icon: "/assignment.png",
          label: "Assignments",
          href: "/assignments",
        },
        {
          icon: "/calendar.png",
          label: "Events",
          href: "/events",
        },
        {
          icon: "/message.png",
          label: "Messages",
          href: "/messages",
        },
        {
          icon: "/announcement.png",
          label: "Announcements",
          href: "/announcements",
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          icon: "/profile.png",
          label: "Profile",
          href: "/profile",
        },
        {
          icon: "/setting.png",
          label: "Settings",
          href: "/settings",
        },
        {
          icon: "/logout.png",
          label: "Logout",
          href: "/logout",
        },
      ],
    },
  ];
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-4" key={i.title}>
          <span className="hidden lg:block uppercase my-4 font-light text-gray-400">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-600 hover:text-purple-400"
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
