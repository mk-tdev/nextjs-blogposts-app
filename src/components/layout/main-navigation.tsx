import Link from "next/link";

const MainNavigation = () => {
  return (
    <header>
      <nav className="bg-gray-800 text-white py-4 px-6">
        <ul className="flex space-x-4">
          <li className="hover:text-gray-400 ">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-400 ">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="hover:text-gray-400 ">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-400 ">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
