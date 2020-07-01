# React Embeddable Widget
This is a project that builds a simple widget which can be embedded on any website seamlessly. It uses ReactJS as the base development library.


## Usage Example
widget-script<script> tag reference as shown below:

```html
    <div>
        ...website content
    </div>
    <script src="http://somehost/widget.js" id="call-widget-Script" ></script>
```


# Running the Project
## Install dependencies
```
$ npm install
```
## Run the development server
```
$ ./node_modules/.bin/webpack-dev-server --open
```
## Build the widget script file
```
$ ./node_modules/.bin/webpack --config webpack.config.js
```