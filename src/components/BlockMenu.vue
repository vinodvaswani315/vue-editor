<template>
    <div>
        <div class="row g-2">
            <div class="col-md-4" v-for="(component, index) in components" :key="index">
                <div class="component-btn d-flex flex-column justify-content-center cursor-pointer p-2 rounded" @click="addComponent(component)">
                    <div class="text-center"><span class="material-icons-outlined me-1">{{component.icon}}</span></div>
                    <div class="text-center text-capitalize"><small>{{component.type}}</small></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    props: {
        restrict: [],
    },
    data()
    {
        return{
            restrict_array: (this.restrict)? this.restrict : [],
            components: [
                {
                    type: "container",
                    icon: "check_box_outline_blank",
                    options:{
                        data: {
                            className: "container",
                        },
                        children: []
                    } 
                },
                {
                    type: "column",
                    icon: "view_week",
                    options:{
                         data: {
                            size: 6,
                        },
                        children: []
                    } 
                },
                {
                    type: "heading",
                    icon: "title",
                    options:{
                            data: {
                                className: "h1",
                                content: "h1. heading",
                            },
                        children: []
                    } 
                },
                {
                    type: "paragraph",
                    icon: "local_parking",
                    options:{
                            data: {
                                className: "p",
                                content: "This is a paragraph.",
                            },
                        children: []
                    } 
                },
                {
                    type: "custom_button",
                    icon: "smart_button",
                    options: {
                        data: {
                            buttonClass: "btn-primary",
                            buttonName: "Button"
                        },
                        children: []
                    }
                },
                {
                    type: "images",
                    icon: "perm_media",
                    options: {
                        data: {
                            className: [
                                'img-fluid', 
                                'd-block', 
                                'rounded'
                            ],
                            imageSource: "https://cdn.pixabay.com/photo/2021/11/21/22/08/british-shorthair-6815375_960_720.jpg",
                            imageHeight: "auto",
                            imageWidth: "auto",
                            alt: "Custom image"
                        },
                        children: []
                    }
                },
                {
                    type: "text_fields",
                    icon: "text_fields",
                    options: {
                        data: {
                            labelName: "Enter label name",
                            className: "form-control",
                            placeholder: "Enter placeholder",
                            inputType: "text",
                            inputID: "Intput ID",
                        }
                    }
                },
                {
                    type: "textareafields",
                    icon: "article",
                    options: {
                        data: {
                            labelName: "Enter label name",
                            rows: "3",
                            className: "form-control",
                        }
                    }
                },
                {
                    type: "selectfields",
                    icon: "playlist_add_check",
                    options: {
                        data: {
                            labelName: "Enter label name",
                            className: "form-select",
                        }
                    }
                },
                {
                    type: "checkboxfield",
                    icon: "check_box",
                    options: {
                        data: {
                            labelName: "Enter label name",
                            className: "form-check-input",
                        }
                    }
                },
                {
                    type: "radiofield",
                    icon: "radio_button_checked",
                    options: {
                        data: {
                            labelName: "Enter label name",
                            className: "form-check-input",
                        }
                    }
                },
                {
                    type: "switchfield",
                    icon: "toggle_on",
                    options: {
                        data: {
                            labelName: "Enter label name",
                            className: "form-check-input",
                        }
                    }
                },
                {
                    type: "rangefield",
                    icon: "linear_scale",
                    options: {
                        data: {
                            labelName: "Enter label name",
                            className: "form-range",
                        }
                    }
                },
                {
                    type: "file_input",
                    icon: "download",
                    options: {
                        data: {
                            labelName: "Enter label name",
                            className: "form-control",
                        }
                    }
                }
                
            ]
        }
    },
    created(){
        if (this.restrict_array.length) {
            this.components = this.components.filter((res) => !this.restrict_array.includes(res.type, length))
        }
    },
    methods:{
        addComponent(component)
        {   component['guid'] = uuidv4()
            const component2 = JSON.parse(JSON.stringify(component));
            this.$emit('add',component2)
        }
    }
};
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer!important;
}
.component-btn:hover{
    -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
    background-color: white;
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
.list-group-item:hover {
    color: #0d6efd;
}
.material-icons-outlined {
    font-size: 20px;
}
</style>