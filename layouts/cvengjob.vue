<template>
    <div class="wrapper job-wrapper">
        <main>
            <JobsIntro/>
            <CVEngJob/>
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
    import CVEngJob from "~/components/jobs/CVEngJob.vue";

    export default {
        components: {
            AppHeader,
            AppHeaderMobile,
            AppFooter,
            JobsIntro,
            CVEngJob
        }
    };
</script>
