<template>
    <div class="wrapper job-wrapper">
        <main>
            <JobsIntro/>
            <SysEngJob/>
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
    import SysEngJob from "~/components/jobs/SysEngJob.vue";

    export default {
        components: {
            AppHeader,
            AppHeaderMobile,
            AppFooter,
            JobsIntro,
            SysEngJob
        }
    };
</script>
