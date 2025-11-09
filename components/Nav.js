import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, logoutUser } from "../lib/firebase";

export default function Nav() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u));
    return () => unsub();
  }, []);

  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #ddd", display: "flex", gap: 12 }}>
      <Link href="/"><a>Home</a></Link>
      <Link href="/courses"><a>Courses</a></Link>
      <Link href="/payment"><a>Payment</a></Link>
      {user ? (
        <>
          <Link href="/dashboard"><a>Dashboard</a></Link>
          <a style={{ cursor: "pointer" }} onClick={() => logoutUser()}>Logout</a>
        </>
      ) : (
        <>
          <Link href="/login"><a>Login</a></Link>
          <Link href="/register"><a>Register</a></Link>
        </>
      )}
      <Link href="/admin"><a>Admin</a></Link>
    </nav>
  );
}
