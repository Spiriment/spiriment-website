<template>
    <section class="bg-darkTheme">
        <section class="custom-width pt-[6.63rem] pb-[7.63rem]">
          <div class="w-[56.17%] mx-auto text-center">
              <h1 class="header-text text-secondaryTheme text-[3rem]">
                  Help others grow in their faith by guiding them
              </h1>
              <p class="mt-4 mb-6 small-texts text-secondaryTheme">
                  Use your time, wisdom, and spiritual maturity to walk alongside others without burnout or chaos. Spiriment helps you mentor with structure and clarity
              </p>
              <UiDownloadButton :isDark="false" iconTheme="#162419" class="mx-auto"/>
          </div>
          <div class="mt-10 w-fit mx-auto">
              <NuxtImg src="/images/mainImage.png"/>
          </div>
          <section class="mt-8.5 pt-[3.44rem] pb-[5.88rem]">
              <h2 class="text-[2.5rem] header-text text-secondaryTheme mb-33 text-center max-w-158 mx-auto"
              >Why Mentor on Spiriment?</h2>
              <UiOverlappingSlides :slidingCardContents="slidingCardContents"/>
          </section>
          <section class="pt-13.5">
              <h4 class="font-bold leading-[120%] text-center text-[2.5rem] text-secondaryTheme">Mentor Smarter, Not Harder</h4>
              <UiOverlappingCards :cardContent="overlappingCardContent"/>
          </section>
        </section>
    </section>
</template>

<script setup>
const slidingCardContents = [
    {
        id: 1,
        title: 'Structure Without Stress',
        description: 'Reflect, take notes, and mark your spiritual progress chapter by chapter',
        cardTheme: '#A2B1A5',
        textTheme: '#162419',
        imgSrc: 'mentor1.png',
        imgWidth: '60.89%'
    },
    {
        id: 2,
        title: 'Multiply Your Impact',
        description: 'Mentor one or many mentees with flexible tools that help you stay organized and personal',
        cardTheme: '#FEEFC4',
        textTheme: '#6A551B',
        imgSrc: 'mentor2.png',
        imgWidth: '60.89%'
    },
    {
        id: 3,
        title: 'Lead With Your Strengths',
        description: 'Focus on what you love: teaching, praying, encouraging, Spiriment handles the rest',
        cardTheme: '#98ABCD',
        textTheme: '#0D1F3E',
        imgSrc: 'mentor3.png',
        imgWidth: '100%'
    },
    {
        id: 4,
        title: 'Invest Eternally',
        description: 'Your wisdom and experience can shape lives for Christ',
        cardTheme: '#F5D4CD',
        textTheme: '#5E3128',
        imgSrc: 'mentor4.png',
        imgWidth: '100%'
    },
]

const overlappingCardContent = [
    {
        id: 1,
        title: 'Create Your Mentor Profile',
        detail: 'Share your story, areas of strength, and availability',
        cardColor: '#162419',
        textTheme: '#162419',
        cardTheme: '#A2B1A5',
        imgSrc: ''
    },
    {
        id: 2,
        title: 'Get Matched Thoughtfully',
        detail: 'We match you with mentees whose needs align with your calling',
        cardColor: '#5E3128',
        textTheme: '#5E3128',
        cardTheme: '#F5D4CD',
        imgSrc: ''
    },
    {
        id: 3,
        title: 'Lead Sessions, Guide Growth',
        detail: 'Chat, schedule calls, or respond to study reflections with ease',
        cardColor: '#0D1F3E',
        textTheme: '#0D1F3E',
        cardTheme: '#BAC7DE',
        imgSrc: ''
    },
    {
        id: 4,
        title: 'Track and Encourage',
        detail: 'Continue mentoring one or more individuals, as your capacity allows',
        cardColor: '#6A551B',
        textTheme: '#6A551B',
        cardTheme: '#FFFAEC',
        imgSrc: ''
    },
]

</script>

<style lang="scss" scoped>

</style>