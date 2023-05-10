import styles, {layout} from '../style';

const Testimonials = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            Fully Integrated into <br className="sm:block hidden" /> your preferred tools.
          </h2>
      </div>

      <div className={layout.sectionInfo}>
        <p className={`${styles.paragraph} max-w-[470px] ml-10 mt-5`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
        </p>
      </div>

    </section>
  )

export default Testimonials