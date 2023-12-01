<template>
  <!-- Navbar -->
  <div
    class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0"
  >
    <nav
      class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <h1 class="logo text-2xl font-bold whitespace-nowrap text-black">
        猴猴早午餐
      </h1>

      <div class="sm:hidden">
        <button
          type="button"
          class="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-black text-black hover:border-gray-400 hover:text-gray-400 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600 dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7"
        >
          <a class="font-medium text-black sm:py-6" href="#" aria-current="page"
            >首頁</a
          >
          <a class="font-medium text-black sm:py-6" href="#">連鎖商店</a>
          <a @click="goToShop" class="font-medium text-black sm:py-6"> 菜單 </a>
          <a class="font-medium text-black sm:py-6" href="#">關於我們</a>
          <button @click="goToCart" class="font-medium text-black sm:py-6">
            購物車
          </button>
        </div>
      </div>
    </nav>
  </div>

  <!---End narbar-->

  <!-- 商品頁面 -->
  <div class="flex justify-center items-center h-screen">
    <div class="w-full sm:w-3/4 lg:w-1/2">
      <div
        class="flex flex-col h-full overflow-y-scroll bg-white shadow-xl rounded-lg p-4"
      >
        <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div class="flex items-start justify-between">
            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
              Shopping cart
            </h2>
            <div class="ml-3 flex h-7 items-center">
              <button
                type="button"
                class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Close panel</span>
              </button>
            </div>
          </div>

          <div class="mt-8">
            <div class="flow-root">
              <ul role="list" class="-my-6 divide-y divide-gray-200">
                <li class="flex py-6">
                  <div
                    class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                  >
                    <img
                      src="https://hips.hearstapps.com/hmg-prod/images/page1-1612340172.jpg?crop=0.495xw:0.990xh;0.00164xw,0&resize=640:*"
                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div class="ml-4 flex flex-1 flex-col">
                    <div>
                      <div
                        class="flex justify-between text-base font-medium text-gray-900"
                      >
                        <h3>
                          <a href="#">套餐一</a>
                        </h3>
                        <p class="ml-4">$192.00</p>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">Salmon</p>
                    </div>
                    <div class="flex flex-1 items-end justify-between text-sm">
                      <p class="text-gray-500">備註</p>

                      <div class="flex">
                        <button
                          type="button"
                          class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="flex py-6">
                  <div
                    class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                  >
                    <img
                      src="https://hips.hearstapps.com/hmg-prod/images/roasted-salmon-with-vegetables-royalty-free-image-1638849406.jpg?crop=0.669xw:1.00xh;0.153xw,0&resize=640:*"
                      alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div class="ml-4 flex flex-1 flex-col">
                    <div>
                      <div
                        class="flex justify-between text-base font-medium text-gray-900"
                      >
                        <h3>
                          <a href="#">套餐一</a>
                        </h3>
                        <p class="ml-4">$192.00</p>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">Blue</p>
                    </div>
                    <div class="flex flex-1 items-end justify-between text-sm">
                      <p class="text-gray-500">備註</p>

                      <div class="flex">
                        <button
                          type="button"
                          class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <!-- More products... -->
              </ul>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$384.00</p>
          </div>
          <p class="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div class="mt-6">
            <a
              href="#invoice"
              class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >Checkout</a
            >
          </div>
          <div
            class="mt-6 flex justify-center text-center text-sm text-gray-500"
          >
            <p>
              or
              <button
                @click="goToShop"
                type="button"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!---商品頁面結束---->

  <!-- Footer -->
  <footer class="bg-gray-700 w-full py-5 px-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Grid -->
    <div class="text-center">
      <div>
        <a
          class="flex-none text-xl font-semibold text-white dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
          aria-label="Brand"
          >Brand</a
        >
      </div>
      <!-- End Col -->

      <div class="mt-3">
        <p class="text-gray-500">© liu yiwen. 2023 . 僅用於網站練習專案.</p>
      </div>

      <!-- Social Brands -->
      <div class="mt-3 space-x-2">
        <a
          class="inline-flex items-center justify-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="#"
        >
          <div class="w-10 h-10">
            <img
              src="../assets/images/facebook.svg"
              alt="Facebook"
              class="w-full h-full"
            />
          </div>
        </a>
        <a
          class="inline-flex items-center justify-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="#"
        >
          <div class="w-10 h-10">
            <img
              src="../assets/images/instagram.svg"
              alt="Instagram"
              class="w-full h-full"
            />
          </div>
        </a>
        <a
          class="inline-flex items-center justify-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="#"
        >
          <div class="w-10 h-10">
            <img
              src="../assets/images/line.svg"
              alt="LINE"
              class="w-full h-full"
            />
          </div>
        </a>
      </div>
      <!-- End Social Brands -->
    </div>
    <!-- End Grid -->
  </footer>
</template>
  // Send.vue
  <script>
export default {
  methods: {
    goToShop() {
      // 使用 router.push 導航到 shop 頁面
      this.$router.push("/shop");
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>
  