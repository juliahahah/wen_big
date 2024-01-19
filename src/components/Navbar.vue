<template>
  <header>
    <!-- Navbar -->
    <nav
      class="bg-[#ffe9d8] relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center justify-between lg:px-8"
      aria-label="Global"
    >
      <div class="logo text-2xl font-bold whitespace-nowrap text-black">
        <img
          src="https://www.dht360.tw/wp-content/uploads/2020/08/%E6%9C%AA%E5%91%BD%E5%90%8D-1.png"
          alt="圖片描述"
          class=""
          style="width: 100px"
        />
      </div>

      <div class="sm:hidden">
        <div class="flex">
          <button
            type="button"
            class="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-black hover:border-gray-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <div
              class="block lg:hidden border-black border-2 flex items-center px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </div>
            <!-- 汉堡菜单的 SVG 图标 -->
          </button>
        </div>
      </div>

      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7"
        >
          <a class="font-medium text-black sm:py-6" href="#" aria-current="page"
            >大合堂</a
          >
          <a class="font-medium text-black sm:py-6" href="#about">關於大合堂</a>
          <div class="dropdown">
            <a href="#" class="dropdown-btn">Dropdown</a>
            <ul class="menu">
              <li>
                <a href="#">Link1</a>
              </li>
              <li>
                <a href="#">Link2</a>
              </li>
              <li>
                <a href="#">Link3</a>
              </li>
            </ul>
          </div>
      <div class="relative" @mouseleave="closeDropdown">
        <!-- 下拉菜单 -->
        <button
          @mouseenter="toggleDropdown"
          @click="toggleDropdown"
          class="font-medium text-black sm:py-6"
        >
          產品介紹
        </button>
        <div
          v-show="isDropdownOpen"
          class="absolute bg-white mt-1 p-2 border rounded-md shadow-lg"
          @mouseenter="toggleDropdown"
          @mouseleave="closeDropdown"
        >
              <!-- 下拉菜单的内容 -->
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                >科技枕頭</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                >能量睡墊</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                >經絡共振座墊</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                >科技止鼾枕頭</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                >氣壓式按摩器</a
              >
            </div>
          </div>
          <a class="font-medium text-black sm:py-6" href="#">聯絡資訊</a>
          <a class="font-medium text-black sm:py-6" href="#">服務據點</a>
          <a class="font-medium text-black sm:py-6" href="#">公司願景</a>
          <a class="font-medium text-black sm:py-6" href="#">搜尋</a>
        </div>
      </div>
    </nav>

    <!-- Navbar End-->
  </header>
</template>
<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
  },
  name: 'Navbar',
  // ... other component options
};
</script>
