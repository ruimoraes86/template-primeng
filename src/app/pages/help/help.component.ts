import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  label: string;
  sigla: string;

  items: MenuItem[] = [];
  home: MenuItem;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.label = params.label;
        this.sigla = params.sigla;
        this.setBreadcumbItem(params.tree);
      }
      );
  }

  setBreadcumbItem(tree: any[]) {
    this.items = [];

    tree.reverse().forEach(item => {
      this.items.push({label: item});
    });

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
