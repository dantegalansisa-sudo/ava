import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const patientImages = [
  { src: '/imagenes/ava/logo.png', alt: 'Paciente — Foto pendiente', label: 'Sonrisas Reales' },
  { src: '/imagenes/ava/logo.png', alt: 'Paciente — Foto pendiente', label: 'Resultados' },
  { src: '/imagenes/ava/logo.png', alt: 'Paciente — Foto pendiente', label: 'Confianza' },
  { src: '/imagenes/ava/logo.png', alt: 'Paciente — Foto pendiente', label: 'Tratamientos' },
  { src: '/imagenes/ava/logo.png', alt: 'Paciente — Foto pendiente', label: 'Satisfacción' },
  { src: '/imagenes/ava/logo.png', alt: 'Paciente — Foto pendiente', label: 'Excelencia' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function PatientsSection() {
  return (
    <section className="gallery section" style={{ background: 'var(--bg-navy)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          style={{ color: 'rgba(255,255,255,0.4)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestros pacientes
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ color: '#FFFFFF' }}>
          PACIENTES FELICES
        </RevealText>
        <motion.p
          className="gallery__subtitle"
          style={{ color: 'rgba(255,255,255,0.6)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          La satisfacción de nuestros pacientes es nuestra mayor recompensa.
        </motion.p>

        <motion.div
          className="gallery__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {patientImages.map((img) => (
            <motion.div
              key={img.label}
              className="gallery__item"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <img src={img.src} alt={img.alt} className="gallery__img" loading="lazy" style={{ borderRadius: '50%', objectFit: 'cover' as const }} />
              <div className="gallery__overlay">
                <span className="gallery__label">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
