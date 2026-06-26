import { motion } from "framer-motion";
import couple from "../assets/couple.jpg";

function Story() {
  return (
    <motion.section
      id="story"
      className="py-20 bg-pink-50 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-pink-600 mb-4">
          Our Love Story ❤️
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Every love story is beautiful, but ours is our favorite. Here's how
          our journey began and how two hearts became one.
        </p>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Bride */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-pink-600 mb-4">
              👰 Bride's POV
            </h3>

            <p className="text-gray-700 leading-8">
              I never imagined that one conversation would change my life. His
              kindness, patience, and love made me realize that forever was
              possible.
            </p>
          </motion.div>

          {/* Couple Image */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={couple}
              alt="Couple"
              className="rounded-full w-72 h-72 object-cover shadow-xl border-8 border-white"
            />
          </motion.div>

          {/* Groom */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-pink-600 mb-4">
              🤵 Groom's POV
            </h3>

            <p className="text-gray-700 leading-8">
              The first time I met her, I knew she was different. Her smile
              brightened every room, and every day since then has been another
              chapter in our beautiful story.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Story;
