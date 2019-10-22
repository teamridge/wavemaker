<template>
    <div class="wrapper job-wrapper">
        <main>
            <JobsIntro/>
            <SrEEEngJob/>
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
    import SrEEEngJob from "../components/jobs/SrEEEngJob";

    export default {
        components: {
            AppHeader,
            AppHeaderMobile,
            AppFooter,
            JobsIntro,
            SrEEEngJob,
        }
    };
</script>