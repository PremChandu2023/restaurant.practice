import { Injectable } from "@nestjs/common";

@Injectable()
export class Userservice {

    getBookbyId()
    {
        const book =  [{
            id: 1,
            title: 'Book 1',
            authors: [
              {
                name: 'Author 1',
                publishedWorks: ['Work 1 by Author 1', 'Work 2 by Author 1'],
                genre: 'mystery'
              },
              {
                name: 'Author 2',
                publishedWorks: ['Work 1 by Author 2', 'Work 2 by Author 2'],
                genre: 'fanatsy'
              },
            ],
          },
          {
            id: 2,
            title: 'Book 2',
            authors: [
              {
                name: 'Author 3',
                publishedWorks: ['Work 1 by Author 3', 'Work 2 by Author 3'],
                genre: 'action'
              },
            ],
          },
          {
            id: 3,
            title: 'Book 3',
            authors: [
              {
                name: 'Author 4',
                publishedWorks: ['Work 1 by Author 4', 'Work 2 by Author 4'],
              },
              {
                name: 'Author 5',
                publishedWorks: ['Work 1 by Author 5', 'Work 2 by Author 5'],
              },
              {
                name: 'Author 6',
                publishedWorks: ['Work 1 by Author 6', 'Work 2 by Author 6'],
              },
            ],
          },
          ]

    }

}