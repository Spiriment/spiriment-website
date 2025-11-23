<template>
    <footer class="w-full bg-primaryTheme">
        <section class="footer-center custom-width pt-[4.19rem]">
            <div class="top-section basic-flex justify-between">
                <div class="w-119 text-secondaryTheme">
                    <h1 class="font-bold text-[3rem] leading-[120%] mb-4">Start Your Journey Today</h1>
                    <p class="small-texts font-semibold mb-6">
                        Spiritual growth takes intentionality and we’re building the tools to help you thrive every day
                    </p>
                    <UiDownloadButton :isDark="false" iconTheme="#1D2F21"/>
                </div>
                <div class="relative">
                    <div 
                    class="absolute w-full h-full bg-[linear-gradient(to_top,#1D2F21,transparent,transparent,transparent,transparent,transparent,transparent,transparent)]"
                    >

                    </div>
                    <NuxtImg src="/images/footerImg.png" class="max-w-[27.69rem]"/>
                </div>
            </div>
            <div class="bottom-section py-11">
                <div class="top-row flex justify-between mb-39.5">
                    <div>
                        <div class="footer-logo mb-6">
                            <NuxtImg src="/icons/logoLight.svg" class="w-45.25"/>
                        </div>
                         <UiDownloadButton :isDark="false" iconTheme="#1D2F21"/>
                    </div>
                    <div class="flex gap-17">
                        <article
                        v-for="item in footerLinks"
                        :key="item.id"
                        >
                            <h6 class="font-bold text-[1.19rem] leading-[120%] text-secondaryTheme mb-8">{{ item.title }}</h6>
                            <ul class="flex flex-col gap-4 small-texts text-secondaryTextTheme">
                                <li
                                v-for="(path,index) in item.paths"
                                :key="index"
                                >
                                <nuxt-link :to="path.route">
                                    {{ path.name }}
                                </nuxt-link>
                            </li>
                            </ul>
                        </article>
                    </div>
                </div>
                <div class="bottom-row flex justify-between items-end">
                    <div class="flex flex-col gap-4">
                        <label for="email" class="uppercase header-text text-primaryWhite">Enter email for updates</label>
                        <div class="bg-[#2F4E37] p-4 rounded-[6.25rem] basic-flex justify-between w-[20.19rem]">
                            <input type="email" name="email" id="email" class="small-texts text-secondaryTextTheme" placeholder="Enter email address">
                            <span class="w-6.5 h-6.5 rounded-full bg-secondaryTextTheme"></span>
                        </div>
                    </div>
                    <div class="small-texts text-secondaryTextTheme">
                        <button class="underline ml-6">Privacy Policy</button>
                        <button class="underline ml-6">Terms</button>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<script setup>
const footerLinks = [
    {
        id: 1,
        title: 'Mentorship',
        paths: [
            {
                name: 'For Mentees',
                route: '/mentee'
            },
            {
                name: 'For Mentors',
                route: '/mentor'
            }
        ]
    },
    {
        id: 2,
        title: 'Quicklinks',
        paths: [
            {
                name: 'Donate',
                route: '/donate'
            },
            {
                name: 'Volunteer',
                route: '/volunteer'
            },
            {
                name: 'Shop',
                route: '/'
            },
            {
                name: 'Partnerships',
                route: '/partnerships'
            },
        ]
    },
    {
        id: 3,
        title: 'Company',
        paths: [
            {
                name: 'About',
                route: '/about'
            },
            {
                name: 'Contact',
                route: '/contact'
            },
        ]
    },

]

</script>

<style lang="scss" scoped>

</style>