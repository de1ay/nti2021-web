<template lang="pug">
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
    div.welcome-video
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
            name="star")
          mdicon.star-icon(
            name="star")
          mdicon.star-icon(
            name="star")
          mdicon.star-icon(
            name="star")
          mdicon.star-icon(
            name="star")
        div.card-text 150 положительных отзывов
      div.about-card.about-card--projects
        div.card-title 150+
        div.card-text законченных проектов
</template>

<script>

export default {
  name: 'Landing',
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
                color: $color-primaryDark;
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

  }

}
</style>
