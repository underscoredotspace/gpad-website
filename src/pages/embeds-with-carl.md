---
layout: '../layouts/MarkdownLayout.astro'
title: 'Embeds with Carl'
---

### Creating an embed with links from scratch

Go to <a href="https://carl.gg/dashboard/527260303386214418/embeds" target="_blank" rel="noreferrer">the embeds section on the Carl dashboard</a>.

There's a couple of places where you can add links in the embed template already. In other text fields you can use <a href="https://www.markdownguide.org/tools/discord/" target="_blank" rel="noreferrer">MarkDown</a> to create links as well as other layouts/styles.

### Sample embed

This example shows where you can use MarkDown to create links

![screenshot of sample embed on Carl dashboard](/embeds-with-carl/EmbedSample.png)

Once you've got your embed like you want it, choose the channel you want to post it in and hit the [Post] button.

![Screenshot of sample embed](/embeds-with-carl/embed.png)

### Editing an existing embed

Use the command `?embedsource <message-id>` to get the "source" of the embed. Carl will then post the source JSON. Copy the text (everything inclusive of the curly braces: `{` and `}`) from that message and past it into the Raw JSON box below the preview.

<video controls src="/embeds-with-carl/embedsource.mov"></video>

Once you've edited your embed in the Carl dashboard, click the [Copy to Clipboard] button.

Use the command `?ecembed <message-id> <json>` to update your embed.

<video controls src="/embeds-with-carl/ecembed.mov"></video>
