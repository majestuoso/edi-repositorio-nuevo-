import { Injectable, Post, Put } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 style="color:red"> HOLA SOY DAVID </h1>';
  }


@Post()
postHello(): string {
  return " hola , este es un post";
  }


@Put()
putHello(): string {
  return " hola , este es un put";
  }
}