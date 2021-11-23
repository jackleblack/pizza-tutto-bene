<template>
  <Badge
    :classname="`bg-variant-${variant.title}-500 text-variant-${variant.title}-100`"
    ><slot></slot
  ></Badge>
</template>
<script>
import Badge from './Badge'

export default {
  name: 'BadgeVariant',
  components: { Badge },
  props: {
    variant: { type: Object, required: true },
  },
}
</script>
