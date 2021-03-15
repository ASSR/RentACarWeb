import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44343/api/Rentals/getallwithdetail';
  constructor(private httpClient: HttpClient, private titleService: Title) {}

  getRentals(): Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}