import React from "react";

export default function EduHome() {
  return (
    <div>
      <section>
        <div class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Welcome to Education Hub
              </h1>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3778/3778120.png"
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Designed for business teams like yours
              </h2>
              <p class="text-gray-500 sm:text-xl dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1902/1902726.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Dictionary
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  The dictionary search feature allows users to easily find the
                  meaning of words and access their pronunciations. With a
                  simple search, users can obtain comprehensive definitions,
                  synonyms, antonyms, and example sentences for any word they
                  want to explore.
                </p>
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline space-y- "
                >
                  Check out here
                </a>
              </div>

              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3261/3261308.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Random Quiz Game
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Enjoy a challenging quiz game with 10 randomly generated
                  questions. Test your knowledge and have fun answering a
                  variety of engaging and thought-provoking questions.
                </p>
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </a>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1048/1048966.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Assignment Generator
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  This feature simplifies assignment creation and allows for
                  convenient sharing and storage in a standardized PDF format.
                </p>
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </a>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3488/3488426.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  {" "}
                  GitHub Repository Search
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Explore and discover GitHub repositories easily with the
                  GitHub Repo Search feature. Search for repositories based on
                  keywords, topics, or specific criteria. Find relevant
                  projects, libraries, and resources for your development needs.
                </p>
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
