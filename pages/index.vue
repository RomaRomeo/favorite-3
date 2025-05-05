<script setup lang="ts">
const features = [
  {
    icon: "line-md:account",
    title: "Особистний кабінет",
    link: "http://my.favorite.lviv.ua",
    description: "Зручний онлайн-інструмент для керування послугами вашого інтернет-з'єднання.",
  },
  {
    icon: "iconoir:internet",
    title: "Інтернет",
    link: "/internet",
    description: "Дізнайтеся більше про тарифи, покриття та підключення до швидкісного інтернету.",
  },
  {
    icon: "gravity-ui:tv",
    title: "Телебачення",
    link: "/tv/ip",
    description: "Обирайте тарифи з каналами, насолоджуйтесь якісним зображенням і функціями.",
  },
  {
    icon: "material-symbols:help-outline-rounded",
    title: "Центр підтримки",
    link: "/contact",
    description: "Швидкі відповіді на запитання та допомога у вирішенні ваших проблем.",
  },
];

const blogPosts = [
  {
    id: 4,
    title: 'Оновлення тарифів',
    link: '/news',
    // description: 'Lorem ipsum...',
    date: '1 грудня 2025',
    image: 'https://images.unsplash.com/photo-1716878906849-17ed9e9e6186?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  {
    id: 3,
    title: 'Оплата через Приват24!',
    link: '/news',
    // description: 'Lorem ipsum...',
    date: '1 грудня 2025',
    image: 'https://static.espreso.tv/uploads/photobank/298000_299000/298758_PrivatBank_new_960x500_0.webp' 
  },  
  {
    id: 2, 
    title: 'Перехід на оптоволокно',
    link: '/promo',
    // description: 'Lorem ipsum...',
    date: '20 березня 2025',
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.timbercon.com/wp-content/uploads/timbercon-fiber-optic-cable-uses.jpg' 
  }, 
  {
    id: 1,
    title: 'Акція "Приведи Друга"',
    link: '/promo',
    // description: 'Детальніше про акцію...', 
    date: '21 березня 2025', 
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
]

const items = [
  "/images/slides/slide_1.jpg",
  "/images/slides/slide_2.jpg",
  "/images/slides/slide_3.jpg",
];
</script>

<template>
  <UContainer>
    <UCarousel v-slot="{ item }" arrows dots autoplay :items="items" class="w-full max-w-[calc(100%-60px)] mx-auto">
      <img :src="item" class="rounded-lg object-cover h-[400px] max-md:h-[200px] w-full" />
    </UCarousel>

    <FeatureCardsList :items="features" />

    <BlogCardsList
      title="Останні новини та акції"
      description="Не пропустіть наші спеціальні пропозиції: знижки на підключення, бонуси для нових абонентів!"
      :posts="blogPosts" 
    /> 

    <!-- <FormsNewsLetter v-if="false" class="my-8" /> -->

    <BaseMessenger />
  </UContainer>
</template>
