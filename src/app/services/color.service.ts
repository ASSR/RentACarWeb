import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44343/api/Colors/getall';
  constructor(private httpClient: HttpClient, private titleService: Title) {}

  getColors(): Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}