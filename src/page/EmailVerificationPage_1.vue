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
			class="pt-[55px] pb-[34px] relative flex justify-center 
			md:pb-8 lg:pt-20"
		>
			<img src="../assets/images/logo.png" alt="logo" />
		</div>
		
		<!-- form -->
		<div
			class=" px-[20px]  w-100 h-auto md:w-1/2 md:h-[400px] md:absolute md:left-1/2 md:translate-x-[-50%] lg:w-3/12
			"
		>
			<p
					class="pt-[20px]  text-white text-[16px] text-start  align-baseline font-bold"
				>	認證帳號</p>
				<p 	class=" pb-[13px]  text-white text-[12px]">請輸入 Email</p>
			<div
				class="card-body flex flex-col items-center sm:h-[calc(100vh-60vh)] md:h-[calc(100vh-65vh)] relative"
			>
			
				<!-- account -->
				<div class="w-full pb-[5px] relative">
					<input
						type="text"
						v-model="email"
						name="emailTBX"
						@focusout="checkEmail"
						class="block relative bg-white/50 w-full h-[43px] 
						border rounded-md py-[15px] pl-3 pr-3 shadow-sm sm:text-[14px] text-[#253D47] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start placeholder:text-white placeholder:font-thin"
					/>
					<div class=" w-[100] h-[12px] mb-[26px] pt-[2px]">
						<p 
						for="emailTBX"
						class="text-right w-[100] 
						text-[#E45F5F] sm:text-[12px] right-0"
						v-show="showErrorEmail"
						>請輸入正確的電子郵件</p
						>
						<p 
						for="emailTBX"
						class="text-right w-[100] 
						text-[#E45F5F] sm:text-[12px] right-0"
						v-show="showRegisteredEmail"
						>信箱已註冊</p
						>
					</div>
				</div>
				

				<button
					type="submit"
					class="w-full h-[43px] py-[5px] mb-[8px] rounded-md shadow-sm bg-green_1 focus:outline-none text-white border-[1px] text-[14px ] border-[#FFFFFF50] disabled:bg-white/50 disabled:text-[#d2d2d2]"
					@click="nextHandler"
					:disabled="!isFormEnter || nextDisabled"
				>
					<!-- style="background:linear-gradient(45deg, #05AC87 100%, #74E7B6 85%);" -->
					下 一 步
				</button>

				<div class="col w-full  mb-[59px]">
						<router-link to="/login" class="col w-1/4 mt-[8px] mb-[59px]  ">
							<span class="text-white mx-2 sm:text-[12px]"
								>回 到 <span class="font-semibold" style="font-family: 'TaipeiSanaTCBeta', ;">登 入</span></span
							>
						</router-link>
				</div>

			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, toDisplayString, computed,watch } from "vue";
import Navbar from '@/components/Navbar';
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.js";


const pageLoading =ref(false)
onMounted(() => {

	  setTimeout(() => {
			pageLoading.value = false;
      },3000);
});

const $store = useUserStore();
const router = useRouter();
const email = ref('');
const nextDisabled = ref(false);

watch(email, (newEmail, oldEmail) => {
	if (newEmail !== oldEmail) {
		resetEnter();
		
		showRegisteredEmail.value = false
		showLoading.value = false
	}
});

const resetEnter = () => {
	nextDisabled.value = false;
	// showErrorPassword.value = false;
	// showErrorEmail.value = false;
};
const showErrorEmail = ref(false);
const showRegisteredEmail = ref(false);

const checkEmail = () => {
	const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
	if (!email.value || email.value.trim() === "") {
		showErrorEmail.value = false;
	} else if (!emailPattern.test(email.value)) {
		showErrorEmail.value = true;
	} else {
		showErrorEmail.value = false;
	}
};
const isFormEnter = computed(() => {
	const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

	return (
		showErrorEmail.value === false &&
		emailPattern.test(email.value)&&
		email.value !== null &&
		email.value.trim() !== "" 
	);
});

const showLoading = ref(false)
const nextHandler = async () => {

	nextDisabled.value = true
	try {
		showLoading.value = true
		const requestBody = {
			email: email.value,
			vType: 1,
		};

		const response = await fetch(
			// 測試環境
				`https://api.antqtech.com/Woodball_Test/Account/VerifyEmail`,

			
				{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestBody),
			}
		);
		const data =  await response.json()

		if (data[0].state == "OK") {
			// console.log(data[0].msg)
			$store.SET_VERIFY(data[0].msg);
			$store.SET_USER_EMAIL(email.value);
			showLoading.value = false
			router.push("/email_2");
		} else {
			console.log(data[0].msg)
			showRegisteredEmail.value = true
			nextDisabled.value = true
			showLoading.value = false
		}
	} catch (error) {
		console.error(error);

	}

};

onMounted(() => {
	document.documentElement.scrollTop = 0;
});

const alert_show = () => {
	alert("敬請期待！");
};
</script>

<style>
#enterAnimation {
  animation: bounce-in 2s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
		top: 0px;
    padding-left: 100%;
    width: 100%;
  }

  to {
		top: 0px;
    padding-left: 0%;
    width: 100%;
  }
}

.v-enter-from {
	opacity:  1;
		top: 0px;
    padding-left: 100%;
    width: 100%;
}
.v-enter-active{
  transition: opacity 5s ease-in;
}
.v-enter-to{
  opacity:1;
		top: 0px;
    padding-left: 0%;
    width: 100%;
}
.v-leave-active {
	transition: opacity 1s;
}
.v-leave-to {
	opacity: 0;
}
</style>
