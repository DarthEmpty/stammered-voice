<template>
  <div id="instructions" class="my-5">
    <v-flex class="my-5">
      <h2 class="headline">Instructions</h2>
    </v-flex>

    <v-flex class="my-5 px-5">
      <p class="body-1">
        Below, you should be able to see an area where you can log in or sign up to participate. <strong>The only reason you are required to do this is so that, in the case where you wish to see or delete your data, we can easily identify which recordings are yours.</strong> 
      </p>

      <p class="body-1">
        Once logged in, you will be presented with two panels - one grey and one green. When you are ready, click <strong>record ( <v-icon color="red">fas fa-circle fa-sm</v-icon> )</strong> on the grey panel and read the sentence presented on the green panel. Press the <strong>stop ( <v-icon color="red">fas fa-stop fa-sm</v-icon> )</strong> button on the grey panel when you're finished to stop recording yourself.
      </p>

      <p class="body-1">
        Ideally, recordings should consist of <strong>nothing but your voice</strong>, so, if you can help it please keep background noice to a minimum in your recordings. You'll have an opportunity to listen back to yourself once you've stopped recording to check for background noise. To do this, press <strong>play ( <v-icon color="black">fas fa-play fa-sm</v-icon> )</strong> on the grey panel.
      </p>

      <p class="body-1">
        If you are happy with the recording, you can submit it by clicking <strong>next ( <v-icon color="black">fas fa-arrow-right fa-sm</v-icon> )</strong> on the green panel. If not, however, you can record yourself again by clicking <strong>record ( <v-icon color="red">fas fa-circle fa-sm</v-icon> )</strong> on the grey panel.
      </p>

      <p class="body-1">
        Once you've submitted a recording, a different phrase will be presented to you on the green panel. You can record yourself saying however many phrases you'd like but I'd be very happy if you only went through five phrases. If you wish to do more after the fifth phrase, press <strong>restart ( <v-icon color="black">fas fa-undo fa-sm</v-icon> )</strong> to submit your fifth recording and to fetch five more random phrases.
      </p>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "Instructions"
}
</script>