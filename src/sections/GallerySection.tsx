import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const galleryImages = [
  { src: '/imagenes/ava/logo.png', alt: 'Foto pendiente', label: 'Recepción' },
  { src: '/imagenes/ava/logo.png', alt: 'Foto pendiente', label: 'Consultorio' },
  { src: '/imagenes/ava/logo.png', alt: 'Foto pendiente', label: 'Área de Trabajo' },
  { src: '/imagenes/ava/logo.png', alt: 'Foto pendiente', label: 'Equipamiento' },
  { src: '/imagenes/ava/logo.png', alt: 'Foto pendiente', label: 'Sala Clínica' },
  { src: '/imagenes/ava/logo.png', alt: 'Foto pendiente', label: 'Exterior' },
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

export default function GallerySection() {
  return (
    <section id="galeria" className="gallery section" style={{ background: 'var(--bg)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestro espacio
        </motion.span>
        <RevealText tag="h2" className="section-title">
          INSTALACIONES
        </RevealText>
        <motion.p
          className="gallery__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Instalaciones modernas diseñadas para tu comodidad y seguridad.
        </motion.p>

        <motion.div
          className="gallery__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.label}
              className="gallery__item"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <img src={img.src} alt={img.alt} className="gallery__img" loading="lazy" />
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
