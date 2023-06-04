<template>
  <div
    v-if="showModal"
    id="wishHistoryModal"
    class="w-full h-full fixed left-0 top-0 z-50 bg-gray-700 bg-opacity-60 animate-zoom"
  >
    <div class="flex justify-center items-center h-full">
      <div class="content w-2/6 m-auto bg-white rounded-lg px-6 py-12 lg:px-8">
        <span
          @click="cancel"
          id="createCloseBtn"
          class="fixed top-10 right-10 fixed justify-center items-center text-white text-3xl font-bold cursor-pointer"
          >&times;</span
        >
        <h2
          class="font-semibold text-xl pb-4 text-gray-800 w-full border-b-2 border-gray-20"
        >
          {{ modalMode === "modify" ? "위시수정하기" : "위시기록하기" }}
        </h2>
        <br />
        <div class="mb-5 mt-3">
          <label
            for="cteDatetime"
            class="mb-2 text-sm font-medium text-gray-700 mb-1"
            >기록 날
          </label>

          <input
            :value="
              modalMode === 'modify'
                ? modify.historyDatetime
                : register.historyDatetime
            "
            @input="
              modalMode === 'modify'
                ? (modify.historyDatetime = $event.target.value)
                : (register.historyDatetime = $event.target.value)
            "
            type="date"
            name="historyDatetime"
            id="cteDatetime"
            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3 dark:border-gray-500 dark:placeholder-gray-400"
          />
        </div>
        <div class="mb-8">
          <label
            for="createAmount"
            class="mb-2 text-sm font-medium text-gray-700 mb-1"
            >넣을 금액
          </label>
          <input
            :value="modalMode === 'modify' ? modify.amount : register.amount"
            @input="
              modalMode === 'modify'
                ? (modify.amount = $event.target.value)
                : (register.amount = $event.target.value)
            "
            type="text"
            name="amount"
            id="createAmount"
            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3 dark:border-gray-500 dark:placeholder-gray-400"
          />
        </div>
        <div class="w-ful l flex justify-center flex-wrap px-5">
          <input
            @click="submit"
            type="submit"
            :value="modalMode === 'modify' ? '수정하기' : '기록하기'"
            class="mr-3 w-1/4 text-center text-white font-medium py-2 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700"
          />
          <input
            @click="cancel"
            type="reset"
            value="취소하기"
            class="cancelBtn ml-3 w-1/4 text-center font-medium py-2 rounded-lg cursor-pointer border border-gray-200 hover:text-gray-700 hover:bg-gray-100 hover:border-gray-300 focus:border-gray-400"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useRouter } from "vue-router";
import { modalStore } from "@/store/modal";
import {
  updateWishHistory,
  wishHistoryRegister,
} from "@/services/requestHandler";
import { computed, defineProps, ref } from "vue";
import { wishHistoryInfoStore } from "@/store/wishHistoryInfo";
// const router = useRouter();
const props = defineProps({
  wishId: Number,
});

const modal = modalStore();
const showModal = computed(() => modal.getShowModal);
const modalMode = computed(() => modal.getModalMode);

const register = ref({
  wishId: props.wishId,
  historyDatetime: "",
  amount: "",
});

const modify = ref({
  wishId: props.wishId,
  id: modal.getUpdateId,
  historyDatetime: "",
  amount: "",
});

const cancel = () => {
  modal.closeModal();
};

const init = async () => {
  const store = wishHistoryInfoStore();
  await store.fetchData(props.wishId);
  const storeResult = store.result;
  console.log("result: ", storeResult);
};

const submit = async () => {
  if (modalMode.value === "register") {
    console.log("등록이다!!!!!!!!!!!!!!!");
    console.log("register: ", register.value);
    await wishHistoryRegister(register.value);
  } else if (modalMode.value === "modify") {
    modify.value.id = modal.getUpdateId;
    console.log("수정이다!!!!!!!!!!!!!!!");
    console.log("modify: ", modify.value);
    console.log(modal.getUpdateId);
    await updateWishHistory(modify.value);
  }

  setTimeout(() => {
    modal.closeModal();
    init();
  }, 200);
};
</script>
