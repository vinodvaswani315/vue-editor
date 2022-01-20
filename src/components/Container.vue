<template>
    <div>
        <div class="container-wizard position-relative">
            <!-- BEGIN: Column option dropdown menu -->
            <div class="col-option-menu position-absolute m-2 top-0 end-0">
                <div @click="$emit('deleteComponent')" class="btn btn-danger btn-sm d-flex align-items-center me-2 z-depth-1 hoverable">
                    <span class="material-icons-round me-1" style="font-size: 20px"> delete_forever </span> Container
                </div>
                <div class="dropdown">
                    <button aria-expanded="false" class="btn col-option-btn btn-primary btn-sm d-flex align-items-center z-depth-1 hoverable" data-bs-toggle="dropdown" id="columnOptionDropdown" type="button"><span class="material-icons-outlined me-1">add</span>Columns</button>
                    <div aria-labelledby="columnOptionDropdown" class="dropdown-menu column-option-box z-depth-1 border-0 mt-1 p-3">
                        <div class="row g-3">
                            <!-- Card Demo Box col -->
                            <div class="col-md-4" v-for="colsize in colsizes" :key="colsize.column">
                                <div class="card h-100 card-demo-box" @click="addColumn(colsize.column)">
                                    <div class="card-body p-2">
                                        <div class="row g-2">
                                            <!-- Demo Placeholder Col -->
                                            <div v-for="(single_preview, index) in colsize.preview" :key="index" :class="'col-'+colsize.column" >
                                                <div class="card demo-placeholder alert-secondary border-0 text-center px-2 py-4"></div>
                                            </div>
                                            <div class="col-12 text-center">
                                                <ul class="list-inline counter-list mb-0">
                                                    <li class="list-inline-item me-0" v-for="(single_preview, index) in colsize.preview" :key="index">
                                                        <small>1/{{colsize.preview.length}}</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END: Column option dropdown menu -->

            <!-- BEGIN: Container section -->
            <section class="py-5">
                <div :class="options.data.className">
                    <div class="row">
                        <template v-for="(node, index) in options.children">
                            <component @editComponent="$emit('editComponent')"  @deleteComponent="deleteComponent(index)" @addComponent="addComponent(index, ...$event)" :key="node.guid" :is="node.type" v-model="node.options"></component>
                        </template>
                    </div>
                </div>
            </section>
            <!-- END: Container section -->
        </div>
    </div>
</template>

<script>
import Column from "@/components/Column.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: { Column },
  props: ["value"],
  data() {
    return {
      options: this.value,
      colsizes: [
          { column: '12', preview: [12] },
          { column: '6', preview: [6, 6] },
          { column: '4', preview: [4, 4, 4] },
          { column: '3', preview: [3, 3, 3, 3] },
          { column: '2', preview: [2, 2, 2, 2, 2, 2] },
      ]
    };
  },
  methods: {
    addComponent(index, position, node) {
      index = position == "after" ? ++index : index;
      this.options.children.push(node);
    },
    deleteComponent(index) {
        this.options.children.splice(index,1)
    },
    generateDynamicTemplate(col_size) {
      const column_arr = [];
      const counter = 12 / col_size;
      for (let index = 0; index < counter; index++) {
        const template = {
          guid: uuidv4(index),
          type: "column",
          options: {
            data: {
              size: 12 / counter,
            },
            children: [],
          },
        };
        column_arr.push(template);
      }
      return column_arr;
    },
    addColumn(col_size) {
      this.options.children.push.apply(
        this.options.children,
        this.generateDynamicTemplate(col_size)
      );
    },
  },
  watch: {
    value: function (newVal) {
      this.options = newVal;
    },
  },
};
</script>

<style scoped>
.col-option-menu {
  display: none;
  z-index: 1000;
}
.container-wizard:hover {
  outline: 3px solid #0d6efd75;
}
.container-wizard:hover .col-option-menu {
  display: flex;
}
.container-wizard .col-option-menu .material-icons-outlined {
  font-size: 16px;
}
.col-option-btn:focus {
  box-shadow: none !important;
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
.column-option-box {
  width: 700px;
}
.card-demo-box {
  border: 1px dashed #dadce0;
  cursor: pointer;
}
.card-demo-box:hover {
  border: 1px solid #0d6efd;
}
.card-demo-box:hover .demo-placeholder {
  background-color: #0d6efd;
  color: white;
}
.counter-list .list-inline-item:after {
    content: "-";
    margin: 0 2px
}
.counter-list .list-inline-item:last-child:after {
    content: "";
}
</style>