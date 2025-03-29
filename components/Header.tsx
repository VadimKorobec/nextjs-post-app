"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-slate-400  ">
      <div className="flex items-center mx-auto max-w-7xl pt-4 pb-4">
        <p>
          <Link href="/" className={pathname === "/" ? "text-amber-50" : ""}>
            Home Page
          </Link>
        </p>
        <nav>
          <ul className="flex items-center">
            <li>
              <Link
                href="/posts"
                className={pathname === "/posts" ? "text-amber-50" : ""}
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/posts/createPost"
                className={
                  pathname === "/posts/createPost" ? "text-amber-50" : ""
                }
              >
                Create Post
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
