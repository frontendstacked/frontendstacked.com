{% macro NAV_ARROW(dir) %}
    {% if dir == 'up' %}
        <a href="#/2" class="image">
            <img width="178" height="238" src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Up arrow" style="-webkit-transform: rotate(180deg);" />
        </a>
    {% elif dir == 'down' %}
        <a href="#" class="image navigate-down">
            <img width="178" height="238" src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow" />
        </a>
    {% endif %}
{% endmacro %}

<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8">

        <title>reveal.js - The HTML Presentation Framework</title>

        <meta name="description" content="A framework for easily creating beautiful presentations using HTML">
        <meta name="author" content="Hakim El Hattab">

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

        <link rel="stylesheet" href="{{ REVEAL_PATH }}/css/reveal.min.css">
        <!--
        <link rel="stylesheet" href="{{ REVEAL_PATH }}/css/theme/beige.css" id="theme">
        <link rel="stylesheet" href="{{ REVEAL_PATH }}/css/theme/sky.css" id="theme">
        <link rel="stylesheet" href="{{ REVEAL_PATH }}/css/theme/night.css" id="theme">
        <link rel="stylesheet" href="{{ REVEAL_PATH }}/css/theme/moon.css" id="theme">
        <link rel="stylesheet" href="{{ REVEAL_PATH }}/css/theme/solarized.css" id="theme">
        -->
        <link rel="stylesheet" href="{{ REVEAL_PATH }}/css/theme/default.css" id="theme">

        <!-- For syntax highlighting -->
        <link rel="stylesheet" href="{{ REVEAL_PATH }}/lib/css/zenburn.css">

        <!-- If the query includes 'print-pdf', include the PDF print sheet -->
        <script>
            if( window.location.search.match( /print-pdf/gi ) ) {
                var link = document.createElement( 'link' );
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = '{{ REVEAL_PATH }}/css/print/pdf.css';
                document.getElementsByTagName( 'head' )[0].appendChild( link );
            }
        </script>

        <!--[if lt IE 9]>
        <script src="{{ REVEAL_PATH }}lib/js/html5shiv.js"></script>
        <![endif]-->
    </head>

    <body>

        <div class="reveal">

            <!-- Any section element inside of this container is displayed as a slide -->
            <div class="slides">
                <section id="themes">
                    <h2>Choose a Theme</h2>
                    <p>
                        <a href="?#/themes">Default</a> -
                        <a href="?theme=sky#/themes">Sky</a> -
                        <a href="?theme=beige#/themes">Beige</a> -
                        <a href="?theme=simple#/themes">Simple</a> -
                        <a href="?theme=serif#/themes">Serif</a> -
                        <a href="?theme=night#/themes">Night</a> <br>
                        <a href="?theme=moon#/themes">Moon</a> -
                        <a href="?theme=solarized#/themes">Solarized</a>
                    </p>
                    <p>
                        <small>
                            * Theme demos are loaded after the presentation which leads to flicker. In production you should load your theme in the <code>&lt;head&gt;</code> using a <code>&lt;link&gt;</code>.
                        </small>
                    </p>
                </section>

                <section>
                    <h1>{Less} Effectively</h1>
                    <h3>An Overview of Common Best Practices for Less</h3>
                </section>

                <section>
                    <section>
                        <h2>What is Less?</h2>
                        <p>
                            Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable.
                        </p>
                        <p><small>(<em>from lesscss.org</em>)</small></p>
                        {{ NAV_ARROW('down') }}
                    </section>
                    <section>
                        <h3>For Example...</h3>
                    <pre><code data-trim contenteditable class="css">
@base: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
    -webkit-box-shadow: @style @c;
    box-shadow:         @style @c;
}
.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
    .box-shadow(@style, rgba(0, 0, 0, @alpha));
}
.box {
    color: saturate(@base, 5%);
    border-color: lighten(@base, 30%);

    div {
        .box-shadow(0 0 5px, 30%)
    }
}
                    </code></pre>
                    </section>
                    <section>
                        <h3>
                            Compiles to
                        </h3>
                        <pre><code data-trim contenteditable class="css">
.box {
    color: #fe33ac;
    border-color: #fdcdea;
}
.box div {
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }                    </code></pre>
                    </section>

                </section>

                <section>
                    <section>
                        <h2>
                            Project Structure
                        </h2>
                        {{ NAV_ARROW('down') }}
                    </section>
                    <section>
                        <h3>
                            Tree
                        </h3>
                        <pre><code data-trim contenteditable class="tex">
station/static/
├── css
│   └── (compiled CSS)
├── fonts
│   ├── lmfonts (ttf, eot, svg, woff)
.....
├── less
│   ├── fonts
│   │   ├── lmfonts
│   ├── modules     (fonts, colors, typography, mixins)
│   ├── objects     (also known as partials)
│   ├── partials    (either partials or objects)
.....   (no need for _ in file names since we are using LESS not SASS)
│   └── vendor
│       └── bootstrap
└── owl-carousel    (vendor CSS part of homepage build)

                        </code></pre>
                    </section>
                    <section>
                        <h3>
                            File Types
                        </h3>
                        <ul>
                            <li>
                                We have in place a mixed case
                            </li>
                            <li>
                                Keep using modules and partials
                            </li>
                            <li>
                                Need to implement a hierarchy in Caesar and Brutus apps
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>
                            File Names
                        </h3>
                        <ul>
                            <li>
                                Don't need to use underscore in a Less project
                            </li>
                            <li>
                                Less allows import by reference (will not compile the import)
                            </li>
                        </ul>
                    </section>
                </section>

                <section>
                    <section>
                        <h2>
                            <strike>Workflow</strike><br/>
                            <strike>Basics</strike><br/>
                            <strike>Ground Rules</strike><br/>
                            ???
                        </h2>
                        <ul>
                            <li>
                                Never edit a CSS file directly
                            </li>
                            <li>
                                Always use the Grunt Less compiler
                            </li>
                            <li>
                                Keep compiled CSS out of the repo
                            </li>
                        </ul>
                    </section>
                </section>

                <section>
                    <h2>
                        Sharing Assets
                    </h2>
                    <ul>
                        <li>
                            Bootstrap vendor files
                        </li>
                        <li>
                            Modules (colors, mixins, typography)
                        </li>
                        <li>
                            Central Bootstrap location?
                        </li>
                        <li>
                            We'll need to improve (more on this later)
                        </li>
                    </ul>
                </section>

                <section>
                    <section>
                        <h2>
                            Class Naming Conventions
                        </h2>
                        {{ NAV_ARROW('down') }}
                    </section>
                    <section>
                        <h3>
                            See Sass Blog Link
                        </h3>
                        <ul>
                            <li>
                                A suggestion to use Combination of SASS, BEM, SMACSS
                            </li>
                            <li>
                                Parent child class names (plural, singular)
                            </li>
                            <li>
                                No nesting is required (exceptions OK)
                            </li>
                            <li>
                                Practical class names
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>
                            Avoid Over-Qualification
                        </h3>
                        <p>
                            TK: <em>what difference does it make?</em>
                        </p>
                        <pre><code>
.container > body.container
.super-copy > p.super-copy
                        </code></pre>
                    </section>
                    <section>
                        <h3>
                            State classes
                        </h3>
                        <pre><code>
.is-open
.is-closed
                        </code></pre>
                    </section>
                </section>

                <section>
                    <h2>
                        <em>Specificity</em>
                    </h2>
                    <ul>
                        <li>
                            Classes are good
                        </li>
                        <li>
                            IDs are bad
                        </li>
                        <li>
                            Inline styles should be avoided at all cost
                        </li>
                        <li>
                            Example:
                            <pre><code>
inline > #id > .class > element
                            </code></pre>
                        </li>
                    </ul>
                </section>

                <section>
                    <section>
                    <h2>
                        Other CSS Style Recommendations
                    </h2>
                    {{ NAV_ARROW('down') }}
                    </section>
                    <section>
                        <h3>Do not nest beyond 3 levels</h3>
                        <ul>
                            <li>
                                To keep compiled CSS sensible
                            </li>
                            <li>
                                Examples:
                                <pre><code>
TK
                                </code></pre>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>
                            Standard Order of Properties
                        </h3>
                        <p>
                            Aids in troubleshooting. <br/>
                            <em>Less cognitive load. Prevents simple mistakes that are difficult to spot.</em>
                        </p>
                        <pre><code>
TK (use dupe display issue)
                        </code></pre>
                    </section>
                    <section>
                        <h3>
                            <em>Suggestions</em>
                        </h3>
                        <dl>
                            <dt>
                                Alphabetic
                            </dt>
                            <dd>
                                <em>Nothing to learn, but can be counter-intuituive when coding</em>
                            </dd>
                            <dt>
                                By Type
                            </dt>
                            <dd>
                                <em>Related properties are grouped together, but need to decide on an additional style guide which can take a while before every gets it right. Requires extra attention by code reviewers.</em>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h3>
                            Less mixins/extends
                        </h3>
                        <dl>
                            <dt>
                                Mixins
                            </dt>
                            <dd>
                                 Outputs CSS where it is called
                            </dd>
                            <dt>
                                Extends
                            </dt>
                            <dd>
                                Reuse a class and override a couple of rules<br/>
                                Example:
                                <pre><code>
TK
                                </code></pre>
                            </dd>
                        </dl>
                    </section>
                </section>

                <section>
                    <h2>
                        UI Style Guide (from design)
                    </h2>
                    <h3>
                        Rely on the style guide as much as possible (when available)
                    </h3>
                    <ul>
                        <li>
                            Will help to reduce font styles &amp; color repetitions
                        </li>
                        <li>
                            Example:
                            <pre><code>
TK
                            </code></pre>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>
                        Usage of Bootstrap
                    </h2>
                    <ul>
                        <li>
                            No change for the most part <br/>
                            <em>But as a rule of thumb</em>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Avoid panels
                                </li>
                                <li>
                                    If you find you have to keep overriding then it might not be worth it
                                </li>
                            </ul>
                        </li>
                        <li>
                            Custom build – we’ve left out some items that we don’t need<br/>
                            <small>[ <em>Isn't this a good thing? :) <small>(md)</small></em> ]</small>
                        </li>
                    </ul>
                </section>

                <section>
                    <section>
                        <h2>
                            Areas of Improvement
                        </h2>
                        {{ NAV_ARROW('down') }}
                    </section>
                    <section>
                        <h3>
                            Sharing of Modules
                        </h3>
                        <ul>
                            <li>
                                Colors
                            </li>
                            <li>
                                Typography
                            </li>
                            <li>
                                Global
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>
                            Better Sharing Will Allow Us to Clean Up Dependencies
                        </h3>
                        {{ NAV_ARROW('down') }}
                    </section>
                    <section>
                        <h3>
                            Current
                        </h3>
                        <pre><code>
TK (illo)
                        </code></pre>
                    </section>
                    <section>
                        <h3>
                            Ideal
                        </h3>
                        <pre><code>
TK (illo)
                        </code></pre>
                    </section>
                    <section>
                        <h3>
                            Sharing of main Bootstrap build between apps?
                        </h3>
                    </section>
                </section>

                <section>
                    <h2>
                        Recommended Articles / References
                    </h2>
                    <dl>
                        <dt>
                            Smashing Magazine
                        </dt>
                        <dd>
                            TK <br/>
                            <a href="{{ SMASHING_LINK }}">{{ SMASHING_LINK }}</a>
                        </dd>
                        <dt>
                            CSS Tricks
                        </dt>
                        <dd>
                            TK <br/>
                            <a href="{{ CSS_TRICKS_LINK }}">{{ CSS_TRICKS_LINK }}</a>
                        </dd>
                    </dl>
                </section>

                <section>
                    <h1>fin.</h1>
                    <h3>charlie8230 | dodsonm</h3>
                </section>

            </div>

        </div>

        <script src="{{ REVEAL_PATH }}/lib/js/head.min.js"></script>
        <script src="{{ REVEAL_PATH }}/js/reveal.min.js"></script>

        <script>

            // Full list of configuration options available here:
            // https://github.com/hakimel/reveal.js#configuration
            Reveal.initialize({
                controls: true,
                progress: true,
                history: true,
                center: true,

                theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
                transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

                // Parallax scrolling
                // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
                // parallaxBackgroundSize: '2100px 900px',

                // Optional libraries used to extend on reveal.js
                dependencies: [
                    { src: '{{ REVEAL_PATH }}/lib/js/classList.js', condition: function() { return !document.body.classList; } },
                    { src: '{{ REVEAL_PATH }}/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                    { src: '{{ REVEAL_PATH }}/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                    { src: '{{ REVEAL_PATH }}/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                    { src: '{{ REVEAL_PATH }}/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
                    { src: '{{ REVEAL_PATH }}/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
                ]
            });

        </script>

    </body>
</html>
