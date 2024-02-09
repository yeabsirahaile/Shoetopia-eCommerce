import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-between bg-[#A0FFA0] px-7 py-5 ">
      <div>
        <img width={"150rem"} src="./ShoetopiaLogo.png" alt="" />
      </div>
      <div className=" relative -left-16 ">
        <div className=" flex  justify-around gap-8 pt-[0.8rem] text-start text-lg">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/products"> Products</NavLink>
          <NavLink to="/aboutus"> About Us</NavLink>
        </div>
      </div>
    </div>
  );
}
