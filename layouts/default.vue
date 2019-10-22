<template>
  <div class="wrapper"> 
    <AppHeader/>
    <AppHeaderMobile/>
    <main>
      <Intro/>
      <MissionHero/>
      <Mission/>
      <Portfolio/>
      <CompanyLogos/>
      <Seedinvest/>
      <Funds/>
      <Team/>
      <Careers/>
    </main>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppHeaderMobile from "~/components/AppHeaderMobile.vue";
import AppFooter from "~/components/AppFooter.vue";
import Intro from "~/components/sections/Intro.vue";
import MissionHero from "~/components/sections/MissionHero.vue";
import Mission from "~/components/sections/Mission.vue";
import Portfolio from "~/components/sections/Portfolio.vue";
import CompanyLogos from "~/components/sections/CompanyLogos.vue";
import Funds from "~/components/sections/Funds.vue";
import Team from "~/components/sections/Team.vue";
import Seedinvest from "~/components/sections/Seedinvest.vue";
import Careers from "~/components/sections/Careers.vue";

export default {
  components: {
    AppHeader,
    AppHeaderMobile,
    AppFooter,
    Intro,
    Seedinvest,
    MissionHero,
    Mission,
    Portfolio,
    CompanyLogos,
    Funds,
    Team,
    Careers
  }
};
</script>