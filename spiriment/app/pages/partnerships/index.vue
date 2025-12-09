<template>
    <section class="bg-darkTheme">
        <section class="custom-width pt-[6.63rem] pb-[7.63rem]">
          <div class="w-[71.5%] mx-auto text-center">
              <h1 class="header-text text-secondaryTheme text-[3rem]">
                  Partner with us to equip more <br> believers for lasting spiritual growth
              </h1>
              <p class="mt-8 mb-10 small-texts text-secondaryTheme">
                  Whether you're a church, ministry, or discipleship-driven community, <br> Spiriment gives you tools to support and strengthen the people you lead
              </p>
              <UiDownloadButton :isDark="false" iconTheme="#162419" class="mx-auto"/>
          </div>
          <div class="mt-15 w-fit mx-auto">
              <NuxtImg src="/images/partnership.png"/>
          </div>
          <section class="mt-16.25 pt-[3.44rem] pb-[5.88rem]">
              <h2 class="text-[2.5rem] header-text text-secondaryTheme mb-9 text-center max-w-[70%] mx-auto leading-[160%]"
              >
               If you lead people in the Word, we’re building this with you in mind
            </h2>
              <UiOverlappingSlides :slidingCardContents="slidingCardContents"/>
          </section>
          <section class="pt-13.5">
              <h4 class="text-[2.5rem] header-text text-secondaryTheme mb-9 text-center max-w-[70%] mx-auto leading-[160%]">
                Tools that strengthen your mission and <br> multiply your impact
            </h4>
              <UiOverlappingCards :cardContent="overlappingCardContent" :isPartnership="true" :showButton="false"/>
          </section>
          <section class="py-[6.19rem] flex justify-between">
              <h2 class="text-primaryWhite header-text text-[2.5rem] w-[33.67%]">
                  Ready to partner?
              </h2>
            <form class="flex flex-col gap-4">
                <article class="input-field w-138">
                    <label for="organization" class="label-text">Full Name/Organization <span class="text-[#E0745F]">*</span></label>
                    <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[624.9rem] bg-white">
                        <input type="text" name="organization" id="organization" class="input-text w-full">
                    </div>
                </article>
                <article class="input-field w-138">
                    <label for="phone" class="label-text">Phone Number</label>
                    <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[624.9rem] bg-white">
                        <input type="number" name="phone" id="phone" class="input-text w-full">
                    </div>
                </article>
                <article class="input-field w-138">
                    <label for="mail" class="label-text">Email <span class="text-[#E0745F]">*</span></label>
                    <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[624.9rem] bg-white">
                        <input type="email" name="mail" id="mail" placeholder="Aa" class="input-text w-full">
                    </div>
                </article>
                <!-- <article class="input-field w-138">
                    <label for="skill" class="label-text">Skill or area you'd like to help in <span>*</span></label>
                    <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[624.9rem] bg-white">
                        <input type="text" name="skill" id="skill" placeholder="Aa" class="input-text w-full">
                    </div>
                </article> -->
                <article class="input-field w-138">
                    <label for="partnershipType" class="label-text">Type of partnership (church, ministry, fellowship, org., etc.)</label>
                    <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[624.9rem] bg-white">
                        <input type="text" name="partnershipType" id="partnershipType" placeholder="Aa" class="input-text w-full">
                    </div>
                </article>
                <article class="input-field w-138">
                    <label for="message" class="label-text">Message / Interest summary</label>
                    <div class="mt-[0.57rem] py-[0.66rem] px-[0.813rem] rounded-[1.125rem] bg-white">
                        <textarea name="message" id="message" cols="30" rows="10" class="input-text w-full" placeholder="Aa" ></textarea>
                    </div>
                </article>
                <button class="w-full bg-[#A2B1A5] py-2.5 text-center mt-[0.56rem] rounded-[625rem] text-darkTheme text-[1rem] font-medium leading-[1.4rem]">Send Request</button>
            </form>
          </section>
        </section>
    </section>
</template>

<script setup>
const slidingCardContents = [
    {
        id: 1,
        title: 'Churches',
        description: 'Help members grow spiritually beyond Sundays',
        cardTheme: '#A2B1A5',
        textTheme: '#162419',
         imgSrc: 'partnership1.png',
        imgWidth: '100%'
    },
    {
        id: 2,
        title: 'Campus Fellowships',
        description: 'Provide mentorship and study tools for students',
        cardTheme: '#FEEFC4',
        textTheme: '#6A551B',
         imgSrc: 'partnership2.png',
        imgWidth: '100%'
    },
    {
        id: 3,
        title: 'Discipleship Ministries',
        description: 'Extend your reach with scalable mentoring tools',
        cardTheme: '#98ABCD',
        textTheme: '#0D1F3E',
         imgSrc: 'partnership3.png',
        imgWidth: '100%'
    },
    {
        id: 4,
        title: 'Small Group Networks',
        description: 'Bring structure, study plans, and accountability to your groups',
        cardTheme: '#F5D4CD',
        textTheme: '#5E3128',
        imgSrc: 'partnership4.png',
        imgWidth: '100%'
    },
]

const overlappingCardContent = [
    {
        id: 1,
        title: 'Mentor Tools',
        detail: 'Track mentee growth, respond to study activity, schedule check-ins',
        cardColor: '#162419',
        textTheme: '#162419',
        cardTheme: '#A2B1A5',
        imgSrc: ''
    },
    {
        id: 2,
        title: 'Custom Resources',
        detail: 'Option to integrate your teachings into the platform',
        cardColor: '#5E3128',
        textTheme: '#5E3128',
        cardTheme: '#F5D4CD',
        imgSrc: ''
    },
    {
        id: 3,
        title: 'Analytics & Feedback',
        detail: 'Visual reports of community engagement and growth',
        cardColor: '#0D1F3E',
        textTheme: '#0D1F3E',
        cardTheme: '#BAC7DE',
        imgSrc: ''
    },
    {
        id: 4,
        title: 'Support & Collaboration',
        detail: 'Dedicated channel for feedback, requests, and joint campaigns',
        cardColor: '#6A551B',
        textTheme: '#6A551B',
        cardTheme: '#FFFAEC',
        imgSrc: ''
    },
]

</script>

<style lang="scss" scoped>

</style>