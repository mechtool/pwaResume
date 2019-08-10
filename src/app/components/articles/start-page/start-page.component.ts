import { Component } from "@angular/core";
@Component({
    selector : 'app-start-page',
    styleUrls : ['./start-page.component.css'],
    templateUrl : './start-page.component.html',
})
export class StartPageComponent{
    public articles =[
        {href : './dom-manipulation', header : 'Изучение техники DOM манипуляций, используя абстакцию ViewContainerRef', text : 'Перевод статьи Максима Коретского о правильной манипуляции с DOM и формировании новой ментальной модели, используя Angular. Полезная статья для формирования твердой структуры абстракций визуализаций Angular, приучая разработчика думать структурами, отличными от DOM модели.', img : '/assets/imgs/worksList/view-children.jpg'},
	{href : 'angular-service-worker', header : 'Пошаговое руководство Angular Service Worker по превращению приложения в прогрессивное веб приложение.', text : 'Перевод статьи Angular University, в которой рассматривается настройка сервисного рабочего в приложениях Angular.', img : '/assets/imgs/worksList/service-worker.jpg'}
	];
    
}