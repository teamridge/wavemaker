<template>
    <div class="wrapper job-wrapper">
        <main>
            <JobsIntro/>
            <MechatronicsEngJob/>
            <nuxt/>
        </main>
        <AppFooter/>
    </div>
</template>

<style>
    .dark {
        background: black;
        width: 100%;
    }
</style>

<script>
    import AppHeader from "~/components/AppHeader.vue";
    import AppHeaderMobile from "~/components/AppHeaderMobile.vue";
    import AppFooter from "~/components/AppFooter.vue";
    import JobsIntro from "~/components/sections/JobsIntro.vue";
    import MechatronicsEngJob from "~/components/jobs/MechatronicsEngJob.vue";

    export default {
        components: {
            AppHeader,
            AppHeaderMobile,
            AppFooter,
            JobsIntro,
            MechatronicsEngJob
        }
    };
</script>
