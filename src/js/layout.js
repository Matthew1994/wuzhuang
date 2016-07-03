$(function() {
    $('#header ul > li').find('a').each(function() {
        if (this.href == document.location.href || document.location.href.search(this.href) >= 0) {
            $(this).addClass('active'); // this.className = 'active';
        }
    });
});
