import Link from "next/link";

const Header = () => {
  return (
    <header>
      <p>
        <Link href="/">Home Page</Link>
      </p>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/posts/createPost">Create Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
