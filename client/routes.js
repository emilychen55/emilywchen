Router.route('/', function () {
  this.render('homePage');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/projects', function () {
  this.render('projects');
});

Router.route('/hobbies', function () {
  this.render('hobbies');
});

Router.route('/blog', function () {
  this.render('blog');
});

        