import Link from "next/link";
import { useEffect, useState } from "react";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
        <li>
          <Link href="/getting-hired">Getting hired</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
