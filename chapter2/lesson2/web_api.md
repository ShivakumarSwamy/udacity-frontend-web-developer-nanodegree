# Web API

# get element by id

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

# Element and Node interface

- Element: https://developer.mozilla.org/en-US/docs/Web/API/Element
- Node: https://developer.mozilla.org/en-US/docs/Web/API/Node

```
Event Target <--- Node <--- Element
```
