<template>
  <div id="about" class="my-5">
    <v-flex class="my-5">
      <h1 class="headline">About</h1>
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

    </v-flex>
  </div>
</template>


<script>
export default {
  name: "About"
}
</script>
