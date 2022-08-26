---
layout: default
title: Home
permalink: /
---

<div id="scrollspy">
  <div id='about' class="mx-auto my-auto text-center prose">
    <div class="">
      <img class="object-cover mx-auto h-64 w-64 rounded-full" src="{{site.baseurl}}/assets/img/{{site.author-image}}"
        alt="author profile image" />
      <h1 class="text-{{site.theme-color}}-500 dark:text-{{site.theme-color}}-300">
        {{site.author}}
      </h1>

      {% if site.author-bio %}
        <p class="text-gray-500 pb-4">{{site.author-bio}}</p>
      {% endif %}
    </div>
  </div>

</div>


