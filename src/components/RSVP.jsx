function RSVP() {
  return (
    <section className="py-20 bg-pink-50 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-pink-600 mb-8">
          RSVP ❤️
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-lg border"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-lg border"
          />

          <select className="w-full p-4 rounded-lg border">
            <option>Will you attend?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <textarea
            rows="5"
            placeholder="Leave a message..."
            className="w-full p-4 rounded-lg border"
          />

          <button className="w-full bg-pink-600 text-white py-4 rounded-lg hover:bg-pink-700">
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
}

export default RSVP;
