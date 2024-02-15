import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'dynamic-saas-app';
  theme: any;
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
      this.http.get('assets/theme.json').subscribe((config: any) => {
        this.theme = config.theme;
      });
  }
}
