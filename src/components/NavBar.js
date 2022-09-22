import CartWidget from "./CartWidget"

function NavBar () {
    return (
      <>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a>Productos</a></li>
      <li><a>Cuenta</a></li>
    </ul>
  </div>
</div>
 <CartWidget/>
 </>
 )
}

export default NavBar