<template lang="pug">
header.header
  div.logo
    img.logo-img(
      :src="require('@assets/icons/logo.svg')"
    )
  div.menu
    div.links
      HeaderMenuLink(
        to="Landing"
        text="Главная"
      )
      HeaderMenuLink(
        v-if="isAuthorized"
        to="Profile"
        text="Личный кабинет"
      )
      HeaderMenuLink(
        to="Warehouse"
        text="Склад"
      )
      HeaderMenuLink(
        to="Schedule"
        text="Расписание"
      )
      HeaderMenuLink(
        v-if="isUserAdmin"
        to="Broadcast"
        text="Видео-поток"
      )
      HeaderMenuLink(
        to="About"
        text="О нас"
      )
  HeaderAccount
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderMenuLink from './HeaderMenuLink.vue';
import HeaderAccount from './HeaderAccount.vue';

export default {
  name: 'TheHeader',
  components: {
    HeaderMenuLink,
    HeaderAccount,
  },
  computed: {
    ...mapGetters(['isAuthorized', 'isUserAdmin']),
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.menu-link:not(:first-child)) {
  margin-left: 20px;
}

::v-deep(.header-account) {
  margin-left: auto;
}

.header {
  margin: 50px 0 30px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .logo {

    &-img {
      height: 40px;
    }

  }

  .menu {
    margin-left: 50px;
  }

}
</style>
