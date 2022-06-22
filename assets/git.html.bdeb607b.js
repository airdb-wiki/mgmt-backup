import{_ as e,o as t,c as i,a}from"./app.234965af.js";const s={},n=a(`<h1 id="git-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Git \u5E38\u7528\u547D\u4EE4</h1><h2 id="git-rebase-\u4E8C\u6B21\u5F00\u53D1\u9879\u76EE\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#git-rebase-\u4E8C\u6B21\u5F00\u53D1\u9879\u76EE\u5347\u7EA7" aria-hidden="true">#</a> Git rebase - \u4E8C\u6B21\u5F00\u53D1\u9879\u76EE\u5347\u7EA7</h2><p>\u5728\u5206\u53C9\u4ED3\u5E93\u7684\u672C\u5730\u514B\u9686\u4E2D,\u4F60\u53EF\u4EE5\u6DFB\u52A0\u539F\u59CB\u7684 GitHub \u4ED3\u5E93\u4F5C\u4E3A &quot;\u8FDC\u7A0B&quot;\u3002(&quot;remote &quot;\u5C31\u50CF\u4ED3\u5E93\u7684 URL \u7684\u6635\u79F0,\u6BD4\u5982 origin \u5C31\u662F\u4E00\u4E2A\u3002)\u7136\u540E\u4F60\u5C31\u53EF\u4EE5\u4ECE\u8BE5\u4E0A\u6E38\u4ED3\u5E93\u83B7\u53D6\u6240\u6709\u5206\u652F,\u5E76\u91CD\u65B0\u5EFA\u7ACB\u4F60\u7684\u5DE5\u4F5C,\u7EE7\u7EED\u5728\u4E0A\u6E38\u7248\u672C\u4E0A\u5DE5\u4F5C\u3002\u5728\u547D\u4EE4\u65B9\u9762,\u8FD9\u53EF\u80FD\u770B\u8D77\u6765\u50CF\u3002 \u6DFB\u52A0\u8FDC\u7A0B,\u79F0\u5176\u4E3A &quot;\u4E0A\u6E38&quot;\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote add upstream https://github.com/jzfai/vue3-admin-plus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u8BE5\u8FDC\u7A0B\u7684\u6240\u6709\u5206\u652F\u63D0\u53D6\u5230\u8FDC\u7A0B\u8DDF\u8E2A\u7684\u5206\u652F\u4E2D,\u6BD4\u5982upstream/master\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git fetch upstream
From https://github.com/jzfai/vue3-admin-plus
 * [new branch]      master     -&gt; ups/master
 * [new branch]      vuex4      -&gt; ups/vuex4
 * [new tag]         v1.5.5     -&gt; v1.5.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u786E\u4FDD\u4F60\u5728\u4F60\u7684\u4E3B\u5206\u652F\u4E0A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u5199\u4F60\u7684\u4E3B\u5E72\u5206\u652F,\u4F7F\u4F60\u7684\u4EFB\u4F55\u5C1A\u672A\u5728\u4E0A\u6E38/\u4E3B\u5E72\u4E2D\u7684\u63D0\u4EA4\u90FD\u5728\u5176\u4ED6\u5206\u652F\u4E4B\u4E0A\u91CD\u653E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git rebase upstream/master (or git rebase v1.5.5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u4E0D\u60F3\u6539\u5199\u4E3B\u5E72\u5206\u652F\u7684\u5386\u53F2,(\u4F8B\u5982\u56E0\u4E3A\u5176\u4ED6\u4EBA\u53EF\u80FD\u5DF2\u7ECF\u514B\u9686\u4E86\u5B83),\u90A3\u4E48\u4F60\u5E94\u8BE5\u7528git merge upstream/master\u66FF\u6362\u6700\u540E\u4E00\u6761\u547D\u4EE4\u3002\u7136\u800C,\u4E3A\u4E86\u4F7F\u8FDB\u4E00\u6B65\u7684\u62C9\u53D6\u8BF7\u6C42\u5C3D\u53EF\u80FD\u7684\u5E72\u51C0,\u6700\u597D\u8FD8\u662F\u91CD\u65B0\u5EFA\u7ACB\u3002 \u5982\u679C\u4F60\u5DF2\u7ECF\u5C06\u4F60\u7684\u5206\u652F\u91CD\u65B0\u5EFA\u7ACB\u5230\u4E0A\u6E38/\u4E3B\u5E72,\u4F60\u53EF\u80FD\u9700\u8981\u5F3A\u5236\u63A8\u9001,\u4EE5\u4FBF\u5C06\u5176\u63A8\u9001\u5230 GitHub \u4E0A\u4F60\u81EA\u5DF1\u7684\u5206\u53C9\u4ED3\u5E93\u3002\u4F60\u53EF\u4EE5\u8FD9\u6837\u505A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push -f origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F60\u53EA\u9700\u8981\u5728\u91CD\u65B0\u7F16\u8BD1\u540E\u7684\u7B2C\u4E00\u6B21\u4F7F\u7528-f\u3002</p>`,13),r=[n];function d(l,u){return t(),i("div",null,r)}var m=e(s,[["render",d],["__file","git.html.vue"]]);export{m as default};