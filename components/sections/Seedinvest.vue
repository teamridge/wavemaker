<template>
    <section id="coinvest" class="seedinvest">
        <div class="row p-bottom--xx-large">
            <div class="col xs9 offset-xl1">
                <h1 class="title-primary m-bottom--x-small">Invest Alongside Us</h1>
            </div>
            <div class="col xs9 xl2 offset-xl1">
                <img src="~/static/company-logos/hitch-robot.png" alt="relativity">
                <h3 class="title-short m-bottom--x-small">Hitch</h3>
                <p class="title-small--grey m-bottom--large">Self-driving farm robots</p>
                <span><h5>Partner:</h5><p>HMC Farms</p></span>
                <ul class="contact">
                    <li class="text-small--grey m-bottom--large">Purchase Order: $2,000,000. 100 units</li>
                    <li class="text-small--grey m-bottom--large">Lead Investor: Wavemaker</li>
                </ul>
                <div id="hitchProgress" class="progress m-bottom--small">
                    <div id="hitchBar" class="progress-bar"></div>
                </div>
                <h3 class="title-short m-bottom--x-small">{{ hitch }}</h3>
                <p class="title-small--grey m-bottom--large">out of $2,000,000</p>
                <a class="button invest-button" href="https://www.seedinvest.com/hitch/" target="_blank">Invest</a>
            </div>
            <div class="col xs9 xl2 offset-xl1">
                <img src="~/static/company-logos/graze-robot.png" alt="relativity">
                <h3 class="title-short m-bottom--x-small">Graze</h3>
                <p class="title-small--grey m-bottom--large">Self-driving commercial mowers</p>
                <span><h5>Partners:</h5><p>LandCare, Mainscape</p></span>
                <ul class="contact">
                    <li class="text-small--grey m-bottom--large">Purchase Order: $36,000,000. 400 units</li>
                    <li class="text-small--grey m-bottom--large">Lead Investor: Wavemaker</li>
                </ul>
                <div id="grazeProgress" class="progress m-bottom--small">
                    <div id="grazeBar" class="progress-bar"></div>
                </div>
                <h3 class="title-short m-bottom--x-small">{{ graze }}</h3>
                <p class="title-small--grey m-bottom--large">out of $10,000,000</p>
                <a class="button invest-button" href="https://www.seedinvest.com/graze/" target="_blank">Invest</a>
            </div>
            <div class="col xs9 xl2 offset-xl1">
                <img src="~/static/company-logos/miso-robot.png" alt="relativity">
                <h3 class="title-short m-bottom--x-small">Miso</h3>
                <p class="title-small--grey m-bottom--large">Collaborative Kitchen Robots</p>
                <span><h5>Partner:</h5><p>CaliBurger</p></span>
                <ul class="contact">
                    <li class="text-small--grey m-bottom--large">Purchase Order: $11,000,000. 100 units</li>
                    <li class="text-small--grey m-bottom--large">Lead Investor: Wavemaker</li>
                </ul>
                <div id="misoProgress" class="progress m-bottom--small">
                    <div id="misoBar" class="progress-bar"></div>
                </div>
                <h3 class="title-short m-bottom--x-small">{{ miso }}</h3>
                <p class="title-small--grey m-bottom--large">out of $2,000,000</p>
                <a class="button invest-button" href="https://www.seedinvest.com/miso/" target="_blank">Invest</a>
            </div>
        </div>
    </section>
</template>

<script>
    import ProgressBar from 'vue-simple-progress'

    export default {
        name: "Seedinvest",

        async mounted() {
            const ip = await this.$axios.$get('http://ec2-18-223-182-2.us-east-2.compute.amazonaws.com:3000/raises/')
            console.log(ip);

            if (ip[0]) {
                this.hitch = ip[0];
                let hitchNumber = ((parseFloat(this.hitch.replace(/\$|,/g, '')))/2000000.00)*100.00;
                let elem = document.getElementById('hitchBar');
                elem.style.width = hitchNumber + "%";
            }
            if (ip[1]) {
                this.graze = ip[1];
                let grazeNumber = ((parseFloat(this.graze.replace(/\$|,/g, '')))/10000000.00)*100.00;
                let elem = document.getElementById('grazeBar');
                elem.style.width = grazeNumber + "%";
            }
            if (ip[2]) {
                this.miso = ip[2];
                let misoNumber = ((parseFloat(this.miso.replace(/\$|,/g, '')))/10000000.00)*100.00;
                let elem = document.getElementById('misoBar');
                elem.style.width = misoNumber + "%";

            }
        },
        data () {
            return {
                hitch: "$0",
                graze: "$0",
                miso: "$0"
            }
        }

    };
</script>

<style lang="scss" scoped>
    .progress {
        width: 100%;
        background-color: #ddd;
    }

    .progress-bar {
        width: 1%;
        height: 8px;
        background-color: #0058B5;
    }

    .invest-button {
        text-decoration: none;
    }

    #mc_embed_signup{clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}

</style>
