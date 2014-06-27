#! /bin/bash

export DEBIAN_FRONTEND=noninteractive

#install packets
debconf-set-selections <<< 'mysql-server mysql-server/root_password password toor'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password toor'

apt-get -q -y install apache2 php5 mysql-server php5-mysql php5-curl php5-mcrypt phpmyadmin
ln -s /usr/share/phpmyadmin /var/www/phpmyadmin
