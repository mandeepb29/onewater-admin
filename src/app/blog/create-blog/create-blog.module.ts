import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CreateBlogComponent } from './create-blog.component';
import {QuillModule} from "ngx-quill";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: CreateBlogComponent
    }
]

@NgModule({
declarations: [CreateBlogComponent],
exports:[CreateBlogComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class CreateBlogModule { }
