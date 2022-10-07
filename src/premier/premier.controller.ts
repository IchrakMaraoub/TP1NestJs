import { Controller,Get, Post,Delete,Put,Patch } from '@nestjs/common';

@Controller('premier')
export class PremierController {
@Get()
gettodo(){
    console.log("Recuperer la liste");
    return 'list';
}
@Post()
posttodo(){
    console.log("ajouter la liste");
    return 'list1';
}
@Delete()
delettodo(){
    console.log("suprimer la liste");
    return 'list2';
}
@Put()
puttodo(){
    console.log("modifier la liste");
    return 'list3';
}
@Patch()
patchtodo(){
    console.log("ajouter la liste");
    return 'list4';
}

}