####the author [FrankFang](https://github.com/FrankFang/jquery.tabize.js)

####jquery.tabize.js

How to use
-----------
* 1. Bring jquery.tabize.js into your page.
* 2. Tabize your html

```html

<div data-tabize-container>
      <ul>
        <li data-tabize-toggle="1" class="tabize_toggle-selected">
          General
        </li>
        <li data-tabize-toggle="2">
          Markdown
        </li>
        <li data-tabize-toggle="3">
          Evernote
        </li>
      </ul>
      <div data-tabize-content>
        <div data-tabize-pane="1" class="tabize_pane-selected">1</div>
        <div data-tabize-pane="2">2</div>
        <div data-tabize-pane="3">3</div>
      </div>
</div>

```

* 3. Some styles

```css
.tabize_toggle-selected { background: yellow;}
.tabize_pane-selected { background:yellow; }
```

That's it.