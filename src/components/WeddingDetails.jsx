function WeddingDetails() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-pink-600 mb-4">
          Wedding Details 💍
        </h2>

        <p className="text-gray-600 mb-12">
          We can't wait to celebrate this special day with you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-pink-50 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">📅 Date & Time</h3>

            <p>Saturday, 14 February 2027</p>
            <p>11:00 AM</p>
          </div>

          <div className="bg-pink-50 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">📍 Venue</h3>

            <p>Royal Event Centre</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeddingDetails;
