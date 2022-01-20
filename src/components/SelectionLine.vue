<template>
    <div>
        <BravePositionDialog ref="bravedialog" style="max-width: 500px;width:350px" class="bg-light rounded z-depth-1">
            <template #header>
                <div class="p-2">
                    <div class="btn w-100 btn-primary btn-sm text-white z-depth-1 hoverable" @click="$refs.bravedialog.hide()">Close</div>
                </div>
            </template>
            <template #body>
                <div class="p-2">
                    <BlockMenu :restrict="restrict" @add="$emit('addComponent', $event)" />
                </div>
            </template>
            <template #footer>
                <div class="p-2">
                    <div class="btn w-100 btn-primary btn-sm text-white z-depth-1 hoverable" @click="$refs.bravedialog.hide()">Close</div>
                </div>
            </template>
        </BravePositionDialog>


        <button @click="$refs.bravedialog.show($event)" type="button" class="btn btn-link selection-option-btn btn-sm text-decoration-none d-flex align-items-center text-capitalize">
            <span class="material-icons-sharp me-1" style="font-size: 16px">add</span>{{position}}
        </button>
    </div>
</template>

<script>
import BlockMenu from "@/components/BlockMenu";

export default {
    props: ['restrict','position'],
    components: {
        BlockMenu,
    },
};
</script>

<style scoped>
.selection-option-btn {
    color: white;
}
.selection-option-btn:focus {
    box-shadow: none!important;
}
.selection-option-btn:hover {
    background-color: rgba(255, 255, 255, 0.16);
}
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