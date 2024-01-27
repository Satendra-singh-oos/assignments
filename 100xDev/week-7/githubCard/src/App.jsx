import axios from "axios";
import React from "react";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [gitData, setGitdata] = useState(null);

  const handleClick = async () => {
    const response = await axios.get(
      ` https://api.github.com/users/${username}`
    );

    setGitdata(response.data);
  };

  const redirectToGithub = async () => {
    // window.location.href = gitData.html_url;
    window.open(gitData.html_url, "_blank");
  };
  return (
    <>
      <div className="flex items-center justify-center mt-8 ">
        <div class="flex w-full items-center space-x-2 md:w-1/3">
          <input
            class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter Github Username...."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={handleClick}
          >
            FetchData
          </button>
        </div>
      </div>

      {gitData ? (
        <div className="flex items-center justify-center mt-8">
          <div class="w-[300px] rounded-md border ">
            <img
              src={gitData?.avatar_url}
              alt="gitAvatar"
              class="h-[200px] w-full rounded-t-md object-cover"
            />
            <div class="p-4">
              <h1 class="inline-flex items-center text-lg font-semibold">
                {gitData.login}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </h1>
              <p class="mt-3 text-sm text-gray-600">{gitData.bio}</p>
              <div class="mt-4">
                <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  <div className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-2 h-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    {gitData?.location}
                  </div>
                </span>

                <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  Public.repo:- {gitData?.public_repos}
                </span>
                <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  Followers:{gitData?.followers}
                </span>
              </div>
              <button
                type="button"
                class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={redirectToGithub}
              >
                Visit Github
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default App;
