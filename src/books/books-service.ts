import { Injectable } from "@nestjs/common";
import { Question } from "./question.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { createCategoryDto, createQuestionDto } from "./books-dtos";
import { Category } from "./category.entity";

@Injectable()
export class BookService {

    constructor(@InjectRepository(Question) private questionRepository:Repository<Question>,@InjectRepository(Category) private categoryRepository:Repository<Category>){}

    createQuestion(createQuestion:createQuestionDto)
    {
       const newQuestion = this.questionRepository.create(createQuestion)
       return this.questionRepository.save(newQuestion)
    }
   async  createCategory(createCategory:createCategoryDto, id:number)
    {

       const newQuestion= await this.questionRepository.find({where : {}})
      const newCategory=  this.categoryRepository.create(createCategory)

      const savedCategory = this.categoryRepository.save(newCategory);
        


      return this.categoryRepository.save(newCategory)
    }
   async getQuestion()
    {
       await this.categoryRepository.find();
    }

}