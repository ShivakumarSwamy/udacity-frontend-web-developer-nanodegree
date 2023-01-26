# Web API

# DOM methods

### get element by id

```
document.getElementById('<insert-element-id>');
```

Example in https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById:
```
> document.getElementById('content');
  # Element

> document.getElementById('unknown-id');
  # null
```

# get elements by class name

```
document.getElementsByClassName('<insert-class-name>');
```

Example in https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
```
> document.getElementsByClassName('section-content');
  # HTMLCollection[...,...,...]
  
> document.getElementsByClassName('unknown-class');
  # empty HTMLCollection[]
```

# get elements by tag name

```
document.getElementsByTagName('<insert-tag-name>');
```

Example in https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName
```
> document.getElementsByTagName('p');
  # HTMLCollection[...,...,...]
  
> document.getElementsByTagName('unknown-tag');
  # empty HTMLCollection[]
```

### querySelector

- select element like css selector

```
document.querySelector('.class');
document.querySelector('#id');
document.querySelector('tag');
```

Example in https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
```
> document.querySelector('h2')
  # Element
> document.querySelector('h2.document-toc-heading');
  # Element
> document.querySelector('h2.document-toc');
  # null  
```

### querySelectorAll

- select elements like css selector

```
document.querySelectorAll('.class');
document.querySelectorAll('#id');
document.querySelectorAll('tag');
```

Example in https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
```
> document.querySelectorAll('h2')
  # NodeList[...,...,...]
> document.querySelectorAll('.main-wrapper p');
  # NodeList[...,...,...]
> document.querySelectorAll('h')
  # empty NodeList[]  
```

## Element and Node interface

- Element: https://developer.mozilla.org/en-US/docs/Web/API/Element
- Node: https://developer.mozilla.org/en-US/docs/Web/API/Node

```
Event Target <--- Node <--- Element
```

## Phases of an event

- Capturing Phase - register listener before child
- At Target Phase - register listener at target
- Bubbling Phase - register listener at child

## Event Target 

- Event Target: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
- Instance Methods
  - addEventListener()
  - removeEventListener()
  - dispatchEvent()

### addEventListener

- MDN Link: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
```
<event-target>.addEventListener(<event-to-listen-for-or-type>, <function-to-run-when-an-event-happens-or-listener>);
```
- with useCapture argument. default is false which is bubbling phase, otherwise capturing phase.

```
<event-target>.addEventListener(<event-to-listen-for-or-type>, 
                                <function-to-run-when-an-event-happens-or-listener>,
                                <useCapture-true-or-false>);
```

## removeEventListener

- MDN Link: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
```
<event-target>.removeEventListener(<event-to-listen-for-or-type>, <function-to-remove-or-listener>);
```