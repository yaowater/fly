Vue.component('cn-page', {
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    computed: {
        pages: function() {
            var p = this.value
            return p<=3 ? [1,2,3,4,5] : [p-2,p-1,p,p+1,p+2]
        }
    },
    template: `
    <div class='pages'>
        <span @click='prev'><<</span>
        <span v-if='value>3'>...</span>

        <span 
            v-for='i in pages' 
            v-text='i'
            :class='{"on": value==i}'
            @click='$emit("input", i)'
        >
        </span>

        <span>...</span>
        <span @click='$emit("input", value+1)'>>></span>
    </div>
    `,
    methods: {
        prev: function() {
            // y
            // console.log('this.value',this.value);
            if (this.value == 1) return alert('已经是第一页了')
            this.$emit('input', this.value-1)
        }
    }
})