import { Component, HostListener, QueryList, ViewChildren, ElementRef, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { AppServicesService } from "./services/app-services.service";
import {SearchItemDirective} from "./directives/search-item.directive";
import {AnimationsClass} from "./animations/AnimationsClass";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
    selector: 'app-root',
    styleUrls : ['./app.component.css', './app.max600.component.css',  './app.max480.component.css'],
    templateUrl : './app.component.html',
    changeDetection : ChangeDetectionStrategy.OnPush,
    animations: [AnimationsClass.triggers.routerTrigger],
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
	{className : 't1-consulting', text : 'Angular 14. Работа на проекте T1- CRM, компании Т1 Консалтинг. Система управления и взаимодействия с клиентами. Разработка и сопровождение нескольких модулей в CRM системе, согласно технической документации: (Задачи, Вложения, Мероприятия, Отчеты). Последний реализован практически полностью', header : 'Проект T1-CRM компании Т1 Консалтинг', img : '/assets/imgs/t1-crm/Image 1.png', bgcolor : '#fffdf3', href : '', git : 'https://t1crm-demo.t1-consulting.ru/'},
	{className : '1c-market', text : 'Angular 12. Работа по оптимизации приложения интернет-магазина компании 1С : https://1c.market/. Оптимизация приложения заключалась во внедрении в приложение современных методов кэширования контента на основе техники сервисного рабочего(ServiseWorker), привращение приложения в современное, прогрессивное веб приложение (PWA), с возможностью в дальнейшем, применить методы мобильного маркетинга к целевой аудитории владельцев мобильных устройств и, в дальнейшем, размещении приложения в Google магазине (Goggle Play) без необходимости переписывания приложения под мобильные устройства. Вторая часть оптимизации - внедрение SSR (Service Side Rendering) с предварительной компипиляцией определенных страниц на сервере, c применением современных методов встраивания микроданных в динамический контент по технологии (техники) JsonLD. О результатах данной работы можно познакомиться в статье ниже.', header : 'Оптимизация приложения интернет магазина компании 1С', img : 'assets/imgs/logo_1c.png', bgcolor : '#fffdf3', href : '', git : 'https://1c.market'},
	{className : 'call-all-mongo', text : 'Angular 9 PWA приложение (с установкой на экран устройства) для обмена сообщениями на интерфейсе WebRtc. Такое же приложение, что и ниже, только реализация происходит не через Google Firebase, а через сервер WebSocket на Express (Heroku), база данных MongoDb на Atlas. Явно реализую обмен видеопотоками, а медиаданные передаются через WebSocket. Сервер - Node.js - Express хост на Heroku, с реализацией Angular-Universal (Server-Side-Rendering), с загрузкой модулей по требованию (Lazy Loading), настройки кэширования через ServiceWorker для ускоренной загрузки. Добавил реализацию сохранение паролей через Credential Management API и Google Sign-In API на библиотеке platform.js. Пишу на css-flex, RXJS, управление состоянием через NGXS, для много-пользовательского общения в виде прямой конференции, но будет в демо для пары пиров. Push-Notification для сигнализации на мобильных устройствах, остальная сторона сигнализации через механизмы событий WebSocket.', header : 'Приложение для обмена видео сообщениями (MongoDb/Atlas - WebSocket).', img : 'assets/imgs/worksList/web-rtc-mongo.jpg', bgcolor : '#fffdf3', href : 'https://mess-web-rtc.herokuapp.com/', git : 'https://github.com/mechtool/web-rtc-peer'},
	{className : 'call-all', text : 'Angular PWA приложение (с установкой на экран устройства) для обмена сообщениями на интерфейсе WebRtc. Явно реализую обмен видеопотоками, а медиаданные передаются через организацию канала передачи данных не явно. Сервер - Node.js - Express хост на Heroku, с реализацией Angular-Universal (Server-Side-Rendering), с загрузкой модулей по требованию (Lazy Loading),  настройки кэширования через ServiceWorker для ускоренной загрузки, база данных на Firebase Database. Пишу на css-flex, RXJS, для много-пользовательского общения в виде прямой конференции, но будет в демо для пары пиров. Push-Notification для сигнализации на мобильных устройствах, остальная сторона сигнализации через механизмы событий базы Realtime Database.', header : 'Приложение для обмена видео сообщениями.', img : 'assets/imgs/worksList/call-all.jpg', bgcolor : '#fffdf3', href : 'https://web-rtc-peer.herokuapp.com/', git : 'https://github.com/mechtool/web-rtc-peer'},
	{className : 'gis-message', text : 'Небольшое приложение расположения данных геолокации на карте. В качестве фильтра использовался гибкий SVG. Реализована серверная аутентификация пользователей средствами FireBase (несколько вариантов). Это приложение - данные чата сообщений поьзователей, расположенные на карте в виде интерактивных окружностей, при активации, отображающие подсказку с датой и авторами сообщений, фильтруемые интерактивным фильтром SVG с изменяемым типом графика по разрезу аналитики - дата сообщения. Возможно, сайт не закончен. Подробное описание - на сайте приложения.', header : 'Приложение геолокации', img : 'assets/imgs/worksList/gis.webp', bgcolor : '#fffdf3', href : 'https://gis-message-bdccb.firebaseapp.com/', git : 'https://github.com/mechtool/google-map-messages'},
	{className : 'pwa-server', text : 'Прогрессивное web приложение (PWA), представляющее сайт переводов статей по теме создания прогрессивных web приложений, использующее смену стилей, согласно техники материального дизайна. Приложение написано, как подготовительное приложеие к видеокурсу по технологии прогрессивных веб приложений и является аккумулятором вышеназванной технологии на русском языке. В нем отрабатывался механизм сквозного общения компонентов с помощью реактивного объекта Subject<any>. Вся компоновка произведена стредствами Angular CLI с настройкой сервисного рабочего и файла манифеста, поэтому его можно открыть на мобильном устройстве и установить значек на пользовательский экран, согласно технике PWA. Возможно, сайт не закончен.', header : 'Прогрессивные веб приложения.', img : 'assets/imgs/worksList/pwa.jpg', bgcolor : '#fffdf3', href : 'https://pwaservernext.firebaseapp.com/', git : 'https://github.com/mechtool/pwa-second-firebase'},
	{className : 'sw-cookbook', text : 'Приложение воспроизводит различные случаи использования сервисного рабочего, предоставляя рабочие примеры различных стратегий, которые можно по-щупать-по-кликать. Это - перевод на русский хорошо известного ресурса примеров <a target="_blank" href="https://serviceworke.rs">serviceworke.rs</a> от Mozilla. В нем рассматриваються примеры различных технологических стеков: Стратегии кэширования, Web Push, Off-line работа, производительность, коммуникация между сервисным рабочим и страницами и др.', header : 'Сборник рецептов для сервисного рабочего. ', img : 'assets/imgs/worksList/sw-cookbook.jpg', bgcolor : '#fffdf3', href : 'https://sw-cookbook.firebaseapp.com/#/introduction', git : 'https://github.com/mechtool/pwaSWCookBook'},
	{className : 'firebase-server', text : 'Сайт о технологиях Google - Firebase. Перевод оригинальной документации с сайта firebase.com. Это - прогрессивное web приложение, так же, написанное в вышеупомянутой технике, на котором завершены структурные блоки (блок анимации страниц, блок коммуникации компонентов, блок формирования структуры меню и др.), необходимые для расширения приложения информацией. Писался через Angular CLI, с маршрутизацией (angular router) и пр. Не закончен.', header : 'Сайт документации Firebase.', img : 'assets/imgs/worksList/firebase.webp', bgcolor : '#fffdf3', href : 'https://fir-server-f28e1.firebaseapp.com', git : ''},
	{className : 'material-server', text : 'Сайт документации Angular Material, написан на Express с хостом на Heroku. В общем то ничего особого. Реализован немного в другой технике, чем приложения выше (т.е. писался простенький экземпляр Express, без шаблонизатора, с простой раздачей статики). Компоновка на прямую webpack', header : 'Сайт документации Material Design для Angular', img : 'assets/imgs/worksList/mat-des.png', bgcolor : '#fffdf3', href : 'https://angular-material-server.herokuapp.com/', git : 'https://github.com/mechtool/angularMaterialServer'},
	{className : 'firebase-hosting', text : 'Сайт документации руководства Firebase Hosting на русском. Стандартик, без излишеств. Цель - обкатка полифила для свойства "scroll-behavior" и развертывание Universal приложения на Firebase с раздачей контента через облачную функцию. Может быть использован как часть программ обучения технологиям программирования.', header : 'Сайт документации Firebase Hosting на русском', img : 'assets/imgs/worksList/firebase-hosting.jpeg', bgcolor : '#fffdf3', href : 'https://fir-hosting-server.firebaseapp.com/#/guide/index', git : 'https://github.com/mechtool/firebase-hosting'},
	{className : 'yandex-translator', text : 'Контекстный переводчик. Оформлен в виде расширения Chrome Extension, которое нужно скачать по ссылке, разархивировать и загрузить в браузер (Chrome, Opera) как распакованное расширение, выбрав распакованную папку. Написан на Angular - сторона расширения, и на чистом Javascript - сторона контента. Занимается переводом выделенного текста с настройками перевода, через вызов Browser Action', header : 'Контекстный переводчик', img : 'assets/imgs/worksList/translator.jpg', bgcolor : '#fffdf3', href : '/assets/g-translator-extension.rar', git : 'https://github.com/mechtool/firebase-hosting'},
	{className : 'you-tube-downloader', text : 'Оформлен в виде расширения Chrome Extension, которое нужно скачать по ссылке, разархивировать и загрузить в браузер (Chrome, Opera) как распакованное расширение, выбрав распакованную папку. Написан на Angular - сторона расширения, и на чистом Javascript - сторона контента. Имеет сревер NodeJs (Express) на Heroku. В общем, занимается загрузкй видео ресурса в различных форматах. Не совсем отлаженное (не настроена загрузка отдельных аудио файлов, хотя настройка присутствует). Настройка форматов осуществляется через иконку расширения в Browser Action (область действий справа от поля адреса).', header : 'Загрузчик видео с ресурса You Tube', img : 'assets/imgs/worksList/ytd.png', bgcolor : '#fffdf3', href : '/assets/extension.rar', git : 'https://github.com/mechtool/ytd-frame/tree/master/extension'},
	{className : 'color-picker-widget', text : 'Виджет выбора цвета написан на Angular в технике Angular Elements (custom elements), т.е. его можно встраивать на страницу как custom element, устанавливать его входящие свойства и ставить обработчик на событие выбора цвета. В данном случае, при инициализации устанавливается первоначальный цвет (pointerColor) и ставиться обработчик на событие выбора цвета (colorChanged).', header : 'Виджет выбора цвета', img : 'assets/imgs/worksList/ytd.png', bgcolor : '#fffdf3', href : '/assets/color-picker-widget/index.html', git : 'https://github.com/mechtool/color-picker'},
	];

    constructor(private renderer : Renderer2, private changeRef : ChangeDetectorRef, public appService : AppServicesService, public domSanitizer: DomSanitizer){}
    
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
	element.scrollIntoView({block : "start", behavior : "smooth"});
	//this.appService.setScroll({element : element, content : null, duration : /*inx === 1 ? 400 :*/ 700}) ;
    }
    
    public getRouterOutletState(outlet) {
	return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
