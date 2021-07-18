const app = new Vue({
    el: '#app',
    data() {
        return {
            activeData: 'D1',
            drawDown: false,
            worksData: {
                D1: [
                    './images/works/A-1.jpeg',
                    './images/works/A-2.jpeg',
                    './images/works/A-3.jpeg',
                    './images/works/A-4.jpeg',
                ],
                D2: [
                    './images/works/B-1.jpeg',
                    './images/works/B-2.jpeg',
                    './images/works/B-3.jpeg',
                    './images/works/B-4.jpeg',
                    './images/works/B-5.jpeg',
                    './images/works/B-6.jpeg',
                ],
                D3: [
                    './images/works/C-1.jpeg',
                    './images/works/C-2.jpeg',
                    './images/works/C-3.jpeg',
                    './images/works/C-4.jpeg',
                    './images/works/C-5.jpeg',
                    './images/works/C-6.jpeg',
                    './images/works/C-7.jpeg',
                ],
                D4: [
                    './images/works/D-1.jpg',
                    './images/works/D-2.jpg',
                    './images/works/D-3.jpg',
                    './images/works/D-4.jpg',
                    './images/works/D-5.jpg',
                    './images/works/D-6.jpg',
                ],
            }
        }
    },
    methods: {
        scrollPop(dom) {
            const domOffset = this.$refs[dom].offsetTop || 0
            window.scrollTo({
                top: domOffset,
                behavior: 'smooth'
            });
            if (window.innerWidth <= 768) {
                this.drawDown = false
            }
        },
        selectWorks(data) {
            this.activeData = data
            this.$refs.works_main.scrollTop = 0
        },
        drawDownNav() {
            this.drawDown = !this.drawDown
            console.log(this.drawDown)
            return
        },
    },
    computed: {
        activeWork() {
            return this.worksData[this.activeData]
        }
    },
    mounted() {
        console.log('init')
    },
})