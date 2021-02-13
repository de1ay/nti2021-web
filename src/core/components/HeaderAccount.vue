<template lang="pug">
div.header-account
  button.action-sign_in Вход
  button.action-sign_up(
    @click="$router.push({ name: 'Registration' })") Нет аккаунта?
</template>

<script>
export default {
  name: 'HeaderAccount',
};
</script>

<style lang="scss" scoped>
.header-account {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .action {

    &-sign_in {
      padding: 0 20px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $color-surface;
      background: $color-primary;
      font-size: 20px;
      font-family: $font-firaSansCondensed;
      border-radius: 10px;
      transition: background-color .2s ease-in-out;

      &:hover {
        background-color: $color-primaryDark;
        cursor: pointer;
      }

    }

    &-sign_up {
      margin-left: 5px;
      background: none;
      font-family: $font-firaSansCondensed;
      text-decoration: underline;
      text-decoration-style: dashed;

      &:hover {
        text-decoration-style: solid;
        cursor: pointer;
      }

    }

  }

}
</style>
