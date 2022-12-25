<template>
  <div>
    <slider />
    <notification />
    <div>
      <div
        class="
          flex
          justify-end
          2xl:mr-14
          xl:mr-14
          sm:mr-56
          md:mr-44
          4xl:mr-48
          5xl:mr-36
          mt-8
          text-2xl
        "
      >
        محصولات روز
      </div>

      <div class="bg-pink-300 p-10 w-full rounded-xl mt-4">
        <div
          id="carouselExampleControls"
          class="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner relative w-full overflow-hidden">
            <div
              class="carousel-item active relative left-12 float-left w-full"
            >
              <div
                class="
                  gap-6
                  grid
                  2xl:grid-cols-3
                  xl:grid-cols-3
                  lg:grid-cols-2
                  md:grid-cols-1
                  sm:grid-cols-1
                  4xl:grid-cols-1
                  5xl:grid-cols-1
                  xs:grid-cols-1
                  2xl:mt-2
                  xl:mt-20
                  lg:mt-2
                  md:mt-2
                  sm:mt-2
                  4xl:mt-2
                  5xl:mt-2
                  xs:mt-2
                "
              >
                <div
                  v-for="product in allProducts"
                  :key="product.id"
                  class="flex justify-center"
                >
                  <div
                    class="
                      block
                      w-96
                      h-90
                      p-6
                      max-w-sm
                      rounded-lg
                      shadow-lg
                      bg-white
                    "
                  >
                    <div class="flex justify-center items-center">
                      <img :src="product.img" />
                    </div>
                    <div class="flex justify-center items-center">
                      <p>{{ product.title }}</p>
                    </div>
                    <div class="flex justify-center items-center">
                      <p>{{ product.name }}</p>
                    </div>
                    <div class="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>

                    <div class="flex mt-4 justify-between">
                      <div>
                        <button
                          @click="addToCart(product)"
                          class="
                            inline-block
                            px-6
                            py-2.5
                            bg-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:text-white
                            focus:text-white
                            hover:bg-red-400 hover:shadow-lg
                            focus:bg-red-400
                            focus:shadow-lg
                            focus:outline-none
                            focus:ring-0
                            active:bg-white active:shadow-lg
                            transition
                            duration-150
                            ease-in-out
                          "
                        >
                          افزودن به سبدخرید
                        </button>
                      </div>
                      <div class="flex flex-col">
                        <div>هراسلایس</div>
                        <div class="text-red-400">{{ product.price }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item left-12 relative float-left w-full">
              <div
                class="
                  gap-6
                  grid
                  2xl:grid-cols-3
                  xl:grid-cols-3
                  lg:grid-cols-2
                  md:grid-cols-1
                  sm:grid-cols-1
                  4xl:grid-cols-1
                  5xl:grid-cols-1
                  xs:grid-cols-1
                  2xl:mt-2
                  xl:mt-20
                  lg:mt-2
                  md:mt-2
                  sm:mt-2
                  4xl:mt-2
                  5xl:mt-2
                  xs:mt-2
                "
              >
                <div
                  v-for="product in allProducts"
                  :key="product.id"
                  class="flex justify-center"
                >
                  <div
                    class="
                      block
                      w-96
                      h-90
                      p-6
                      max-w-sm
                      rounded-lg
                      shadow-lg
                      bg-white
                    "
                  >
                    <div class="flex justify-center items-center">
                      <img :src="product.img" />
                    </div>
                    <div class="flex justify-center items-center">
                      <p>{{ product.title }}</p>
                    </div>
                    <div class="flex justify-center items-center">
                      <p>{{ product.name }}</p>
                    </div>
                    <div class="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>

                    <div class="flex mt-4 justify-between">
                      <div>
                        <button
                          @click="addToCart(product)"
                          class="
                            inline-block
                            px-6
                            py-2.5
                            bg-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:text-white
                            focus:text-white
                            hover:bg-red-400 hover:shadow-lg
                            focus:bg-red-400
                            focus:shadow-lg
                            focus:outline-none
                            focus:ring-0
                            active:bg-white active:shadow-lg
                            transition
                            duration-150
                            ease-in-out
                          "
                        >
                          افزودن به سبدخرید
                        </button>
                      </div>
                      <div class="flex flex-col">
                        <div>هراسلایس</div>
                        <div class="text-red-400">{{ product.price }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item left-12 relative float-left w-full">
              <div
                class="
                  gap-6
                  grid
                  2xl:grid-cols-3
                  xl:grid-cols-3
                  lg:grid-cols-2
                  md:grid-cols-1
                  sm:grid-cols-1
                  4xl:grid-cols-1
                  5xl:grid-cols-1
                  xs:grid-cols-1
                  2xl:mt-2
                  xl:mt-20
                  lg:mt-2
                  md:mt-2
                  sm:mt-2
                  4xl:mt-2
                  5xl:mt-2
                  xs:mt-2
                "
              >
                <div
                  v-for="product in allProducts"
                  :key="product.id"
                  class="flex justify-center"
                >
                  <div
                    class="
                      block
                      w-96
                      h-90
                      p-6
                      max-w-sm
                      rounded-lg
                      shadow-lg
                      bg-white
                    "
                  >
                    <div class="flex justify-center items-center">
                      <img :src="product.img" />
                    </div>
                    <div class="flex justify-center items-center">
                      <p>{{ product.title }}</p>
                    </div>
                    <div class="flex justify-center items-center">
                      <p>{{ product.name }}</p>
                    </div>
                    <div class="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>

                    <div class="flex mt-4 justify-between">
                      <div>
                        <button
                          @click="addToCart(product)"
                          class="
                            inline-block
                            px-6
                            py-2.5
                            bg-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:text-white
                            focus:text-white
                            hover:bg-red-400 hover:shadow-lg
                            focus:bg-red-400
                            focus:shadow-lg
                            focus:outline-none
                            focus:ring-0
                            active:bg-white active:shadow-lg
                            transition
                            duration-150
                            ease-in-out
                          "
                        >
                          افزودن به سبدخرید
                        </button>
                      </div>
                      <div class="flex flex-col">
                        <div>هراسلایس</div>
                        <div class="text-red-400">{{ product.price }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item relative left-12 float-left w-full">
              <div
                class="
                  gap-6
                  grid
                  2xl:grid-cols-3
                  xl:grid-cols-3
                  lg:grid-cols-2
                  md:grid-cols-1
                  sm:grid-cols-1
                  4xl:grid-cols-1
                  5xl:grid-cols-1
                  xs:grid-cols-1
                  2xl:mt-2
                  xl:mt-20
                  lg:mt-2
                  md:mt-2
                  sm:mt-2
                  4xl:mt-2
                  5xl:mt-2
                  xs:mt-2
                "
              >
                <div
                  v-for="product in allProducts"
                  :key="product.id"
                  class="flex justify-center"
                >
                  <div
                    class="
                      block
                      w-96
                      h-90
                      p-6
                      max-w-sm
                      rounded-lg
                      shadow-lg
                      bg-white
                    "
                  >
                    <div class="flex justify-center items-center">
                      <img :src="product.img" />
                    </div>
                    <div class="flex justify-center items-center">
                      <p>{{ product.title }}</p>
                    </div>
                    <div class="flex justify-center items-center">
                      <p>{{ product.name }}</p>
                    </div>
                    <div class="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>

                    <div class="flex mt-4 justify-between">
                      <div>
                        <button
                          @click="addToCart(product)"
                          class="
                            inline-block
                            px-6
                            py-2.5
                            bg-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:text-white
                            focus:text-white
                            hover:bg-red-400 hover:shadow-lg
                            focus:bg-red-400
                            focus:shadow-lg
                            focus:outline-none
                            focus:ring-0
                            active:bg-white active:shadow-lg
                            transition
                            duration-150
                            ease-in-out
                          "
                        >
                          افزودن به سبدخرید
                        </button>
                      </div>
                      <div class="flex flex-col">
                        <div>هراسلایس</div>
                        <div class="text-red-400">{{ product.price }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="
              carousel-control-prev
              absolute
              top-24
              bottom-0
              flex
              items-center
              justify-center
              p-0
              text-center
              border-0
              hover:outline-none hover:no-underline
              focus:outline-none focus:no-underline
              left-0
            "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="
              carousel-control-next
              absolute
              top-24
              bottom-0
              flex
              items-center
              justify-center
              p-0
              text-center
              border-0
              hover:outline-none hover:no-underline
              focus:outline-none focus:no-underline
              right-0
            "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <learn-cake />
    <product-more />
    <banner />
    <share />
    <nazar />
    <branch />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",

  computed: {
    ...mapGetters({
      allProducts: "product/allProducts",
    }),
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("cart/addToCart", product);
    },
  },
};
</script>
