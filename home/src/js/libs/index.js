require(['jquery', 'handlebars'], function($, handle) {
    $.ajax({
        url: '/api/list',
        dataType: 'json',
        success: function(res) {
            console.log(res.data);
            var tpl = $('#tpl').html();
            var template = handle.compile(tpl);
            var html = template(res.data);
            $('.list').html(html);

        }
    })
})