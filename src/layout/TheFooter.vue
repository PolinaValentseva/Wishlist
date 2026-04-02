<template>
    <footer class="footer">
        <div class="inner container">
            <div class="footer-content">
                <a href="mailto:wishlist@yandex.ru" class="email">wishlist@yandex.ru</a>

                <div class="social">
                  <a href="#" class="social-icon">
<img class="icon" src="@/assets/images/Footer/max.svg" alt="Max" width="40" height="40">
                  </a>
                  <a href="#" class="social-icon">
<img class="icon" src="@/assets/images/Footer/telegram.svg" alt="Telegram" width="40" height="40">
                  </a>
                </div>
            </div>

            <div class="footer-links">
              <a href="#" class="link">Пользовательское соглашение</a>
              <a href="#" class="link">Политика конфиденциальности</a>
              <a href="#" class="link">Оферта</a>
            </div>

            <div class="copyright">© 2026</div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
    background-color: var(--color-primary);
}

.inner {
    display: flex;
    flex-direction: column;
    color: var(--color-white);
    padding: 80px 30px 80px 30px;
}

.footer-content {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 55px;
    margin-bottom: 60px;
}

.email {
    font-size: 30px;
}

.social {
    display: flex;
    gap: 10px;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 35px;
}

.link {
    display: flex;
    align-items: center;
    font-size: 30px;
}

.link:not(:last-child)::after {
  content: '•';
  font-size: 60px;
  line-height: 0%;
  padding-left: 30px;
}

.copyright {
    display: flex;
    justify-content: center;
    font-size: 30px;
}

@media(max-width: 1250px) {
    .link {
        font-size: 22px;
    }
}

@media(max-width: 800px) {
    .inner {
        align-items: center;
        padding: 50px 30px 50px 30px;
    }

    .footer-content {
        gap: 30px;
        margin-bottom: 35px;
    }

    .email {
        font-size: 25px;
    }

    .footer-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .link:not(:last-child)::after {
      display: none;
    }

    .copyright {
        font-size: 25px;
    }
}

@media(max-width: 600px) {

    .footer-content {
        gap: 20px;
        margin-bottom: 25px;
    }

    .email {
        font-size: 20px;
    }

    .icon {
        width: 30px;
        height: auto;
    }

    .footer-links {
        gap: 18px;
        margin-bottom: 25px;
    }

    .link {
        font-size: 16px;
    }

    .copyright {
        font-size: 20px;
    }
}

@media(max-width: 385px) {
    .inner {
        padding: 30px;
    }

    .footer-content {
        gap: 20px;
        margin-bottom: 20px;
    }

    .email {
        font-size: 18px;
    }

    .icon {
        width: 25px;
        height: auto;
    }

    .footer-links {
        gap: 14px;
        margin-bottom: 20px;
    }

    .link {
        font-size: 14px;
    }

    .copyright {
        font-size: 16px;
    }
}
</style>