import React from "react";
import "../styles/globals.css";
import Image from "next/image";
function Hero() {
  return (
    <div className="">
      <section className="flex section-hero">
        <div className="w-1/2 flex align-baseline  items-center   justify-around flex-col ">
          <div className=" hero-title flex align-baseline mx-5 ml-6 mt-5 items-center   justify-around flex-col ">
            <h2 className="">
              UNE PLATEFORME D’INFORMATION ET DE FORMATION POUR
            </h2>
            <br />
            <h2 className=" s-title"> LES NOUVEAUX BACHELIERS</h2>
            <p className="text mx-5 mt-5 text-white font-[Montserrat] text-[16px] not-italic font-normal leading-[150%] ">
              La meilleure plateforme conçue pour les{" "}
              <span className="text-white font-[Montserrat] text-[16px] not-italic font-semibold leading-[150%]">
               
                Africains
              </span>
              par les
              <span className="text-white font-[Montserrat] text-[16px] not-italic font-semibold leading-[150%]">
               
                Africains
              </span>
            </p>
            <button className=" w-19 h-19 border-solid mx-5 -ml-[22.25rem] mt-9 border-[#368B82]  border-[2px] px-5 py-2 text-white rounded-xl hover:bg-[]">
              Commencer maintenant
            </button>
          </div>

       
        </div>
        <div className="w-1/2 ">
          <div className="IMG">
            <Image
              className=" mt-[6.5rem]  w-[31rem] h-[31rem]" 
              src="/img/calque1.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
