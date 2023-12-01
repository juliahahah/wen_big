<template>
	<!-- 下一步加載動畫 -->
	<transition>
		<div class="w-screen h-screen bg-indigo/70 fixed  " id="enterAnimation" style="z-index: 150;"
		v-if="showLoading " 
		>
			<img src="../assets/images/loading_2.gif" alt="" class=" absolute top-[40vh] left-[50vw]  translate-x-[-50%] w-[20%]">
		</div>
	</transition>
	<div class="bg-[#1A2C33] pb-[10vh] relative h-screen pt-[50px] " >
		<Navbar/>
		<!-- logo -->
		<div
			class="pt-[10px]  relative flex justify-center "
		>
			<img src="../assets/images/logo.png" alt="logo" class="w-[70px]"/>
		</div>

		<!-- form -->
		<div
			class=" rounded-tl-[70px] px-[20px] h-auto w-100 md:w-1/2 md:h-[300px] md:absolute md:left-1/2 md:translate-x-[-50%] lg:w-3/12 lg:h-[480px]"
		>
			<div
				class="card-body flex flex-col items-center sm:h-[calc(100vh-60vh)] md:h-[calc(100vh-65vh)] relative"
			>
				<p
					class=" pb-[21px] pt-[5px] text-white text-[16px]"
					style="font-family: 'Montserrat', sans-serif"
				>
						註 &nbsp;冊
				</p>

				<form @submit.prevent="register" class="w-full">
					<div class="w-full pb-[5px] relative">

						<div
							class="block w-[100%] text-start h-[20px] text-white text-[14px]"
						>
							<p v-if="name">選手名稱 （中文）</p>
						</div>
						<input
							type="text"
							v-model="name"
							placeholder="選手名稱 （中文）"
							name="nameTBX"
							@focusout="checkName"
							class="block relative bg-white/50 w-full h-[43px] border rounded-md  px-[10px] py-[15px] pl-3 pr-3 shadow-sm sm:text-[14px] text-[#253D47] font-semibold focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start placeholder:text-white placeholder:font-thin"
						/>
						<span
							class="absolute  text-[#E45F5F] sm:text-[12px] right-0 "
							v-if="showNoName" 
							>使用者為必填項</span
						>
						<!-- account -->
						<div
							class="block w-[100%]  mt-[10px] text-start h-[20px] text-white text-[14px] "
						>
							<p v-if="email">帳號</p>
						</div>
						<input
							type="text"
							v-model="email"
							placeholder="帳號"
							name="emailTBX"
							@focusout="checkEmail"
							disabled
							class="block relative bg-white/50 w-full h-[43px] border rounded-md px-[10px] py-[15px] pl-3 pr-3 shadow-sm sm:text-[14px] text-indigo focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start placeholder:text-white placeholder:font-thin disabled:bg-white/50"
						/>
						<span
							class="absolute  text-[#E45F5F] sm:text-[12px] right-0"
							v-if="showNoEmail" 
							>電子郵件為必填項</span
						>
						<span
							class="absolute text-[#E45F5F] sm:text-[12px] right-0"
							v-if="showErrorEmail"
							>請輸入正確的電子郵件</span
						>

						<!-- password -->
						<div class="w-full relative">
							<div
								class="block w-[100%] text-start h-[36px] text-white text-[14px]  relative"
							>
								<p v-if="password" class=" absolute bottom-0">密碼</p>
							</div>
							<input
								:type="showPassword ? 'text' : 'password'"
								@blur="checkPassword"
								class="h-[43px] block bg-white/50 w-full border rounded-md  shadow-sm placeholder:text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start text-indigo sm:text-14px"
								v-model="password"
								placeholder="密碼 ( 6-20 位英數字 )"
								name="passwordTBX"
							/>
							<span
								class="absolute text-[#E45F5F] sm:text-[12px] right-0"
								v-show="showErrorPassword"
								>密碼有錯誤</span
							>

							<button
								@click="togglePasswordVisibility"
								class="absolute right-[15px] top-[52px] text-white text-sm"
							>
								<img
									:src="showPassword ? hidePasswordImg : showPasswordImg"
									class="w-[19.5px]"
									alt="Toggle Password Visibility"
								/>
							</button>
						</div>

						<!-- check-password -->
						<div class="w-full pb-[36px] relative">
							<div
								class="block w-[100%] text-start h-[36px] text-white text-[14px] relative "
							>
								<p v-if="passwordConfirm" class=" absolute bottom-0">確認密碼</p>
							</div>
							<input
								:type="showPasswordConfirm ? 'text' : 'password'"
								@blur="checkPasswordConfirm"
								v-model="passwordConfirm"
								class="h-[43px] block bg-white/50 w-full border rounded-md   shadow-sm placeholder:text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1  text-start text-indigo sm:text-[14px]"
								
								placeholder="確認密碼"
								name="passwordConfirmTBX"
							/>
							<!-- v-model="passwordConfirm" -->
							<span
								class="absolute text-[#E45F5F] sm:text-[12px] right-0"
								v-show="showErrorPasswordConfirm"
								>密碼確認有誤</span
								>

							<button
								@click="togglePasswordConfirmVisibility"
								class="absolute right-[15px] top-[52px] text-white text-sm"
							>
								<img
									:src="showPasswordConfirm ? hidePasswordImg : showPasswordImg"
									class="w-[19.5px]"
									alt="Toggle Password Visibility"
								/>
							</button>
						</div>

						<!-- register btn -->
						<button
						class="w-full h-[43px] py-[5px] mb-[8px] rounded-[8px] shadow-sm bg-green_3 focus:outline-none text-white border-[1px] border-[#FFFFFF50]
						disabled:bg-white/50 disabled:text-[#D2d2d2]"
						:disabled="isFormEnter || registerBtn_disabled"
						@click="RegisterHandler"
						>
							註 冊
						</button>
						<router-link to="/login" class="col w-1/4 mt-[8px] mb-[59px]">
							<span class="text-white mx-2 sm:text-[12px]"
								>回 到 <span class="font-semibold">登 入</span></span
							>
						</router-link>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed,reactive, onMounted } from "vue";
import Navbar from '@/components/Navbar';
import { useUserStore } from "@/stores/user.js";
import { useRouter } from "vue-router";
import showPasswordImg from "@/assets/images/showPassword.png";
import hidePasswordImg from "@/assets/images/hidePassword.png";

const $store = useUserStore();
const name = ref('');
const email = ref('');

const password = ref('');
const passwordConfirm = ref('');
const registerBtn_disabled=ref(false)
const showNoName= ref(false);
const showNoEmail = ref(false);
const showErrorEmail = ref(false);
const showErrorPassword = ref(false);
const showErrorPasswordConfirm = ref(false);
const checkName = () => {
  if (!name.value.trim()) { // 使用 !email.value.trim() 来检查是否为空
    showNoName.value = true;
  } else {
    showNoName.value = false;
  }
};
const checkEmail = () => {
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  if (!email.value.trim()) { // 使用 !email.value.trim() 来检查是否为空
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
const showLoading = ref(false)

const showPassword = ref(false);
const showPasswordConfirm = ref(false);
const togglePasswordVisibility = () => {
	showPassword.value = !showPassword.value;
};
const togglePasswordConfirmVisibility = () => {
	showPasswordConfirm.value = !showPasswordConfirm.value;
};
const checkPassword = () => {
	if (password.value.length < 6) {
		showErrorPassword.value = true;
		registerBtn_disabled.value = true
	} else {
		showErrorPassword.value = false;
		registerBtn_disabled.value = false
	}
};
const checkPasswordConfirm = () => {
	if (password.value.trim() !== passwordConfirm.value.trim()) {
		showErrorPasswordConfirm.value = true;
		registerBtn_disabled.value = true
	}
	else {
		showErrorPasswordConfirm.value = false;
		registerBtn_disabled.value = false
	}
};

// const registerDisabled = ref(false)
const isFormEnter = computed(() => {
	return (
		!name.value ||
		!password.value ||
		!passwordConfirm.value ||
		passwordConfirm.value.length <6 ||
		password.value.length <6
	);
});
const router = useRouter();
const RegisterHandler = async () => {
		showLoading.value = true
	try {

		const savedVerify = JSON.parse(sessionStorage.getItem("verify"));
		const savedCode = JSON.parse(sessionStorage.getItem("emailCode"));

		const requestBody = {
			name:name.value,
			email: email.value,
			pwd: password.value,
			verify: savedVerify.verify,
			code:savedCode.emailCode,
		};

		const response = await fetch(`https://api.antqtech.com/Woodball_Test/Account/Register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestBody),
			}
		);

		const data = await response.json();

		if (data[0].state == "OK") {
		showLoading.value = false

		alert('註冊成功')
			$store.SET_USER_NAME(name.value)
			router.push("/login");
		} else {
			console.log(data[0].msg)
		}

		
	} catch (error) {
		console.error("Error fetching data:", error);
			showLoading.value = false

	}
};
onMounted(() => {

document.documentElement.scrollTop = 0;

const savedEmail = JSON.parse(sessionStorage.getItem("userEmail"));
const userEmail = savedEmail.userEmail;
  if(userEmail  !== null){
  email.value = userEmail
  }
});


</script>
