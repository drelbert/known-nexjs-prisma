import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  let left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive("/")}>
          known
        </a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active="true"] {
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = (
    <div className="right">
      <Link href="/create">
        <Button>
          <a>Add Mission</a>
        </Button>
      </Link>
      <Link href="/missions">
        <Button>
          <p>Missions</p>
        </Button>
      </Link>
      <Link href="/createPerson">
        <Button>
          <a>Add Person</a>
        </Button>
      </Link>
      <Link href="/people">
        <Button>
          <a>People</a>
        </Button>
      </Link>
      <Link href="/testPage">
        <Button>
          <a>Test Page</a>
        </Button>
      </Link>

      <style jsx>{`
        .right {
          margin-left: auto;
        }
      `}</style>
    </div>
  );

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;
