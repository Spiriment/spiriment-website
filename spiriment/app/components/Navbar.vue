<template>
    <nav class="custom-width py-[1.1rem] basic-flex justify-between">
        <div class="logo">
            <nuxt-link to="/">
                <NuxtImg src="/icons/logoDark.svg"/>
            </nuxt-link>
        </div>
        <ul class="basic-flex gap-6 relative">
            <li class="nav-link cursor-pointer flex items-center gap-2"
              @click="showDropdown = !showDropdown"
            >
               <span>mentorship</span>

                <!-- Chevron -->
                <svg
                    class="w-4 h-4 transition-transform duration-300"
                    :class="showDropdown ? 'rotate-180' : 'rotate-0'"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
                </svg>
            </li>
            <div 
                class="mentorship-dropdown absolute top-8 left-0 flex flex-col bg-primaryTheme text-secondaryTheme shadow-[0px_1px_2px_#FFFAEC] overflow-hidden transition-all duration-300"
                :class="showDropdown ? 'h-auto max-h-[500px] mt-2' : 'h-0 max-h-0'"
            >
                <nuxt-link to="/mentor" 
                @click="closeDropdown"
                class="hover:bg-secondaryTheme hover:text-primaryTheme transitionEffect w-full h-full px-12 py-4 border border-primaryTheme">
                    For Mentors
                </nuxt-link>
                <nuxt-link to="/mentee"
                @click="closeDropdown" 
                class="hover:bg-secondaryTheme hover:text-primaryTheme transitionEffect px-12 py-4 border border-primaryTheme">
                    For Mentees
                </nuxt-link>
            </div>
            <li class="nav-link"
            @click="closeDropdown">
                <nuxt-link to="/donate">
                    donate
                </nuxt-link>
            </li>
            <li class="nav-link"
            @click="closeDropdown">
                <nuxt-link to="/resources">
                    resources
                </nuxt-link>
            </li>
            <li class="nav-link"
            @click="closeDropdown">
                 <nuxt-link to="/volunteer">
                    volunteer
                </nuxt-link>
            </li>
            <li class="nav-link"
            @click="closeDropdown">
                <nuxt-link to="/about">
                    about
                </nuxt-link>
            </li>
            <li class="nav-link"
            @click="closeDropdown">
                <nuxt-link to="/contact">
                    contact
                </nuxt-link>
            </li>
        </ul>
        <UiDownloadButton :isDark="true" iconTheme="#FFFAEC"/>
    </nav>
</template>

<script setup>
const showDropdown = ref(false)

const closeDropdown = () => {
  showDropdown.value = false;
};

</script>

<style lang="scss" scoped>

</style>