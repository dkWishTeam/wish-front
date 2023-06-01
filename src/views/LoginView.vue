<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <h1
        class="flex items-center mb-6 text-5xl font-semibold text-gray-900 dark:text-white"
      >
        Welcome Wi$h!
      </h1>
      <h2
        class="flex items-center mb-6 text-2l font-semibold text-gray-700 dark:text-white"
      >
        Wish와 함께 꿈을 이루어나가보세요!
      </h2>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          ></h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="loginSubmit">
            <div>
              <label
                for="userId"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >아이디</label
              >
              <input
                type="text"
                name="userId"
                id="userId"
                v-model="userId"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="id"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >비밀번호</label
              >
              <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    name="remember"
                    v-model="rememberCheck"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >아이디 기억하기</label
                  >
                </div>
              </div>
              <!--            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">비밀번호 찾기</a>-->
            </div>
            <div class="text-sm text-red-500 dark:text-gray-300">
              {{ loginMsg }}
            </div>

            <button
              type="submit"
              class="w-full text-white bg-primary hover:bg-primary_hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              로그인
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              계정이 없으신가요?
              <a
                class="font-medium text-primary hover:underline dark:text-primary-500"
                >회원가입</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { BASE_URL } from "@/services/requestHandler";
import axios from "axios";
//import router from "@/router";

const rememberCheck = ref(false);

const userId = ref("");
const password = ref("");
const loginMsg = ref("");

// onMounted(async () => {
//   const rememberId = await axios.get(BASE_URL + "/loginId");
//   userId.value = rememberId.data;
// });

const loginSubmit = async () => {
  const user = {
    userId: userId.value,
    password: password.value,
  };

  try {
    const response = await axios.post(BASE_URL + "/login", user);
    if (response.status === 200) {
      // 로그인 성공 시 처리
      if (response.data === "loginSuccess") {
        console.log(response);
        const cookie = response.headers["Set-Cookie"];
        console.log(cookie);
        //router.push({ path: "/" });
      } else {
        loginMsg.value = response.data;
      }
    } else {
      // 응답 상태 코드가 200이 아닌 경우 처리
      console.log(response.statusText);
    }
  } catch (error) {
    // 요청 실패 처리
    console.log(error);
  }
};
</script>
