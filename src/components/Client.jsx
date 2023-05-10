import { clients } from '../constants';
import styles from '../style';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Client = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return(
    <section id="clients" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} data-aos="fade-down">
            <img src={client.logo} className="sm:w-[192px] w-[100px] object-contain hover:text-secondary" />
          </div>
        ))}

      </div>

    </section>
  )
}

export default Client