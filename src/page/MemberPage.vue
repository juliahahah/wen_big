<template>
	<div class="bg-[#162329] pb-[10vh] relative h-[100vh] pt-[50px] w-[100vw]" >
			<Navbar/>
				<!-- breadcrumb-->
		<div class="px-[20px] mt-[10px]">
			<div class="breadCrumb text-gray">
				<ol
					class="flex items-center whitespace-nowrap min-w-0"
					aria-label="Breadcrumb"
				>
					<li class="text-sm">
						<div
							class="flex items-center text-[#FFFFFF98]"
						>
							我的設定
							<svg
								class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</div>
					</li>

					<li class="text-sm text-[#FFFFFF98]" aria-current="page">個人資料</li>
				</ol>
			</div>

		
		</div> 

		<!-- 個人資料區 form -->
		<form class="w-[100vw]  px-[20px] pt-[26px]  bg-[#162329] "
		@submit.prevent="submit">
			<!-- 照片 -->
			 <div class="flex  justify-center mb-[37px]">
			<img :src="avatarSrc"  class="w-[90px] h-[90px]  border-[1px] border-[#737373]  border-solid  rounded-[12px] g relative object-cover" >

			<!-- 照片上傳 -->
			<label class="upload_cover absolute w-[100px] h-[100px] text-center pointer ">  
				<input type="file"  @change="handleAvatarUpload" name="avatar-input"  id="file-input" style="display: none;" >

				<img src="../assets/images/upload_avatar.png"  class="absolute w-[24px] left-[81%] top-[75%]">
			</label>

  			</div>
			<!-- 中文姓名 -->
  <div class="flex items-center mb-[10px] w-full">
    <div class="w-[68px] mr-[15px]">
      <label class="block text-[#B1BCC1] text-[15px]  font-medium " for="nameZH">
        *中文姓名
      </label>
    </div>
    <div class="w-[75%] border-b-[1px] border-b-white/10">
      <input class="bg-[#162329] text-[#BCBCBC]  text-start appearance-none w-full text-gray-700  
			font-medium  focus:ring-0
			leading-[18px] " id="nameZH" type="text" v-model="pName_Zh"
			>
    </div>
  </div>
	<!-- 英文姓名 -->
  <div class="flex items-center mb-[10px]">
    <div class="w-[68px] mr-[15px]">
      <label class="block text-[#B1BCC1] text-[15px]  font-medium " for="name_EN">
        英文姓名
      </label>
    </div>
    <div class="w-[75%] border-b-[1px] border-b-white/10">
      <input class="bg-[#162329] text-[#BCBCBC]  text-start appearance-none w-full text-gray-700 focus:ring-0  
			font-medium	leading-[18px]  placeholder:text-[#79858A]/30 placeholder:font-medium" id="name_EN" type="text" placeholder="請輸入英文姓名" v-model="pName_En">
    </div>
  </div>
	<!-- 帳號 -->
  <div class="flex items-center mb-[10px]">
    <div class="w-[68px] mr-[15px]">
      <label class="block text-[#B1BCC1] text-[15px]  font-medium " for="pid">
        帳號
      </label>
    </div>
    <div class="w-[75%] border-b-[1px] border-b-white/10">
      <input class="bg-[#162329] text-[#BCBCBC]  text-start appearance-none w-full text-gray-700 focus:ring-0  disabled:bg-inherit
			font-medium leading-[18px] " id="pid" type="text" v-model="email" disabled>
    </div>
  </div>
	<!-- 性別 -->
  <div class="flex items-center mb-[10px]  relative">
    <div class="w-[68px] mr-[15px]">
      <label class="block text-[#B1BCC1] text-[15px]  font-medium " for="pGender" >
        *性別
      </label>
    </div>
    <div class="w-full pl-[15px] ">
			<input
								type="radio"
								id="gender_man"
								name="gender"
								v-model="pGender"
      					value="1"
								class="inline-block 
								bg-[#253d47]/80 mb-1 text-indigo 
								focus:ring-0 focus:border-0
								focus:outline-none
								checked:border-[#FFFFFF50] checked:border-2 checked:before:bg-indigo
								checked:bg-[#FFFFFF50] checked:p-0 checked:w-[16px] checked:h-[16px] 
								" style="display: inline-block;  "
							/>
							<label for="gender_man " class="inline-block ml-[7px] text-[#B1BCC1]">男</label>
								
							<input
								type="radio"
								id="gender_woman"
								name="gender"
								v-model="pGender"
      					value="2"
								class=" inline-block
								bg-[#253d47]/80 mb-1 ml-[62px] text-indigo empty:border-[#FFFFFF50] 
								focus:ring-0 focus:border-0
								checked:border-[#FFFFFF50] checked:border-2 checked:before:bg-indigo
								checked:bg-[#FFFFFF50] checked:p-0 checked:w-[16px] checked:h-[16px] "
								style="display: inline-block; "
											/>
											<label for="gender_woman" class="inline-block ml-[7px] text-[#B1BCC1]">女</label>

											<hr class="w-[75%] absolute top-[130%] border-[#FFFFFF10]" >
      
    </div>
  </div>
	<!-- 生日 -->
  <div class="flex items-center mb-[10px]">
    <div class="w-[68px] mr-[15px]">
      <label class="block text-[#B1BCC1] text-[15px]  font-medium " for="pBirthday">
        *生日
      </label>
    </div>
    <div class="w-[75%] border-b-[1px] border-b-white/10">
      <input class="bg-[#162329] text-[#BCBCBC]  text-start appearance-none w-full text-gray-700 focus:ring-0  	font-medium placeholder:text-[#79858A]/30 placeholder:font-medium
			leading-[18px] " id="pBirthday" type="text" placeholder="YYYYMMDD" v-model="pBirthday">
    </div>
  </div>
	<!-- 國籍 -->
  <div class="flex items-center mb-[10px]">
    <div class="w-[68px] mr-[15px]">
      <label class="block text-[#B1BCC1] text-[15px]  font-medium " for="pCountry">
        國籍
      </label>
    </div>
    <div class="w-[75%] border-b-[1px] border-b-white/10">
      <input class="bg-[#162329] text-[#BCBCBC]  text-start appearance-none w-full text-gray-700 focus:ring-0  placeholder:text-[#79858A]/30 placeholder:font-medium
			font-medium
			leading-[18px] " type="text" placeholder="請輸入您的國籍" v-model="pCountry" id="pCountry">
    </div>
  </div>
	<!-- 聯絡地址 -->
  <div class="flex items-center mb-[10px]">
    <div class="w-[68px] mr-[15px]">
      <label class="block text-[#B1BCC1] text-[15px]  font-medium " for="pAddress">
        聯絡地址
      </label>
    </div>
    <div class="w-[75%] border-b-[1px] border-b-white/10">
      <input class="bg-[#162329] text-[#BCBCBC]  text-start appearance-none w-full text-gray-700 focus:ring-0  placeholder:text-[#79858A]/30 placeholder:font-medium
			font-medium
			leading-[18px] " type="text" placeholder="--市" v-model="pAddress" id="pAddress">
    </div>
  </div>
	<!-- 手機號碼 -->
  <div class="flex items-center mb-[10px]">
    <div class="w-[68px] mr-[15px] shrink-0">
      <label class="block text-[#B1BCC1] text-[15px]  font-medium " for="pPhone_number">
        手機號碼
      </label>
    </div>
    <div class="w-[75%] flex border-b-[1px] border-b-white/10">
			 <input class="bg-[#162329] text-[#BCBCBC]  text-start appearance-none w-[54px] px-0 text-gray-700 focus:ring-0   font-[15px]
			leading-[18px] " id="pPhone_code" type="text" v-model="pPhone_Code" placeholder="+886">

      <input class="bg-[#162329] text-[#BCBCBC]  text-start appearance-none w-full 
			px-0
			text-gray-700 focus:ring-0  placeholder:text-[#79858A]/30 placeholder:font-medium
			font-medium
			leading-[18px] " id="pPhone_number" type="text" placeholder="請輸入您的手機號碼" v-model="pPhone">
    </div>
  </div>
</form>

<div class="flex items-center bg-[#162329] w-[100vw]">
      <button class="w-[127px] h-[43px]  mt-[60px] mb-10 text-white text-[15px] 
			relative left-1/2 translate-x-[-50%] rounded-[8px]
			bg-[#00ff95b3]
			disabled:bg-[#79858A] disabled:text-[#FFFFFF50]
			" type="submit"
				style="	box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.15);"
					@click="SubmitHandler"
					:disabled="!isSubmitDisabled"
			>
        設定完成
      </button>
  </div>


	</div>
</template>

<script setup>
import { ref, onUnmounted, onMounted, watch } from "vue";
import Navbar from '@/components/Navbar';
import { useUserStore } from "@/stores/user.js";
import { useRouter } from "vue-router";
const router = useRouter();
const $store = useUserStore();

const pName_Zh = ref('');
const pName_En = ref('');
const pGender = ref(0);
const pBirthday = ref('');
const pCountry = ref('');
const pAddress = ref('');
const pPhone_Code = ref('');
const pPhone = ref('');
const email = ref('')

const avatarSrc = ref('');

const handleAvatarUpload  = (event) => {
  const fileInput = event.target;
	
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

   
    reader.readAsDataURL(fileInput.files[0]);
		// console.log(reader.readAsDataURL(fileInput.files[0]))

		const allowedExtensions = ["png", "jpg", "jpeg", "gif"];
		const fileExtension = fileInput.files[0].name.split('.').pop().toLowerCase();
		// 且上傳容量要小於 2mb
		if (allowedExtensions.includes(fileExtension)) {
			if(fileInput.files[0].size <= 2000000){
				console.log("文件格式符合要求");
			}else {
				alert('只能上傳小於2MB的圖檔')
				return
			}
    } else {
      // 文件格式不符合要求
      alert("只能上傳 .png、.jpg 、 .jpeg、.gif 格式的文件");
     avatarSrc.value = 'https://api.antqtech.com/Woodball_Test/photo/Default1.png' // 清空文件输入框
    }

		 reader.onload = (e) => {
      avatarSrc.value = e.target.result;
			// console.log(avatarSrc.value)
			let avatarSrc_save = e.target.result.split(',')[1];
			// console.log(avatarSrc_save)
			AvatarUpload(avatarSrc_save)

    };




  }

};
const AvatarUpload = async(photo) => {
	console.log('photo')
	console.log(photo)
	
	try{

			const requestBody = {
					imgBase64: photo,
					ext: '.jpg'
		};
			const response = await fetch(`https://api.antqtech.com/Woodball_Test/Account/UPhoto`, {
				method: "POST",
				 headers: {
					"Content-Type": "application/json",
          Authorization: $store.userToken,
				},
				body: JSON.stringify(requestBody),
			}
		);

			const data = await response.json();
			console.log(data[0])

			if (response.status === 401) {
            alert('請重新登入')
						$store.CLEAR_USER()
            router.push('/login')
        }

			if(data[0].state === 'OK') {
				$store.SET_USER_PHOTO(data[0].msg)
				alert('圖片更換成功')
			}
	}catch (error) {
		console.error("Error fetching data:", error);
	}

}


const isSubmitDisabled = ref(false);
const isUserDataFetched = ref(false);
// 监听输入字段的变化


watch(isUserDataFetched, (newVal) => {
  if (newVal) {
    watchInputs();
  }
});

const watchInputs = () => {
  watch([pName_Zh, pName_En, pGender, pBirthday, pCountry, pAddress, pPhone_Code, pPhone], (newValues, oldValues) => {
    // 在这里检查输入字段的值，并更新isSubmitDisabled
    isSubmitDisabled.value = newValues.some((value, index) => value === '' || value === oldValues[index]);
  });
};

const SubmitHandler = async () => {

		if(pName_Zh.value == "" || pBirthday.value == "" || pGender.value === 0 ) {
			alert('請輸入完成必填項目：中文姓名、生日、性別')
		} else if  ( !isValidDate(pBirthday.value)) {
        alert('請輸入有效的生日，格式為8位數字');
		} else if ( !/^09\d{8}$/.test(pPhone.value) && pPhone.value !== ''){
				 alert('請輸入有效的手機號碼，格式為10位數字');
		}
		else {
			try {
		   
		const requestBody = {
					pName_Zh: pName_Zh.value,
					pName_En: pName_En.value,
					pGender: pGender.value,
					pBirthday: pBirthday.value,
					pCountry: pCountry.value,
					pAddress: pAddress.value,
					pPhone_Code: pPhone_Code.value,
					pPhone: pPhone.value
		};

		const response = await fetch(`https://api.antqtech.com/Woodball_Test/Account/UPlayer`, {
				method: "POST",
				 headers: {
					"Content-Type": "application/json",
          Authorization: $store.userToken,
				},
				body: JSON.stringify(requestBody),
			}
		);

				const data = await response.json();

				if (response.status === 401) {
            alert('請重新登入')
						$store.CLEAR_USER()
            router.push('/login')
        }
				if (data[0].state == "OK") {
				alert('個人資料修改成功')
				isSubmitDisabled.value = false
				} else {
					console.log(data[0].msg)
				}
		
	} catch (error) {
		console.error("Error fetching data:", error);
	}
		}
		
}

// 函数用于检查日期格式
function isValidDate(dateString) {
    // 去除日期中的非数字字符
    const formattedDate = dateString.replace(/[/\-]/g, '');
		  console.log('Original dateString:', dateString);
    console.log('Formatted dateString:', formattedDate);
// 		console.log('Formatted birthday:', formattedBirthday);
// console.log('isValidDate result:', isValidDate(formattedBirthday));

		
    if (formattedDate.length !== 8 && formattedDate.length !== 7 && formattedDate.length !== 6) {
		console.log(formattedDate)
		console.log('Invalid length:', formattedDate);
    return false;
    }else{
			console.log('長度OK')
		}

	 const regex = /^(19|20)\d\d[/\-]?([1-9]|0[1-9]|1[0-2])[/\-]?([1-9]|0[1-9]|[12][0-9]|3[01])$/;
    if (!regex.test(formattedDate)) {
        console.log('Regex failed:', formattedDate);
        return false;
    }else {
			console.log('格格式OK')
		}

		// 明确返回 true 表示驗證通過
    return true;
		
}


const getUserData = async()=>{
		try {
		const response = await fetch(
			`https://api.antqtech.com/Woodball_Test/Account/SPlayer`,
			{
				method: "POST",
				 headers: {
					"Content-Type": "application/json",
          Authorization: $store.userToken,
				}
			}
		);
		const data = await response.json();

		// 取得使用者的名字
		if (response.status === 200) {
			console.log(data[0])
			if (data[0].pAddress !== '') {
				pAddress.value = data[0].pAddress
			}
			if (data[0].pBirthday !== '') {
				pBirthday.value = data[0].pBirthday
			}
				if (data[0].pCountry !== '') {
				pCountry.value = data[0].pCountry
			}
			if(data[0].pGender !== ''){
				pGender.value = data[0].pGender
			}
			if(data[0].pName_En !== ''){
				pName_En.value = data[0].pName_En
			}
			if(data[0].pName_Zh !== ''){
				pName_Zh.value = data[0].pName_Zh 
			}
			if(data[0].pPhone_Code !== ''){
				pPhone_Code.value = data[0].pPhone_Code
			}
			if(data[0].pPhone !== ''){
				pPhone.value = data[0].pPhone
			}
			if(data[0].pid !== ''){
				email.value = data[0].pid
			}
			if($store.userPhoto) {
				avatarSrc.value =	$store.userPhoto
			}
			
			isUserDataFetched.value = true;
		}
		if (response.status === 401) {
            alert('請重新登入')
						$store.CLEAR_USER()
            router.push('/login')	``
    }
		// if (response.status !== 200) {
		// 	alert('請重新登入')
		// }
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}




// 监听点击事件以关闭菜单
onMounted(() => {
	getUserData()
});

</script>

<style>
.ease-custom {
	transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}

.filter {
	position: relative;
	z-index: 10;
	background: #253d4780;
}
.filter::before {
	content: "";
	width: 100vh;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(2px);
	position: absolute;
	top: 0;
	right: 0;
	z-index: -1;
}
</style>
