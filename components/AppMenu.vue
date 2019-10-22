<template>
  <!-- Desktop Menu -->
  <nav class="navbar" role="navigation">
    <!-- Brand Icon -->
    <div class="navbar-brand">
      <a href="#" class="logo-mark" v-bind:class="{show: toggleLogoMark}">
        <img src="~/static/logo-mark.png" alt="logo mark" class="responsive">
        <transition name="fade">
          <img src="~/static/logo-mark-white.png" alt="logo mark" class="responsive" v-if="isLogoMarkOverSection">
        </transition>
      </a>
    </div>
    <!-- /Brand Icon -->
    <!-- Menu -->
    <div class="navbar-menu">
      <div class="navbar-item">
        <a href="#" 
          v-scroll-to="'#mission'" 
          v-bind:class="{ active: mission, isOverSection: isMissionLinkOverSection}" 
          v-on:click="setActiveLink('mission')">Mission</a>
      </div>
      <div class="navbar-item">
        <a href="#" 
          v-scroll-to="'#portfolio'" 
          v-bind:class="{ active: portfolio, isOverSection: isPortfolioLinkOverSection }" 
          v-on:click="setActiveLink('portfolio')">Portfolio</a>
      </div>
      <div class="navbar-item">
        <a href="#"
           v-scroll-to="'#coinvest'"
           v-bind:class="{ active: coinvest, isOverSection: isCoinvestLinkOverSection }"
           v-on:click="setActiveLink('coinvest')">Co-Invest</a>
      </div>
      <div class="navbar-item">
        <a href="#" 
          v-scroll-to="'#funds'" 
          v-bind:class="{ active: funds, isOverSection: isFundsLinkOverSection }" 
          v-on:click="setActiveLink('funds')">Our Funds</a>
      </div>
      <div class="navbar-item">
        <a href="#" 
          v-scroll-to="'#team'" 
          v-bind:class="{ active: team, isOverSection: isTeamLinkOverSection }" 
          v-on:click="setActiveLink('team')">Team</a>
      </div>
      <div class="navbar-item">
        <a href="#" 
          v-scroll-to="'#careers'" 
          v-bind:class="{ active: careers, isOverSection: isCareersLinkOverSection }" 
          v-on:click="setActiveLink('careers')">Careers</a>
      </div>

    </div>
    <!-- /Menu -->
  </nav>
  <!-- /Desktop Menu -->
</template>

<script>
export default {
  name: "AppMenu",
  data() {
    return {
      mission: false,
      isMissionLinkOverSection: false,
      portfolio: false,
      coinvest: false,
      isPortfolioLinkOverSection: false,
      funds: false,
      isFundsLinkOverSection: false,
      team: false,
      isTeamLinkOverSection: false,
      careers: false,
      isCareersLinkOverSection: false,
      isCoinvestLinkOverSection: false,
      toggleLogoMark: false,
      isLogoMarkOverSection: false
    };
  },
  methods: {
    setActiveLink(current_link) {
      // Reset Active Link Styles
      this.mission = false;
      this.portfolio = false;
      this.coninvest = false;
      this.funds = false;
      this.team = false;
      this.careers = false;
      // Set Active Link
      if (current_link === "mission") {
        this.mission = true;
      }
      if (current_link === "portfolio") {
        this.portfolio = true;
      }
      if (current_link === "portfolio") {
        this.coinvest = true;
      }
      if (current_link === "funds") {
        this.funds = true;
      }
      if (current_link === "team") {
        this.team = true;
      }
      if (current_link == "careers") {
        this.careers = true;
      }
    },
    handleScrollEvents(event) {
      // Get Y scroll position
      let scrollVal = window.scrollY;
      // console.log(scrollVal);

      // Show/Hide Logomark
      if (scrollVal > 148) {
        this.toggleLogoMark = true;
      } else {
        this.toggleLogoMark = false;
      }

      // Show/Hide Links
      if (scrollVal >= 400 && scrollVal <= 1355) {
        this.mission = true;
      } else {
        this.mission = false;
      }

      if (scrollVal >= 1356 && scrollVal < 2518) {
        this.portfolio = true;
      } else {
        this.portfolio = false;
      }

      // 944px long 3463px long
      if (scrollVal >= 2519 && scrollVal < 3572) {
        this.coninvest = true;
      } else {
        this.coninvest = false;
      }

      //724px long
      if (scrollVal >= 3572 && scrollVal < 4296) {
        this.funds = true;
      } else {
        this.funds = false;
      }

      //1258px
      if (scrollVal >= 4297 && scrollVal < 5554) {
        this.team = true;
      } else {
        this.team = false;
      }

      if (scrollVal >= 5555) {
        this.careers = true;
      } else {
        this.careers = false;
      }

      //add careers thing here???????????? what would the numbers be 
      // Toggle CSS class based on background section
      // Mission Link
      if (
        (scrollVal >= 400 && scrollVal <= 850) ||
        (scrollVal >= 1437 && scrollVal <= 2088)
      ) {
        this.isMissionLinkOverSection = true;
      } else {
        this.isMissionLinkOverSection = false;
      }

      // Portfolio Link
      if (
        (scrollVal >= 310 && scrollVal <= 777) ||
        (scrollVal >= 1356 && scrollVal <= 2012)
      ) {
        this.isPortfolioLinkOverSection = true;
      } else {
        this.isPortfolioLinkOverSection = false;
      }

      // CoInvest Link
      if (
              (scrollVal >= 310 && scrollVal <= 777) ||
              (scrollVal >= 1356 && scrollVal <= 2012)
      ) {
        this.isCoinvestLinkOverSection = true;
      } else {
        this.isCoinvestLinkOverSection = false;
      }

      // Funds Link
      if (
        (scrollVal >= 217 && scrollVal <= 700) ||
        (scrollVal >= 1276 && scrollVal <= 1927)
      ) {
        this.isFundsLinkOverSection = true;
      } else {
        this.isFundsLinkOverSection = false;
      }

      // Team Link
      if (
        (scrollVal >= 136 && scrollVal <= 594) ||
        (scrollVal >= 1184 && scrollVal <= 1836)
      ) {
        this.isTeamLinkOverSection = true;
      } else {
        this.isTeamLinkOverSection = false;
      }

      //Careers Link
      //fix this 
      if (
        (scrollVal >= 542 && scrollVal <= 725) ||
        (scrollVal >= 1200 && scrollVal <= 2000)
        ) { 
        this.isCareersLinkOverSection = true;
      } else {
        this.isCareersLinkOverSection = false;
      }
      

      // Toggle logo over sections
      if (
        (scrollVal >= 480 && scrollVal <= 950) ||
        (scrollVal >= 1531 && scrollVal <= 2183)
      ) {
        this.isLogoMarkOverSection = true;
      } else {
        this.isLogoMarkOverSection = false;
      }
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScrollEvents);
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
