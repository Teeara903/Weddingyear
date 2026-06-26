import Bride from "../assets/Bride.jpg";
import Groom from "../assets/Groom.jpg";
import beach from "../assets/beach.jpg";
import sunset from "../assets/sunset.jpg";
function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-pink-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-pink-600 mb-4">
          Our Gallery 📸
        </h2>

        <p className="text-center text-gray-600 mb-12">
          A few beautiful memories from our journey together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <img
            src={Bride}
            alt="Bride"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src={Groom}
            alt="Groom"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src={beach}
            alt="beach"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src={sunset}
            alt="sunset"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;