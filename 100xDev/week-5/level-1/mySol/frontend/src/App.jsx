import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [other, setOther] = useState("");
  const [twitter, setTwitter] = useState("");
  const [imglink, setImgLink] = useState("");

  const [isfilled, setIsfilled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your Card is here`);
    setIsfilled(true);
  };
  return (
    <>
      <div>
        <h1 classNameName="text-center text-4xl underline font-bold mb-28">
          Bussiness Card Bolte
        </h1>

        <form onSubmit={handleSubmit} method="post">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="twitter"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Twitter
            </label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="linkedin"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              LinkedIn
            </label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>

        {isfilled ? (
          <Card
            name={name}
            description={description}
            twitter={twitter}
            linkdin={linkedin}
            other={other}
            mail={"awngian@aejgke"}
            img={
              "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
            }
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
