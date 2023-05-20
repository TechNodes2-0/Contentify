import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className=" flex flex-col justify-center items-center mx-auto max-w-screen-xl text-center  h-screen">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Unleash the Power of AI: Automate Your Content Creation with Ease!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Revolutionize your content creation process with our cutting-edge
            AI-Powered Content Automation Platform. Say goodbye to tedious
            manual tasks and unleash the efficiency and creativity of artificial
            intelligence. Experience unparalleled speed, precision, and quality
            as our platform transforms your ideas into captivating content,
            effortlessly.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="/CardsArea"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5"
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
            </Link>
            <a
              href="https://github.com/Nishitbaria/Contentify.git"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn more
            </a>
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
                    src="https://cdn-icons-png.flaticon.com/512/4318/4318913.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Article Writer
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Our AI Article Writer component harnesses the power of
                  cutting-edge natural language processing algorithms to
                  simplify the process of generating high-quality articles. By
                  simply inputting a topic or a set of keywords, users can
                  instantly obtain well-structured, grammatically correct
                  articles. Whether it's for blog posts, academic papers, or
                  professional content, our AI Article Writer delivers quick and
                  accurate results, saving users valuable time and effort.
                </p>
                <Link
                  to="/Articles"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline space-y- "
                >
                  Check out here
                </Link>
              </div>

              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4187/4187272.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  SocialMedia Post Generator
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  The Social Media Post Generator is a handy feature designed to
                  assist users in creating engaging and impactful posts for
                  various social media platforms. It simplifies the process of
                  content creation by offering the following functionalities:
                </p>
                <Link
                  to="/SocialMedia"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </Link>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4308/4308884.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Educational Resources
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Our project goes beyond content creation and social media
                  management by providing a centralized hub for educational
                  resources. The educational resources website offers a vast
                  array of coding repositories, articles, tutorials, and
                  learning materials across various programming languages and
                  topics. Users can explore trending resources, search for
                  specific content, and expand their knowledge in a
                  user-friendly and efficient manner.
                </p>
                <Link
                  to="/EduHome"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </Link>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4643/4643191.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  {" "}
                  Climate Change Resources
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  This feature aims to provide users with a comprehensive
                  collection of resources related to climate change. It serves
                  as a hub for information, education, and awareness on the
                  topic.
                </p>
                <Link
                  to="/Climate"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
