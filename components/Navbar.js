import Link from "next/link";
import Image from "next/image";
import '../styles/globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div>
      <div className="max-w-lg: bg-[#032830]  mx-auto flex items-center  justify-around space-x-6 flex-row  box ">
        <div className="logo">
          <Image
            className=" w-40"
            src="/img/easyc-icon.png"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="  navbar-link flex items-center flex-row gap-[4vw]  justify-around space-x-4">
          <ul className="flex items-center gap-[4vw]">
            <li>
              <Link href="/" passHref className="mx-4   text-white">
                <h2 className=" hover:text-[#368B82] text-white  ">
                  Formation
                </h2>
              </Link>
            </li>

            <li>
              <Link href="/" passHref className="mx-4 ">
                <h2 className=" hover:text-[#368B82] text-white">
                  Certifications
                </h2>
              </Link>
            </li>

            <li>
              <Link href="/" passHref className="mx-4 ">
                <h2 className=" hover:text-[#368B82] text-white ">Quizzes</h2>
              </Link>
            </li>
          </ul>
        </div>

        <div className="grp-icons mx-auto flex items-center  justify-around space-x-4">
          <div className="icon1 px-4 ">
            <a href="">
              {" "}
              <Image
                className="icon2 w-8"
                src="/img/cart.png"
                alt=""
                width={60}
                height={60}
              />
            </a>
            {/* <a href="" className='w-8 h-8  '> <FontAwesomeIcon  icon={faShoppingCart} style={{color: "#ffffff",}} /></a>
                  <i class="fa-solid fa-cart-shopping"></i> */}
          </div>

          <div className="icon2">
            <a href="">
              {" "}
              <Image
                className="icon2 w-8"
                src="/img/SignOut.png"
                alt=""
                width={60}
                height={60}
              />
            </a>
          </div>

          <div className="btn">
            <button className=" w-19 h-19 border-solid border-[#368B82]  border-[2px] px-5 py-2 text-white rounded-xl hover:bg-[#786FF8]">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
