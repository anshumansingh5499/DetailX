import washingImg from "../assets/washing.jpg";

const AVATAR_URLS = [
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_34.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_8.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_10.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_12.png",
];

const features = [
  "Our 250,000 cleans",
  "VIP and Annual Pass Programs",
  "100% Satisfaction",
  "Flexible and Cost-Effective",
];

const WashingSection = () => {
  return (
    <section className="px-12 py-24 bg-[#f3f3f3]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Professional Washing
            <br />
            and Cleaning Car
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Our professional and reliable car cleaners provide thorough Car
            Detailing, Interior Deep Cleaning, and Car Polishing. Choose the
            best service with Sheba.xyz.
          </p>

          {/* Features List */}
          <ul className="space-y-4 mb-8">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold">
                  ✓
                </span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

          {/* Avatars + Booking */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex -space-x-3">
              {AVATAR_URLS.slice(0, 3).map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                />
              ))}
            </div>

            <div>
              <p className="text-sm font-medium text-gray-800">
                24 Hours Service Available
              </p>
              <p className="text-sm">
                Booking:{" "}
                <span className="text-blue-500 font-semibold">
                  666 888 000
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={washingImg}
            alt="washing"
            className="rounded-3xl shadow-lg w-full h-[520px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default WashingSection;
