function HowWeMet() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-pink-600 mb-6">How We Met 💕</h2>

        <p className="text-lg text-gray-700 leading-8 max-w-3xl mx-auto">
          Our story began with a simple hello. What seemed like an ordinary day
          turned into the beginning of a lifelong journey. We met through mutual
          friends, shared endless conversations, and quickly realized that our
          connection was something special.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-pink-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600 mb-3">
              ☕ First Meeting
            </h3>
            <p>
              We met for the first time at a friend's gathering and instantly
              connected.
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600 mb-3">
              ❤️ First Date
            </h3>
            <p>
              Our first date was full of laughter, long conversations, and the
              beginning of something beautiful.
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600 mb-3">
              💍 The Proposal
            </h3>
            <p>
              Surrounded by love and happiness, one unforgettable question
              changed our lives forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeMet;
