import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%]
            object-contain"/>
        </div>

        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]
            mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]
            mb-1">
                {content}
            </p>
        </div>
    </div>
)

const Business = () => {
    useEffect(() => {
      AOS.init({duration: 1000});
    }, []);
    return(
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            The Best Solution<br className="sm:block hidden" /> to Merge Your Code
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Mergify is a complete solution combining efficiency and customization. Mergify adapts to the way
        </p>

        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`} data-aos="fade-down" >
        {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
        ))}

      </div>
    </section>
  )
}
export default Business