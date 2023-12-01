<template>
<header
				class="fixed top-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-[100vw] bg-[#1A2C33] text-sm px-[21px] py-[12px]"
        @click="closeMenuOnClickOutside"
				style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); z-index: 100"
			>
				<div
					class="bg-[#00000080] w-[110vw] h-screen absolute top-[46px] left-[-25px] opacity-100 z-10 backdrop-blur-[1px]"
					v-if="isOptionsExpanded || isOptionsExpanded_member"
				>
				</div>

				<nav
					class="max-w-[85rem] w-full relative z-50 sm:flex sm:items-center sm:justify-between md:mx-0 md:max-w-[92rem]"
				>
					<div
						class="w-[68px] h-[22px] relative text-lg flex justify-between navbar_dropdown"
					>
						<img
							src="../assets/images/nav_down.png"
							alt=""
							class="w-[22px] h-[22px] transform transition-transform duration-200 ease-in-ou cursor-pointer"
							:class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
							@click="toggleOptionsExpanded "
						/>
						<!-- @blur="isOptionsExpanded _blur" -->
						<transition
							enter-active-class="transform transition duration-500 ease-custom"
							enter-class="-translate-y-1/2 scale-y-0 opacity-0"
							enter-to-class="translate-y-0 scale-y-100 opacity-100"
							leave-active-class="transform transition duration-300 ease-custom"
							leave-class="translate-y-0 scale-y-100 opacity-100"
							leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
						>
							<ul
								v-show="isOptionsExpanded"
								class="h-[calc(100vh_-_48px)] w-[130px] pl-[21px] pt-[20px] absolute top-[34px] sm:left-[-20px] md:w-[180px] md:pl-[44px] md:left-[-41px] text-[#79858A] text-[14px] bg-[#1A2C3390] overflow-hidden"
							>
              <!-- text-[#05AC87] -->
              <router-link to="/">
								<div
									class="w-auto h-[20px] mb-[30px] text-[15px] "
                  :class="isHomePage ? 'text-[#05AC87]' : 'text-[#79858A]'"
								>
									<img
                  v-if="isHomePage"
										src="../assets/images/setting_home_green.png"
										class="w-[15px] mr-[8px] inline translate-y-[-20%]"
									/>
                  <img
                  v-else
										src="../assets/images/setting_home.png"
										class="w-[15px] mr-[8px] inline translate-y-[-20%]"
									/>
								{{$t('Home')}}
								</div>
							</router-link>

								<div
                 :class="isSettingPage ? 'text-[#05AC87]' : 'text-[#79858A]'"
									class="w-auto h-[20px] mb-[30px] text-[15px] cursor-pointer"
									@click="startSetting"
								>
                <img
                    v-if="isSettingPage"
										src="../assets/images/setting_practice.png"
										alt=""
										class="w-[15px] mr-[8px] inline translate-y-[-20%]"
									/>
									<img
                    v-else
										src="../assets/images/setting_practice_gray.png"
										alt=""
										class="w-[15px] mr-[8px] inline translate-y-[-20%]"
									/>
										{{$t('Practice')}}
								</div>

								<!-- <router-link to="/"> -->
                  <!-- :class="isCompetitionPage ? 'text-[#05AC87]' : 'text-[#79858A]'" -->
								<div
									class="w-auto h-[20px] mb-[30px] text-[15px]"
									@click="alert_show"
								>
                <!-- <img
                    v-if="isCompetition"
										src="../assets/images/setting_competition_green.png"
										alt=""
										class="w-[15px] mr-[8px] inline translate-y-[-20%]"
									/> -->
									<img
										src="../assets/images/setting_competition.png"
										alt=""
										class="w-[15px] mr-[8px] inline translate-y-[-20%]"
									/>
									{{$t('Contest')}}
								</div>
								<!-- </router-link> -->

								<router-link to="/practice">
								<div
                 :class="isPracticePage ? 'text-[#05AC87]' : 'text-[#79858A]'"
									class="w-auto h-[20px] mb-[30px] text-[15px]"
								>
                <img
                v-if="isPracticePage"
										src="../assets/images/setting_practiceCard_green.png"
										alt=""
										class="w-[15px] mr-[8px] inline translate-y-[-20%]"
									/>
									<img
                  v-else
										src="../assets/images/setting_practiceCard.png"
										alt=""
										class="w-[15px] mr-[8px] inline translate-y-[-20%]"
									/>
									{{$t('Sharing Area')}}

								</div>
								</router-link>

								<div class="w-[130px] h-[1px]  bg-[#79858A]/40  translate-x-[-15%]"></div>

								<a  target="_blank"
								href="https://docs.google.com/forms/d/e/1FAIpQLSfADdud-j-yeTMxypLGLm6C5GRWa7R6m8Oijyw9PJ5hDkoSaQ/viewform" >
								<div class="w-auto h-[30px] mt-[20px] text-[15px]  
								 translate-x-[-10%] text-center ">
								 <img
										src="../assets/images/feedback.png"
										class="w-[15px] mr-[8px] inline translate-y-[-20%]"
									/>
								 	<!-- border-[1px] border-solid border-[#05AC87]/40 rounded-[8px] -->
									{{ $t('Feedback') }}
							
								</div>
								</a>

								<!-- 語言切換 -->
								<button @click="toggle_show_lang"
								class="text-[16px] absolute top-[85vh] left-0  tracking-wider  w-[150px] text-center translate-x-[-5%]">
								{{$t('Languages')}}
								</button>
							</ul>
						
						</transition>

						
						<!-- 語言選單 -->
					<ul
								v-show="show_lang"
								class="h-[calc(100vh_-_48px)] w-[130px] pl-[21px] pt-[20px] absolute top-[34px] sm:left-[110px] md:w-[180px] md:pl-[44px] md:left-[-41px] text-[#79858A] text-[14px] bg-[#1A2C3390] overflow-hidden border-l-2 border-white/10"
							>
							<div
                 :class="isPracticePage ? 'text-[#05AC87]' : 'text-[#79858A]'"
									class="w-auto h-[20px] mb-[30px] text-[15px] text-start tracking-[2px]"
									@click="change_lang('tw')"
								>
									&nbsp;&nbsp;繁體中文
								</div>

								<div
                 :class="isPracticePage ? 'text-[#05AC87]' : 'text-[#79858A]'"
									class="w-auto h-[20px] mb-[30px] text-[15px] text-start tracking-[2px]"
									@click="change_lang('en')"
								>
									&nbsp;&nbsp;English
								</div>

								<div
                 :class="isPracticePage ? 'text-[#05AC87]' : 'text-[#79858A]'"
									class="w-auto h-[20px] mb-[30px] text-[15px] text-start tracking-[2px]"
									@click="change_lang('cn')"
								>
									&nbsp;&nbsp;简体中文
								</div>
					</ul>

						<router-link to="/" class="flex-none">
							<img
								src="../assets/images/logo.png"
								alt="logo"
								class="w-[40px] h-auto translate-y-[-15%]"
							/>
						</router-link>
					</div>

          <img
						src="../assets/images/member.png"
						class="w-[22px] navbar_dropdown transform transition-transform duration-200 ease-in-ou cursor-pointer"
						v-if="isEmail_1Page || isEmail_2Page || isRegisterPage ||isForgetPWD_1Page || isForgetPWD_2Page || isResetPWDPage"
					/>

					<router-link to="/login" v-else-if ="!$store.isLogin">
						<img src="../assets/images/member.png" class="w-[22px] h-auto" />
					</router-link>

					<img
						src="../assets/images/member.png"
						alt=""
						class="w-[22px] navbar_dropdown transform transition-transform duration-200 ease-in-ou cursor-pointer"
						@click="toggleOptionsExpanded_member"
						v-else
					/>
					<!-- @blur="isOptionsExpanded_member_blur " -->
					<transition
						enter-active-class="transform transition duration-500 ease-custom"
						enter-class="-translate-y-1/2 scale-y-0 opacity-0"
						enter-to-class="translate-y-0 scale-y-100 opacity-100"
						leave-active-class="transform transition duration-300 ease-custom"
						leave-class="translate-y-0 scale-y-100 opacity-100"
						leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
					>
						<ul
							v-show="isOptionsExpanded_member"
							class="navbar_member h-auto w-[121px] pl-[11px] py-[11px] absolute right-[-41px] top-[34px] translate-x-[-17%] text-[#79858A] text-[14px] bg-[#253D4780] overflow-hidden text-center"
						>
							<div 
               :class="isMemberPage ? 'text-[#05AC87]' : 'text-[#79858A]'"
              class="w-auto h-[20px] mb-[10px] text-[15px]">
								<router-link to="/member"> 
									{{$t('Setting')}}
								</router-link>
							</div>
							
							<div
								class="w-[150px] border-b-[1px] mb-2 -translate-x-5 border-gray"
							></div>
							<div 
               :class="isMyRecordPage ? 'text-[#05AC87]' : 'text-[#79858A]'"
              class="w-auto h-[20px] mb-[10px] text-[15px]">
								<router-link to="/myRecord"> 
									{{$t('My Record')}}
								</router-link>
							</div>

							<div
								class="w-[150px] border-b-[1px] mb-2 -translate-x-5 border-gray"
							></div>
							<div class="w-auto  h-[20px] text-[15px]  ">
								<button @click="logout" class="w-full text-center">{{ $t('Logout') }}</button>
							</div>

							<!-- @click="$store.CLEAR_USER" -->
						</ul>
					</transition>
				</nav>
			</header>
 </template>

 <script setup>
import { ref, onUnmounted, onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user.js";
import { usePlayersStore } from "@/stores/player.js";

import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const $store = useUserStore();
const $PlayerStore = usePlayersStore();

// 判斷頁面
const isHomePage = route.path === '/';
const isShop = route.path === '/shop';
const isSettingPage = route.path === '/setting';
// const isCompetitionPage = useRoute().path === '/competition';
const isPracticePage = route.path === '/practice';
const isMemberPage = route.path === '/member';
const isMyRecordPage = route.path === '/myRecord';

const isEmail_1Page = route.path === '/email_1';
const isEmail_2Page = route.path === '/email_2';
const isRegisterPage = route.path === '/register';
const isForgetPWD_1Page = route.path === '/forgetPWD_1';
const isForgetPWD_2Page = route.path === '/forgetPWD_2';
const isResetPWDPage = route.path === '/resetPWD';





const alert_show = () => {
	alert("敬請期待！");
};

const logout = async () => {
	try {
		$store.CLEAR_USER();
		router.push("/");
		window.location.reload();


	} catch (error) {
		console.log(error);
	}
};

// header
let isOptionsExpanded = ref(false);
let isOptionsExpanded_member = ref(false);

const closeMenuOnClickOutside = (event) => {
	// 如果菜单未展开，不执行任何操作
	if (!isOptionsExpanded.value && !isOptionsExpanded_member.value) return;

	const isClickInsideMenu = event.target.closest(".navbar_dropdown"); // 用你的菜单类名替换
	const isClickInsideButton = event.target.closest(".nav_show_bar_member"); // 用你的按钮类名替换

	// 如果点击的不是菜单内部或按钮，则关闭菜单
	if (!isClickInsideMenu && !isClickInsideButton) {
		isOptionsExpanded.value = false;
		isOptionsExpanded_member.value = false;
		show_lang.value = false
	}
};

let toggleOptionsExpanded = () => {
	isOptionsExpanded.value = !isOptionsExpanded.value;
	show_lang.value = false
};
let toggleOptionsExpanded_member = () => {
	isOptionsExpanded_member.value = !isOptionsExpanded_member.value;
};

const  show_lang =ref(false)
const toggle_show_lang =() => {
show_lang.value = !show_lang.value
}

const change_lang = (lang) => {
	$store.SET_LOCALE(lang)
	location. reload()
}

const startSetting = () => {
	if ($store.isLogin) {
		router.push("/setting");
	} else {
		const response = confirm("請先登入");
		if (response === true) {
			router.push("/login");
		} else {
			router.push("/");
		}
	}
};

</script>
