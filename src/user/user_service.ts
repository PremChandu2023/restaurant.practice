import {Injectable} from '@nestjs/common'



@Injectable()
export class user_service {
    private readonly user : string[] = [];

    getUser(user : [])
    {
            this.user.push('chandu');
            return this.user;
    }
    
    showUser(user : [])
    {
        
    }

     
}