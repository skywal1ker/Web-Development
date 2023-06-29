



Launch XAMPP and launch apache and mysql

Open CMD type: cd + Path of this folder

type: php -S localhost:8001

open brawser: php -S localhost:8001


http://localhost/phpmyadmin/ -----> create db (h_blog exact this name)
and type sql querries below:


CREATE TABLE IF NOT EXISTS `items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=63 ;