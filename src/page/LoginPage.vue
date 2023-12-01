<template>
	<div class="bg-[#1A2C33] pb-[10vh] relative h-[100vh] pt-[50px] " >

		<Navbar/>
		<!-- logo -->
		<div
			class="pt-[55px] pb-[34px] relative flex justify-center md:pb-8 lg:pt-20 "
		>
			<img src="../assets/images/logo.png" alt="logo" />
		</div>
		<!-- form -->
		<div
			class=" px-[20px]  w-100 md:w-1/2 md:h-[400px] md:absolute md:left-1/2 md:translate-x-[-50%] lg:w-3/12"
		>
			<div
				class="card-body flex flex-col items-center sm:h-[calc(100vh-60vh)] md:h-[calc(100vh-65vh)] relative"
			>
				<p
					class="pt-[20px] pb-[21px] text-white text-[16px]"
				>
					登 &nbsp;  入
				</p>
				<!-- account -->
				<div class="w-full pb-[5px] relative">
					<div
						class="block w-[100%] text-start h-[20px] text-white text-[14px]"
					>
						<p v-if="email">帳號</p>
					</div>
					<input
						type="text"
						v-model="email"
						placeholder="帳號"
						name="emailTBX"
						@focusout="checkEmail"
						class="block relative bg-white/50 w-full h-[43px] border rounded-md px-[10px] pl-3 pr-3 shadow-sm sm:text-[14px] text-[#253D47]  font-medium focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start placeholder:text-white placeholder:font-thin"
					/>
					<span
						class="absolute bottom-[-18%] text-[#E45F5F] sm:text-[12px] right-0"
						v-if="showNoEmail"
						>電子郵件為必填項</span
					>
					<span
						class="absolute bottom-[-20%] text-[#E45F5F] sm:text-[12px] right-0"
						v-show="showErrorEmail"
						>請輸入正確的電子郵件</span
					>
					<!-- v-show="errors.has('name')" -->
					<!-- {{ errors.first('name') }}  -->
				</div>
				<!-- password -->
				<div class="w-full pb-[25px] relative">
					<div
						class="block w-[100%] text-start h-[20px] text-white text-[14px]"
					>
						<p v-if="password">密碼</p>
					</div>
					<input
						:type="showPassword ? 'text' : 'password'"
						@blur="checkPassword"
						class="h-[43px] block bg-white/50 w-full border rounded-md px-[10px] py-[15px] pl-3 pr-3 shadow-sm text-start text-[#253D47] tracking-[2.73px] placeholder:text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm   font-medium sm:text-14px "
						v-model="password"
						placeholder="密碼"
						name="passwordTBX"
					/>
					<span
						class="absolute text-[#E45F5F] sm:text-[12px] right-0"
						v-show="showErrorPassword"
						>密碼有錯誤</span
					>

					<button
						@click="togglePasswordVisibility"
						class="absolute right-[15px] top-1/2 translate-y-[-50%] text-white text-sm"
					>
						<img
							:src="showPassword ? hidePasswordImg : showPasswordImg"
							class="w-[19.5px]"
							alt="Toggle Password Visibility"
						/>
					</button>
				</div>

				<button
					type="submit"
					name="loginBTN"
					class="w-full h-[43px] py-[7px] mb-[8px] rounded-md shadow-sm bg-green_3 focus:outline-none text-white border-[1px] border-[#FFFFFF50] disabled:bg-white/50 disabled:text-[#d2d2d2]"
					@click="LoginHandler"
					:disabled="loginDisabled || !isFormEnter"
				>
					<!-- style="background:linear-gradient(45deg, #05AC87 100%, #74E7B6 85%);" -->
					登 入
				</button>

				<div class="col w-full  mb-[59px] ">
					<div class="remember">
						<label for="rememberCBX" class="relative">
							<!-- <div class="absolute  w-[15px] h-[15px] 
							translate-x-[0%] translate-y-[25%]" style="border: 1px solid white;"></div> -->
							<input
								@click="toggleRemember"
								v-model="rememberEmail"
								type="checkbox"
								id="rememberCBX"
								class="form-checkbox  translate-y-[10%]
								bg-indigo mb-1 text-indigo
								empty:border-[#FFFFFF50] focus:outline-slate-500 checked:border-[#FFFFFF50]"
								style="border-radius: 10%; border: 2px #FFFFFF50 solid; ;"
							/>
								<span class="text-white mx-2  tracking-[2.7px] sm:text-[12px] ">記住帳號 </span>
						

							
						</label>
					</div>

					<!-- 正式版再上 -->
					<div class="forget 
          absolute right-0 mr-0 text-gray text-white  tracking-[2.7px] text-end sm:text-[12px]  " name="forgetPasswordBTN">
					<router-link to="/forgetPWD_1">
						忘記密碼？
					</router-link>
          </div>
				</div>
				<!-- 註冊按鈕 -->
				<router-link to="/email_1">
					<div
						class="forget text-white pb-[2px] border-b-[1px]"
						name="forgetPasswordBTN"
					>
						註 &nbsp;冊
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted,  computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.js";
import Navbar from '@/components/Navbar';

import showPasswordImg from "@/assets/images/showPassword.png";
import hidePasswordImg from "@/assets/images/hidePassword.png";

const $store = useUserStore();
const router = useRouter();

const email = ref("");
const password = ref("");
watch([email, password], ([newEmail, newPassword], [oldEmail, oldPassword]) => {
	if (newEmail !== oldEmail || newPassword !== oldPassword) {
		resetLogin();
	}
});
const passwordConfirm = ref("");
const showNoEmail = ref(false);
const showErrorEmail = ref(false);
const showErrorPassword = ref(false);
const rememberEmail = ref(false);
const loginDisabled = ref(false);

// 在页面加载时检查本地存储，如果有保存的电子邮件，将其设置为输入字段的值
onMounted(() => {

	document.documentElement.scrollTop = 0;
	const savedEmail = localStorage.getItem("userEmail_remember");
	if (savedEmail) {
		const userData = JSON.parse(savedEmail);
		if (userData.userEmail_remember && $store.rememberEmail === true) {
			email.value = userData.userEmail_remember;
			rememberEmail.value = true
		} else {
			email.value = ''
			rememberEmail.value = false

		}
	}
});

const checkEmail = () => {
	const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
	if (!email.value || email.value.trim() === "") {
		showNoEmail.value = true;
		showErrorEmail.value = false;
	} else if (!emailPattern.test(email.value)) {
		showNoEmail.value = false;
		showErrorEmail.value = true;
	} else {
		showNoEmail.value = false;
		showErrorEmail.value = false;
	}
};
const checkPassword = () => {
	if (password.value.length < 6) {
		showErrorPassword.value = true;
	} else {
		showErrorPassword.value = false;
	}
};
const showPassword = ref(false);
const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};
const toggleRemember = () => {
	rememberEmail.value = !rememberEmail.value;
};

const isFormEnter = computed(() => {
	return (
		email.value !== null &&
		email.value.trim() !== "" &&
		password.value !== null &&
		password.value.trim().length > 5 &&
		showErrorPassword.value === false &&
		showErrorEmail.value === false
	);
});

// 重啟 loginBTN
const resetLogin = () => {
	loginDisabled.value = false;
	// showErrorPassword.value = false;
	// showErrorEmail.value = false;
};

const LoginHandler = async () => {
	try {
		const requestBody = {
			PID: email.value,
			PPwd: password.value,
		};
		const response = await fetch(
			`https://api.antqtech.com/Woodball_Test/Account/login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestBody),
			}
		);
		const data = await response.json();

		if (response.status === 400 ) {
			loginDisabled.value = true; 
			if (data[0].msg == "密碼輸入錯誤！") {
			showErrorPassword.value = true;
		} else if   (data[0].msg == "請先註冊帳號！"){
			showErrorEmail.value = true;
		}
			$store.SET_USER_EMAIL_REMEMBER(null);
			$store.SET_USER_EMAIL(null);

		} else {
			loginDisabled.value = false;
			$store.SET_USER_EMAIL_REMEMBER(null);
			$store.SET_USER_EMAIL(null);
		}

		// 記住信箱 功能s
		if (rememberEmail.value == true) {
			$store.SET_USER_EMAIL_REMEMBER(email.value);
			$store.rememberEmail = true
		} else {
			$store.SET_USER_EMAIL_REMEMBER(email.value);
			$store.rememberEmail = false
			// $store.SET_USER_EMAIL_REMEMBER(null);
		}

		if (response.status === 200) {
			console.log(data[0])
			$store.SET_TOKEN(data[0].msg);
			$store.SET_USER_EMAIL(data[0].pid);
			$store.SET_USER_NAME(data[0].pName)
			$store.SET_USER_AUTH(data[0].pAuth)
			$store.SET_USER_PHOTO(data[0].photo)
			
			router.push("/");
		}
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

const alert_show = () => {
	alert("敬請期待！");
};
</script>
