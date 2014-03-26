$(document).ready(function(){

	var seeCode = $('.seeCode'),
	preCode = $('.coder'),
	preCodeParent = preCode.parent();

	preCode.hide();
	(function(){		
		seeCode.on('click',function(){
			var current = $(this);
			current.next(preCode).toggle('slow');
			
		});
	}());



});