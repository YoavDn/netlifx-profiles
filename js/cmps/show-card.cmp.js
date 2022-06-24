export default {

    template: `
    <div class="show-card">
        <img v-bind:src="show.img" alt="">
        <h2>{{show.name}}</h2>
    </div>
    `,
     props:['show'],


   
   
    methods: {
       
    },
     created() {
       
    
    },
    computed: {
    },
   
}