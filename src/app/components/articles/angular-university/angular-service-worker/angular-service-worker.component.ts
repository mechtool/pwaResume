import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-angular-service-worker',
    styleUrls : ['./angular-service-worker.component.css'],
    templateUrl : './angular-service-worker.component.html',
    host : {
	'class': 'article'
    }
})
export class AngularServiceWorkerComponent implements OnInit {
    
    public tableContent = [
        "Создание структуры приложения Angular PWA, используя инструмент <a target='_blank' href='https://angular.io/cli'>Angular CLI</a>",
	"Добавление в приложение поддержки Angular PWA вручную.",
	"Механизм кэширования Angular Service Worker.",
	"Компоновка PWA приложения на продакшн.",
	"Запуск приложения PWA в продакшн режиме.",
	"Развертывание новой версии приложения, управление версионированием.",
	"Однокликовая установка приложения при помощи манифеста приложения."
    ];
    
    constructor(public domSanitizer : DomSanitizer){}
    ngOnInit() {}

}
