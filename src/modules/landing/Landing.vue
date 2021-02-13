<template lang="pug">
the-development-video-modal(
  v-if="isDevelopmentVideoModalOpen"
  @close="setIsDevelopmentVideoModalOpen(false)"
)
registration-modal(
  v-if="modal === 'registration'"
)
div.landing
  div.section.section--welcome
    div.welcome-title ООО “Современные технологии автоматизации”
    div.welcome-description
     div.description-top
      | Автоматизированное складское помещение без использования
      | человеческих ресурсов уже на вашем производстве
     div.description-bottom
      | На данном сайте представлено пример того, как можно
      | автоматизировать ваш склад и сэкономить на этом ваши деньги
    div.welcome-video(@click="setIsDevelopmentVideoModalOpen(true)")
      mdicon.video-icon(
        name="playCircleOutline"
        :size="40")
      div.video-text Посмотреть видео о разработке
  div.section.section--about
    div.about-left
      div.about-title О нас
      div.about-text
        | Наша компания работает на рынке автоматизации <b>с 2006</b> года.
        | Мы автоматизировали больше <b>150</b> производственных предприятий.
      div.about-text
        | Более 60% клиентов к нам обращаются повторно с другими задачами автоматизации.
        | Главным нашим подразделением является автоматизация складских
        | помещений по типу компании Amazon
      button.about-button Узнать больше
    div.about-right
      img.about-image(:src="require('@assets/images/warehouse-1.jpg')")
      div.about-card.about-card--reviews
        div.card-title
          mdicon.star-icon(
            name="star"
            :size="30")
          mdicon.star-icon(
            name="star"
            :size="30")
          mdicon.star-icon(
            name="star"
            :size="30")
          mdicon.star-icon(
            name="star"
            :size="30")
          mdicon.star-icon(
            name="star"
            :size="30")
        div.card-text 150 положительных отзывов
      div.about-card.about-card--projects
        div.card-title 150+
        div.card-text законченных проектов
  div.section.section--workers
    div.workers-left
      div.workers-left__column
        div.workers-card
          div.card-content
            div.card-icon__wrapper
              mdicon.card-icon(
                name="currencyUsd"
                :size="30")
            div.card-text Переплата за ненормированный рабочий день
        div.workers-card
          div.card-content
              div.card-icon__wrapper
                mdicon.card-icon(
                  name="homeAccount"
                  :size="30")
              div.card-text Ошибки и человеческий фактор
      div.workers-left__column
        div.workers-card
          div.card-content
            div.card-icon__wrapper
              mdicon.card-icon(
                name="alarm"
                :size="28")
            div.card-text Перекуры, отлынивание от работы
    div.workers-right
      div.workers-title Как часто ваши работники ошибаются и тратят драгоценное время?
      div.workers-text
        | Мы это знаем не по наслышке. По нашим исследованиям работники на больших складах тратят
        | больше 35% рабочего времени в пустую. только потому что они люди.
        | Мы предлагаем вам это исправить!
      div.workers-button Свяжитесь со мной
  div.section.section--why
    div.why-title Почему вам стоит уходить в автоматизацию?
    div.why-text
      | Так как программное обеспечение уже написано и готово к внедрению,
      | наши клиенты платят только ежемесячную подписку и
      | имеют возможность доработки решения под себя с нашей помощью.
    div.why-card
      div.card-content__wrapper
        div.card-content
          div.card-icon__wrapper
            mdicon.card-icon(
              name="earth"
              :size="30")
          div.card-title Онлайн доступный ресурс
          div.card-text
            | Управляйте вашим складом и смотрите за работоспособностью из любой точки мира
    div.why-card.why-card--security
      div.card-content__wrapper
        div.card-content
          div.card-icon__wrapper
            mdicon.card-icon(
              name="security"
              :size="30")
          div.card-title Продвинутая система безопасности
          div.card-text Система склада использует лучшие системы для противодействия взлому
    div.why-card.why-card--currencyUsd
      div.card-content__wrapper
        div.card-content
          div.card-icon__wrapper
            mdicon.card-icon(
              name="currencyUsd"
              :size="30")
          div.card-title Работать с нами дешевле в перспективе
          div.card-text
            | С нашими клиентами мы работаем на протяжении многих лет и
            | эта модель является наиболее удобной для всех
  div.section.section--how
    div.how-title Как это
      span.how-title--secondary  работает?
    div.how-description Ниже представлена модель работы наших складов и основные элементы разработки
    div.how-section
      img.how-section__image.how-section__image--devices(
        :src="require('@assets/images/devices.png')")
      div.how-section__text
        div.how-section__text
        | 1. Платформа доступна на любой вашей технике: от компьютера до планшета<br/><br/>
        | 2. У вас под рукой ключевые элементы взаимодействия:<br/>
        |   + Расписание отгрузки<br/>
        |   + Расписание поступления товара<br/>
        |   + Карта склада с обновлением онлайн<br/>
        |   + Личный кабинет для контролирующих сотрудников<br/>
        |   + Возможность срочной отгрузки по вашему запросу<br/><br/>
        | 3. Ваш склад изначально оптимизирован на минимальное время для загрузки и отгрузки товара
    div.how-section
      div.how-section__text
        | 1. Стандартная модель склада включает в себя 4 складских ряда<br/><br/>
        | 2. В каждом ряду находится двя ряда стеллажей работа с которыми ведется
        | через манипулятор с лифтом<br/><br/>
        | 3. Груз к ячейке доставляется по конвейеру<br/><br/>
        | 4. У системы под автоматическим управлением есть два направления: на доставку до
        | ячейки и доставку на отгрузку. По решению администратора
        | возможно перемещение из ячейки в ячейку<br/><br/>
        | 5. Наши программисты разработали систему с помощью следующего программного обеспечения:
        | Visual Studio, Factory I/O и Factory I/O SDK, так же мы имеем возможность
        | работы в данных проектах через TIAportal<br/><br/>
        | 6.  Данные по загруженности склада отоборажаются онлайн на платформе<br/><br/>
        | 7. У вас есть возможность при непредвиденной ситуации
        | быстро получить в месте отгрузки необходимый груз
      img.how-section__image.how-section__image--warehouse(
        :src="require('@assets/images/warehouse_top_down.png')")
    div.section.section--employees
      div.employees-title Наша команда разработки
      div.employees-description Мы можете обратиться к нам лично при любых вопросах
</template>

<script>
import TheDevelopmentVideoModal from '@core/components/TheDevelopmentVideoModal.vue';
import RegistrationModal from '@modules/registration/Registration.vue';

export default {
  name: 'Landing',
  components: {
    TheDevelopmentVideoModal,
    RegistrationModal,
  },
  props: {
    modal: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isDevelopmentVideoModalOpen: false,
    };
  },
  methods: {
    setIsDevelopmentVideoModalOpen(isDevelopmentVideoModalOpen) {
      this.isDevelopmentVideoModalOpen = isDevelopmentVideoModalOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.landing {

  .section {

    &--welcome {
      padding-bottom: 30px;
      display: flex;
      flex-direction: column;

      .welcome {

        &-title {
          font-size: 40px;
          font-family: $font-sourceSansPro;
        }

        &-description {

          > div {
            margin-top: 15px;
          }

          .description {

            &-top {
              font-size: 25px;
              font-family: $font-sourceSansPro;
            }

            &-bottom {
              font-size: 20px;
              font-family: $font-sourceSansPro;
            }

          }

        }

        &-video {
          margin-top: 15px;
          display: flex;
          align-items: center;

          .video {

            &-icon {
              color: $color-primary;
              transition: color .2s ease-in-out;

              &:hover {
                color: $color-primaryDark;
                cursor: pointer;
              }

            }

            &-text {
              margin-left: 10px;
              margin-bottom: 2px;
              font-size: 20px;
              font-family: $font-sourceSansPro;
              text-decoration: underline;
              text-decoration-style: dashed;

              &:hover {
                text-decoration-style: solid;
                cursor: pointer;
              }

            }

          }

        }

      }

    }

    &--about {
      padding: 30px 0 70px 0;
      position: relative;
      display: flex;
      background-color: $color-surface;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: $color-surface;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100%;
        background: $color-surface;
      }

      .about {

        &-left {
          max-width: 650px;
          display: flex;
          flex-direction: column;
        }

        &-title {
          color: $color-primaryDark;
          font-size: 35px;
          font-weight: 600;
          font-family: $font-firaSansCondensed;
        }

        &-text {
          margin-top: 15px;
          font-size: 20px;
          font-family: $font-sourceSansPro;
        }

        &-button {
          margin-top: 15px;
          height: 35px;
          width: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: $color-surface;
          background-color: $color-primary;
          font-size: 18px;
          font-family: $font-firaSansCondensed;
          border-radius: 10px;
          transition: background-color .2s ease-in-out;

          &:hover {
            background-color: $color-primaryDark;
            cursor: pointer;
          }

        }

        &-right {
          position: relative;
          margin-left: 50px;
        }

        &-image {
          width: 700px;
          height: 450px;
          border-radius: 30px;
          object-fit: cover;
        }

        &-card {
          padding: 30px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: $color-surface;
          border-radius: 30px;

          .card {

            &-title {
              color: $color-primaryDark;
              font-size: 33px;
              font-weight: 700;
              font-family: $font-montserratAlternates;
            }

            &-text {
              font-size: 16px;
              font-family: $font-sourceSansPro;
            }

          }

          &--reviews {
            position: absolute;
            top: 40px;
            right: -30px;
            padding-right: 35px;

            .card-title {

              .star-icon {
                color: $color-secondary;
              }

            }

          }

          &--projects {
            position: absolute;
            bottom: -30px;
            left: -30px;
            box-shadow: -22px 22px 50px -10px rgba(12,44,120,0.64);
          }

        }

      }

    }

    &--workers {
      padding: 60px 0 70px 0;
      position: relative;
      display: flex;

      .workers {

        &-left {
          display: flex;
          align-items: stretch;
        }

        &-right {
          margin-left: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        &-title {
          font-size: 35px;
          font-family: $font-firaSansCondensed;
        }

        &-text {
          margin-top: 15px;
          font-size: 16px;
          font-family: $font-sourceSansPro;
        }

        &-button {
          margin-top: 15px;
          height: 35px;
          width: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: $color-surface;
          background-color: $color-primary;
          font-size: 18px;
          font-family: $font-firaSansCondensed;
          border-radius: 10px;
          transition: background-color .2s ease-in-out;

          &:hover {
            background-color: $color-primaryDark;
            cursor: pointer;
          }

        }

        &-left__column {
          display: flex;
          flex-direction: column;
          justify-content: center;

          &:not(:first-child) {
            margin-left: 15px;
          }

        }

        &-card {
          padding: 40px;
          min-width: 230px;
          background: $color-surface;
          border-radius: 30px;
          transform: skew(5deg) rotate(5deg);
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

          &:not(:first-child) {
            margin-top: 15px;
          }

          .card {

            &-content {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              transform: skew(-5deg) rotate(-5deg);
            }

            &-icon__wrapper {
              padding: 10px;
              background-color: $color-primaryLight;
              border-radius: 100px;
            }

            &-icon {
              color: $color-primaryDark;
            }

            &-text {
              margin-top: 10px;
              font-size: 21px;
              font-family: $font-sourceSansPro;
            }

          }

        }

      }

    }

    &--why {
      position: relative;
      padding: 60px 0 70px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: $color-surface;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: $color-surface;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100%;
        background: $color-surface;
      }

      .why {

        &-title {
          font-size: 35px;
          font-family: $font-firaSansCondensed;
        }

        &-text {
          margin: 30px 0 250px 0;
          max-width: 650px;
          font-size: 16px;
          font-family: $font-sourceSansPro;
        }

        &-card {
          position: relative;
          margin-right: 30px;
          margin-bottom: 15px;
          width: 400px;
          display: flex;
          background-color: $color-primary;
          border-radius: 15px;
          transform: skew(-2deg) rotate(-2deg);

          &:not(:first-child) {
            margin-top: 15px;
          }

          &::after {
            z-index: 1;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            padding-right: 15px;
            padding-bottom: 5px;
            width: 100%;
            height: 100%;
            background-color: transparent;
            border: 5px solid $color-primaryLight;
            border-radius: 15px;
          }

          &--security {
            position: absolute;
            top: 250px;
            right: 500px;
          }

          &--currencyUsd {
            position: absolute;
            right: 0;
          }

          .card {

            &-content__wrapper {
              z-index: 1000;
              padding: 40px;
              width: 100%;
              height: 100%;
              background-color: $color-primary;
              border-radius: 15px;
            }

            &-content {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              transform: skew(2deg) rotate(2deg);
            }

            &-icon__wrapper {
              padding: 10px;
              background-color: $color-primaryDark;
              border-radius: 100px;
            }

            &-icon {
              color: $color-surface;
            }

            &-title {
              margin-top: 10px;
              color: $color-surface;
              font-size: 28px;
              font-family: $font-montserratAlternates;
            }

            &-text {
              margin-top: 10px;
              color: $color-surface;
              font-size: 21px;
              font-family: $font-sourceSansPro;
            }

          }

        }

      }

    }

    &--how {
      position: relative;
      padding: 30px 0 70px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: $color-surface;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: $color-surface;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100%;
        background: $color-surface;
      }

      .how {

        &-title {
          font-size: 35px;
          font-family: $font-firaSansCondensed;
        }

        &-title--secondary {
          color: $color-secondary;
        }

        &-description {
          margin: 15px 0;
          font-size: 25px;
          font-family: $font-sourceSansPro;
        }

        &-section {
          margin-top: 15px;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          :first-child {
            margin-right: 50px;
          }

          &__image {
            border-radius: 30px;
            background: transparent;

            &--devices {
              width: 800px;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            }

            &--warehouse {
              width: 660px;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            }

          }

          &__text {
            font-size: 17px;
            font-family: $font-sourceSansPro;
          }

        }

      }

    }

  }

}
</style>
