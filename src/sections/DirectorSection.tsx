import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

export default function DirectorSection() {
  return (
    <section className="director section">
      <div className="section-container">
        <div className="director__grid">
          {/* Photo side */}
          <motion.div
            className="director__photo-wrapper"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
          >
            <img
              src="/imagenes/ava/logo.png"
              alt="AVA Clínica Odonto — Director"
              className="director__photo"
              style={{ borderRadius: '50%', objectFit: 'cover' as const }}
            />
            {/* Accent frame */}
            <div className="director__frame" />
          </motion.div>

          {/* Content side */}
          <div className="director__content">
            <motion.span
              className="label-mono"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Director & CEO
            </motion.span>

            <RevealText tag="h2" className="director__name">
              Especialista Pendiente
            </RevealText>

            <motion.div
              className="director__credentials"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="director__credential">Odontología Estética</span>
              <span className="director__credential-dot" />
              <span className="director__credential">Odontología General</span>
              <span className="director__credential-dot" />
              <span className="director__credential">Implantes Dentales</span>
            </motion.div>

            <motion.blockquote
              className="director__quote"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              "Nuestra misión es brindar atención odontológica de excelencia, cuidando la salud bucal y la estética dental de cada paciente con dedicación y profesionalismo."
            </motion.blockquote>

            <motion.div
              className="director__stats"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
              }}
            >
              {[
                { value: '+5', label: 'Años de experiencia' },
                { value: '+2,000', label: 'Pacientes atendidos' },
                { value: '100%', label: 'Dedicación' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="director__stat"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
                    },
                  }}
                >
                  <span className="director__stat-value">{stat.value}</span>
                  <span className="director__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="director__signature"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="director__signature-line" />
              <span className="director__signature-name">Especialista Pendiente</span>
              <span className="director__signature-role">Director — AVA Clínica Odonto</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
