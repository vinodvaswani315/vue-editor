<template>
    <div id="app">
        <!-- Call Component Tree -->
        <template v-for="(component, index) in componentTree">
            <component @deleteComponent="deleteComponent(index)" @editComponent="$emit('editComponent')" :key="component.guid" @addComponent="addComponent(index, ...$event)" :is="component.type" v-model="component.options"></component>
        </template>

        <!-- <div class="p-2 hover-plus text-center my-3">
            <div class="h-100 d-flex justify-content-center align-items-center">
                <span class="d-flex">
                    <selectionline class="add-selection-line-root" @addComponent="addComponent(componentTree.length, 'after', $event)"></selectionline>
                    <div class="text-area">Hover to add Component in body here...</div>
                </span>
            </div>
        </div>
        <div class="offcanvas offcanvas-end shadow border-0" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasEditPanel" aria-labelledby="offcanvasEditPanelLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title d-flex align-items-center" id="offcanvasEditPanelLabel">
                    <span class="material-icons-outlined me-1">article</span>
                    <span class="ms-1">image Edit</span>
                </h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                  <component :is="config" ></component>
            </div>
        </div>    -->



      <BraveDropMenu class="me-3">
      <template #button>
        <div role="button" class="btn btn-primary text-white px-3 "> <i class="bi bi-plus-lg"></i> Button <i class="bi bi-chevron-down"></i></div>
      </template>
      <template #menu>
          <h1>s sdsdsdsd</h1>
        <div class="list-group bg-white shadow" style="min-width:200px;" >
          <div role="button" class="list-group-item list-group-item-action"><i class="bi me-1 bi-person-plus"></i> A second link item</div>
          <div role="button" class="list-group-item list-group-item-action"><i class="bi me-1 bi-envelope-plus"></i> A second link item</div>
        </div>
      </template> 
    </BraveDropMenu>
    </div>
</template>

<script>
import Container from "@/components/Container.vue";
import Column from "@/components/Container.vue";
import BlockMenu from "@/components/BlockMenu.vue";
import ImageConfig from "@/components/ImageConfig.vue";
import { v4 as uuidv4 } from "uuid";
import {BraveDropMenu} from "bravevue";

export default {
    name: "editable",
    data() {
        return {
            config: 'ImageConfig',
            componentTree: [{
                guid: uuidv4(),
                type: "container",
                options: {
                    data: {
                        className: "container",
                    },
                    children: [{
                            guid: uuidv4(),
                            type: "column",
                            options: {
                                data: {
                                    size: 6,
                                },
                                children: [{
                                    guid: uuidv4(),
                                    type: "heading",
                                    options: {
                                        data: {
                                            className: "h1",
                                            content: "Hey wooooh wooooh ",
                                        },
                                        children: null,
                                    },
                                },],
                            },
                        },
                        {
                            guid: uuidv4(),
                            type: "column",
                            options: {
                                data: {
                                    size: 6,
                                },
                                children: [{
                                    guid: uuidv4(),
                                    type: "heading",
                                    options: {
                                        data: {
                                            className: "h1",
                                            content: "Hey wooooh wooooh ",
                                        },
                                        children: null,
                                    },
                                },],
                            },
                        },
                    ],
                },
            },],
        };
    },
    methods: {
        addComponent(index, position, component) {
            index = position == "after" ? ++index : index;
            this.componentTree.splice(index, 0, component);
        },
        editComponent(VarEdit) {
            alert(VarEdit);
        },
        deleteComponent(index) {
            this.componentTree.splice(index,1)
        }
    },
    mounted() {
        this.$root.$on("openOptions", () => {
            this.$refs.metaDialog.show();
        });
    },
    components: {
        Container,
        Column,
        BlockMenu,
        ImageConfig,
        BraveDropMenu
    },
};
</script>

<style scoped> 
/* BEGIN: selection-option-wizard */
.add-selection-line-root >>> .selection-option-btn {
    color: white;
    display: none!important;
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
