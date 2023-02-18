import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex justify-between items-center w-full">
          <p className="font-roboto ss:text-[30px] text-[22px] text-white">
          Governi del mondo industriale, stanchi giganti di carne e d'acciaio, io vengo dal Cyberspazio, la nuova dimora della mente. 
          <br></br>
          In nome del futuro, invito voi, che venite dal passato, a lasciarci in pace.
          <br></br>
            <span className="ss:text-[28px] text-[20px] text-gradient">John Perry Barlow, "Dichiarazione d'indipendenza del Cyberspazio", 1969</span>{" "}
          </p>
        </div>
        <div className="ss:flex hidden m-auto mt-10">
            <GetStarted />
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="md:w-[90%] w-[70%] h-[95%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
