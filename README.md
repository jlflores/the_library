# The Library
Single display of development tools like Gulp, Javascript, Html, Sass, etc.

## Install Dependencies
In order to run the system NodeJS it is required, if you dont have it you can download it from [here](https://nodejs.org/en/)

## Get it running
For development you need to use BrowserSync, this tool will allow you to check the landing page in your default browser by simply run this command on console:
> gulp serve

This will get the BrowserSync and will allow to check your changes at the moment (no need for page reload)

### HTML
Any changes into the HTML should be done on index.html, in this place you need to include your javascript libraries and css external files (bower, cdn, etc).

### SASS
SASS its basically CSS but allows you to reuse styles, create functions (mixins) and pretty much organize your styles better than simple CSS.
By the way, for not fully soported rules like border-radius, you don't need to add prefixes (mz, webkit), SASS compiler it is already configured to deal with those situations.
