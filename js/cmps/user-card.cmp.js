export default {

    template: `
    <div class="user-card">
       
        <img v-bind:src="user.avatar" alt="">
        <h2>{{user.name}}</h2>
    </div>
    `,
     props:['user'],


   
   
    methods: {
       
    },
     created() {
    
    },
    computed: {
    },
   
}