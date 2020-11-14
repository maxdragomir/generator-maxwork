// Vue


Vue.use(window["vue-js-modal"].default, {
  dialog: true,
  dynamic: true,
  injectModalsContainer: true
});

let app = new Vue({
  el: `.${lotteryName}`,
  data: {
    points: [300, 500, 1000, 2000, 3000, 4000, 5000],
    chosenName: 0,
    isLogged: false,
    btnText: 'принять участие',
    mobile: is_mob
  },
  mounted() {
    if (hash === "logged") {
      this.isLogged = true;
      this.btnText = 'сделать ставку';
    }
    if (hash !== '' && hash !== 'logged' && hash !== 'rtl') {
      this.$modal.show('modal-' + hash);
    }
  },
  methods: {
    beforeOpen: function beforeOpen() {
      body.classList.add('noScroll');
    },
    opened: function opened() {
      let chosenNumber = this.getRandom(0, this.points.length - 1);
      this.chosenName = this.points[chosenNumber];
    },
    closed: function closed() {},
    beforeClose: function beforeClose() {
      body.classList.remove('noScroll');
    },

    mainBtn: function() {
      if(!this.isLogged) {
        this.$modal.show('modal-enter');
      }
    },
    getRandom: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  }
});

const myApp = app.$el;

