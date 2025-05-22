import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, NzLayoutModule, NzInputModule, NzIconModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.less',
})
export class SearchBarComponent {}
