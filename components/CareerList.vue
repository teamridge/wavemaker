<template>
    <ul id="example-1">
        <div class="row career-list" v-for="item in items">
            <div class="col md6 m6 m-bottom--x-large">
                <nuxt-link :to="item.roleSlug"><p>{{ item.name }}</p></nuxt-link>
                <nuxt-link  class="apply-btn" :to="item.roleSlug"><button class="button">Apply now</button></nuxt-link>
                <div class="row">
                    <h5>{{item.location}} - {{item.roleType}} - {{item.roleLength}}</h5>
                </div>
            </div>


        </div>
    </ul>
</template>


<script>
    export default {
        name: "CareerList",
        data() {
            return {
                items: [
                    { name: 'Systems Engineer', location: "Santa Monica, CA", roleType: "Engineering", roleLength: "Full-Time", roleSlug: "/sysengjob" },
                    { name: 'Computer Vision Engineer', location: "Santa Monica, CA", roleType: "Engineering", roleLength: "Full-Time", roleSlug: "/cvengjob" },
                    { name: 'Mechatronics Engineer', location: "Santa Monica, CA", roleType: "Engineering", roleLength: "Full-Time", roleSlug: "/mechatronicsengjob" },
                    { name: 'Mechanical Engineer', location: "Santa Monica, CA", roleType: "Engineering", roleLength: "Full-Time", roleSlug: "/meengjob" },
                    { name: 'Electrical Engineer', location: "Santa Monica, CA", roleType: "Engineering", roleLength: "Full-Time", roleSlug: "/eeengjob" },
                    { name: 'Sr. Electrical Engineer', location: "Santa Monica, CA", roleType: "Engineering", roleLength: "Full-Time", roleSlug: "/sreeengjob" },
                    { name: 'Sr. Mechanical Engineer', location: "Santa Monica, CA", roleType: "Engineering", roleLength: "Full-Time", roleSlug: "/srmeengjob" },
                ]
            };
        }
    };
</script>
