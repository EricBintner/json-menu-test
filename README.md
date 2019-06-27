# front-end dev / prototype code test



### Install locally

```
$ git clone (tbd)
$ npm install && npm start
```
* http://localhost:3000


### NOTES
```bash
$ npm install && npm start
```
* In addition to the above two commands you node version may need to be downgraded to v6.5.0
* I tried to upgrade everything but the dependency node-sass-middleware seems incompatible with node v10
* if the above does not work try the following first and start again
```bash
$ sudo n 6.5.0 && npm rebuild node-sass
```

* My methodology is mostly semantic, this is more of a conversation so perhaps we can discuss
* I rely upon cascading CSS from a hidden inputs for state control in the absence of React or MVC architecture
* this was built from a basic express.js boilerplate
* I need to refactor the eventlistener functions. Currently the js function is inline with the HTML and written into the DOM with js, in short the solution is incomplete and convoluted.


### Interaction requirements

#### Desktop

* On hover, Primary Navigation changes color (black/white).
* On click, if item contains a URL, Primary Navigation navigates to a new page.
* On click, if item contains other items, Secondary Navigation appears (see Desktop, Secondary Navigation).
* Menu appears containing Secondary Navigation.
* Translucent mask appears over content, behind menu.
* On hover in, Secondary Navigation changes color (dark-gray/light-gray).
* On click, Secondary navigates to a new page.
* On click outside of menu, menu and mask are hidden.

#### Mobile

* When a user clicks the navigation (“hamburger”), the menu,  logo and navigation should “push” from left to right.
* The navigation (“hamburger”) should change from the toggle open to toggle close icon (“x”).
* Translucent mask appears over content, right of navigation.
* The Primary Navigation should include link items and menu items.
* When a user clicks a Primary Navigation link item, the browser should navigate to a new page.
* When a user clicks a Primary Navigation menu item, the Secondary Navigation should “push” down, the chevron should rotate * 180°.
* When a user clicks a Secondary Navigation item, browser should navigate to a new page.
* When a user clicks outside of the navigation, the navigation should close.
* When the navigation closes:
    * the menu, logo and navigation should “pull” from right to left
    * the navigation (“hamburger”) should change from the toggle close ("X") to toggle open icon
    * the translucent mask should be hidden
