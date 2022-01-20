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
        <button type="button" class="btn" :class="options.data.buttonClass">
            <editable v-model="options.data.buttonName" />
        </button>
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
            restrict_components: ['container','column']
        };
    },
};
</script>
<style scoped>
@import '../assets/css/selection_option_wizard.css';
</style>
