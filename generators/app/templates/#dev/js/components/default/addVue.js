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
    isLogged: false
  },
  methods: {
    beforeOpen: function beforeOpen() {
      html.classList.add('noScroll');
    },
    opened: function opened() {
      let chosenNumber = this.getRandom(0, this.points.length - 1);
      this.chosenName = this.points[chosenNumber];
    },
    closed: function closed() {},
    beforeClose: function beforeClose() {
      html.classList.remove('noScroll');
    },


    openModal: function() {
      if (hash === "logged") {
        this.isLogged = true;
      }

      if(this.isLogged) {

      } else {

      }
    },
    getRandom: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  }
});

if (hash !== '' && hash !== 'logged' && hash !== 'rtl') {
  app.$modal.show('modal-' + hash);
}

const myApp = app.$el;

