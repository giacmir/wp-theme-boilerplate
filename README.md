This is my base development environment to build wordpress themes.

It uses:

* Vagrant
* Grunt
* Bower

### Vagrant
The Vagrantfile builds a Debian 6 LAMP server with wordpress installed and running on http://localhost:8080/

Wordpress username and password is 'admin', the custom template must be enabled by hand.

There is a phpmyadmin instance on http://localhost:8080/phpmyadmin

### Grunt
Grunt is configured to do the following tasks:

* Compile, concat and ugilfy coffescript files contained in assets/javascripts
* Compile assets/stylesheets/style.scss into the main style.css file
* Optimize all the images in assets/images and write them in template/images

### Bower
Bower is configured and ready but no component is installed by default.

### PHP
All the php files should be in the template directory. This is the directory to be published to the live wordpress site and that should contain only the final result.
For now only minimal code is included, the theme has only headers and footer scripts and is blank for the rest.
