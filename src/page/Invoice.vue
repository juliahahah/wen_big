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

  <!------->
  <div class="bg-gray-100 py-10">
    <div class="max-w-2xl mx-auto bg-white p-6 rounded shadow-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Order Summary</h1>
      <p class="text-center mb-6">Thank you for your purchase!</p>

      <div class="mb-8">
        <!-- Order Details -->
        <div class="flex justify-between mb-2">
          <div>
            <p class="font-semibold">套餐一</p>
            <p>$192.00</p>
          </div>
          <p>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/page1-1612340172.jpg?crop=0.495xw:0.990xh;0.00164xw,0&resize=640:*"
              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
              class="h-16"
            />
          </p>
        </div>

        <div class="flex justify-between mb-2">
          <div>
            <p class="font-semibold">套餐一</p>
            <p>$192.00</p>
          </div>
          <p>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/roasted-salmon-with-vegetables-royalty-free-image-1638849406.jpg?crop=0.669xw:1.00xh;0.153xw,0&resize=640:*"
              alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
              class="h-16"
            />
          </p>
        </div>

        <!-- Other Order Details... -->

        <!-- Order Total -->
        <div class="flex justify-between mt-4">
          <div>
            <p>Subtotal</p>
            <p>Shipping</p>
            <p>Taxes</p>
            <p class="font-semibold text-xl mt-2">Total</p>
          </div>
          <div>
            <p>$384.00</p>
            <p>$10.00</p>
            <p>$6.00</p>
            <p class="font-semibold text-xl mt-2">$400.00</p>
          </div>
        </div>

        <!-- Payment Information -->
        <div class="mt-6">
          <p class="font-semibold">Payment Information</p>
          <p>Visa Ending with 4242</p>
          <p>Expires 12 / 21</p>
        </div>
      </div>

      <!-- Continue Shopping Button -->

      <div class="text-center mt-8">
        <a
          href="#shop"
          class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Continue Shopping →
        </a>
      </div>
    </div>
  </div>

  <!----->

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
    addToCart() {
      // 取得商品名稱和價格
      const productName = this.productInfo.name;
      let productPrice = this.productInfo.price;

      // 如果選項數量大於 0，則調整商品價格
      if (this.selectedOption.length > 0) {
        productPrice *= this.selectedOption.length; // 根據選項數量調整價格
      }

      // 將選擇的商品資訊加入購物車陣列
      this.cart.push({
        name: productName,
        price: `$${productPrice}`, // 更新價格格式
        selectedOptions: this.selectedOption.slice(),
      });

      // 清空選擇的選項
      this.selectedOption = [];
    },
    removeFromCart(index) {
      this.cart.splice(index, 1); // 從購物車中移除特定商品
    },
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
  