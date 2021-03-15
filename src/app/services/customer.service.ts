import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerResponseModel } from 'src/app/models/customerResponseModel';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44343/api/Customers/getall';
  constructor(private httpClient: HttpClient, private titleService: Title) {}

  getCustomers(): Observable<CustomerResponseModel> {
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}