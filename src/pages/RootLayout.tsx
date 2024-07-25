import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">SHOPIFY'S STORE</Link>
        <nav className="flex gap-2">
          <Link to="/">Inicio</Link>
          <Link to="/produtos">Items</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}