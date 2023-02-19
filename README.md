# Code Prettify for ES2

JavaScript code prettifier based on [Google Code Prettify][5].

Language files are fully compatible with [Google Code Prettify][5].

* Works on HTML pages.
* Works even if code contains embedded links, line numbers, etc.
* Customizable styles via CSS. See the [themes gallery][1].

[See an example][2].

## Comparison

<table>
<thead>
<tr>
<th><th>Google Code Prettify<th>ES2 Code Prettify
<tbody>
<tr>
<th>Lower limit of supported browsers<td>IE6, Gecko 1.8, Opera 8<td>🌸IE5, 🌸Gecko 0.6, 🌸Opera 7.0
<tr>
<th>Languages<td>Add dynamically except built-in<td>Select the language to be used on the site or page at build time
<tr>
<th>Dynamic addition of theme<td>✔<td>✖
<tr>
<th>File size<td>🌸14.551 bytes<td>50,042 bytes(+24KB: RegExp ponyfill), Build with <code>"web,c,cs,java,bash,python,perl,ruby,coffee"</code>.
<tr>
<th>Dependency<td>🌸none<td><a href="https://github.com/itozyun/web-doc-base">web-doc-base</a>, <a href="https://github.com/itozyun/what-browser-am-i">what-browser-am-i</a>, <a href="https://github.com/ECMAScript2/es2-regexpcompat">ES2 RegExpCompat</a>
<tr>
<th>Line Numbering<td>✔<td>✔ (You can disable the function at build time.)
<tr>
<th>Set by comment node<td>✔<td>✔ (You can disable the feature at build time. Some browsers do not support comment nodes.)
<tr>
<th>Execution by time division<td>Manual. Measure and schedule the elapsed time at the time to finish highlighting the code block.<td>Always. Elapsed time is measured and scheduled at each timing of regular expression instance creation, token creation, and decoration.
</table>

## Usage

Put code snippets in `<pre class="prettyprint">...</pre>` or
`<code class="prettyprint">...</code>` and it will automatically be
pretty-printed.

```HTML
<pre class="prettyprint">class Voila {
public:
  // Voila
  static const string VOILA = "Voila";

  // will not interfere with embedded <a href="#voila2">tags</a>.
}</pre>
```

## How to build

Please see [gulpfile.js](./gulpfile.js) or [web-doc-base / gulpfile.js](https://github.com/itozyun/web-doc-base/blob/master/gulpfile.js). 

~~~
gulp all
gulp web
~~~

## FAQ

### For which languages does it work?

C and friends, Java, Python, Bash, SQL, HTML,
XML, CSS, JavaScript, Makefile, and Rust.

It works passably on Ruby, PHP, VB, and Awk and a decent subset of Perl and
Ruby.

[Apollo](src/js/3_langs/lang-apollo.js);
[Basic](src/js/3_langs/lang-basic.js);
[Clojure](src/js/3_langs/lang-clj.js);
[CSS](src/js/3_langs/lang-css.js);
[Dart](src/js/3_langs/lang-dart.js);
[Erlang](src/js/3_langs/lang-erlang.js);
[Go](src/js/3_langs/lang-go.js);
[Haskell](src/js/3_langs/lang-hs.js);
[Lasso](src/js/3_langs/lang-lasso.js);
[Lisp, Scheme](src/js/3_langs/lang-lisp.js);
[LLVM](src/js/3_langs/lang-llvm.js);
[Logtalk](src/js/3_langs/lang-logtalk.js);
[Lua](src/js/3_langs/lang-lua.js);
[MATLAB](src/js/3_langs/lang-matlab.js);
[MLs: F#, Ocaml,SML](src/js/3_langs/lang-ml.js);
[Mumps](src/js/3_langs/lang-mumps.js);
[Nemerle](src/js/3_langs/lang-n.js);
[Pascal](src/js/3_langs/lang-pascal.js);
[Protocol buffers](src/js/3_langs/lang-proto.js);
[R, S](src/js/3_langs/lang-r.js);
[RD](src/js/3_langs/lang-rd.js);
[Rust](src/js/3_langs/lang-rust.js);
[Scala](src/js/3_langs/lang-scala.js);
[SQL](src/js/3_langs/lang-sql.js);
[Swift](src/js/3_langs/lang-swift.js);
[TCL](src/js/3_langs/lang-tcl.js);
[LaTeX](src/js/3_langs/lang-tex.js);
[Visual Basic](src/js/3_langs/lang-vb.js);
[VHDL](src/js/3_langs/lang-vhdl.js);
[Wiki](src/js/3_langs/lang-wiki.js);
[XQ](src/js/3_langs/lang-xq.js);
[YAML](src/js/3_langs/lang-yaml.js)

### How do I specify the language of my code?

You can specify a language by specifying the language extension along with the
`prettyprint` class:

```HTML
<pre class="prettyprint lang-html">
  The lang-* class specifies the language file extensions.
</pre>
```

You may also use the [HTML 5][3] convention of embedding a `<code>` element
inside the `<pre>` and using `language-java` style classes:

```HTML
<pre class="prettyprint"><code class="language-java">...</code></pre>
```

### It doesn't work on "obfuscated code sample"?

Yes. Prettifying obfuscated code is like putting lipstick on a pig &mdash;
i.e. outside the scope of this tool.

### Which browsers does it work with?

It's been tested with IE 5, Gecko 0.6, Opera 7.0. Look at
[the tests][4] to see if it works in your browser.

### How do I put line numbers in my code?

You can use the `linenums` class to turn on line numbering.  If your code
doesn't start at line number `1`, you can add a colon and a line number to the
end of that class as in `linenums:52`. For example:

```HTML
<pre class="prettyprint linenums:4"
>// This is line 4.
foo();
bar();
baz();
boo();
far();
faz();
</pre>
```

### How do I prevent a portion of markup from being marked as code?

You can use the `nocode` class to identify a span of markup that is not code:

```HTML
<pre class="prettyprint">
int x = foo();  /* This is a comment  <span class="nocode">This is not code</span>
  Continuation of comment */
int y = bar();
</pre>
```

For a more complete example see the [issue #22 testcase][6].

### How can I customize the colors and styles of my code?

Prettify adds `<span>` with `class`es describing the kind of code.  You can
create CSS styles to matches these classes.

See the [theme gallery][1] for examples.

### How can I put line numbers on every line instead of just every fifth line?

Prettify puts lines into an HTML list element so that line numbers aren't
caught by copy/paste, and the line numbering is controlled by CSS in the
default stylesheet, `prettify.css`.

The following should turn line numbering back on for the other lines:

```HTML
<style>
li.L0, li.L1, li.L2, li.L3,
li.L5, li.L6, li.L7, li.L8 {
  list-style-type: decimal !important;
}
</style>
```

## Charts

![Flowchart of Google Code Prettify](docs/FllowchartOfGoogleCodePrettify.drawio.png)

[Edit in draw.io](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=FllowchartOfGoogleCodePrettify.drawio.png#R7Vtbd%2BI2EP41nNM%2BJAfJQMhjAmTzsD1Jm%2B5p96lH2IqtxpZcWQTYX1%2FJlnyRTXBYDGSXl8Qa3az5vhmNRqbnTKLVJ47i4Dfm4bAH%2B96q50x7EI5BX%2F5VgnUmuLrWAp8TLxOBQvBEvmEtNM0WxMNJpaFgLBQkrgpdRil2RUWGOGfLarNnFlZnjZGPa4InF4V16V%2FEE0EmHfb7hfweEz8QVsUcuS8%2BZwuqp%2BtBB46dERhn1REyQ%2Bn2SYA8tiyJnFnPmXDGRPYUrSY4VJo1Wsv63W2ozV%2BbYyradJhOyb2YRfTLxe9x9I8%2FpvTb3YUe5RWFC2yWkb6sWBv9pEvEapB%2Bz7ldBkTgpxi5qnYpCSFlgYhCWQLy8ZmE4YSFjKd9ndvJaAKHUp4Izl5wqWY6vQHDmerBqCjJ72Z3NzM1kX4xzAVebVwxyPUo2YlZhAVfyyamw1irXjPTILEsYAaOlgUViDW7NLP8fORCvfJBa%2Fgd2nZ%2BZG07znZtDw%2Bp7UFN2zHHQqwfOaHigeJffq1pX65eVFVcVSVlFFt61yIUEp%2FKoiu1haX8VumSSC9zoysi4nlqmkZMq6grkLSfBCNT1i8JOgZxUAXRaWkyTlcgjt4C8Yzgdqd3dASH%2B3Z6tm5PyQna2gf9uvqd%2FiG9IKypH8VxuJ5il3EkGD%2FbUAsUQUsUOzOi8XYjwtS7UeGwUn%2BIkoS4VQzf1i5eEfG3qrsc6tJX3U89T1e6W1pYmwKVS8s6XQ1N%2BWu5suiXlkzHEM1xeJvHzyUUdQS9u%2FVirxbtW6hLpbEFd%2FH2OE0g7mOxzbXVWbQsHyM2mzrHIRLktfq6TczRMzwyueWVtmpgxVs2%2BbJl6l7lg4E90Mhi%2B9gaKNNDbaCUyPmyd%2Bf2Vdfc7oRuJfLDd5G%2FPU9Pm3%2F5OObcvyP97HEAPCz9jBn9nAFKDtvRAhRQz0Fw7JNEBhCfEfXvEZURwzlMaYPl%2BNhhCqhHm99pS6dsO86wrm940IQSaMoojUKRaYi8YFny01LqjCtBf9ZMTlttaSrm3JYozSooTQZ39N9C5S5vQfFod0liRCvom4ZqrIulVtGNbEIZj5Bab9q7n9ZnM6laAOJVfRaXYyTJQ6I4xJ%2FxCvM7zqKHWBBGUfiIOJJKxjypLjZ9o%2BpbSnG2NiM%2BO5otxB%2B1JH53jqae3PuBHA28rup70JTEuT6oo6lncWrWd96iWyA5aIlkd5Zzvd1yMpDMbRi0EAxQrNpFK1%2FdB14%2Bh2zpBoiLSw8JNEfJJlBOOi52xsMKUDkoJaAGDTgNusIJNh1Lmrb2sAiS%2F0jjZqZm37SJ1%2Fb7pDDgN7o%2FzP%2FFrriURRQpLPP3oH4PTkpOIG%2FR1VbKM91%2FUH8AoE2zYX0nbTq0d%2BYPjPk3HL8%2BkDvvCK4BtE5YDe57dFC0Wlwh7ysRfLVTJvhdubC09Ig5SSP13sfIDmuL3Zqdy3baY6XngJ0etmPDtvk5YKWHYd8aaEN%2BTnIQrUvNYtUgqVnAHjJ4cK8Z5NStvWDhBiULaaLUGyTcENm4C%2F6aG94GQ%2BvvZGhgF0Pbo00Ysp24UdjheH6H8u47E%2Bs7iXwXOFDSGu71QvBglN91m8hNBbbfk47CbnhUdlue2tn5RvDY7G5xRj1Bdn9n5PS%2BO%2FSj0Htwdt57oLcxy5%2BL3l3dkm%2BnNzzT%2B6D0bvqoPEsoBcAklO5M1lA2ZM%2F1hNMnxnxpC7A%2FYZ7696i%2B%2BiTPb2e2iuGNMDaCuQKSCPZtvaClHnEHlz5JjFyVF3Omw6L0J4ul4AJuuopgr5irTKqUBMTzMK0d1FvZeG8PKSr7C8aenfEATSmPXTKhslj8%2FiGjX%2FETE2f2Pw%3D%3D)


![SimpleLexerRegistry](docs/SimpleLexerRegistory.drawio.png)

[Edit in draw.io](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=SimpleLexerRegistory.drawio#R7Vlbd6M2EP41nLN9WB8EBjuPvqXtadqkzUO7fZNBwdoAYoXwpb9%2BJSQBAhw7ju2kPX2yNBqNpJlP34yw5c6S7Y8UZqtfSYhiy7HDreXOLccBtuPzHyHZScnoxpaCiOJQKdWCR%2FwP0jOVtMAhyg1FRkjMcGYKA5KmKGCGDFJKNqbaE4nNVTMYoY7gMYBxV%2FonDtlKSj3bruU%2FIRytWGtgCYPniJIiVctZjuuMXR%2BM5XACtSmln69gSDYNkbuw3BklhMlWsp2hWLhWe03Ou90zWm2bopQdM2EH0d%2B%2F79jt3c%2BLrxR%2Fw3Tyy%2FqzsrKGcYH0McrNsp32D993JprBLsZpiKhrudPNCjP0mMFADGw4LrhsxZKY9wBvLoVXUHi3rASVr%2B4Lxs0gJc8lGoAn2oyS5yoE3D3TJxzHMxITWm7Enc78mVNrNkbm8wnwFmIGSVlDfru4nSxsLlenRJSh7V73gSooHOuIJIjRHVdRE3wVRoVyHdVNDRmtsWqgRcugAmlU2a0jxRsqWK8InNMJ3CNOshjdoS2if6AI54yIZfyYCf9T3opY6QkpEZ4ScdbX0f9WCCBOQd1sT8kzmBrQ0IrC1ueNOvWEq6SEJlAcoZxtl%2BNyJTEK%2FGzbXeV%2B%2BZXf7gHvwkTASS7JKE4jy5kJW2obhZ7ROLAe464sGtuWloxDcA15Dr8tlh7R4tYl4LhhJsZNEKZEYNpArBLBGEepuD4cZ3yj7lSgEHP6maiBBIehWKb3UlF5k7jAVo5WBOpUfbVJcFn4j034gy78XdCD%2F%2FGl8O%2B%2BgriK5T73nsJZIaTP99wMZsIX9sD2TKFTSkEnePkzYsGqEcm%2BSL1AbXvI8AyxBaAV3LHXiW4VyWZ0wfBS4R32hFfe1BCv25d3%2BTIjLDv6HTbkWj12e0SaNvs58BDHWd7Utjw%2Byz6B7cSSD5BxEklfRXcmr137vECe9xNPSYttZo1msjEjSQbZDx9mm47c5oRSuGtF5bqROHveidETe1vWOYq42qnpHLQ0bJdcwy4tDftoST9Jzk5L3uGsg9JwIl4lIvHEMM9xYMav9i3o863yIfDPmiSCgq7reHYKbR4QuvtLDZedL83OXAREJAXd3zVHHxDF3LuitpnXkUdh59XVijt%2F5kEaIXYoyXfxsWk%2B07rh1zKKYsjw2txGHyTUCg8Elyyi4OfceAb8Rp5pIScFDZCa1Hx3te24ph0AWoakGzqGSoBWpz4ds%2F5hzJr3%2FUChdCXInoNAWp53Rz11TR%2BCgH2pumb0cl1ja9auk1TJ352U1ZeD%2FgWPvLoA0rWO%2Falc6jeYoGY1cNQb7WCRcLQ7P7LDjqugemva%2F71orlK0Bb1e62i9zZMfsKJ7x%2B8IYDgatFj5poeVHe%2BK3xLG%2F%2FWqblCVbt26ru7pqu6MBZz%2FrgVc65Ot2y68jq3gXLtVwbnXreBuOviMYRoV4n8Nzoc8c16AZM7xufKka3CBh2NVcTdwB9y%2Buu9S70b9ge3DUszxf74YpIO2mDUYhve%2BNEZqfhEd49EoJw1t1yCmwXjkHSCnNz455ZU%2FfNcOMpvzrszW%2FmBrn8hsnZvSNrSH2crvZA21TCjkr%2BM%2B3q3%2F%2FJTq9R%2FM7uI7)

## License

ES2 Code Prettify is licensed under [Apache License 2.0](https://github.com/googlearchive/code-prettify/blob/master/COPYING)

(C) 2022-2023 [itozyun](https://github.com/itozyun)([outcloud.blogspot.com](//outcloud.blogspot.com/))

[1]: https://raw.githack.com/google/code-prettify/master/styles/index.html
[2]: https://ecmascript2.github.io/es2-code-prettify/
[3]: http://dev.w3.org/html5/spec-author-view/the-code-element.html#the-code-element
[4]: https://ecmascript2.github.io/es2-code-prettify/prettify_test.html
[5]: https://github.com/googlearchive/code-prettify
[6]: https://ecmascript2.github.io/es2-code-prettify/prettify_test.html#issue22
