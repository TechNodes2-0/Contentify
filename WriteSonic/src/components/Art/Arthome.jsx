import React from 'react'
import { Link } from "react-router-dom";
export default function Arthome() {
  return (
    <div>
            <div>
      <section>
        <div class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Welcome to Art and Culture Zone
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
                src="https://cdn-icons-png.flaticon.com/512/5483/5483698.png"
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
                Get Your Artistic innovatios true
              </h2>
              <p class="text-gray-500 sm:text-xl dark:text-gray-400">
                We Focus on Creativity
                </p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2779/2779764.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                 Art gallery
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                Explore masterpieces from renowned artists, immerse yourself in the world of art, and discover the beauty that transcends time at our online art gallery
                </p>
                <Link
                  to="/test"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </Link>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/554/554099.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  {" "}
                  Famous Artists
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Explore your favourite Artsits and feel the breeze
                </p>
                <Link
                  to="/Tester"
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
    </div>
  )
}
