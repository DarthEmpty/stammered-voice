<template>
  <div id="intro" class="my-5">
    <v-flex class="my-5">
      <h1 class="headline">Welcome to</h1>
      <h1 class="display-3">Stammered Voice</h1>
    </v-flex>
        
    <v-flex class="my-5 px-5">
      <p class="body-1">
        This site - heavily inspired by <a href="https://voice.mozilla.org/en"><strong>Common Voice</strong></a> - has been produced in order to aid my thesis. Said thesis is dedicated to improving <strong>Voice Assisstants</strong> like <em>Google Home</em> and <em>Amazon Echo</em> in a way that allows them to understand stammered speech.
      </p>

      <p class="body-1">
        I've decided to take a <strong>Machine Learning</strong> approach to solve this issue. This basically means that a system uses statistics to learn from every observation that it makes. Modern Voice Assistants use Machine Learning to learn how to interpret a human's voice.
      </p>

      <p class="body-1">
        In order to do Machine Learning to a good standard, however, lots and lots of observations are needed. In the context of Voice Assistants, this means that a system has to interpret many voices saying different things before it's able to accurately interpret human speech reliably.
      </p>

      <p class="body-1">
        This is where <strong>you</strong> come in! By recording your voice using the interactive blocks below, you will be providing me with the observations needed to change the way that Voice Assistants listen - helping them to become more tolerant and attentive to your voice.
      </p>

      <p class="body-1">
        If, at any point, you have any questions or requests, feel free to email me at the address that can be found by clicking the <v-icon color="black">fas fa-at fa-sm</v-icon> symbol at the bottom of this page
      </p>


      <h2 class="headline mt-5 mb-3">
        Instructions
      </h2>

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
  name: "Intro"
}
</script>
