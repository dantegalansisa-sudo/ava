import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const doctors = [
  {
    name: 'Especialista Pendiente',
    specialty: 'Especialidad Pendiente',
    bio: 'Foto y datos del especialista pendientes de actualización.',
    img: '/imagenes/ava/logo.png',
  },
  {
    name: 'Especialista Pendiente',
    specialty: 'Especialidad Pendiente',
    bio: 'Foto y datos del especialista pendientes de actualización.',
    img: '/imagenes/ava/logo.png',
  },
  {
    name: 'Especialista Pendiente',
    specialty: 'Especialidad Pendiente',
    bio: 'Foto y datos del especialista pendientes de actualización.',
    img: '/imagenes/ava/logo.png',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function TeamSection() {
  return (
    <section id="equipo" className="team-section section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestro Equipo
        </motion.span>
        <RevealText
          tag="h2"
          className="section-title"
          style={{ color: 'var(--primary)' }}
        >
          ESPECIALISTAS
        </RevealText>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {doctors.map((doc) => (
            <motion.div key={doc.name} className="doctor-card" variants={cardVariants}>
              <img src={doc.img} alt={doc.name} className="doctor-card__img" style={{ borderRadius: '50%', objectFit: 'cover' as const }} />
              <div className="doctor-card__info">
                <span className="doctor-card__name">{doc.name}</span>
                <span className="doctor-card__specialty">{doc.specialty}</span>
                <p className="doctor-card__bio">{doc.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
