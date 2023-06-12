<template>
  <article class="text-center pt-20 pb-10 bg-articleColor">
    <h1
      class="text-center mt-32 mb-10 font-bold leading-none tracking-tight text-gray-900 text-8xl"
    >
      <span class="title3">We</span>
      <span class="title2"> wish your</span>
      <span class="text-blue-600 whitespace-nowrap relative z-10">
        <span class="title1"> wishes</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 418 42"
          class="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70 z-[-10]"
          preserveAspectRatio="none"
        >
          <path
            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
          ></path>
        </svg>
      </span>
    </h1>
    <p
      class="title4 mb-10 mt-6 text-lg font-normal text-gray-600 tracking-tight text-slate-700"
    >
      당신의 소망을 이루는 첫 걸음, Wish와 함께하세요 <br />당신이 원하는 물건을
      구매할 수 있게 도와주며 다른 이들의 위시 내역을 보며 자극을 받을 수
      있습니다. <br />지금 Wish와 함께 꿈을 이루어나가보세요!
    </p>

    <div class="relative inline-flex justify-center mt-7">
      <a
        href="/WishCreate"
        class="relative inline-flex justify-center shadow items-center px-16 py-2 text-base text-lg text-slate-700 text-center bg-white text-gray-600 ring-1 rounded-full transition ease-in-out hover:bg-primary hover:text-white focus:ring-4 focus:ring-blue-300"
      >
        등록하기
      </a>
      <span class="absolute top-0 right-0 flex -mt-1 -mr-1 h-3.5 w-3.5">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
        ></span>
        <span
          class="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500"
        ></span>
      </span>
    </div>
  </article>
</template>

<script setup></script>
<style scoped>
.title1 {
  animation: titleMove1 2s 0.3s both;
}

.title2 {
  animation: titleMove1 2s 0.6s both;
}

.title3 {
  animation: titleMove1 2s 0.9s both;
}

.title4 {
  animation: titleMove2 2s 2s both;
}

@keyframes titleMove1 {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes titleMove2 {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
