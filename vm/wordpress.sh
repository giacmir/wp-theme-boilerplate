#! /bin/bash

#download wordpress (italian version)
cd ~
wget 'http://wordpress.org/latest.zip'
unzip latest.zip
mv wordpress/* /var/www
rmdir wordpress

cd /var/www
#create uploads folder
mkdir wp-content/uploads

#create .htaccess
touch .htaccess

#create wp-config.php
cp /vagrant/vm/templates/wp-config.php .
rm index.html

#setup permissions
chown -R www-data wp-content/uploads wp-content/themes wp-content/plugins .htaccess

#configure apache
cd $SCRIPT_FOLDER
cp /vagrant/vm/templates/apache.conf /etc/apache2/sites-available/default
a2enmod rewrite
service apache2 reload

#create database and user
mysql -u root --password=toor < /vagrant/vm/templates/database_and_user.sql

#populate database
mysql -u root --password=toor wordpress < /vagrant/vm/templates/wordpress.sql
