---
title: Hello, World - finally adding a blog to the site
date: 2026-09-30
description: Kicking off the blog with the story of its birth
layout: base.njk
---

Finding myself with some time on my hands after working a couple of long contracts, I thought it’s about time I finally add a blog to this site. 

I’ve been wanting to do this for a couple of years at least; I’ve played with lots of the ’new’ lightweight blog platforms and frameworks, but I’ve never felt happy enough with the results to commit to it. However, it gave me a pretty good idea of what I actually want 

## What do I want from a blog?

From all of my past experimentation & professional experience, I have a pretty good grasp of the essentials

- Automation: While I could quite easily build every post as a static html page, it kinda defies the point of a blog. So I want a main blog page that creates alist of the pindividual osts at bare minimum, and I'd also like 
- Integrated with my current site: I want the flexibility to play with how this works as its own section of the site. But I would like global CSS control, and I don’t want to make the build process more difficult
- LIghtweight: I hate how much bloat modern front end systems can create. Keeping it minimal keeps if efficient, and also increases my chance of actually understanding the code
- Templating: Any system that makes it easier to create and publish a post makes it much more likely that I’ll actually post things. So I need good automation here, but still some level of custom control ideally
- Good media support: I want to be able to embed all image formats, SVGs, videos and who knows what else. Bonus points if I can just add images straight from my phone and the build process optimises them

## What am I less sure about?

A short list, but for all my prevarication I don’t feel as confident as I would like about some of the choices

- Content management: There are no easy answers to this one. More control always creates more complexity, and I don’t yet know what level of complexity I need. Much as I dislike Markdown (future blog post??) it’s probably where I’ll start just because it's the most basic
- Blog framework: there are so many options here, and again it’s hard to make the right choice for an unknown future. Keeping it simple for now will probably make any future changes easier, and [eleventy](https://www.11ty.dev/) fits the bill - it’s simple, it’s open source, and it supports a range of templating languages
- Product integration: How’s a blog going to fit into the rest of my site? How will readers know what lies in wait for them? There are a lot of other changes I want (need) to make to the site and I don’t want to end up with something inflexible 

## How am I going to do this?

Staying on top of tooling changes in age of LLMs is no easy task. I’ve been lucky to have the chance to experiment with everything I can get my hands on over the last few years, and quite a few tools I’ve loved have changed or disappeared just as I’ve started to rely on them.

Whichever tools I use to create visuals, code or content it’s essential that I can still manually edit things when I want to. This means minimal use of frameworks or languages I don’t understand well perhaps a limitation on what I might do, but on the other hand it ensures that I stay in control. 

So with that in mind, here’s. What the process might look like:

- Content is managed mostly in the notes app on my phone. This gives me easy access whenever I need it, but things need tidying up before they can be posted
- Design work will happen in [Affinity](https://www.affinity.studio/) or [Figma](https://www.figma.com/). I still haven’t found any AI tools that can visualise things more efficiently than I do myself in software I know well
- I’m using VSCode as my dev environment, with cline to add agent capabilities and [Openrouter](https://openrouter.ai/) managing the magic. I’ve loved using the frontier models at work, but when I’m paying for it myself I want much closer management of costs and this setup gives me all the control I need
- Using Github for versioning, with [Netlify](https://www.netlify.com/) for the actual hosting. I’ve been using this setup for a while and it’s super easy - it rebuilds whenever I push a commit, and is updated live almost instantly

Almost everything here is either free or open source. I’m not opposed to paying for the tools that I get long term value from, but for me it’s essential to be able to experiment without committing to costs. 

## What’s next?

As soon as I know all these changes work in production, I’ll publish this post alongside the wider changes to the site. It might look a bit crap, so updating the current layouts to deal with the worst of it will be my first step.

I also need to update the rest of the site. Some of that is just simple content updates so that there’s more focus on leadership instead of just execution (the first version of this design was launched in 2020). 

I've got a few sideprojects and writing drafts kicking about, so I need to find and sort therough all of those. I've considered adding another section of the site to hold all of the interesting sideprojects... but I'm not sure whether that makes sense yet.

It’s also time for a more serious visual refresh. Adding more content will create new needs that the current design doesn’t really support, but I’m also itching to do a more comprehensive redesign. I always find that aspect of presenting myself hard work, so let’s see how far I push it. At least now I have a blog to document the prosaic as I go!