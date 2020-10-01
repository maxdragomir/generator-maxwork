// Vue


Vue.use(window["vue-js-modal"].default, {
  dialog: true,
  dynamic: true,
  injectModalsContainer: true
});

let app = new Vue({
  el: `.${lotteryName}`,
  methods: {
    beforeOpen: function beforeOpen() {
      html.classList.add('noScroll');
    },
    opened: function opened() {},
    closed: function closed() {},
    beforeClose: function beforeClose() {
      html.classList.remove('noScroll');
    },
  }
});

if (hash !== '' && hash !== 'logged' && hash !== 'rtl') {
  app.$modal.show('modal-' + hash);
}

const myApp = app.$el;

