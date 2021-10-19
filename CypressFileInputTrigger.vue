<!-- Copyright (c) 2021 Tan Shuai <opensource@tanshuai.com>, All rights reserved. -->
<!-- Licensed under the MIT license. See LICENSE file in the project root for details. -->
<!-- Free technical support service may be available to non-profit open source projects. -->


<template>
  <div>
    <h1>Cypress E2E Test FileInput for Vue Trigger</h1>
    <div>{{ msg }}</div>
    <input type="file" @input="change" ref="file" data-cy="file-input" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Waitting test for file input. ",
    };
  },
  methods: {
    change(e) {
      this.msg = "Open file: " + e.target.files[0].name + ", triggered!";

      console.log(this.msg);
    },
  },
};
</script>