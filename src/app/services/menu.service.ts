import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class MenuService {

    constructor(private http: HttpClient) {}

    getFiles() {
      return this.http.get<any>('assets/data/tree.json')
        .toPromise()
        .then(res => <TreeNode[]>res.data);
      }
}
