Vue.component('cn-filter', {
    props: {
        cates: {
            type: Array,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    template: `
    <div class='cates'>
        <span
            v-for='item in cates'
            :key='item.id'
            v-text='item.label'
            :class='{"on": value==item.tab}'
            @click='$emit("input",item.tab)'
        >
        </span>
    </div>
    `
})