<template>
    <!-- <Navbar /> -->
    <section class="header bg-primaryTheme">
        <div class="custom-width basic-flex justify-between">
            <div class="w-[39.67%] ">
                <h1 class="font-bold text-[3rem] text-secondaryTheme mb-4">
                    Grow in Faith. Together.
                </h1>
                <p class="small-texts text-secondaryTheme font-semibold mb-5">
                    Build lasting spiritual habits, connect with trusted mentors, and study the Bible in a way that transforms your daily life.
                </p>
                <UiDownloadButton :isDark="false" iconTheme="#1D2F21"/>
            </div>
            <div class=" h-full">
                <NuxtImg src="/images/productImage.png" class="max-h-163.25 h-full object-cover"/>
            </div>
        </div>
    </section>
    <section class="custom-width pt-13.5 pb-12.5">
        <h2 class="font-bold leading-[120%] text-[2.5rem] text-center text-primaryTheme mb-17">How Spiriment Works</h2>
        <div class="bg-[#2F4E37] w-full h-[42.4rem] rounded-[1.25rem]">

        </div>
    </section>
    <section class="custom-width pt-13.5 pb-30.5">
        <h4 class="font-bold leading-[120%] text-center text-[1.75rem]">A Simple Journey for Deep Spiritual Growth</h4>
        <UiOverlappingCards :cardContent="overlappingCardContent"/>
    </section>
   <section class="custom-width pt-[3.44rem] pb-[5.19rem]">
    <h3 class="text-[2.0625rem] leading-[120%] font-bold text-primaryTheme mb-[5.19rem] text-center">More Than Just Another Bible App</h3>
    <div class="flex justify-between">
        <article class="w-fit max-w-[17.265rem] rounded-3xl bg-primaryTheme py-4 px-6 text-secondaryTheme font-bold text-[1.44rem] h-fit">
            <h5 class="leading-[120%]">Personalized Study Paths</h5>
        </article>
        <div class="">
            <NuxtImg src="/images/mobileSnapshot.png" class="max-h-[39.88rem]"/>
        </div>
        <article class="w-fit max-w-[17.265rem] rounded-3xl bg-primaryTheme py-4 px-6 text-secondaryTheme small-texts font-semibold h-fit self-end">
            Get Bible content based on your spiritual maturity and interests
        </article>
    </div>
   </section>
    <section class="custom-width pt-[3.44rem] pb-[5.19rem]">
        <h2 class="text-[2.5rem] leading-[120%] font-bold text-primaryTheme mb-[5.19rem] text-center max-w-158 mx-auto"
        >Designed to Help You Grow Consistently</h2>
       <UiOverlappingSlides :slidingCardContents="slidingCardContents"/>
    </section>
    <!-- <Footer /> -->
</template>

<script setup>
const slidingCardContents = [
    {
        id: 1,
        title: 'Track Your Bible Journey',
        description: 'Reflect, take notes, and mark your spiritual progress chapter by chapter',
        cardTheme: '#1D2F21'
    },
    {
        id: 2,
        title: 'Flexible Mentorship Formats',
        description: 'Whether it’s weekly video calls or occasional messages, your mentor fits your rhythm',
        cardTheme: '#7B4034'
    },
    {
        id: 3,
        title: 'Explore Topics That Matter to You',
        description: 'Study content around identity, purpose, prayer, leadership, and more',
        cardTheme: '#112851'
    },
    {
        id: 1,
        title: 'Stay Accountable, Spiritually and Practically',
        description: 'Build habits, stay encouraged, and keep going even when it’s tough',
        cardTheme: '#6A551B'
    },
]

const overlappingCardContent = [
    {
        id: 1,
        title: 'Set Your Spiritual Goals',
        detail: 'Answer a few questions to personalize your growth path',
        cardColor: '#FFFAEC',
        cardTheme: '#1D2F21',
        imgSrc: ''
    },
    {
        id: 2,
        title: 'Get Matched with a Mentor',
        detail: 'Connect with someone who will walk with you and guide you',
        cardColor: '#FFFAEC',
        cardTheme: '#7B4034',
        imgSrc: ''
    },
    {
        id: 3,
        title: 'Start Studying the Bible',
        detail: 'Track your habits, reflections, and streaks',
        cardColor: '#FFFAEC',
        cardTheme: '#112851',
        imgSrc: ''
    },
    {
        id: 4,
        title: 'Join Group or 1-on-1 Sessions',
        detail: 'Grow deeper with structured, encouraging mentorship',
        cardColor: '#FFFAEC',
        cardTheme: '#6A551B',
        imgSrc: ''
    },
]

</script>

<style lang="scss" scoped>

</style>