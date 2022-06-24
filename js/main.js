const { createApp } = Vue


import userCard from './cmps/user-card.cmp.js'
import showCard from './cmps/show-card.cmp.js'


const options = {
    template: `

      <section v-if="isTvList" class="tv-list-seciton">
    <h2>Hellow<span>{{currUser.name}}</span></h2>
    <img class="img-avatar" v-bind:src="currUser.avatar" alt="">
    <button v-on:click="isTvList = false">Switch user </button>
   
        <div class="tv-cards">
            <div v-for="show in currUser.tvShows" class="tv-card">
                <show-card v-bind:show="show"/>
            </div>
        </div>
    </section>
    <div v-else class="users-container">
        <div class="user-card" v-for="user in users">
            <button class="delete-user" v-on:click="removeUser(user.id)">&Cross;</button>
            <user-card v-bind:user="user" v-on:click="openTvList(user.id)" />
        </div>
    </div>
    <div v-if="showModal" class="overlay"></div>

  
    
          <button class="add-new-user-btn" v-if="!isTvList" v-on:click="onShowModal">Add new User</button>
    <section v-if="showModal" class="form-modal">
    <form>
        <h2>Add new User</h2>
        <label for="input-user-name" >Name</label>
        
        <input v-on:keyup.enter="addUser" v-model="name" id="input-user-name" type="text">
        <button class="add-btn" v-on:click.prevent="addUser" >Add user</button>
        <button class="cencel-btn" v-on:click.prevent="onCloseModal">Cencel</button>
    </form>
</section>

    `,
    data() {
        return {
              users:[
                { id: 'p101', name: 'Shabi', age: 8 , avatar: '../images/avatar1.png',
            tvShows: [
            {name:'friends',img: '../images/friends.png'},
            {name:'avater',img: '../images/avatarAng.jpeg'},
            {name:'braking bad',img: '../images/braking-bad.png'},
            ]
            },
                { id: 'p102', name: 'Momo', age: 4 ,avatar: '../images/avatar2.png',
            tvShows: [
            {name:'friends',img: '../images/friends.png'},
            {name:'avater',img: '../images/avatarAng.jpeg'},
            {name:'braking bad',img: '../images/braking-bad.png'},
            ]
            },
                { id: 'p103', name: 'Sofi', age: 18 ,avatar: '../images/avatar3.png',
            tvShows: [
            {name:'friends',img: '../images/friends.png'},
            {name:'avater',img: '../images/avatarAng.jpeg'},
            {name:'braking bad',img: '../images/braking-bad.png'},
            ]},
                { id: 'p104', name: 'Chipi', age: 6 ,avatar: '../images/avatar4.png',
            tvShows: [
            {name:'friends',img: '../images/friends.png'},
            {name:'avater',img: '../images/avatarAng.jpeg'},
            {name:'braking bad',img: '../images/braking-bad.png'},
            ]
            },
            ],
            input: 'hii',
            showModal: false,
            isTvList: false,
            name: '',
            currUserIdx: 1,
      
        }
    },
    methods: {
        
           onCloseModal() {
            this.showModal = false
        },
        onShowModal() {
            this.showModal = true

        },
        addUser() {
        
            const newUser =  { id: '333', name: this.name, age: 8 , avatar: '../images/avatar1.png',
        tvShows:[{name:'No tv shows yet..',img: '../images/sad.jpeg'}],
        }
            console.log(this.users);
            
            this.users.push(newUser)
            this.onCloseModal()
           
        },
        removeUser(userId){

            console.log(userId);

            this.users = this.users.filter(user => user.id !== userId)
        },

        openTvList(userId) {
            this.isTvList = true
            this.currUserIdx = this.users.findIndex(user => user.id === userId)
            
        }
  
    },
    computed: {
        currUser () {
            return this.users[this.currUserIdx]
        }
  
        },
   
created() {
}
}
const app = createApp(options)


app.component('userCard',userCard)
app.component('showCard',showCard)



app.mount('#app')
