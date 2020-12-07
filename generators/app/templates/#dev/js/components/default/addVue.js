// Vue


Vue.use(window["vue-js-modal"].default, {
  dialog: true,
  dynamic: true,
  injectModalsContainer: true
});

let app = new Vue({
  el: `.${lotteryName}`,
  data: {
    mobile: is_mob,

    // for bonus modal
    points: [50, 100, 1000, 3000, 5000],
    chosenName: 0,

    // logged state
    isLogged: false,
    btnText: 'принять участие',
  },
  mounted() {

    // states
    if (hash === "logged") {
      this.isLogged = true;
      this.btnText = 'сделать ставку';
    }

    // modals
    if (hash !== '' && hash !== 'logged' && hash !== 'rtl') {
      this.$modal.show('modal-' + hash);
    }

  },
  methods: {

    // modal
    beforeOpen: function beforeOpen() {
      body.classList.add('noScroll');
    },
    opened: function opened(e) {

      if(e.name === 'modal-win') {
        let chosenNumber = this.getRandom(0, this.points.length - 1);
        this.chosenName = this.points[chosenNumber];
      }

    },
    closed: function closed() {},
    beforeClose: function beforeClose() {
      body.classList.remove('noScroll');
    },

    // states
    mainBtn: function() {
      if(!this.isLogged) {
        this.$modal.show('modal-enter');
      }
    },

    // helpers
    getRandom: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

  }
});

const myApp = app.$el;

