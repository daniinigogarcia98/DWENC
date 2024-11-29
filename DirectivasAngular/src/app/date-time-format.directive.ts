import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDateTimeFormat]'
})
export class DateTimeFormatDirective implements OnInit, OnDestroy {
  private intervalId: any; // Para almacenar el identificador del intervalo

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.updateTime(); // Inicializamos la hora cuando la directiva se aplique
    this.startRealTimeClock(); // Empezamos a actualizar la hora en tiempo real
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Limpiamos el intervalo cuando el componente/directiva se destruya
  }

  private startRealTimeClock(): void {
    // Actualiza la hora cada segundo (1000ms)
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  private updateTime(): void {
    const fecha = new Date(); // Fecha y hora actual

    // Usar Intl.DateTimeFormat para formatear la fecha en el formato deseado
    const formattedDate = new Intl.DateTimeFormat('en-EN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'long',
      hour12: false,
      timeZone: 'Europe/Madrid'
    }).format(fecha);

    // Asignar el texto formateado al contenido del elemento
    this.el.nativeElement.textContent = formattedDate;
  }
}
