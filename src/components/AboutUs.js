import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          About Us
        </h2>
        <p className="text-gray-600 text-lg mb-6 text-center">
          At <span className="font-semibold text-orange-500">YummyBite</span>,
          we believe in bringing fresh, delicious meals right to your doorstep.
          Whether you’re craving comfort food or exploring new flavors, we’re
          here to make your food experience seamless and satisfying.
        </p>
        <p className="text-gray-600 mb-6">
          Founded in 2022, YummyBite started as a passion project to connect
          local restaurants with food lovers in the community. Today, we partner
          with dozens of eateries to offer a wide variety of cuisines—from
          traditional favorites to gourmet delights.
        </p>
        <p className="text-gray-600 mb-6">
          Our team is driven by a shared love for food, technology, and customer
          service. We strive to ensure every order is fast, fresh, and just the
          way you like it.
        </p>
        <div className="flex justify-center mt-8">
          <Link to="/">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300">
              Explore Our Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
