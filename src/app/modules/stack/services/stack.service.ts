import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Stack } from '../../../models';
import { API } from '../../../config';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Injectable()
export class StackService {
  private base = `${API}/stacks/`;
  private stacks: Stack[] = [];

  constructor(private http: HttpClient) {}

  index(): Observable<Stack[]> {
    if (this.stacks.length) {
      return Observable.of(this.stacks);
    }

    return this.http
      .get<Stack[]>(this.base)
      .do(stacks => (this.stacks = stacks));
  }

  show(id: string): Observable<Stack> {
    if (this.includes(id)) {
      return Observable.of(this.find(id));
    }

    return this.http
      .get<Stack>(this.base + id)
      .do(stack => this.stacks.push(stack));
  }

  create(stack: Stack): Observable<Stack> {
    return this.http
      .post<Stack>(this.base, stack)
      .do(created => this.stacks.push(created));
  }

  update(stack: Stack): Observable<Stack> {
    return this.http
      .put<Stack>(this.base + stack._id, stack)
      .do(updated => this.replace(updated));
  }

  destroy(id: string): Observable<Stack> {
    return this.http
      .delete<Stack>(this.base + id)
      .do(stack => this.remove(stack._id));
  }

  private remove(id: string, ...stacks: Stack[]): void {
    const stack = this.find(id);

    if (stack) {
      this.stacks.splice(this.stacks.indexOf(stack), 1, ...stacks);
    }
  }

  private replace(stack: Stack): void {
    this.remove(stack._id, stack);
  }

  private includes(id: string): boolean {
    return Boolean(this.find(id));
  }

  private find(id: string): Stack {
    return this.stacks.find(stack => stack._id === id);
  }
}