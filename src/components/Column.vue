<template>
    <div :class="columnClass" class="column-wizard position-relative p-4">
        <div class="btn-group add-selection-line-root position-absolute top-0 end-0 m-2" role="group" aria-label="Basic mixed styles example">
            
            <selectionline :restrict="restrict_components" @addComponent="addComponent(options.children.length, 'after', $event)"></selectionline>

            <button @click="$emit('deleteComponent')" type="button" class="z-depth-1 hoverable btn btn-danger border-0 rounded-0 p-0 btn-sm d-flex justify-content-center align-items-center" title="Delete Column">
                <span class="material-icons" style="font-size: 20px"> clear </span>
            </button>
        </div>

        <template v-for="(node, index) in options.children" >
            <component @editComponent="$emit('editComponent')" @deleteComponent="deleteComponent(index)" @addComponent="addComponent(index, ...$event)" :key="node.guid" :is="node.type" v-model="node.options"></component>
        </template>
    </div>
</template>

<script>
import SelectionLine from './SelectionLine.vue';
export default {
    components: { SelectionLine },
    props: ["value"],
    data() {
        return {
            options: this.value,
            column_size: 6,
            restrict_components: ['container','column']
        };
    },
    computed: {
        columnClass() {
            return `col-md-${this.options.data.size}`;
        },
    },
    methods: {
        addComponent(index, position, node) {
            index = position == "after" ? ++index : index;
            this.options.children.splice(index,0, node)
        },
        deleteComponent(index) {
            this.options.children.splice(index,1)
        }
    },
    watch: {
        value: function (newVal) {
            this.options = newVal;
            this.column_size = !this.options.data.size ? this.options.data.size : this.column_size;
        },
    },
};
</script>

<style scoped>
/* BEGIN: selection-option-wizard */
.add-selection-line-root{
    display: none!important;
}
.column-wizard:hover .add-selection-line-root{
    display: flex!important;
}

.add-selection-line-root >>> .selection-option-btn {
    color: white;
    border: 0!important;
    border-radius: 0!important;
    background-color: #0d6efd!important;
    padding: 0;
    -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
}
.add-selection-line-root >>> .selection-option-btn:hover{
    -webkit-box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%),
    0 6px 20px 0 rgb(0 0 0 / 19%);
    box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}
.add-selection-line-root >>> .selection-option-btn span {
    margin-right: 0!important;
    font-size: 20px!important;
}
.selection-option-btn:hover {
    background-color: rgba(255, 255, 255, 0.16);
}
.column-wizard:hover {
  outline: 3px solid #0d6efd75;
}

.hover-plus {
    border: 1px dashed #dadce0;
    height: 40px;
}
.text-area {
    color: #cacbcd;
    display: block;
}
.hover-plus:hover .text-area {
    display: none;
}

.h-plus {
    display: none;
}

.hover-plus:hover >>> .selection-option-btn {
    display: flex!important;
}
/* END: selection-option-wizard */
.z-depth-1 {
    -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
}

.hoverable:hover {
    -webkit-box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%),
    0 6px 20px 0 rgb(0 0 0 / 19%);
    box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}
</style>