<template>
   <section>
        <div class="mt-6 md:mt-8 lg:mt-[3.813rem]">
            <article 
                v-for="(item, index) in cardContent"
                :key="item.id"
                class="w-full rounded-[1rem] md:rounded-[1.125rem] lg:rounded-[1.25rem] px-6 md:px-8 lg:px-12.5 flex flex-col lg:flex-row justify-between transition-all duration-500"
                :class="[
                index === cardContent.length - 1 ? 'py-8 md:py-12 lg:py-[93px]' : 'h-auto md:h-[40rem] lg:h-[53.12rem] pt-8 md:pt-16 lg:pt-22.5',
                index > 0 ? '-mt-16 md:-mt-32 lg:-mt-60' : 'mt-0',
                'relative z-[calc(10+index)]' 
                ]"
                :style="{ backgroundColor: item.cardTheme }"
            >
                <div class="max-w-full lg:max-w-135 mb-8 lg:mb-0">
                    <h2 class="font-bold leading-[120%] text-secondaryTheme mb-4 text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] text-center lg:text-left"
                    :style="{ color: item.textTheme ? item.textTheme: '#FFFAEC'}"
                    >
                        {{ item.title }}
                    </h2>
                    <p class="small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-secondaryTheme mb-5 text-center lg:text-left"
                    :style="{ color: item.textTheme ? item.textTheme: '#FFFAEC'}"
                    >
                        {{ item.detail }}

                    </p>
                    <div class="flex justify-center lg:justify-start">
                        <UiDownloadButton 
                            v-if="showButton"
                            :isDark="false"
                            :iconTheme="item.cardTheme"
                            v-bind="item.textTheme ? { textTheme: item.textTheme } : {}"
                        />
                        <button 
                        v-if="isPartnership"
                        class="py-3 px-5 md:py-4 md:px-6 rounded-[6.25rem] text-sm md:text-base"
                        :style="{ color: item.cardTheme, backgroundColor: item.cardColor}"
                        >
                            Become a Partner
                        </button>
                    </div>
                </div>
                <div 
                class="h-48 md:h-64 lg:h-91 w-full lg:w-[25.19rem] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl bg-secondaryTheme mx-auto lg:mx-0"
                :style="{ backgroundColor: item.cardColor }"
                >
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
defineProps({
    cardContent: {
        type: Array,
        required: true
    },
    showButton: {
        type: Boolean,
        default: true
    },
    isPartnership: {
        type: Boolean,
        default: false
    },

})
</script>

<style lang="scss" scoped>

</style>