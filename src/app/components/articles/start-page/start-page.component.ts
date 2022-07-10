import { Component } from "@angular/core";
@Component({
    selector : 'app-start-page',
    styleUrls : ['./start-page.component.css'],
    templateUrl : './start-page.component.html',
})
export class StartPageComponent{
    public articles =[
        {href : './1c-market', header : 'Оптимизация производительности ресурсов и SEO сайта https://1c.market компании 1С', text : 'Отчет о работе по оптимизации производительности, ресурсов, загрузки и трафика интернет-магазина, а так же применение мероприятий по SEO оптимизации c использованием современного формата встраивания микроданных JSONLD. Приложение получило уникальную возможность использовать методики Мобильного маркетинга и, при дальнейшей модернизации, быть опубликованным в магазине Google Play без необходимости его переписывания под мобильные устройства.', img : 'assets/imgs/logo_1c.png'},
        {href : './dom-manipulation', header : 'Изучение техники DOM манипуляций, используя абстакцию ViewContainerRef', text : 'Перевод статьи Максима Коретского о правильной манипуляции с DOM и формировании новой ментальной модели, используя Angular. Полезная статья для формирования твердой структуры абстракций визуализаций Angular, приучая разработчика думать структурами, отличными от DOM модели.', img : '/assets/imgs/worksList/view-children.jpg'},
	{href : './angular-service-worker', header : 'Пошаговое руководство Angular Service Worker по превращению приложения в прогрессивное веб приложение.', text : 'Перевод статьи Angular University, в которой рассматривается настройка сервисного рабочего в приложениях Angular.', img : '/assets/imgs/worksList/service-worker.jpg'}
	];
    
}