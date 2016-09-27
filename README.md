# meanstack

 based on tutorial - https://thinkster.io/mean-stack-tutorial#angular-routing

enabling to Node project:
------------------------------
npm install -g express-generator
express --ejs flapper-news
cd flapper-news
npm install
npm install --save mongoose


First move the index.html file to the views/ directory.
Because we're using the ejs engine, Node is looking for files with the .ejs extension
so we're going to have to rename our index.html to index.ejs, replacing the existing one.

Next, move the Angular app.js file to the public/javascripts/ directory.
To avoid confusion with Node's app.js, also rename the Angular file to angularApp.js.

Finally let's update the <script> tag in our index.ejs file to reflect these changes:

<script src="/javascripts/angularApp.js"></script>

Now we can start our application by running npm start.

If we point our browser to http://localhost:3000
