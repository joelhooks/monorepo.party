---
layout: ../layouts/PageLayout.astro
title: "Monorepo Resources 🎉"
author: "Joel Hooks"
date: "09 Aug 2022"
---

# Monorepo Party 🎉

This is a collection of curated monorepo resource. It's maintained by [Joel Hooks](https://twitter.com/jhooks) to support learners in a monorepo workshop.

## What are monorepos?

A monorepo is a single repository used to house multiple often related applications, utilities, libraries, and tools.

In a lot of ways a monorepo is the opposite of a monolith and a reaction the the explosion of micro-services that followed the traditional monolithic structure.

At it's simplest form a monorepo is an software architecture decision on how projects and code get organized.

A monorepo allows for your projects and code to be collocated, meaning it's there right next to other code, and allows for more efficient knowledge share and collaboration even when many individuals and teams are involved.

Does a monorepo solve all of these problems? No.

It's just a tool, but it's a pretty good on!

### Monorepo Guides

[monorepo.tools](https://monorepo.tools/) is an excellent intro into the world of monorepos from the folks at [nrwl](https://nrwl.io/). It gives a balanced look at the current landscape and provides a feature comparison across different tooling for monorepos. nrwl created and maintains the awesome Nx tool which is a great option for automating most monorepo tasks.

[monorepo.guide](https://monorepo.guide/) is a "monorepo style guide" from Thinkmill. This is tool agnostic and their how-to doesn't use any specific monorepo tooling and focuses on workspaces within the yarn package manager. The [Thinking in Monorepos](https://monorepo.guide/thinking-in-monorepos) article is a great place to start to get in the monorepo mindset.

## Monorepo Tools

You can maintain a monorepo without tools, but you probably don't want to.

### 🎉 [Turborepo](https://turborepo.org/)

Created by Jared Palmer and now part of Vercel, Turborepo is a lightweight task runner, and not much else. This is generally considered a "feature" and one of the design considerations for Turbo was how it can "do less" in the space and stay out of your way.

### [Nx](https://nx.dev/)

Mx is a full-featured monorepo powerhouse that does a lot more than just running tasks. Nx provides a mature tool with powerful code generation, plugins, and other integrations that are very useful.

## Monorepo Concept Map

[![a visual diagram of a selection of concepts in a monorepo](/assets/monorepo-concept-map.png)](https://miro.com/app/board/uXjVPfWXh7E=/)

[open in miro](https://miro.com/app/board/uXjVPfWXh7E=/)

## Monorepo Examples

These are example monorepos using Turborepo.

* [cal.com](https://github.com/calcom/cal.com) this is a large scale well put together monorepo that covers a lot of bases using Turborepo. It's well worth study and solves a lot of difficult production problems around building and testing an application at scale. One unique aspect is that the repository also includes some private packages that are imported using git submodules which keeps those packages/apps internal for business reasons while allowing the core to be open source.
* [Turbo Kitchen Sink Example](https://github.com/vercel/turborepo/tree/main/examples/kitchen-sink) is an official Turbo example that covers a lot of ground and is a great reference. It imports a next.js application and a remix application as well as some other "
nice to have" features to explore.
* [Skill Recordings Products] is a monorepo maintained by the folks that produce egghead.io, Epic React, Just JavaScript, and Testing Accessibility among others and features next.js and remix applications and a library of packages that support delivering developer education products.
* [Turborepos with Over 100 ⭐️s](https://joel.dev/top-turbo) is a spreadsheet featuring all 180+ repos on github that have over 100 stars and depend on Turborepo. The odds are that if you need some configuration or structure you'll be able to find it in here.







