<template>
    <!-- <Navbar /> -->
    <section class="header bg-primaryTheme">
        <div class="custom-width basic-flex justify-between flex-col lg:flex-row">
            <div class="w-full lg:w-[39.67%] mb-8 lg:mb-0 max-lg:pt-[6.63rem]">
                <h1 class="font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-secondaryTheme mb-4 leading-tight">
                    Grow in Faith. Together.
                </h1>
                <p class="small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-secondaryTheme font-semibold mb-5 lg:mb-5">
                     Build lasting spiritual habits, study the Bible in a way that transform your daily life and connect with trusted Christian mentors.
                </p>
                <div class="flex justify-start lg:justify-start">
                    <UiDownloadButton :isDark="false" iconTheme="#1D2F21"/>
                </div>
            </div>
            <div class="w-full lg:w-auto h-full mt-8 lg:mt-0">
                <NuxtImg src="/images/productImage.png" class="md:max-h-[400px] lg:max-h-163.25 h-full w-full object-cover rounded-lg lg:rounded-none"/>
            </div>
        </div>
    </section>
    
    <section class="custom-width pt-8 md:pt-10 lg:pt-13.5 pb-8 md:pb-10 lg:pb-12.5">
        <h2 class="font-bold leading-[120%] text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] text-center text-primaryTheme mb-8 md:mb-12 lg:mb-17">How Spiriment Works</h2>
        <div class="bg-[#2F4E37] w-full h-[250px] md:h-[350px] lg:h-[42.4rem] rounded-2xl md:rounded-[1.25rem]">
            <!-- Content placeholder -->
        </div>
    </section>
    
    <section class="pt-8 md:pt-10 lg:pt-13.5 pb-12 md:pb-20 lg:pb-30.5">
        <h4 class="custom-width font-bold leading-[120%] text-center text-[1.5rem] md:text-[1.625rem] lg:text-[1.75rem] mb-8 md:mb-10">A Simple Journey for Deep Spiritual Growth</h4>
        <UiOverlappingCards :cardContent="overlappingCardContent"
        id="thisCard"
        />
    </section>
   
    <section class="custom-width pt-8 md:pt-10 lg:pt-[3.44rem] pb-8 md:pb-10 lg:pb-[5.19rem]">
        <h3 class="text-[1.75rem] md:text-[1.875rem] lg:text-[2.0625rem] leading-[120%] font-bold text-primaryTheme mb-8 md:mb-12 lg:mb-[5.19rem] text-center">More Than Just Another Bible App</h3>
        <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-4">
            <article class="w-full lg:w-fit lg:max-w-[17.265rem] rounded-3xl bg-primaryTheme py-4 px-6 text-secondaryTheme font-bold text-[1.25rem] md:text-[1.375rem] lg:text-[1.44rem] h-fit text-center lg:text-left order-2 lg:order-1">
                <h5 class="leading-[120%]">Personalized Study Paths</h5>
            </article>
            <div class="order-2">
                <NuxtImg src="/images/mobileSnapshot.png" class="max-h-[280px] md:max-h-[350px] lg:max-h-[39.88rem] w-auto"/>
            </div>
            <article class="w-full lg:w-fit lg:max-w-[17.265rem] rounded-3xl bg-primaryTheme py-4 px-6 text-secondaryTheme small-texts text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] font-semibold h-fit self-center lg:self-end text-center lg:text-left order-3">
                Get Bible content based on your spiritual maturity and interests
            </article>
        </div>
    </section>
    
    <section class="custom-width pt-8 md:pt-10 lg:pt-[3.44rem] pb-8 md:pb-10 lg:pb-[5.19rem]">
        <h2 class="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-[120%] font-bold text-primaryTheme mb-8 md:mb-12 lg:mb-[5.19rem] text-center max-w-full md:max-w-[90%] lg:max-w-158 mx-auto"
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
        cardTheme: '#1D2F21',
        imgSrc: 'romans.png',
        imgWidth: '60.89%'
    },
    {
        id: 2,
        title: 'Flexible Mentorship Formats',
        description: 'Whether it’s weekly video calls or occasional messages, your mentor fits your rhythm',
        cardTheme: '#7B4034',
        imgSrc: 'schedule.png',
        imgWidth: '60.89%'
    },
    {
        id: 3,
        title: 'Explore Topics That Matter to You',
        description: 'Study content around identity, purpose, prayer, leadership, and more',
        cardTheme: '#112851',
        imgSrc: 'sendRequest.png',
        imgWidth: '60.89%',
        imgOrder: '1'
    },
    {
        id: 4,
        title: 'Stay Accountable, Spiritually and Practically',
        description: 'Build habits, stay encouraged, and keep going even when it’s tough',
        cardTheme: '#6A551B',
        imgSrc: 'streak.png',
        imgWidth: '60.89%'
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