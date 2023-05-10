import { useEffect } from 'react';
import styles from '../style';
import { discount, HomePage } from '../assets';
import GetStarted from './GetStarted';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
useEffect(() => {
  AOS.init({duration: 2000});
}, []); 
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2" data-aos="fade-left" data-aos-delay="800" data-aos-duration="700" >
          <img src={discount} 
          className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for {" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-start w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Faster and Safer <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">Code Merge</span> {" "}
          </h1>
          <div className="ss:flex hidden items-start md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology
            to identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, anual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={HomePage} 
        className="w-[90%] h-[100%] relative z-[5]" data-aos="fade-left" data-aos-delay="800" data-aos-duration="700"/>

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
        </div>
    </section>
  )
}


export default Hero