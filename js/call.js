			$(document).ready(function() {
				$('#slider').iView({
					fx: 'expandLeft', // установите эффект, например: 'left-curtain,fade,zigzag-top,strip-left-fade'
					captionSpeed: 500, // скорость эффекта перехода для Заголовка
					captionEasing: 'easeInOutSine', // easing эффект для заголовка
					captionOpacity: 1, // прозрачность заголовка
					animationSpeed: 500, // скорость анимациии слайдов
					pauseTime: 5000, // как доолго будет показываться каждый слайд
					directionNav: false, // навигация Вперед/Назад
					controlNav: false, // 1,2,3,4... цифровая навигация
					keyboardNav: true, // использование стрелок влево / вправо
					touchNav: true, // использование Touch swipe для смены слайдов
					pauseOnHover: false, // остановка слайдшоу при наведении
					timer: 'Pie', // Стиль таймера: "Pie", "360Bar" или "Bar"
					timerBg: '#d95900', // Фон таймера
					timerColor: '#EEE', // цвет таймера
					timerOpacity: 0.4, // прозрачность таймера
					timerDiameter: 30, // диаметр таймера
					playLabel: "Возобновить", // текст для кнопки "Плей"
					pauseLabel: "Пауза", // текст для кнопки "Пауза"
					onAfterChange: function(){ // триггеры после перехода слайдера
						var iview = this;
						var nextSlide = iview.defs.slide; //следующий слайд
						$("li[class~='sliderBtn']").removeClass("active");//сбрасываем активность всем
						$("li[class~='sliderBtn'][rel="+nextSlide+"]").addClass("active"); //ставим активность следующей
						
						//делаем видимым если что-то было скрыто эффектом "зеркала"
						fadeAndClear("fadeIn");
					} 
				});
				
				//обработка кликов по кнопкам слайдера
				$('.sliderBtn').click(function(){
					$('#slider').trigger('iView:goSlide', [$(this).attr("rel")]); //перейти к слайду "rel"
					fadeAndClear("fadeOut");
					$("li[class~='sliderBtn']").removeClass("active");//сбрасываем активность всем
					$(this).addClass("active");
					
				});
				
				function fadeAndClear(flag){
					if (flag=="fadeOut"){
						var mirror_effect = $(".slider_box").filter(":visible").children().filter(".iview-caption");
						mirror_effect.fadeOut(3000); //делаем затухание, пока грузится остальное
						mirror_effect.addClass("setMeVisible"); //чтоб после затухания
					};
					if(flag=="fadeIn"){
						$(".setMeVisible").fadeIn(1).removeClass("setMeVisible");
					};
				};
				
			});

/* */
$(function(){
	$('input').customInput();
});

/* */
$(".even-list li:even").addClass("even");

/* */
$(".selectbox").selectbox();