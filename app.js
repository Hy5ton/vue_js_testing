const  App = {
    data() {
        return {
            placeholderString: 'Введите своё число',
            title: 'Список чисел',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        loadNote() {
            for( let i = 0; i < 5; i++) {
                let y = this.getRandomInt(10000).toString();
                this.notes.push(y)
            }
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        }
    }
}

Vue.createApp(App).mount('#app')


