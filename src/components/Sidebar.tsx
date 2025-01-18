import { useRef, useState } from "react";
import { FaHome } from "react-icons/fa";
import {
  CiSettings,
  CiHeart,
  CiShoppingCart,
  CiLogin,
  CiLogout,
} from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuLockKeyhole } from "react-icons/lu";
import "../style/slidebar.css";

const items = [
  { name: "Home" },
  { name: "Favourites" },
  { name: "Products" },
  { name: "Testimonials" },
  { name: "Security" },
  { name: "Settings" },
  { name: "login" },
  { name: "logout" },
];

const Icon = ({ children }: { children: string }) => {
  switch (children) {
    case "Home":
      return <FaHome />;
    case "Favourites":
      return <CiHeart />;
    case "Products":
      return <CiShoppingCart />;
    case "Testimonials":
      return <IoChatbubbleOutline />;
    case "Security":
      return <LuLockKeyhole />;
    case "Settings":
      return <CiSettings />;
    case "login":
      return <CiLogin />;
    case "logout":
      return <CiLogout />;
    default:
      throw new Error("something wrong");
  }
};

export const Sidebar = () => {
  const [width, setWidth] = useState(50);
  const sidebarRef = useRef<HTMLElement | null>(null);
  const sidebar = sidebarRef.current?.offsetLeft!;

  const resize = (e: MouseEvent) => {
    let newWidth = e.clientX - sidebar;
    if (newWidth < 50) newWidth = 50;
    if (newWidth > 200) newWidth = 200;
    setWidth(newWidth);
  };

  const stopResize = () => {
    document.body.style.cursor = "default";
    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stopResize);
  };

  const initResize = () => {
    document.body.style.cursor = "col-resize";
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  };

  return (
    <aside
      ref={sidebarRef}
      style={{ width: `${width}px`, zIndex: 1 }}
      className="slidebar"
    >
      <div className="handle" onMouseDown={initResize}></div>
      <div className="inner">
        <div className="sysName">
          <h1>MANAGEMENT</h1>
          <h1>SYSTEM</h1>
        </div>
        <nav className="menu">
          {items.map((item) => (
            <button key={item.name}>
              <Icon>{item.name}</Icon>
              <p>{item.name}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};
