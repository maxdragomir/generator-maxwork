<?php include('../assets/header-account16april2020.php'); ?>

<div id="sports_page" class="account-page">
  <div class="ap-left">

    <div class="ap-left__user">

      <p class="ap-left__welcome">Добро пожаловать</p>


      <div class="ap-left__extra">

        <div class="ap-left__extra-item">
          <p>Ваш баланс (RUB)</p>
          <div>826.4</div>
        </div>

        <div class="ap-left__extra-item">
          <p>Баллов</p>
          <div>977</div>
        </div>

        <div class="ap-left__dropdown ap-left__dropdown--is-open">
          <div class="ap-left__dropdown-trigger">Другие счета</div>
          <div class="ap-left__dropdown-inner" style="display: block;">
            <div class="ap-left__extra-item">
              <p>Валютный (EUR)</p>
              <div>335.87</div>
            </div>
            <div class="ap-left__extra-item">
              <p>Валютный (RUB)</p>
              <div>9677.34</div>
            </div>
            <div class="ap-left__extra-item">
              <p>Валютный (USD)</p>
              <div>0</div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <nav class="ap-left-nav">
      <a href="office/account/" class="ap-left-nav__item_account active">Личные данные</a>

      <a href="office/security/" class="ap-left-nav__item_account-security ">БЕЗОПАСНОСТЬ <i
          class="ap-left-nav-item-warning ap-left-nav-item-warning--bad"></i>
      </a>


      <a href="office/bringfriend/" class="ap-left-nav__item_partner ">
        Партнерская программа</a>


      <a href="office/settings/" class="ap-left-nav__item_settings ">Настройки аккаунта</a>

      <a href="office/recharge" class="ap-left-nav__item_recharge ">Пополнить счёт</a>

      <a href="office/promotion/" class="ap-left-nav__item_achievements ">Акции </a>


      <a href="office/deduce" class="ap-left-nav__item_deduce ">Вывести со счёта</a>
      <a href="office/history/" class="ap-left-nav__item_history ">История ставок</a>
      <a href="office/historypay/" class="ap-left-nav__item_transactions ">История переводов</a>


      <a href="javascript:void(0)" class="ap-left-nav__item_casino ">Казино</a>
      <a href="/office/casino/vipcashback" class="ap-left-nav__item_casino-sub ">
        VIP кешбэк </a>
      <a href="office/bonuses" class="ap-left-nav__item_bonuses ">Бонусы и подарки</a>


      <a href="office/request/" class="ap-left-nav__item_admin ">Запрос администратору</a>


      <a class="ap-left-nav__item_exit exitLink">Выход</a>
    </nav>
  </div>
  <div class="ap__center">
    <div class="ap__content">
      <div class="ap__maincontent">

        <?php include('account.html'); ?>

      </div>
      <div style="display: none;">
        <div class="box-modal" id="link_email">
          <div class="box-modal_close arcticmodal-close">X</div>
          <div class="text_modal">
            <div class="link-email-popup">
              <p class="lep__title">Привяжите адрес e-mail к аккаунту</p>

              <p class="lep__notification">Данная информация будет использована для восстановления доступа в случае
                утери логина/пароля!</p>
            </div>
          </div>
        </div>
      </div>

      <div style="display: none">
        <div id="change-pass" class="account-modal">
          <div class="am__close arcticmodal-close"></div>
          <div class="am__body">

          </div>
        </div>

        <div id="change-phone" class="account-modal">
          <form id="changePhoneForm" name="changePhoneForm">
            <div class="am__close arcticmodal-close"></div>
            <div class="am__body">
              <p class="am__heading">Смена телефона</p>
              <span class="am__input-wrap">
				                        <p class="am__heading_phone-notice">Телефон без кода страны.</p>
				                        <input class="am__input keyboardInput" type="text" size="1" id="changeTelNum"
                                       name="changeTelNum" placeholder="Новый номер телефона">
				                    </span>
              <button class="am__btn change-phone" data-type="submitNoActivate">Выслать код</button>
              <span class="am__input-wrap">
				                        <input class="am__input keyboardInput" type="text" size="1" id="changeSMS"
                                       name="changeSMS" placeholder="Код из SMS">
				                    </span>
              <button class="am__btn_lock change-phone" data-type="NoActivateChange">Сохранить</button>
            </div>
          </form>
        </div>

        \
      </div>
    </div>

    <div class="ap-banners">
      <div class="ap-banners__item" style="background-image: url(/default/img/office/banner-recharge.png);">
        <div class="ap-banners__wrap">
          <div class="ap-banners__title">Пополните счет</div>
          <div class="ap-banners__text">Воспользуйтесь данным разделом</div>
        </div>
        <span class="ap-banners__btn"><a href="office/recharge/">Пополнить</a></span>
      </div>
      <div class="ap-banners__item" style="background-image: url(/default/img/office/banner-percent.jpg);">
        <div class="ap-banners__wrap">
          <div class="ap-banners__title">Получай % на остаток счета</div>
          <div class="ap-banners__text">Больше ставок - больше бонусов</div>
        </div>
        <span class="ap-banners__btn"><a href="office/settings/">Подробнее</a></span>
      </div>
      <div class="ap-banners__item ap-banners__item_frame"
           style="background-image: url(/default/img/office/banner-phone.png);">
        <div class="ap-banners__wrap">
          <div class="ap-banners__title">Привяжите номер телефона</div>
          <div class="ap-banners__text">Необходимо для вывода средств</div>
        </div>
        <button class="ap-banners__btn submit attach_phone">Привязать</button>
      </div>
      <div class="ap-banners__item" style="background-image: url(/default/img/office/banner-twofactor.png);">
        <div class="ap-banners__wrap">
          <div class="ap-banners__title">2-х факторная авторизация</div>
          <div class="ap-banners__text">Получите надёжную защиту аккаунта!</div>
        </div>

        <button class="ap-banners__btn two_factor_check">Включить</button>
      </div>
      <div class="ap-banners__item" style="background-image: url(/default/img/office/banner-callback.png);">
        <div class="ap-banners__wrap">
          <div class="ap-banners__title">Обратный звонок</div>
          <div class="ap-banners__text">Получите консультацию на сайте</div>
        </div>
        <button class="ap-banners__btn" id="popup_call_back">Заказать</button>
      </div>
    </div>
  </div>
</div>

<?php include('../assets/footer16april2020.php'); ?>
