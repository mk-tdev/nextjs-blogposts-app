import Image from "next/image";

const Banner = () => {
  return (
    <section className=" bg-gray-400 text-white rounded relative ">
      <div className="p-5  top-5 left-5 bg-gray-900 bg-opacity-50 ">
        <h1>Welcome to Our Blogs</h1>

        <p>
          Explore our latest blog posts and stay up-to-date with the latest
          trends and insights.
        </p>
      </div>
    </section>
  );
};

export default Banner;
