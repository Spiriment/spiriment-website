<template>
    <section class="custom-width pt-[5.94rem] mb-[7.63rem]">
        <div class="w-[61.17%] mx-auto text-center pb-[5.88rem]">
            <h1 class="header-text text-terracotaTheme text-[3rem]">
                Help us build a platform where anyone can grow in faith
            </h1>
            <p class="mt-6 mb-8 small-texts text-[#4F4F4F]">
                Your generosity helps build a platform where people grow in faith through mentorship, study, and daily spiritual habits
            </p>
            <button class="w-fit mx-auto py-4 px-6 rounded-[6.25rem] text-[#FEFEFD] bg-terracotaTheme font-bold text-[1.5rem]">
                Give Now
            </button>
        </div>
        <section class="pt-[3.44rem]">
            <h4 class="font-bold leading-[120%] text-center text-[1.75rem]">
                Why Your Donation Matters
            </h4>
            <UiOverlappingCards :cardContent="overlappingCardContent" :showButton="false"/>
        </section>
  </section>
</template>

<script setup>
const overlappingCardContent = [
    {
        id: 1,
        title: 'Make Disciples Digitally',
        detail: 'Help us connect people with mentors who guide them in the Word of God',
        cardColor: '#FFFAEC',
        cardTheme: '#1D2F21',
        imgSrc: ''
    },
    {
        id: 2,
        title: 'Keep the App Free for All',
        detail: 'Your donation helps us provide spiritual tools and guidance without paywalls',
        cardColor: '#FFFAEC',
        cardTheme: '#7B4034',
        imgSrc: ''
    },
    {
        id: 3,
        title: 'Support a Gospel-Centered Product',
        detail: 'Every line of code, every session, and every study is rooted in Scripture',
        cardColor: '#FFFAEC',
        cardTheme: '#112851',
        imgSrc: ''
    },
    {
        id: 4,
        title: 'Build Infrastructure for Impact',
        detail: 'Donations fund our backend servers, messaging, study tools, and global accessibility',
        cardColor: '#FFFAEC',
        cardTheme: '#6A551B',
        imgSrc: ''
    },
]

</script>

<style lang="scss" scoped>

</style>