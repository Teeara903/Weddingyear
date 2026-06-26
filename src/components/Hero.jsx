import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl font-bold text-pink-600">
        James <span>❤️</span> Sarah
      </h1>

      <p className="text-xl mt-4">Together Forever</p>

      <p className="mt-2 text-gray-600">14th February, 2027</p>
    </motion.section>
  );
}

export default Hero;
