import { Component, Input, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() active: boolean;

  files: TreeNode[];
  loading: boolean;
  selectedFile: TreeNode;

  constructor(private service: MenuService, private router: Router) { }

  tree : any[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.service.getFiles().then(files => this.files = files);
  }

  nodeSelect(event) {
    if (event.node.type === 'tela') {
      this.tree = [];
      this.addItemToTree(event.node);
      this.router.navigate(['/help'], { queryParams: { sigla: event.node.data, label: event.node.label, tree: this.tree } });
    }
  }

  addItemToTree(node) {
    this.tree.push(node.label);

    if (node.parent != null) {
      this.addItemToTree(node.parent);
    }
  }

  onFilter(event) {
    console.log(event);
  }
}
