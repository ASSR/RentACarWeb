import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44343/api/Brands/getall';
  constructor(private httpClient: HttpClient, private titleService: Title) {}

  getBrands(): Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}