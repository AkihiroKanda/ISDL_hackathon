var key_decision = function(){
	var	win = $(window),
		elm = $('ul > li > a'),
		elm_arr = [],
		fcs_num = 0,
		fcs_flg = [];

	// 対象を配列化＋フォーカスされた/外れた際のイベントを指定
	elm.each(function(indx){
		var num = indx;
		elm_arr[indx] = $(this);
		fcs_flg[indx] = false;
		$(this).focusin(function(){
			fcs_num = num;
			if( fcs_flgg[indx] === false ){
				fcs_flgg[indx] = true;
			}
			fcs_flg[indx] = true;
		}).blur(function(){
			fcs_flg[indx] = false;
			if( fcs_flg.indexOf(true) < 0 ) {
				fcs_num = 0;
			}
		});
	});

	// キー判定とフォーカス移動
	win.keydown(function(evnt){
		if( evnt.which == 38 ){
			if( fcs_flg.indexOf(true) < 0 ) {
				elm_arr[0].focus();
			} else if( fcs_num > 0 ){
				elm_arr[fcs_num - 1].focus();
			}
			evnt.preventDefault();
			evnt.stopPropagation();
		}
		if( evnt.which == 40 ){
			if( fcs_flg.indexOf(true) < 0 ) {
				elm_arr[0].focus();
			} else if( fcs_num < elm_arr.length - 1 ){
				elm_arr[fcs_num + 1].focus();
			}
			evnt.preventDefault();
			evnt.stopPropagation();
		}
	});
};

$(document).ready(function(){
	key_decision();
});
