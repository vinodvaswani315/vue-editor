<template>
    <div
        ref="editable"
        contenteditable
        v-on="listeners"
        placeholder="start typing here..."
    />
</template>

<script>
export default {
  props: {
    value: {
      // type: String,
      default: '',
    },
  },
  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },
  },
watch: { 
        value: function(newVal)
        {   // watch it
            // this.$refs.editable.innerText = newVal;
            this.$emit('input', newVal);
        }
},
 mounted()
 {
    if(typeof this.value === 'object')
    this.$refs.editable.innerText = this.value.text;
    else
    this.$refs.editable.innerText = this.value;
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.innerText);
    },
  },
};
</script>
<style>
[contenteditable=true]:empty:before {
  content: attr(placeholder);
  pointer-events: none;
  display: block; /* For Firefox */
}
</style>