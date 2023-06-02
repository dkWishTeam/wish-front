<template>
  <div class="sidebar-wrapper">
    <SideBarComponent></SideBarComponent>
    <form @submit.prevent="updateUser">
      <div>
        <label for="userId">사용자 아이디</label>
        <input
          type="text"
          id="userId"
          v-model="user.userId"
          required
          placeholder="사용자 아이디를 입력해주세요"
          :style="
            userIdValidation !== null
              ? { borderColor: userIdValidation ? 'green' : 'red' }
              : ''
          "
        />
        <text
          :style="
            userIdValidation !== null
              ? { color: userIdValidation ? 'green' : 'red' }
              : ''
          "
          >{{ userIdMessage }}</text
        >
      </div>
      <div>
        <label for="password">비밀번호</label>
        <input
          type="password"
          id="password"
          v-model="user.password"
          placeholder="비밀번호를 입력해주세요"
          required
          :style="
            passwordValidation !== null
              ? { borderColor: passwordValidation ? 'green' : 'red' }
              : ''
          "
        />
        <text
          :style="
            passwordValidation !== null
              ? { color: passwordValidation ? 'green' : 'red' }
              : ''
          "
          >{{ passwordMessage }}</text
        >
      </div>
      <div>
        <label for="email">이메일</label>
        <input
          type="email"
          id="email"
          v-model="user.email"
          required
          placeholder="이메일을 입력해주세요"
          :style="
            emailValidation !== null
              ? { borderColor: emailValidation ? 'green' : 'red' }
              : ''
          "
        />
        <text
          :style="
            emailValidation !== null
              ? { color: emailValidation ? 'green' : 'red' }
              : ''
          "
          >{{ emailMessage }}</text
        >
      </div>
      <div>
        <label for="name">이름</label>
        <input
          type="text"
          id="name"
          v-model="user.name"
          required
          placeholder="이름 입력"
          :style="
            nameValidation !== null
              ? { borderColor: nameValidation ? 'green' : 'red' }
              : ''
          "
        />
        <text
          :style="
            nameValidation !== null
              ? { color: nameValidation ? 'green' : 'red' }
              : ''
          "
          >{{ nameMessage }}</text
        >
      </div>
      <div>
        <label for="birth">생년월일</label>
        <input
          type="date"
          id="birth"
          v-model="user.birth"
          required
          :style="
            birthValidation !== null
              ? { borderColor: birthValidation ? 'green' : 'red' }
              : ''
          "
        />
        <br />
        <text
          :style="
            birthValidation !== null
              ? { color: birthValidation ? 'green' : 'red' }
              : ''
          "
          >{{ birthMessage }}</text
        >
      </div>
      <div>
        <label for="phone">전화번호</label>
        <input
          type="text"
          id="phone"
          v-model="user.phone"
          placeholder="'-'빼고 숫자만입력"
          required
          :style="
            phoneValidation !== null
              ? { borderColor: phoneValidation ? 'green' : 'red' }
              : ''
          "
        />
        <text
          :style="
            phoneValidation !== null
              ? { color: phoneValidation ? 'green' : 'red' }
              : ''
          "
          >{{ phoneMessage }}</text
        >
      </div>
      <div>
        <label for="nickname">닉네임</label>
        <input
          type="text"
          id="nickname"
          v-model="user.nickname"
          placeholder="닉네임 입력"
          required
          :style="
            nicknameValidation !== null
              ? { borderColor: nicknameValidation ? 'green' : 'red' }
              : ''
          "
        />
        <text
          :style="
            nicknameValidation !== null
              ? { color: nicknameValidation ? 'green' : 'red' }
              : ''
          "
          >{{ nicknameMessage }}</text
        >
      </div>
      <input id="submitButton" type="submit" value="회원 정보 수정" />
      <UpdateUserSuccessPopUp
        v-if="showSuccessPopUp"
        @close="closeSuccessPopUp"
      />
    </form>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  watch,
  onBeforeMount,
  computed,
  onMounted,
} from "vue";
import axios from "axios";
import UpdateUserSuccessPopUp from "@/components/UpdateUserSuccessPopUp";
import SideBarComponent from "@/components/common/SideBarComponent";

export default defineComponent({
  components: {
    SideBarComponent,
    UpdateUserSuccessPopUp,
  },
  setup() {
    const user = ref({
      id: "",
      userId: "",
      password: " ",
      email: "",
      name: "",
      birth: "",
      phone: "",
      nickname: "",
    });
    const originUser = ref({
      id: "",
      userId: "",
      password: "",
      email: "",
      name: "",
      birth: "",
      phone: "",
      nickname: "",
    });
    const userId = computed(() => user.value.userId);
    const password = computed(() => user.value.password);
    const email = computed(() => user.value.email);
    const name = computed(() => user.value.name);
    const birth = computed(() => user.value.birth);
    const phone = computed(() => user.value.phone);
    const nickname = computed(() => user.value.nickname);

    const userIdValidation = ref(null);
    const userIdMessage = ref("");
    const passwordValidation = ref(null);
    const passwordMessage = ref("");
    const emailValidation = ref(null);
    const emailMessage = ref("");
    const nameValidation = ref(null);
    const nameMessage = ref(null);
    const birthValidation = ref(null);
    const birthMessage = ref(null);
    const phoneValidation = ref(null);
    const phoneMessage = ref("");
    const nicknameValidation = ref(null);
    const nicknameMessage = ref("");

    const showSuccessPopUp = ref(false);

    onBeforeMount(async () => {
      function extractDate(user) {
        user.value.birth = user.value.birth.split("T")[0];
      }

      try {
        const response = await axios.get("http://localhost:8090/users/" + 1); // API 경로는 실제 서버에 맞게 변경해 주세요.
        //todo 서버에서 받은 회원의 id 를 알아내서 path에 적기
        user.value = response.data;
        originUser.value = response.data;
        extractDate(user);
        extractDate(originUser);
        console.log(user.value);
      } catch (error) {
        console.error("데이터 불러오기 에러:", error);
      }
    });

    onMounted(() => {
      watch(userId, async (newUserId) => {
        if (typeof newUserId !== "string") {
          return;
        }
        if (newUserId.trim() === "") {
          userIdMessage.value = "아이디를 입력해주세요.";
          userIdValidation.value = false;
        } else if (newUserId.length < 4 || newUserId.length > 20) {
          userIdMessage.value = "아이디는 4자 이상 20자 이하여야합니다.";
          userIdValidation.value = false;
        } else if (!/^[a-zA-Z0-9]+$/.test(newUserId)) {
          userIdMessage.value = "아이디는 영문자와 숫자만 사용할 수 있습니다.";
          userIdValidation.value = false;
        } else {
          try {
            if (newUserId === originUser.value.userId) {
              userIdMessage.value = "현재 아이디와 동일합니다.";
              userIdValidation.value = true;
              return;
            }
            const response = await axios.get(
              "http://localhost:8090/users/userid-duplicate-check?userId=" +
                newUserId
            );
            if (response.data) {
              userIdMessage.value = "사용 가능한 ID 입니다.";
              userIdValidation.value = true;
            } else {
              userIdMessage.value = "이미 사용 중인 ID입니다.";
              userIdValidation.value = false;
            }
          } catch (error) {
            console.error("아이디 중복 체크 에러:", error);
          }
        }
      });
      watch(password, async (newPassword) => {
        if (typeof newPassword !== "string") {
          return;
        }
        if (newPassword.trim() === "") {
          passwordMessage.value = "비밀번호를 입력해주세요.";
          passwordValidation.value = false;
        } else if (newPassword.length < 4 || newPassword.length > 20) {
          passwordMessage.value = "비밀번호는 4자 이상 20자 이하여야합니다.";
          passwordValidation.value = false;
        } else {
          passwordMessage.value = "사용 가능한 비밀번호입니다.";
          passwordValidation.value = true;
        }
      });
      watch(email, async (newEmail) => {
        if (typeof newEmail !== "string") {
          return;
        }
        if (newEmail.trim() === "") {
          emailMessage.value = "이메일을 입력해주세요.";
          emailValidation.value = false;
        } else if (
          !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(newEmail)
        ) {
          emailMessage.value =
            "잘못된 이메일 주소입니다. 이메일 주소를 정확하게 입력해주세요.";
          emailValidation.value = false;
        } else {
          try {
            if (newEmail === originUser.value.email) {
              emailMessage.value = "현재 이메일과 동일합니다.";
              emailValidation.value = true;
              return;
            }
            const response = await axios.get(
              "http://localhost:8090/users/email-duplicate-check?email=" +
                newEmail
            );
            if (response.data) {
              emailMessage.value = "사용 가능한 Email 입니다.";
              emailValidation.value = true;
            } else {
              emailMessage.value = "이미 사용 중인 Email 입니다.";
              emailValidation.value = false;
            }
          } catch (error) {
            console.error("아이디 중복 체크 에러:", error);
          }
        }
      });
      watch(nickname, async (newNickname) => {
        if (typeof newNickname !== "string") {
          return;
        }
        if (newNickname.trim() === "") {
          nicknameMessage.value = "닉네임을 입력해주세요.";
          nicknameValidation.value = false;
        } else if (newNickname.length < 2 || newNickname.length > 10) {
          nicknameMessage.value = "닉네임은 2~10 글자 사이어야 합니다.";
          nicknameValidation.value = false;
        } else {
          try {
            if (newNickname === originUser.value.nickname) {
              nicknameMessage.value = "현재 닉네임과 동일합니다.";
              nicknameValidation.value = true;
              return;
            }
            const response = await axios.get(
              "http://localhost:8090/users/nickname-duplicate-check?nickname=" +
                newNickname
            );
            if (response.data) {
              nicknameMessage.value = "사용 가능한 닉네임 입니다.";
              nicknameValidation.value = true;
            } else {
              nicknameMessage.value = "이미 사용 중인 닉네임 입니다.";
              nicknameValidation.value = false;
            }
          } catch (error) {
            console.error("닉네임 중복 체크 에러:", error);
          }
        }
      });
      watch(name, async (newName) => {
        if (typeof newName !== "string") {
          return;
        }
        if (newName.trim() === "") {
          nameMessage.value = "이름을 입력해주세요.";
          nameValidation.value = false;
        } else if (newName.length < 2 || newName.length > 10) {
          nameMessage.value = "이름은 2~10 글자 사이어야 합니다.";
          nameValidation.value = false;
        } else {
          nameMessage.value = "사용 가능한 이름 입니다.";
          nameValidation.value = true;
        }
      });
      watch(birth, async (newBirth) => {
        if (typeof newBirth !== "string") {
          return;
        }
        if (newBirth.trim() === "") {
          birthMessage.value = "생년월일을 입력해주세요.";
          birthValidation.value = false;
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(newBirth)) {
          birthMessage.value = "올바른 생년월일 형식을 입력해주세요.";
          birthValidation.value = false;
        } else if (new Date() < new Date(newBirth)) {
          birthMessage.value = "태어나지 않은 회원은 가입할 수 없습니다.";
          birthValidation.value = false;
        } else {
          birthMessage.value = "올바른 생년월일 입니다.";
          birthValidation.value = true;
        }
      });
      watch(phone, async (newPhone) => {
        if (typeof newPhone !== "string") {
          return;
        }
        if (newPhone.trim() === "") {
          phoneMessage.value = "휴대폰 번호를 입력해주세요.";
          phoneValidation.value = false;
        } else if (!/^\d{11}$/.test(newPhone)) {
          phoneMessage.value =
            "잘못된 휴대폰 번호입니다. 휴대폰 번호를 정확하게 입력해주세요.";
          phoneValidation.value = false;
        } else {
          try {
            if (newPhone === originUser.value.phone) {
              phoneMessage.value = "현재 휴대폰 번호와 동일합니다.";
              phoneValidation.value = true;
              return;
            }
            const response = await axios.get(
              "http://localhost:8090/users/phone-duplicate-check?phone=" +
                newPhone
            );
            if (response.data) {
              phoneMessage.value = "사용 가능한 휴대폰 번호 입니다.";
              phoneValidation.value = true;
            } else {
              phoneMessage.value = "이미 사용 중인 휴대폰 번호 입니다.";
              phoneValidation.value = false;
            }
          } catch (error) {
            console.error("아이디 중복 체크 에러:", error);
          }
        }
      });
    });
    const updateUser = async () => {
      try {
        console.log(user);
        let response = await axios.put(
          "http://localhost:8090/users/" + user.value.id,
          user.value
        );
        console.log(response);
        if (response.status === 200) {
          showSuccessPopUp.value = true;
        } else {
          // 회원 가입 실패 시 처리할 로직 추가
          console.error("회원 가입 실패");
        }
      } catch (error) {
        console.error("회원 가입 에러:", error);
      }
    };
    const closeSuccessPopUp = () => {
      showSuccessPopUp.value = false;
    };
    return {
      user,
      userIdMessage,
      passwordMessage,
      emailMessage,
      nicknameMessage,
      nameMessage,
      birthMessage,
      phoneMessage,
      userIdValidation,
      passwordValidation,
      emailValidation,
      nicknameValidation,
      nameValidation,
      birthValidation,
      phoneValidation,
      updateUser,
      showSuccessPopUp,
      closeSuccessPopUp,
    };
  },
});
</script>
<style scoped>
form {
  font-family: Arial, sans-serif;
}

h2 {
  color: #333;
}

form {
  max-width: 350px;
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 10%;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="tel"],
input[type="datetime-local"],
input[type="checkbox"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 3px;
}

input[type="submit"] {
  margin-top: 20px;
  background-color: #1976d2;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

label {
  padding-top: 20px;
}

input[type="submit"]:hover {
  background-color: #0764c0;
  width: 100%;
}
.sidebar-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
