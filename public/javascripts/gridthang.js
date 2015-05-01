(function(){
    gridsterOptions = {
        widget_base_dimensions: [80, 60],
        widget_margins: [5, 5],
        autogenerate_stylesheet: true,
        max_cols: 8,
        resize: {
            enabled: true
        },
        serialize_params: function ($w, wgd) {
            var $hotCont = $('#' + $w.attr('id'));
            console.log($hotCont)
            return {
                col: wgd.col,
                row: wgd.row,
                size_x: wgd.size_x,
                size_y: wgd.size_y,
                model: $($w).data('model'),
                model_id: $($w).data('model-id'),
                innerHTML: $hotCont.find('.widget-content').html()
            };
        }
    };
    // chain data('gridster') to access API
    gridster = $("#gridster-grid").gridster(gridsterOptions).data('gridster');

    $(window).on('resize', _.throttle(scaleGrid, 16));

    $('#addWidget').click(function () {
        // gridster.add_widget('<li><textarea class="gridster-textarea"></textarea><a href="#replaceme" '+
        //     'class="joyride-close-tip">&#215;</a></li>', 1, 1);
        gridster.add_widget('<li><a href="#replaceme" '+
            'class="joyride-close-tip">&#215;</a></li>', 1, 1);
        setEvents();
    });
    $('#save').click(function () {
        $('#gridster-out').text(JSON.stringify(gridster.serialize()));
        // $.ajax({
        //     url: '/swig/grid/create/',
        //     type: 'POST',
        //     data: {
        //         gridsterData: JSON.stringify(gridster.serialize())
        //     },
        //     success: function (data, textStatus, jqXHR) {
        //         //alert(textStatus);
        //         $('#gridster-out').text(data.gridsterData);
        //     }
        // });
    });
    $('#load').click(function () {
        var data = JSON.parse($('#gridster-out').text());
        loadWidgets(data);
    });

    $('.swatch').draggable({
        helper: 'clone'
    });
    function enableDrop() {
        $('.gs-w').droppable({})
            .on('drop', function (event, ui) {
                var $el = $(this),
                    $draggable = $(ui.draggable.context);

                console.log($draggable.data('model'));

                switch( $draggable.data('model') ) {
                    case 'Color':
                        $el.css({
                            'background-color': $draggable.css('background-color'),
                            'color': $draggable.find('footer').css('color')
                        });
                        break;
                    case 'Background':
                        $el.css({
                            'background-color': 'transparent',
                            'background-image': $draggable.css('background-image'),
                            'background-size': 'contain',
                            'background-repeat': 'no-repeat',
                            'background-position': 'center'
                        }).find('p').css({'background':'none'});
                }
            });
    }
    enableDrop();

    function loadWidgets(serialization) {
        gridster.remove_all_widgets();
        serialization = Gridster.sort_by_row_and_col_asc(serialization);
        $.each(serialization, function() {
            gridster.add_widget('<li>' + this.innerHTML + '<a href="#replaceme" class="joyride-close-tip">&#215;</a></li>', this.size_x, this.size_y, this.col, this.row);
        });
    }

    function setEvents() {
        enableDrop();
        $('#grid').find('.joyride-close-tip').click(function (event) {
            event.preventDefault();
            gridster.remove_widget($(this).parent());
        });
    }

    function scaleGrid() {
        var factor = $('#grid').width() / 775;
        $('#gridster-grid').css({
            transform: 'scale('+ factor +')'
        });
    }

}());
