<template>
	<!-- 下一步加載動畫 -->
	<transition>
		<div class="w-screen h-screen bg-indigo/70 fixed  " id="enterAnimation" style="z-index: 150;"
		v-if="showLoading " 
		>
			<img src="../assets/images/loading_2.gif" alt="" class=" absolute top-[40vh] left-[50vw]  translate-x-[-50%] w-[20%]">
		</div>
	</transition>
	<div class="bg-[#1A2C33]  pb-[10vh] relative h-[100vh] pt-[50px] " >
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
			class=" px-[20px]  w-100 md:w-1/2 md:h-[400px] md:absolute md:left-1/2 md:translate-x-[-50%] lg:w-3/12
			"
		>
			<p
					class="pt-[20px]  text-white text-[16px] text-start  align-baseline"
				>	輸入 Email 驗證碼</p>
				<p 	class=" pb-[13px]  text-white text-[12px]">已經寄送驗證碼至您的 Email</p>
			<div
				class="card-body flex flex-col items-center sm:h-[calc(100vh-60vh)] md:h-[calc(100vh-65vh)] relative"
			>
			
				<!-- account -->
				<div class="w-full  relative">

					<div class=" w-100 h-10 grid grid-cols-6 gap-4 ">
					<input
						type="text"
						@click="focusFirstInput"
						inputmode="numeric"
						v-model="code_1"
						:ref="refs[0]"
						maxlength="1"
						size="1"
					oninput="value=value.replace(/[^\d]/g,'')"
						@focusout="checkCode"
						
						class="  bg-white/50 h-[43px] w-[43px]  col-span-1 pr-0 pl-4
						border rounded-md 
						shadow-sm 
						sm:text-[16px] text-[#253D47] font-bold  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start " style="font-family: 'Montserrat'"
					/>
					<input
						type="text"
						
						@click="focusFirstInput"
inputmode="numeric"
v-model="code_2"
						:ref="refs[1]"
						maxlength="1"
						size="1"
						oninput="this.value = this.value.replace(/[^0-9]/g, '')" 
						@focusout="checkCode"
						
						class="  bg-white/50 h-[43px] w-[43px]  col-span-1 pr-0 pl-4
						border rounded-md 
						shadow-sm 
						sm:text-[16px] text-[#253D47] font-bold  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start " style="font-family: 'Montserrat'"
					/>
					<input
						type="text"
						@click="focusFirstInput"
inputmode="numeric"
v-model="code_3"
							:ref="refs[2]"
						maxlength="1"
						size="1"
						oninput="this.value = this.value.replace(/[^0-9]/g, '')" 
						@focusout="checkCode"
						
						class="  bg-white/50 h-[43px] w-[43px]  col-span-1 pr-0 pl-4
						border rounded-md 
						shadow-sm 
						sm:text-[16px] text-[#253D47] font-bold  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start " style="font-family: 'Montserrat'"
					/>
					<input
						type="text"
						@click="focusFirstInput"
inputmode="numeric"
v-model="code_4"
							:ref="refs[3]"
						maxlength="1"
						size="1"
						oninput="this.value = this.value.replace(/[^0-9]/g, '')" 
						@focusout="checkCode"
						

						class="  bg-white/50 h-[43px] w-[43px]  col-span-1 pr-0 pl-4
						border rounded-md 
						shadow-sm 
						sm:text-[16px] text-[#253D47] font-bold  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start " style="font-family: 'Montserrat'"
					/>
					<input
						type="text"
						@click="focusFirstInput"
inputmode="numeric"
v-model="code_5"
							:ref="refs[4]"
						maxlength="1"
						size="1"
						oninput="this.value = this.value.replace(/[^0-9]/g, '')" 
						@focusout="checkCode"


						class="  bg-white/50 h-[43px] w-[43px]  col-span-1 pr-0 pl-4
						border rounded-md 
						shadow-sm 
						sm:text-[16px] text-[#253D47] font-bold  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start " style="font-family: 'Montserrat'"
					/>
					<input
						type="text"
						@click="focusFirstInput"
inputmode="numeric"
v-model="code_6"
						:ref="refs[5]"
						maxlength="1"
						size="1"
						oninput="this.value = this.value.replace(/[^0-9]/g, '')" 
						@focusout="checkCode"
						


						class="  bg-white/50 h-[43px] w-[43px]  col-span-1 pr-0 pl-4
						border rounded-md 
						shadow-sm 
						sm:text-[16px] text-[#253D47] font-bold  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-start " style="font-family: 'Montserrat'"
					/>
					
					</div>

					<div class="  w-[100] h-[10px] ">
					</div>
				</div>
			
				<div class="  w-full h-[12px] mb-[40px]  text-end">
						<p 
						for="emailTBX"
						class="text-right w-[100] 
						text-[#E45F5F] sm:text-[12px] right-0 absolute"
						v-if="showErrorCode"
						>請輸入正確的認證碼</p
						>
							<p 
						for="emailTBX"
						class="text-right w-[100] 
						text-[#E45F5F] sm:text-[12px] right-0 absolute"
						v-if="showExpiredCode"
						>認證碼超時，請重新發送</p
						>
					</div>

				<button
					type="submit"
					class="w-full h-[43px] py-[5px] mb-[8px] rounded-[8px] shadow-sm bg-green_1 focus:outline-none text-white border-[1px] text-[14px ] border-[#FFFFFF50] disabled:bg-white/50 disabled:text-[#d2d2d2]"
					@click="nextHandler"
					:disabled="!isFormEnter || nextDisabled "
				>
					<!-- style="background:linear-gradient(45deg, #05AC87 100%, #74E7B6 85%);" -->
					下 一 步
				</button>

				<div class="col w-full  mb-[59px] ">
						<router-link to="/login" class="col   mb-[59px]  w-1/4 ">
							<span class="text-white mx-2 sm:text-[12px]"
								>回 到 <span class="font-semibold" style="font-family: 'TaipeiSanaTCBeta';">登 入</span></span
							>
						</router-link>
						<div class="col w-2/4"></div>
							<span class="text-bold text-white mx-2 sm:text-[12px] col   mb-[59px] w-1/4   mr-1 justify-end cursor-pointer"  
							@click = 'resend'
							style="font-family: 'TaipeiSanaTCBeta', ;">再發送一次</span
							>
				</div>

			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, reactive, onMounted, toDisplayString, computed, watch,  nextTick } from "vue";
import Navbar from '@/components/Navbar';
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.js";
import { refAutoReset } from "@vueuse/core";

const $store = useUserStore();
const router = useRouter();
const code_1 = ref('');
const code_2 = ref('');
const code_3 = ref('');
const code_4 = ref('');
const code_5 = ref('');
const code_6 = ref('');
const refs = ref([]);

refs.value[0] = ref(null); // 0 号位置的 ref
refs.value[1] = ref(null); // 1 号位置的 ref
refs.value[2] = ref(null);
refs.value[3] = ref(null);
refs.value[4] = ref(null);
refs.value[5] = ref(null);

const focusFirstInput = () => {
  // 將焦點設置到第一個input元素
  if (code_1 .value === '' && code_2 .value === '' && code_3 .value === '' && code_4 .value === '' && code_5 .value === '' && code_6 .value === '')  {
    refs.value[0].value.focus();
  }
};

watch(code_1, (newCode ,oldCode) => {
	if (newCode !== oldCode && code_1.value!=='' ) {
		showErrorCode.value = false
		nextDisabled.value = false
	}
});


watch(
	() => code_1.value,
	() => {
		if( code_1.value.length == 1) {
			refs.value[1].value.focus();
		}
	},
)

watch(
	() => code_2.value,
	() => {
		if( code_2.value.length == 1) {
			refs.value[2].value.focus();
		}
		if( code_2.value.length == 0 && code_1.value.length == 1) {
			refs.value[0].value.focus();
		}

	}
)

watch(
	() => code_3.value,
	() => {
		if( code_3.value.length == 1) {
			refs.value[3].value.focus();
		}
		if( code_3.value.length == 0 && code_2.value.length == 1) {
			refs.value[1].value.focus();
		}
	}
)

watch(
	() => code_4.value,
	() => {
		if( code_4.value.length == 1) {
			refs.value[4].value.focus();
		}
			if( code_4.value.length == 0 && code_3.value.length == 1) {
			refs.value[2].value.focus();
		}
	}
)

watch(
	() => code_5.value,
	() => {
		if( code_5.value.length == 1) {
			refs.value[5].value.focus();
		}
			if( code_5.value.length == 0 && code_4.value.length == 1) {
			refs.value[3].value.focus();
		}
	}
)

watch(
	() => code_6.value,
	() => {
			if( code_6.value.length == 0 && code_5.value.length == 1) {
			refs.value[4].value.focus();
		}
	}
)

const showErrorCode = ref(false)
const showExpiredCode = ref(false)

const isFormEnter = computed(() => {
	return (
	code_1.value.trim() !== '' && 
	code_2.value.trim() !== '' && 
	code_3.value.trim() !== '' && 
	code_4.value.trim() !== '' && 
	code_5.value.trim() !== '' && 
	code_6.value.trim() !== ''
	);
});

const nextDisabled = ref(false);


const showLoading = ref(false)
const nextHandler = async () => {
	try {
		showLoading.value = true
		const enteredCode = code_1.value + code_2.value + code_3.value + code_4.value + code_5.value + code_6.value

		const savedEmail = sessionStorage.getItem("userEmail");
		const userEmail = JSON.parse(savedEmail)
		const savedVerify = sessionStorage.getItem("verify");
		const Verify= JSON.parse(savedVerify)
		const requestBody = {
			email: userEmail.userEmail,
			verify: Verify.verify,
			code: enteredCode
		}
		console.log(requestBody)

		

		const response = await fetch(
				// 測試環境
				`https://api.antqtech.com/Woodball_Test/Account/VerifyCK`,
			
				// 正式環境
			// `https://api.antqtech.com/Woodball_Test/Account/VerifyCK`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestBody),
			}
		);
		const data = await response.json();
		console.log(data)

		if (data[0].state == "OK") {
			$store.SET_EMAIL_CODE (enteredCode)
			showLoading.value = false
			router.push("/register");
		} else if(data[0].msg.includes("10") ){
			console.log(data[0])
			showLoading.value = false
			showExpiredCode.value = true 
			nextDisabled.value = true
			resetCode()
		} else {
			console.log(data[0])
			showLoading.value = false
			showErrorCode.value = true
			nextDisabled.value = true
			resetCode()


		}
	} catch (error) {
		console.error("Error fetching data:", error);

	}

};
const resetCode = () =>{
	code_1.value=''
	code_2.value=''
	code_3.value=''
	code_4.value=''
	code_5.value=''
	code_6.value=''

}

const resend = async () => {
	try {
	const savedEmail = localStorage.getItem("userEmail_remember");
		const userEmail_remember = JSON.parse(savedEmail)
		
		const requestBody_resend = {
			email: userEmail_remember.userEmail_remember,
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
				body: JSON.stringify(requestBody_resend),
			}
		);
		const data = await response.json();

		if (data[0].state == "OK") {
			console.log("data:           " + data)
			$store.SET_VERIFY(data[0].msg);
		} else {
			console.log(data[0].msg)
		}
	} catch (error) {
		console.error("Error fetching data:", error);

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


