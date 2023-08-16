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

    async findQuestionByid(id:number)
    {
      //  return await this.questionRepository.findOne({where: {question_id:id}})
      return this.questionRepository.find();
    }
   async createCategory(createCategory:createCategoryDto, id:number)
    {

       const newQuestion= await this.questionRepository.findOneBy({question_id:id})
      const newCategory=  this.categoryRepository.create(createCategory)
      
      const savedCategory = await this.categoryRepository.save(newCategory);
      newQuestion.category=[savedCategory];

      return this.questionRepository.save(savedCategory)
    }
   async getQuestion()
    {
       await this.categoryRepository.find();
    }

}