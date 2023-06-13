<template>
  <div class="sidebar-wrapper">
    <SideBarComponent></SideBarComponent>

    <div class="relative pt-14 shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">닉네임</th>
            <th scope="col" class="px-6 py-3">블락여부</th>
            <th scope="col" class="px-6 py-3">블락하기</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(user, i) in users"
            :key="i"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="pl-3 text-base font-semibold">
                {{ user.nickname }}
              </div>
            </th>

            <td class="px-6 py-4">
              <div class="flex items-center">
                <div
                  v-if="user.block"
                  class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"
                ></div>
                <div
                  v-else
                  class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"
                ></div>
                {{ user.block ? "블락됨" : "블락안됨" }}
              </div>
            </td>
            <td class="px-6 py-4">
              <!-- Modal toggle -->
              <a
                @click.prevent="changeBlockStatus(user.id, i)"
                type="button"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >변경</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, inject } from "vue";
import SideBarComponent from "@/components/common/SideBarComponent";
import { getUsersByAdmin, updateBlockStatus } from "@/services/requestHandler";

export default defineComponent({
  components: {
    SideBarComponent,
  },
  setup() {
    const users = ref([]);

    const toastr = inject("toastr");

    const getUsers = async () => {
      const response = await getUsersByAdmin();
      users.value = response;
    };

    const changeBlockStatus = async (id, index) => {
      const response = await updateBlockStatus(id);

      users.value[index].block = response.userBlocked;
      if (!response.updated) {
        toastr.error("관리자 계정은 블락할 수 없습니다");
      } else if (response.userBlocked) {
        toastr.success("블락되었습니다.");
      } else if (!response.userBlocked) {
        toastr.success("블락이 해제되었습니다.");
      }
    };

    onMounted(getUsers);

    return { users, changeBlockStatus };
  },
});
</script>

<style scoped>
.sidebar-wrapper {
  display: flex; /* this will make the children side by side */
  width: 100%;
}

.relative {
  flex: 1; /* this will make the children take equal width */
}
</style>
