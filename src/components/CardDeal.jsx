import { Merge } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardDeal = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return(
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a Better card deal <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquit
            quis aliqut egut mauris tortor. Aliquet ultrices ac, ametau.
        </p>

              
      <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={Merge} className="w-[100%] h-[100%]" data-aos="fade-left"/>
      </div>
    </section>
  )
}

export default CardDeal