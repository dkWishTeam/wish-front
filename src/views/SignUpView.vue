<template>
  <form @submit.prevent="register" class="w-full">
    <div>
      <label for="userId">사용자 아이디</label>
      <input
        type="text"
        id="userId"
        v-model="userId"
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
        v-model="password"
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
        v-model="email"
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
        v-model="name"
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
        v-model="birth"
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
        v-model="phone"
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
        v-model="nickname"
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
    <input id="submitButton" type="submit" value="가입하기" />
    <SignUpSuccessPopUp
      v-if="showSuccessPopUp"
      @close="closeSuccessPopUp"
      @login="closeSuccessPopUpAndGoToLogin"
    />
  </form>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { navigateToHome, navigateToLogin } from "@/router";
import SignUpSuccessPopUp from "@/components/SignUpSuccessPopUp";
import {
  checkEmail,
  checkNickname,
  checkPhone,
  checkUserId,
  userSignUp,
} from "@/services/requestHandler";

export default defineComponent({
  components: {
    SignUpSuccessPopUp,
  },
  setup() {
    const userIdValidation = ref(null);
    const userId = ref("");
    const userIdMessage = ref("");
    const passwordValidation = ref(null);
    const password = ref("");
    const passwordMessage = ref("");
    const emailValidation = ref(null);
    const email = ref("");
    const emailMessage = ref("");
    const nameValidation = ref(null);
    const name = ref("");
    const nameMessage = ref(null);
    const birthValidation = ref(null);
    const birth = ref("");
    const birthMessage = ref(null);
    const phoneValidation = ref(null);
    const phone = ref("");
    const phoneMessage = ref("");
    const nicknameValidation = ref(null);
    const nickname = ref("");
    const nicknameMessage = ref("");

    const showSuccessPopUp = ref(false);

    watch(userId, async (newUserId) => {
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
          const response = await checkUserId(newUserId);

          if (response) {
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
          const response = await checkEmail(newEmail);
          if (response) {
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
      if (newNickname.trim() === "") {
        nicknameMessage.value = "닉네임을 입력해주세요.";
        nicknameValidation.value = false;
      } else if (newNickname.length < 2 || newNickname.length > 10) {
        nicknameMessage.value = "닉네임은 2~10 글자 사이어야 합니다.";
        nicknameValidation.value = false;
      } else {
        try {
          const response = await checkNickname(newNickname);
          if (response) {
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
      if (newPhone.trim() === "") {
        phoneMessage.value = "휴대폰 번호를 입력해주세요.";
        phoneValidation.value = false;
      } else if (!/^\d{11}$/.test(newPhone)) {
        phoneMessage.value =
          "잘못된 휴대폰 번호입니다. 휴대폰 번호를 정확하게 입력해주세요.";
        phoneValidation.value = false;
      } else {
        try {
          const response = await checkPhone(newPhone);
          if (response) {
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
    const register = async () => {
      const user = {
        userId: userId.value,
        password: password.value,
        email: email.value,
        name: name.value,
        birth: birth.value,
        phone: phone.value,
        nickname: nickname.value,
      };
      await userSignUp(user);
      showSuccessPopUp.value = true;
    };
    const closeSuccessPopUp = () => {
      showSuccessPopUp.value = false;
      navigateToHome(); // 홈페이지로 이동하는 함수 호출
    };
    const closeSuccessPopUpAndGoToLogin = () => {
      showSuccessPopUp.value = false;
      navigateToLogin(); // 홈페이지로 이동하는 함수 호출
    };
    return {
      userId,
      password,
      email,
      name,
      birth,
      phone,
      nickname,
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
      register,
      showSuccessPopUp,
      closeSuccessPopUp,
      closeSuccessPopUpAndGoToLogin,
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
</style>
