(function($,window,document,undefined){
    var $window = $(window);

    $.fn.lazyload = function(options){
        var elements = this;
        var $container;
        var settings = {
            threshold : 0,
            failure_limit : 0,
            event : 'scroll',
            effect : 'show',
            container : window,
            data_attribute : 'original',
            skip_invisible:false,
            appear : null,
            load : null,
            placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        }

        function update(){
            var counter = 0;
            elements.each(function(){
                var $this = $(this);
                if(settings.skip_invisible&& !$this.is(":visible")){
                    return ;
                }
                if($.abovethetop(this,settings)|| $.leftofbegin(this,settings)){

                }else if(!$.belowthefold(this,settings)&& !$.rightoffold(this,settings)){
                    $this.trigger('appear');
                    counter = 0;
                }else {
                    if(++counter > settings.failure_limit){
                        return false;
                    }
                }
            })
        }
        if(options){
            if(undefined !== options.failurelimit){
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if(undefined !== options.effectspeed){
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }
            $.extend(settings,options)
        }

        $container = (settings.container === undefined || settings.container ===window)? $window : $(settings.container)

        if(0 === settings.event.indexOf('scroll')){
            $container.on(settings.event,function(){
                return update();
            })
        }

        this.each(function(){
            var self = this;
            var $self = $(self);

            self.loaded = false;

            if($self.attr('src')===undefined ||$self.attr('src') ===false){
                if($self.is('img')){
                    $self.attr('src',settings.placeholder);
                }
            }
            $self.one('appear',function(){
                if(!this.loaded){
                    if(settings.appear){
                        var elements_left = elements.length;
                        settings.appear.call(self,elements_left,settings);
                    }
                }
            })
        })
    }
})(jQuery,window,document);