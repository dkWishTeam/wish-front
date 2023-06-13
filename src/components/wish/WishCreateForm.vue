<template>
  <div class="w-full">
    <div class="mx-auto">
      <article class="p-20 my-16">
        <h1
          class="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
        >
          위시 등록하기
        </h1>
        <p
          class="text-center mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          당신의 위시를 실현하는 첫걸음 이에요!
        </p>
      </article>

      <section class="max-w-6xl mx-auto">
        <form
          @submit="submitForm"
          class="w-full"
          method="post"
          enctype="multipart/form-data"
        >
          <input type="hidden" name="userId" v-model="inputValue[0]" />
          <hr class="w-full my-6" />

          <div class="w-full flex">
            <div id="image-flex-container" class="w-1/2">
              <div
                id="image-container"
                class="relative w-full h-0 pb-[100%] bg-white border border-gray-200 rounded-lg"
              >
                <img
                  class="absolute inset-0 w-full h-full object-scale-down rounded-lg"
                  id="upload-image-preview"
                  :src="imagePreview"
                  alt="imagePreview"
                />
              </div>
            </div>
            <div
              id="wishContent-container"
              class="w-1/2 flex-col justify-between flex-none overflow-hidden block"
            >
              <div
                class="w-full my-8 items-center flex justify-end"
                id="input-isPublic-container"
              >
                <input
                  type="checkbox"
                  v-model="inputValue[2]"
                  class="drop-shadow-xl"
                  id="isPublicToggle"
                  hidden
                  name="isPublic"
                  @click="toggleChecked"
                  checked
                />
                <label for="isPublicToggle" id="toggleSwitch">
                  <span id="toggleButton"></span>
                </label>
              </div>
              <div class="w-full my-8 flex justify-between">
                <label
                  for="wish-title"
                  class="w-2/12 ml-7 flex justify-start items-center text-lg text-gray-900"
                  >위시 제목</label
                >
                <div class="w-9/12">
                  <input
                    v-model="inputValue[3]"
                    @blur="inputValidator('title', inputValue[3])"
                    type="text"
                    placeholder="위시의 제목을 입력해주세요"
                    class="w-full bg-slate-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    id="wish-title"
                    name="title"
                    required
                  />
                  <p v-if="inputTitleErrorMsg" class="9/12 text-red-600">
                    {{ inputTitleErrorMsg }}
                  </p>
                </div>
              </div>

              <div class="w-full my-8 flex justify-between">
                <label
                  for="product-name"
                  class="w-2/12 ml-7 flex justify-start items-center text-lg font-medium text-gray-900"
                  >상품 이름</label
                >
                <div class="w-9/12">
                  <input
                    v-model="inputValue[4]"
                    @blur="inputValidator('productName', inputValue[4])"
                    type="text"
                    placeholder="상품 이름을 자유롭게 작성해 주세요."
                    class="w-full bg-slate-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    id="product-name"
                    name="productName"
                    required
                  />
                  <p v-if="inputProductNameErrorMsg" class="9/12 text-red-600">
                    {{ inputProductNameErrorMsg }}
                  </p>
                </div>
              </div>

              <div class="w-full my-8 flex justify-between">
                <label
                  for="goal-amount"
                  class="w-2/12 ml-7 flex justify-start items-center text-lg font-medium text-gray-900"
                  >목표 금액</label
                >
                <div class="w-9/12">
                  <input
                    v-model="inputValue[5]"
                    @blur="inputValidator('goalAmount', inputValue[5])"
                    type="number"
                    placeholder="목표 금액을 입력해 주세요. ex) 2200000원"
                    class="w-full bg-slate-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    id="goal-amount"
                    name="goalAmount"
                    required
                  />
                  <p v-if="inputGoalAmountErrorMsg" class="9/12 text-red-600">
                    {{ inputGoalAmountErrorMsg }}
                  </p>
                </div>
              </div>

              <div class="w-full my-8 flex justify-between">
                <label
                  for="goal-date"
                  class="w-2/12 ml-7 flex justify-start items-center text-lg font-medium text-gray-900"
                  >목표 날짜</label
                >
                <div class="w-9/12">
                  <input
                    v-model="inputValue[6]"
                    @blur="inputValidator('goalDate', inputValue[6])"
                    type="date"
                    placeholder="년. 월. 일"
                    class="w-full bg-slate-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    id="goal-date"
                    name="goalDate"
                    required
                  />
                  <p v-if="inputGoalDateErrorMsg" class="9/12 text-red-600">
                    {{ inputGoalDateErrorMsg }}
                  </p>
                </div>
              </div>

              <div class="w-full my-8 flex justify-between">
                <label
                  for="image-input"
                  class="w-2/12 ml-7 flex justify-start items-center rounded-lg text-lg font-medium text-gray-900"
                  >이미지등록</label
                >
                <div class="w-9/12 flex justify-between">
                  <input
                    @change="uploadImage"
                    ref="inputImage"
                    class="w-8/12 text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-slate-200 focus:outline-none"
                    id="image-input"
                    type="file"
                    name="imageFile"
                    accept="image/jpeg, image/png"
                    :style="{ color: '#999999' }"
                  />
                  <button
                    @click="deleteImage"
                    type="button"
                    class="w-3/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2focus:outline-none"
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="my-4">
            <label
              for="wish-content"
              class="my-3 block text-lg font-medium text-gray-900"
              >위시 내용</label
            >
            <textarea
              placeholder="위시의 내용을 간략하게 작성해 주세요✏️"
              class="bg-slate-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-4 w-full h-52 resize-none"
              id="wish-content"
              name="content"
              v-model="inputValue[7]"
            ></textarea>
          </div>

          <div
            class="items-center justify-center flex my-20"
            id="button-container"
          >
            <button
              type="submit"
              class="mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center"
              id="submit-button"
            >
              등록하기
            </button>
            <button
              type="reset"
              class="text-white bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-base px-7 py-3.5 text-center"
              id="reset-button"
            >
              돌아가기
            </button>
          </div>
          <input type="hidden" name="completionStatus" value="false" />
        </form>
      </section>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import defaultImage from "@/images/default.png";
import { createWish } from "@/services/requestHandler";
import router from "@/router";

//[0] = id
//[1] = userId
//[2] = isPublic
//[3] = title
//[4] = productName
//[5] = goalAmount
//[6] = goalDate
//[7] = content
//[8] = completionStatus
//[9] = image
const inputValue = ref([
  0,
  localStorage.getItem("id"),
  true,
  "",
  "",
  "",
  "",
  "",
  false,
  "",
]);
const file = ref({});

const toggleChecked = () => {
  inputValue.value[2] = !inputValue.value[2];
  if (inputValue.value[2] === 1) {
    inputValue.value[2] = 0;
  } else if (inputValue.value[1] === 0) {
    inputValue.value[2] = 1;
  }
  console.log(inputValue.value[2]);
};

const imagePreview = ref(defaultImage);
const uploadImage = (event) => {
  file.value = event.target.files[0];
  let uploadedImage = event.target;
  let reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.value = e.target.result;
  };
  reader.readAsDataURL(uploadedImage.files[0]);
  inputValue.value[9] = file.value;
};

const deleteImage = (event) => {
  inputValue.value[9] = null;
};

const submitForm = async (event) => {
  event.preventDefault();
  const formData = new FormData();

  formData.append("imageFile", file.value);
  const json = JSON.stringify({
    id: inputValue.value[0],
    userId: inputValue.value[1],
    publicStatus: inputValue.value[2],
    title: inputValue.value[3],
    productName: inputValue.value[4],
    goalAmount: inputValue.value[5],
    goalDate: inputValue.value[6],
    content: inputValue.value[7],
    completionStatus: inputValue.value[8],
    // image: "",
  });
  const blob = new Blob([json], { type: "application/json" });
  formData.append("wishRequestDto", blob);
  const createdId = ref();

  try {
    createdId.value = await createWish(localStorage.getItem("id"), formData);
  } catch (error) {
    console.log(error);
  }
  await router.push({
    name: "wishHistory",
    params: {
      wishId: createdId.value,
    },
  });
};

// error 메세지 생성 로직
let inputTitleErrorMsg = ref("");
const inputProductNameErrorMsg = ref("");
const inputGoalAmountErrorMsg = ref("");
const inputGoalDateErrorMsg = ref("");

function inputValidator(content, value) {
  if (content === "title") {
    createErrorMsg(inputTitleErrorMsg, "제목", value);
  } else if (content === "productName") {
    createErrorMsg(inputProductNameErrorMsg, "상품 이름", value);
  } else if (content === "goalAmount") {
    goalAmountErrorMsg(inputGoalAmountErrorMsg, value);
  } else if (content === "goalDate") {
    goalDateErrorMsg(inputGoalDateErrorMsg, value);
  }
}

function createErrorMsg(error, content, value) {
  if (value.length === 0) {
    error.value = emptyValueMsg(content);
  } else if (value.length > 80) {
    error.value = maximumLength(content);
  } else {
    error.value = "";
  }
}

function emptyValueMsg(content) {
  return `한글자 이상의 ${content}을 입력해주세요.`;
}

function maximumLength(content) {
  return `${content}는 최대 80자 까지 입력가능합니다.`;
}

function goalAmountErrorMsg(error, value) {
  if (value < 0) {
    error.value = "유효하지 않은 값입니다.";
  } else if (value === 0) {
    error.value = "0 이상의 금액을 입력해주세요.";
  } else if (value === "") {
    error.value = "금액을 입력해주세요";
  } else {
    error.value = "";
  }
}

function goalDateErrorMsg(error, value) {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  if (new Date(value) <= new Date(formattedDate)) {
    error.value = "현재 날짜보다 이전 날짜는 입력할 수 없습니다.";
  } else {
    error.value = "";
  }
}

// const result = get(url.createWish(17));
</script>
<style scoped>
#image-preview-container {
  width: 150px;
}

#upload-image-preview {
  width: 100%;
}

#image-input {
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 78%;
  color: #999999;
}

#input-image-container label {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
}

#input-image-container input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* 토글 스위치 start */
#toggleSwitch {
  width: 150px;
  height: 40px;
  display: block;
  position: relative;
  border-radius: 5px;
  background-color: gray;
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
}

#toggleSwitch #toggleButton {
  width: 70px;
  height: 32px;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  border-radius: 5px;
  background: white;
}

#toggleSwitch:after,
#toggleSwitch:before {
  text-align: center;
  position: absolute;
  font-size: 17px;
  color: white;
  font-weight: bold;
  line-height: 20px;
  top: 25%;
}

#toggleSwitch:before {
  left: 15%;
  content: "공개";
}

#toggleSwitch:after {
  right: 10%;
  content: "비공개";
}

#isPublicToggle:checked ~ #toggleSwitch {
  background: #0061f2;
}

#isPublicToggle:checked ~ #toggleSwitch #toggleButton {
  left: calc(50%);
  background: #fff;
}

#toggleSwitch,
#toggleButton {
  transition: all 0.2s ease-in;
}

/* 토글 스위치 end */

#isPublicCheckbox:checked + label {
  background-color: #0061f2;
}

#isPublicCheckbox:checked + label span {
  transform: translateX(26px);
}

#input-goal-date::before {
  content: attr(date-placeholder);
}
</style>
