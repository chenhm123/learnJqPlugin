(function($){
    'use strict';
    $(function(){
        $('body').on('click.tabize','[data-tabize-container] [data-tabize-toggle]',function(e){
            var $target = $(e.currentTarget);
            if($target.hasClass('tabize_toggle-selected')) {return};
            $target.addClass('tabize_toggle-selected').siblings().removeClass('tabize_toggle-selected');
            var tabName = $target.data('tabize-toggle');
            console.log($target.parents())
            $target.parents('[data-tabize-container]').eq(0)
                .children('[data-tabize-content]')
                .children('[data-tabize-pane='+tabName+']')
                .addClass('tabize_pane-selected')
                .siblings().removeClass('tabize_pane-selected');
        })
    })
}).call(this,jQuery);