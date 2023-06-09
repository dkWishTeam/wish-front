<template>
  <header class="w-full fixed z-50 border-b-2 min-w-max">
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
              <a
                @click="generateUserWishLink"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                마이 위시
              </a>
            </li>
            <li>
              <a
                href="/wishPlace"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >위시 플레이스
              </a>
            </li>
          </ul>
        </div>

        <div class="flex items-end items-center lg:order-2">
          <div v-if="token" class="flex">
            <a
              v-if="isLogin != null"
              href="/myPage"
              class="hidden md:flex text-white bg-primary hover:bg-primary_hover focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >마이페이지</a
            >
            <a
              v-if="isLogin != null"
              @click="logout"
              class="hidden md:flex text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >로그아웃</a
            >
          </div>
          <div v-else class="flex">
            <a
              v-if="isLogin == null"
              href="/signUp"
              class="hidden md:flex text-white bg-primary hover:bg-primary_hover focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >회원가입</a
            >
            <a
              v-if="isLogin == null"
              href="/login"
              class="hidden md:flex text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >로그인</a
            >
          </div>
          <div class="w-6 h-6 mx-8 lg:hidden">
            <button type="button" @click="sidebarHandler">
              <img src="/images/bar.png" alt="bar_menu" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <aside
    :class="sidebarOpen ? 'block' : 'hidden'"
    class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto bg-gray-300 transition-transform"
  >
    <div class="mt-16 item-center">
      <span
        id="drawer-navigation-label"
        class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Menu
      </span>
      <button
        type="button"
        @click="sidebarHandler"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="mt-16 text-gray-400 bg-transparent hover:bg-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
    </div>

    <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li>
          <a
            @click="generateUserWishLink"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">마이 위시</span>
          </a>
        </li>

        <li>
          <a
            href="/wishPlace"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">위시 플레이스</span>
          </a>
        </li>

        <li v-if="isLogin != null">
          <a
            href="/myPage"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">마이페이지</span>
          </a>
        </li>

        <li v-if="isLogin == null">
          <a
            href="/login"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">로그인</span>
          </a>
        </li>
        <li v-if="isLogin == null">
          <a
            href="signUp"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">회원가입</span>
          </a>
        </li>
        <li v-if="isLogin != null">
          <a
            @click="logout"
            class="flex items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
              ></path>
              <path
                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">로그아웃</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { userLogout } from "@/services/requestHandler";
import { onMounted, ref } from "vue";
import router from "@/router";

const token = ref("");

const getToken = () => {
  token.value = localStorage.getItem("jwt");
};

const isLogin = localStorage.getItem("userId");
const sidebarOpen = ref(false);

const id = ref(localStorage.getItem("id"));

function generateUserWishLink() {
  if (id.value !== null) {
    router.push({
      name: "UserWishMainView",
      params: { id: id.value },
    });
  } else {
    alert("로그인을 해주세요.");
    router.push({
      name: "login",
    });
  }
}

const sidebarHandler = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const logout = async () => {
  try {
    const response = await userLogout();
    console.log(response);
    localStorage.clear();
    token.value = null;
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
};

onMounted(getToken);
</script>
