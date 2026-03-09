<template>
    <footer class="footer">
        <div class="inner container">
            <div class="footer-content">
                <a href="mailto:wishlist@yandex.ru" class="email">wishlist@yandex.ru</a>

                <div class="social">
                  <a href="#" class="social-icon">
                    <svg class="icon" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720">
                        <path fill="#fff" d="M350.4,9.6C141.8,20.5,4.1,184.1,12.8,390.4c3.8,90.3,40.1,168,48.7,253.7,2.2,22.2-4.2,49.6,21.4,59.3,31.5,11.9,79.8-8.1,106.2-26.4,9-6.1,17.6-13.2,24.2-22,27.3,18.1,53.2,35.6,85.7,43.4,143.1,34.3,299.9-44.2,369.6-170.3C799.6,291.2,622.5-4.6,350.4,9.6h0ZM269.4,504c-11.3,8.8-22.2,20.8-34.7,27.7-18.1,9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9,16.8-72.5,72.9-136.3,150-143.1,78-6.9,150.4,32.7,183.1,104.2,72.4,159.1-112.9,316.2-256.4,218.6h0Z"/>
                    </svg>
                  </a>
                  <a href="#" class="social-icon">
                    <svg class="icon" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM36.6 17C36.225 20.95 34.6 30.55 33.775 34.975C33.425 36.85 32.725 37.475 32.075 37.55C30.625 37.675 29.525 36.6 28.125 35.675C25.925 34.225 24.675 33.325 22.55 31.925C20.075 30.3 21.675 29.4 23.1 27.95C23.475 27.575 29.875 21.75 30 21.225C30.0174 21.1455 30.0151 21.0629 29.9933 20.9845C29.9715 20.9061 29.9309 20.8342 29.875 20.775C29.725 20.65 29.525 20.7 29.35 20.725C29.125 20.775 25.625 23.1 18.8 27.7C17.8 28.375 16.9 28.725 16.1 28.7C15.2 28.675 13.5 28.2 12.225 27.775C10.65 27.275 9.425 27 9.525 26.125C9.575 25.675 10.2 25.225 11.375 24.75C18.675 21.575 23.525 19.475 25.95 18.475C32.9 15.575 34.325 15.075 35.275 15.075C35.475 15.075 35.95 15.125 36.25 15.375C36.5 15.575 36.575 15.85 36.6 16.05C36.575 16.2 36.625 16.65 36.6 17Z" fill="white"/>
                    </svg>
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