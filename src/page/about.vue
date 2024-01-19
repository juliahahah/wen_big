<template>

  <div
    class="bg-[#ffe9d8] flex flex-wrap sm:justify-start sm:flex-nowrap  w-full text-sm py-3 sm:py-0"
  >


  </div>
  <!-- 首頁圖-->
  <div class="relative isolate overflow-hidden leading-[150%] sm:py-16 bg-[#ffe9d8]">
    <div class="logo text-2xl font-bold whitespace-nowrap text-black mx-10">
      <img
        src="https://www.dht360.tw/wp-content/uploads/2020/08/%E5%A4%A7%E5%90%88%E5%A0%82%E7%B0%A1%E4%BB%8B.jpg"
        alt="圖片描述"
        class=""
        style=""
      />
    </div>
    <!-- 首頁圖 End-->

    <!----關於大合堂-->
    <div class="  mt-[80px] px-[50px] flex justify-center lg:px-[20vw] ">
      <div class="px-0 lg:px-0">
        <div class="mx-auto lg:mx-0">
          <h2 class="text-3xl font-[600] tracking-tight text-black sm:text-5xl">
            關於大合堂
          </h2>
          <div class="mt-[20px] text-[25px] leading-[150%] text-gray-300">
           台灣大合堂商品開發有限公司是專注於人體預防醫學領域，集合食、醫、住、行專業人士研發適合現代人養生相關產品的團隊。大合堂公司產品是
            <span class="text-[#CC0000]">運用大數據資料</span
            >，收集市場上暢銷產品的資訊，與消費者的需求來開發新產品，並以最優惠的價格來行銷為公司營運策略。大合堂的意義是
            <span class="text-[#CC0000]">大健康事業合作的殿堂</span
            >，大合堂健康事業不只是商品的買賣，而是一個系統。
          </div>
          <div class="mt-[20px] text-[25px] leading-[150%] text-gray-300">
            這個系統除了
            <span class="text-[#CC0000]">自己健康也讓他人獲得健康</span
            >，在推廣與執行健康事業時再獲得利益。唯有系統的推展才能永續，希望能集合各方面的專業人士，來共享共榮這個有前景，有功德的事業。
          </div>
        </div>

        <!---2.公司理念--->

        <div class="mt-[80px] text-[25px] leading-[150%] lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-black sm:text-5xl">
            公司理念
          </h2>
          <div
            class="flex flex-col lg:flex-row lg:justify-center lg:items-center mt-[20px]"
          >
            <div class="w-full lg:w-1/2 mr-4">
              <img
                src="https://www.dht360.tw/wp-content/uploads/2020/08/312353.jpg"
                alt="圖片描述"
                class="w-full h-auto object-cover"
              />
            </div>
            <div class="w-full lg:w-1/2 mt-4 lg:mx-6 text-center lg:text-left">
              <h2 class="text-3xl font-bold text-[#BE4A4A]">
                延年益壽．與君同享
              </h2>
              <div class="mt-[20px] text-[25px] leading-[150%] text-gray-300">
                讓自己健康，大家都健康！<br />是大合堂公司的經營理念。
              </div>
            </div>
          </div>
        </div>

        <!----3.產品介紹--->
        <div class="mt-[80px] text-[25px] leading-[150%] lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-black sm:text-5xl">
            產品介紹
          </h2>

          <div class="flex flex-col lg:flex-row justify-center mt-[20px]">
            <div class=" lg:w-1/2 w-[90vw] mb-4 mr-10">
              <img
                src="https://www.dht360.tw/wp-content/uploads/2020/08/312358-1.jpg"
                alt="圖片描述"
                class="h-auto object-cover"
           
              />
            </div>

            <div class="w-full lg:w-1/2 bg-gray-200 text-[25px] leading-[150%]">
              大合堂公司產品研發是依循傳統醫學理論與新科技的專業領域進行產品研發與生產，製作，行銷產品的工作。讓人們在自然環境中，獲得適合人體所需的能量。<br /><br />
              目前有青松美夢系列產品，是運用人體與自然環境互動，提升人體能量的原理來開發養生保健相關產品。產品作用在身體讓人體正負電位平衡，生成適合人體的振動頻率，讓人們自體覺醒，心靈穩定，達到延年益壽的目標。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    goToShop() {
      // Add your logic for navigating to the shop page
    },
  },
};
</script>
