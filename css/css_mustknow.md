# Must know css and HTML

## Html tags
<p> for paragraph  
16 HTML common attributes (autofocus, class, direction, hidden, id, style, tabindex, ...). All of them are optionals.   
But some HTML elements have mandatory attributes, example : src for img, ...   
HTML comments : ```<!--  -->```   

2 types of elements : 
- block elements : p, headings, lists, 
- inline elements : a, ...

Block element are meant to structure the main parts of your page.  
Inline elements are meant to differentiate part of a text.  
Self enclosing tags : elements which doesnt require a closing tag. Example img, input, br, ...  
Only inline elements can be self enclosing since only inline elements can't contain any other HTML element.  
br is break => obsolete  

## Generic elements
```<div>``` for block-level elements
```<span>``` for inline elements

## Whitespace
Line breaks and empty lines are ignored by the browser. They account for a single space. To force a linespace use ```<br>``` HTML element.  
Tabulations are also ignored by browsers.  

## Emmet
Emmet is a code editor plugin that allows you to write HTML faster (among other things). Instead of writing ```<h1>```, you can write h1 and then press the Tab key on your keyboard.   
Emmet abbreviation to have an empty HTML page : ! and then press tab.
```html:5```and press tab to generate an empty page  
```lorem40``` will give a 40 words paragraph.  

## HTML elements vs HTML tags
An HTML tag is an HTML element name wrapped with < and > (or </ and >). So, h1 is an HTML element name whereas ```<h1>``` is an HTML tag. The opening tag, the closing tag, and the content together comprise the element.  

## Validity
Doctype is the first information to provide. To tell the browser that the HTML document is an HTML 5 : ```<!DOCTYPE html>```
HTml document structure :  
- html doc type  
- head element : contains title  
- body element  

## Encoding
Codage ASCII sur 7 bits : de 0 à 127 [Codes ASCII](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange#/media/Fichier:ASCII-Table-wide.svg)  
Par défaut Notepad encode en Windows 1252. C'est un codage sur 8 bits.   
En UTF-8, l'encodage se fait en taille variable : de 8 bits à 32 bits.   
Pour lecture d'un fichier binaire :  ```xxd -b <nom fichier>```  

## Text
6 levels of headings available.  h1 to h6

## Links
Links are inline elements : ```<a href="http://">click me</a>```

## Images
When inserting an image in HTML, you don’t need to specify its dimensions: the browser will automatically display it in full size.  
An image is an inline element.   
https://unsplash.com/ pour récupérer des images  
Pour faire une image cliquable : entourer img avec un ```<a href="">``` 

## Form elements
Form is a block level element. 2 attributes required : action (URL) and method (POST, GET)  
Label with attribute for  
Input types :  
- text : the most useful ```<input type="text" />```
- date ```<input type="datetime-local" />```
- radio, checkbox, file, color, number, password, checkbox, hidden, reset or submit...
Drop down menus : select or select multiple

```
<select>
    <option value"A">A</option>
    <option value"B">B</option>
</select>
```
Other form element : textarea
FieldSet : regroupe des éléments du formulaire  
Note the use of the "for" attribute on all ```<label>``` elements, which takes as its value the id of the form control with which it is associated — this is how you associate a form control with its label.

## iFrame
Utilisé pour insérer du contenu multimedia. Peu utilisé car scrollbars, positionnement et navigation à l'intérieur de l'IFrame. Nombreux sites bloquent les IFrames. 


## table
```
<table>
  <tbody>
    <tr>
      <td>(0,0)</td>
      <td>(1,0)</td>
    </tr>
    <tr>
      <td>(0,1)</td>
      <td>(1,1)</td>
    </tr>
  </tbody>
</table>
```

## class and id
Classes are more useeful than ids. Key thing is that id is unique.  
Classes names are case insensitive so as a convention use lowercase. Use dash to separate names.  

## meta and head tags
```<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <!-- for mobile -->
        <title>Title</title>
    </head>
    <body>
    </body>
</html>
``` 

## Accessibility
Disability is a spectrum. It covers a wide range of sometimes 'weakened' abilities. For example (but not limited to):
- vision impairment.
- deaf or hard of hearing.
- mental health conditions.
- intellectual disability.
- acquired brain injury.
- autism spectrum disorder.
- physical disability.

# CSS
CSS work by selecting an HTML element, choosing a property to alter and apply a certain value. 
Best weebsite for css : https://css-tricks.com/  
Two ways to specify css :
- in the head -> element style
- in a separate file :  ```<link rel="stylesheet" type="text/css" href="style.css">``` in the head part
- specify style as an attribute

Syntax of a CSS rule : 
```
selector { property: value; }
```
CSS has 350 properties  
On last line, we can omit the ";"  
```/* CSS comment */  ```

Class is the most important selector. Put a "." in front of selector.
Target id attribute with # in selector.  
div span : span with div ancestor
div, span : apply to all span and div
div > span : span with direct parent div 

Only a few CSS properties can be inherited from ancestors. They are mainly text properties:
- text color
- font (family, size, style, weight)
- line-height
Some HTML elements don’t inherit from their ancestors. Links for example don’t inherit the color property.
Hint : do not name the classes according to their appearance but according to what they represent

## link
Convention : links are always underlined. One exception : navbar  
Do not use color to differentiate hyperlink (10% of people are color blind)

## Colors
Color is mostly for font color  
There is around 150 named colors  
RRGB : example : body { color: rgb(0, 0, 0);}
The rgba color unit is rgb to which we add an alpha value (ranging from 0 to 1, in decimal values), which defines how transparent the color is  

Hsl : Instead of a color being a combination of Red, Green and Blue, you define :
- Hue a value ranging from 0 to 360, defines which color you want.
- Saturation percentage, ranging from 0% to 100%, defines how much of that color you want.
- Lightness percentage, ranging from 0% to 100%, defines how bright you want that color to be.
Hexadecimal : 3 Hexadecimal numbers with 2 digits => 256 * 3 possibilities

## fonts and text
comic Sans MS : font created by Microsoft, inspired by comics and without serif  
For text alignement : ```text-align : center;```   

## Size units
CSS properties that require size units : 
- px for pixels
- % for percentage : they rely upon the element’s parent and/or ancestor.
- em for sizing relative to the parent’s font-size value.
For example, block-level elements like paragraphs naturally take up the whole width available. The following CSS rule will resize them to half of the width available.

The rem unit is similar to em, but instead of depending upon the parent’s value, it relies upon the root element’s value, which is the ```<html>``` element.  
If you set your ```html { font-size: 18px;}``` 2rem will always be equal to 36px, no matter where you use in your CSS  

## Reset
User agent stylesheet is applied every time time a webpage is rendered and before any of our CSS is applied.  
A browser’s default styles can interfere with the styles we actually want to apply. That’s why a CSS reset has been devised to provide a consistent base across all browsers.  
Most browser add a margin and padding to body. So, to reset this behaviour : 
```
body {
    padding: 0;
    margin: 0;
}
```

### Margin syntax
Margins create extra space around an element
```
/* vertical | horizontal */
margin: 5% auto;

/* top | right | bottom | left */
margin: 2px 1em 0 auto;
```
Margin do not add up vertically, they are crunched.  

## Cascade
if same specificity, last rule wins  
```.class1.class2```will match element with both classes ```<p class="class1 class2">```   
Never use ```!important```

## Rules collision
id selectors are worth 100
.class selectors are worth 10
tag selectors are worth 1
The selector with the highest “score” will prevail, no matter the order in which the CSS rules appear.

## Pseudo class selectors
HTML elements can have different states. It’s possible in CSS to apply a different style when such an event occurs.  
Pseudo-class selectors are attached to usual selectors and start with a colon   
Exemple : ```a:hover```  
Hover is not mobile compatible  

## Pseudo elements
Pseudo elements are visible elements on a web page that aren’t “in the DOM” or created from HTML, but are instead inserted directly from CSS  
```
.class::after {
  content : "ab";
  display : block;
} 
```  

## Box model
Reference : https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model  
- display : inline,  the browser will determine all the height, width, padding, margins, etc. for you and will not let you change it  
- display : block; By default, something that is block takes the whole line to itself.
- display : inline-block – A hybrid of the previous two. This will make browser try to place the tag inline, but will still allow you to control the height, width, padding, and margin
- display : flex and inline-flex – Similar to block in that it affects the tags around it like block does
- display : grid and inline-grid – More advance display mode that allow you more power to layout tags inside of them
- display : table – Make something act like a table. In general, use the <table></table> tag instead of using CSS to make things act like tables.
https://www.paulirish.com/2012/box-sizing-border-box-ftw/
Float is obsolete  
Today, the current versions of all browsers use the original “width or height + padding + border = actual width or height” box model  
```
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```
With force border-box sizing : The border and padding values were moved inside the element's box, cutting into the width/height of the box rather than expanding it  
https://css-tricks.com/box-sizing/


### flex
Flex container is a property to be specified by the parent  
Container, the ability to alter its items’ width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space or shrinks them to prevent overflow.  
Flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based).    
Flexbox layout is appropriate for small-scale layouts, while Grid layout is for larger scale layouts  
Terminology: main-axis (depends on flex-direction) and cross-axis (axis perpendicular to main axis).  
https://css-tricks.com/snippets/css/a-guide-to-flexbox/  

#### flexbox properties 
Parent properties :
- display : should be flex
- flex direction : row, row-reverse, column, column-reverse
- flex wrap : by default flex items will try to fit one line (no-wrap) but other values are wrap, wrap-reverse
- justify content : define alignement along main-axis. It helps distribute extra free space
- align-items : how items are aligned along the cross-axis  
- align-content ; align container line when there is extra space in cross axis  
justify-content : left or right or center or space-around  -- only when wrap is activated  

Children properties : 
- order 
- flex grow : unitless factor. If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others  
- align-self : allows the default alignment (or the one specified by align-items) to be overridden for individual flex items  

Centering : 
margin set to auto in a flex container absorb extra space. So setting a margin of auto will make the item perfectly centered in both axes  

Nav bar on left upper side:  
Nav bar is usually a unordered list
```
justify-content : flex-end  
flex-flow : row wrap;  
```

### grid layout
https://caniuse.com/  
grid-area : choose a name to be used in grid-template-areas

### GSS animation
```
@keyframes lol {
    to{
        transform: rotate(360deg);
    }
}

.spinning 
{
    animation : lol 1.5s infinite linear;
    display: inline-block;
    font-size: 60px;
}
```

## Css variables
Syntax declaration  
```
--variable-name : value;
```

Syntax usage 
```
body {
  color : var(--variable-name);
}
``` 

### Center
To center an image : ```display : block``` and ```margin : auto```
To center a text horizontally : ```text-align : center```

### Debug css
to debug CSS add a border red. 

## flexbox vs grid
Only grid to have two cells overlaps. Flexbox can't do. 

