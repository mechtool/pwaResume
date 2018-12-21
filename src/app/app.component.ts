import { Component, HostListener, QueryList, ViewChildren, ElementRef, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { AppServicesService } from "./services/app-services.service";
import {SearchItemDirective} from "./directives/search-item.directive";

@Component({
    selector: 'app-root',
    styleUrls : ['./app.component.css', './app.max600.component.css',  './app.max480.component.css'],
    templateUrl : './app.component.html',
    changeDetection : ChangeDetectionStrategy.OnPush,
    providers : [
        AppServicesService,
    ]
})
export class AppComponent {

    public adminPanel = false;
    public activeBlock = [
	{className : 'works', text : 'РАБОТЫ', icon : false, title : 'Некоторые работы'},
	{className : 'articles', text : 'СТАТЬИ', icon : false, title : 'Переводы статей'},
	{className : 'contacts', text : 'КОНТАКТЫ', icon : false, title : 'Контакты для связи'},
	{className : 'goTop', text : '', icon : 'arrow_drop_up', title : 'Вверх'},
	{className : 'adminBlock',text : '', icon : 'brightness_auto', title : 'Для администраторов'},
    ];
    public contentAbout = [
	{className : 'htmlCss', text : 'html/css/less', header : '', img : '/assets/imgs/aboutOneSelf/html-css.png'},
	{className : 'javascript', text : 'javascript/typescript', header : '', img : '/assets/imgs/aboutOneSelf/ts-js.png'},
	{className : 'firebase', text : 'firebase', header : '', img : 'assets/imgs/aboutOneSelf/firebase.png'},
	{className : 'angular', text : 'angular', header : '', img : 'assets/imgs/aboutOneSelf/angular.png'},
	{className : 'nodejs', text : 'nodejs/express', header : '', img : 'assets/imgs/aboutOneSelf/node.jpg'},
	{className : 'mongo', text : 'mongoDb', header : '', img : 'assets/imgs/aboutOneSelf/mongo.png'},
	{className : 'angularMaterial', text : 'Material Design', header : '', img : 'assets/imgs/aboutOneSelf/material-design.png'},
	{className : 'googeExt', text : 'Google Extension', header : '', img : 'assets/imgs/aboutOneSelf/extension.png'},
    ] ;
    public worksList = [
	{className : 'gis-message', text : 'Небольшое приложение расположения данных геолокации на карте. В качестве фильтра использовался гибкий SVG. Реализована серверная аутентификация пользователей средствами FireBase (несколько вариантов). Это приложение - данные чата сообщений поьзователей, расположенные на карте в виде интерактивных окружностей, при активации, отображающие подсказку с датой и авторами сообщений, фильтруемые интерактивным фильтром SVG с изменяемым типом графика по разрезу аналитики - дата сообщения. Возможно, сайт не закончен. Подробное описание - на сайте приложения.', header : 'Приложение геолокации', img : 'assets/imgs/worksList/gis.webp', bgcolor : '#fffdf3', href : 'https://gis-message-bdccb.firebaseapp.com/', git : 'https://github.com/mechtool/google-map-messages'},
	{className : 'pwa-server', text : 'Прогрессивное web приложение (PWA), представляющее сайт переводов статей по теме создания прогрессивных web приложений, использующее смену стилей, согласно техники материального дизайна. Приложение написано, как подготовительное приложеие к видеокурсу по технологии прогрессивных веб приложений и является аккумулятором вышеназванной технологии на русском языке. В нем отрабатывался механизм сквозного общения компонентов с помощью реактивного объекта Subject<any>. Вся компоновка произведена стредствами Angular CLI с настройкой сервисного рабочего и файла манифеста, поэтому его можно открыть на мобильном устройстве и установить значек на пользовательский экран, согласно технике PWA. Возможно, сайт не закончен.', header : 'Прогрессивные веб приложения.', img : 'assets/imgs/worksList/pwa.jpg', bgcolor : '#fffdf3', href : 'https://pwaservernext.firebaseapp.com/', git : 'https://github.com/mechtool/pwa-second-firebase'},
	{className : 'firebase-server', text : 'Сайт о технологиях Google - Firebase. Перевод оригинальной документации с сайта firebase.com. Это - прогрессивное web приложение, так же, написанное в вышеупомянутой технике, на котором завершены структурные блоки (блок анимации страниц, блок коммуникации компонентов, блок формирования структуры меню и др.), необходимые для расширения приложения информацией. Писался через Angular CLI, с маршрутизацией (angular router) и пр. Не закончен.', header : 'Сайт документации Firebase.', img : 'assets/imgs/worksList/firebase.webp', bgcolor : '#fffdf3', href : 'https://fir-server-f28e1.firebaseapp.com', git : ''},
	{className : 'material-server', text : 'Сайт документации Angular Material, написан на Express с хостом на Heroku. В общем то ничего особого. Реализован немного в другой технике, чем приложения выше (т.е. писался простенький экземпляр Express, без шаблонизатора, с простой раздачей статики). Компоновка на прямую webpack', header : 'Сайт документации Material Design для Angular', img : 'assets/imgs/worksList/mat-des.png', bgcolor : '#fffdf3', href : 'https://angular-material-server.herokuapp.com/', git : 'https://github.com/mechtool/angularMaterialServer'},
	{className : 'firebase-hosting', text : 'Сайт документации руководства Firebase Hosting на русском. Стандартик, без излишеств. Цель - обкатка полифила для свойства "scroll-behavior" и развертывание Universal приложения на Firebase с раздачей контента через облачную функцию. Может быть использован как часть программ обучения технологиям программирования.', header : 'Сайт документации Firebase Hosting на русском', img : 'assets/imgs/worksList/firebase-hosting.jpeg', bgcolor : '#fffdf3', href : 'https://fir-hosting-server.firebaseapp.com/#/guide/index', git : 'https://github.com/mechtool/firebase-hosting'},
	{className : 'you-tube-downloader', text : 'Оформлен в виде расширения Chrome Extension, которое нужно скачать по ссылке, разархивировать и загрузить в браузер (Chrome, Opera) как распакованное расширение, выбрав распакованную папку. Написан на Angular - сторона расширения, и на чистом Javascript - сторона контента. Имеет сревер NodeJs (Express) на Heroku. В общем, занимается загрузкй видео ресурса в различных форматах. Не совсем отлаженное (не настроена загрузка отдельных аудио файлов, хотя настройка присутствует). Настройка форматов осуществляется через иконку расширения в Browser Action (область действий справа от поля адреса).', header : 'Загрузчик видео с ресурса You Tube', img : 'assets/imgs/worksList/images.jpg', bgcolor : '#fffdf3', href : 'https://floating-scrubland-78073.herokuapp.com/', git : 'https://github.com/mechtool/firebase-hosting'},
	];

    constructor(private renderer : Renderer2, private changeRef : ChangeDetectorRef, public appService : AppServicesService){}
    
    @ViewChildren('worksListAnchor, articlesAnchor, contactsAnchor, homeSection') public menuAnchors : QueryList<ElementRef>;
    @ViewChildren('homeSection, appToolbar, headerAboutOneSelf, contentAboutOneself', {read : ElementRef }) public childrenSections : QueryList<ElementRef> ;
    @ViewChildren(SearchItemDirective, {read : ElementRef}) searchItems : QueryList<ElementRef>;
    
    @HostListener('window:scroll', ['$event']) public onScrollWindow ($event){
	let scrollTop = $event.currentTarget.pageYOffset,
	    childrenArr = this.childrenSections.toArray().concat(this.searchItems.toArray());
	childrenArr.forEach((el, inx) => {
	    let elem = el.nativeElement,
		bounding = elem.getBoundingClientRect();
	    if(inx == 0 && bounding.bottom > 0){
	        let y = bounding.bottom > $event.currentTarget.innerHeight ? '0px' : (bounding.bottom /$event.currentTarget.innerHeight * 100) - 100 +'px'; //движение изображения фона при скроллировании
		this.renderer.setStyle(elem, "background-position-y", y);
	    }
	    else if(inx == 1){
	        let trigger = (scrollTop + 5 ) <= $event.currentTarget.innerHeight;
		trigger ?  this.renderer.removeClass(elem, "fixed"): this.renderer.addClass(elem,  "fixed");//фиксация панели инструментов
	    }
	    else if((inx == 2 || 3 ) && bounding.top <= $event.currentTarget.innerHeight ){//headerAboutOneSelf, contentAboutOneself
	       elem.classList.add('active');
	    }
	    else if((inx > 3 ) && bounding.top <= $event.currentTarget.innerHeight ){
		elem.classList.add('active');
	    }
	    this.changeRef.detectChanges();
	});

    } ;
    
    onClickNextButton(inx, collection, $event){
	if(inx == 5){
	    let current = $event.currentTarget;
	    this.adminPanel = ! this.adminPanel;
	    current.style.backgroundColor = this.adminPanel ? '#663399' : '';
	    return false;
	}
	let element = collection.toArray()[inx].nativeElement;
	this.appService.setScroll({element : element, content : null, duration : 1000}) ;
    }

}
