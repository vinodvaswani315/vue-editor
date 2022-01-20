import Vue from 'vue'
import App from './App.vue'

import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import Button from '@/components/Button'
import Images from '@/components/Images'
import TextFields from '@/components/TextFields'
import TextAreaFields from '@/components/TextAreaFields'
import SelectFields from '@/components/SelectFields'
import CheckBoxField from '@/components/CheckBoxField'
import RadioField from '@/components/RadioField'
import SwitchField from '@/components/SwitchField'
import RangeField from '@/components/RangeField'
import FileInput from '@/components/FileInput'
import Editable from '@/components/Editable'
import SelectionLine from '@/components/SelectionLine'
import BraveDialog from '@/components/BraveDialog'
import BraveContextMenu from '@/components/BraveContextMenu'
import BravePositionDialog from '@/components/BravePositionDialog'


Vue.component('heading', Heading)
Vue.component('images', Images)
Vue.component('paragraph', Paragraph)
Vue.component('custom_button', Button)
Vue.component('text_fields', TextFields)
Vue.component('textareafields', TextAreaFields)
Vue.component('selectfields', SelectFields)
Vue.component('checkboxfield', CheckBoxField)
Vue.component('radiofield', RadioField)
Vue.component('switchfield', SwitchField)
Vue.component('rangefield', RangeField)
Vue.component('file_input', FileInput)
Vue.component('editable', Editable)
Vue.component('selectionline', SelectionLine)
Vue.component('bravedialog', BraveDialog)
Vue.component('bravecontextmenu', BraveContextMenu)
Vue.component('BravePositionDialog', BravePositionDialog)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
