<template>
    <div class="heading-options position-relative">
        <!-- Selection Line -->
        <ul class="list-inline d-flex selection-option-wizard mb-0 z-depth-1 hoverable position-absolute">
            <li class="list-inline-item">
                <SelectionLine :restrict="restrict_components" position="before" @addComponent="$emit('addComponent',['before',$event])"></SelectionLine>
            </li>
            <li class="list-inline-item vr"></li>
            <li class="list-inline-item">
                <SelectionLine :restrict="restrict_components" position="after" @addComponent="$emit('addComponent',['after',$event])"></SelectionLine>
            </li>
            <li class="list-inline-item vr"></li>
            <li class="list-inline-item">
                <button @click="$emit('deleteComponent')" class="btn delete-btn btn-link btn-sm text-decoration-none d-flex text-danger align-items-center text-capitalize">
                    <span class="material-icons-sharp me-1" style="font-size: 16px"> delete </span> Delete
                </button>
            </li>
        </ul>

        <!-- Components -->
        <div class="form-check mb-3">
            <input :class="options.data.className" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                <editable v-model="options.data.labelName" />
            </label>
        </div>
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
    watch:{
        value:function(newVal) {   
            this.value = newVal
        }
    },
};
</script>
<style scoped>
@import '../assets/css/selection_option_wizard.css';
</style>
