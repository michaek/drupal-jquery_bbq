# jQuery BBQ for Drupal

This module uses a fork of jquery-bbq with support for HTML5 pushState and an add-on for pjax-like interaction. See [https://github.com/michaek/jquery-bbq](https://github.com/michaek/jquery-bbq) for more information.

Currently, it's a stub implementation that makes assumptions you may not like. You can override the AJAX page output by creating page-ajax.tpl.php in your theme. To override the Javascript, you'll need to clobber this module's jquery_bbq.js in your theme.

The module will try not to interfere with your admin theme, but your milage may vary. Take care if you decide to use it!