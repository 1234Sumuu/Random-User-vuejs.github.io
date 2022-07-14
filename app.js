const app = Vue.createApp({
    // template: '<h1>Hello </h1>',
    data() {
        return {
            firstName: 'Sumu',
            lastName: 'Su',
            email: 'sumu@gmail.com',
            gender: 'female',
            picture: 'https://www.eventstodayz.com/wp-content/uploads/2017/10/cute-little-girls-hd-image.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app')