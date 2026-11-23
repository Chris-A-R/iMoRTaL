---
layout: home
permalink: /
permalink_name: home
title: iMoRTaL.exe
---

<div class="boot" id="boot">
  <div class="boot-line">&gt; initializing iMoRTaL.exe...</div>
  <div class="boot-line">&gt; loading modules: iam endpoint network ........ [ OK ]</div>
  <div class="boot-line">&gt; Chris | Cyber Professional</div>
  <div class="boot-line boot-final">&gt; Documenting what I learn, build, and break</div>
</div>

<div class="now-studying">
  <span class="svc-dot">●</span> currently studying for <strong>HTB CPTS</strong>
</div>

<div class="home-section">
<div class="whoami-cmd">$ ls -l ~</div>
<ul class="dir-list">
  <li><span class="dir-perms">drwxr-xr-x</span> <a href="{{ '/about-me' | relative_url }}">about-me/</a> <span class="dir-desc"># who I am, experience, socials</span></li>
  <li><span class="dir-perms">drwxr-xr-x</span> <a href="{{ '/certs/' | relative_url }}">certs/</a> <span class="dir-desc"># {{ site.certs | size }} certifications + write-ups</span></li>
</ul>
</div>

<div class="home-section">
<div class="whoami-cmd">$ cat now.txt</div>
<ul class="now-list">
  <li>writing up my certification journeys</li>
  <li>sharpening skills on Hack The Box &amp; TryHackMe</li>
  <li>looking for my next role</li>
</ul>
</div>

{% assign latest = site.certs | sort: "earned" | last -%}
{%- if latest -%}
<div class="home-section latest-writeup">
<div class="whoami-cmd">$ cat latest-write-up</div>
<a class="latest-title" href="{{ latest.url | relative_url }}">{{ latest.title }}</a>
<div class="latest-meta">{{ latest.issuer }} · earned {{ latest.earned | append: "-01" | date: "%b %Y" }}</div>
<div class="latest-summary">{{ latest.summary }}</div>
<a class="latest-link" href="{{ latest.url | relative_url }}">read the write-up →</a>
</div>
{%- endif %}

<script src="{{ '/assets/js/boot.js' | relative_url }}" defer></script>
