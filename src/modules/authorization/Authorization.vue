<template lang="pug">
teleport(to="body")
  modal-container(@close="$router.push({ name: 'Landing' })")
    div.form(v-show="!isSecondStep")
      nti-input.form-email(
        v-model="fieldsValues.email"
        v-bind="fieldsDefinitions.email"
        @error="(err) => setFieldError('email', err)"
      )
      nti-input.form-password(
        v-model="fieldsValues.password"
        v-bind="fieldsDefinitions.password"
        @error="(err) => setFieldError('password', err)"
      )
      button.form-submit(@click="submit") Продолжить
      button.form-reset(@click="goToReset") Забыли пароль?
    div.form(v-show="isSecondStep")
      nti-input.form-token(
        v-model="token"
        v-bind="tokenDefinition"
      )
      button.form-submit(@click="signInStep2") Продолжить
</template>

<script>
import axios from '@core/api/axios';
import { mapActions } from 'vuex';
import { useToast } from 'vue-toastification';

import ModalContainer from '@core/components/ModalContainer.vue';
import NtiInput from '@core/components/inputs/NtiInput.vue';
import FormHelperMixin from '@core/mixins/FormHelper';

const toast = useToast();

export default {
  name: 'Authorization',
  components: {
    ModalContainer,
    NtiInput,
  },
  mixins: [FormHelperMixin],
  data() {
    return {
      fieldsDefinitions: {
        email: {
          isValid: false,
          error: '',
          required: true,
          type: 'text',
          label: 'Email',
          placeholder: 'Введите email',
          darkTheme: true,
        },
        password: {
          isValid: false,
          error: '',
          required: true,
          type: 'password',
          label: 'Пароль',
          placeholder: 'Введите пароль',
          validationRules: {
            minLength: 8,
            maxLength: 20,
          },
          darkTheme: true,
        },
      },
      fieldsValues: {
        email: '',
        password: '',
      },
      token: '',
      tokenDefinition: {
        type: 'text',
        label: 'Одноразовый код',
        placeholder: 'Введите код',
        darkTheme: true,
      },
      isSecondStep: false,
    };
  },
  methods: {
    ...mapActions(['authorize']),
    submit() {
      this.validateForm();
      if (this.isFormValid) {
        if (this.customValidation()) {
          this.signInStep1();
        }
      }
    },
    customValidation() {
      const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isEmailValid = emailRe.test(this.fieldsValues.email);
      if (!isEmailValid) {
        this.setFieldError('email', 'Email имеет неверный формат ');
      }
      let isPasswordValid = true;
      const passwordOneNumberRe = /[0-9]/g;
      if (!passwordOneNumberRe.test(this.fieldsValues.password)) {
        isPasswordValid = false;
        this.setFieldError('password', 'Пароль должен содержать хотя бы одну цифру');
      }
      const passwordOneSpecialSymbolRe = /[!@#$%^&*.,:;\-+=]/g;
      if (!passwordOneSpecialSymbolRe.test(this.fieldsValues.password)) {
        isPasswordValid = false;
        this.setFieldError('password', 'Пароль должен содержать хотя бы один знак препинания');
      }
      if (this.fieldsValues.password.toLowerCase() === this.fieldsValues.password) {
        isPasswordValid = false;
        this.setFieldError('password', 'Пароль должен содержать хотя бы одну заглавную букву');
      }
      return isEmailValid && isPasswordValid;
    },
    goToReset() {
      window.location.href = `${process.env.VUE_APP_API_ENDPOINT}/password_reset/`;
    },
    signInStep1() {
      axios({
        url: '/dj-rest-auth/login/',
        method: 'POST',
        data: {
          username: this.fieldsValues.email.substring(0, this.fieldsValues.email.indexOf('@')),
          password: this.fieldsValues.password,
        },
      })
        .then((resp) => {
          if (resp.data.error !== undefined) {
            return Promise.reject(resp.data.error);
          }
          this.isSecondStep = true;
          toast.info('Введите одноразовый код из письма');
          return Promise.resolve(resp.data);
        })
        .catch((err) => {
          const { data } = err.response;
          if (data.email) {
            this.setFieldError('email', data.email[0]);
          }
          if (data.password) {
            this.setFieldError('password', data.password[0]);
          }
          if (data.detail) {
            return Promise.reject(data.detail);
          }
          return Promise.reject(data);
        });
    },
    async signInStep2() {
      if (this.token.length !== 10) {
        toast.error('Введен некорректный код');
        return;
      }
      try {
        await this.authorize({
          username: this.fieldsValues.email.substring(0, this.fieldsValues.email.indexOf('@')),
          password: this.fieldsValues.password,
          token: this.token,
        });
        toast.success('Вход выполнен');
        this.$router.replace({ name: 'Profile' });
      } catch (e) {
        if (e.length) {
          e.forEach((err) => toast.error(err));
        } else {
          this.$toasted.error(e);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;

  > div:not(:first-of-type), > button {
    margin-top: 20px;
  }

  &-submit {
    padding: 0 20px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-surface;
    background: $color-primary;
    font-size: 18px;
    font-family: $font-firaSansCondensed;
    border-radius: 10px;
    transition: background-color .2s ease-in-out;

    &:hover {
      background-color: $color-primaryDark;
      cursor: pointer;
    }

  }

  &-reset {
    margin-top: 10px !important;
    background: none;
    color: $color-neutralDark;
    font-family: $font-firaSansCondensed;
    text-decoration: underline;
    text-decoration-style: dashed;

    &:hover {
      text-decoration-style: solid;
      cursor: pointer;
    }
  }

}
</style>
