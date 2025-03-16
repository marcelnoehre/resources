import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnsiColors } from '../interfaces/ansi-color.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  async getAnsiColors(): Promise<AnsiColors> {
    return await firstValueFrom(this.http.get<AnsiColors>('/data/ansi-colors.json'));
  }
}
