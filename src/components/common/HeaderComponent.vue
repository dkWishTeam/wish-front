<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <a href="/" class="flex items-center flex-shrink-0">
          <img
            src="/images/wishLogo-color.png"
            class="mr-3 h-6 sm:h-9"
            alt="wish Logo"
          />
        </a>

        <div
          class="hidden ml-20 flex-grow items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col mt-4font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <router-link
                :to="{
                  name: 'UserWishMainView',
                  params: { id: 1 },
                }"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                마이 위시
              </router-link>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >위시 플레이스</a
              >
            </li>
          </ul>
        </div>

        <div class="flex items-end items-center lg:order-2">
          <a
            v-if="isLogin == null"
            href="/signUp"
            class="text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >회원가입</a
          >
          <a
            v-if="isLogin != null"
            href="/myPage"
            class="text-white bg-primary hover:bg-primary_hover focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >마이페이지</a
          >
          <a
            v-if="isLogin == null"
            href="/login"
            class="text-gray-800 dark:text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >로그인</a
          >
          <a
            v-if="isLogin != null"
            @click="logout"
            class="text-gray-800 dark:text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >로그아웃</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { userLogout } from "@/services/requestHandler";

const isLogin = localStorage.getItem("userId");

const logout = async () => {
  try {
    const response = await userLogout();
    console.log(response);
    localStorage.clear();
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
};
</script>
