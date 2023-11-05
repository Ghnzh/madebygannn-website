import Link from "next/link";

const Nav = () => {
  return (
    <nav className="fixed bottom-8 flex justify-center w-full">
      <ul className="flex navbar p-2 md:p-[15px] md:text-lg">
        <li>
          <Link
            href={"/"}
            className="border-r border-white px-4 md:px-6 hover:px-12 duration-500"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="border-r border-white px-4 md:px-6 hover:px-12 duration-500"
          >
            work
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="border-r border-white px-4 md:px-6 hover:px-12 duration-500"
          >
            gallery
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="px-4 md:px-6 hover:px-12 duration-500"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
