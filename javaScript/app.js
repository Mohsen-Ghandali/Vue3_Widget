const app = Vue.createApp({
    data() {
        return {
            users: "Alex Müller",
            userName: "alex-müller",
            emailUser: "alex-müller@test.com",
            age: 45,
            resetAge: 45,
            showContainer: true,
            mouseOver: false,
            mouseLeave: false,
            doubleClick: false,
            x: 0,
            y: 0,
        };
    },
    methods: {
        reset() {
            this.age = this.resetAge;
        },
        changeEmail(email) {
            this.emailUser = email;
        },
        hideBtn() {
            this.showContainer = !this.showContainer;
        },
        handleMouseOver(e) {
            this.mouseOver = !this.mouseOver;
        },
        handleMouseLeave(e) {
            this.mouseLeave = !this.mouseLeave;
        },
        handleDoubleClick(e) {
            this.doubleClick = !this.doubleClick;
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
    },
})

app.mount("#app")
