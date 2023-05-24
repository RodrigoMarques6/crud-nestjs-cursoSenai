import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { User } from "src/user/user.entity";
import { LoginDto } from "./loginDto";
import * as jwt from 'jsonwebtoken';


@Injectable()
export class AuthService {
    constructor( 
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    
){}

async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({where: {email}}) // me traga um usuário desse email

    if (!user || user.password !== password) {
        throw new Error('E-mail ou senha inválidos');
    }

    const token = this.generateToken(user.id);
    return {message: 'Login feito com sucesso', token};

}

    private generateToken(userId: number) {
        const payload = {userId};
        const secretKey = 'senai';

        const expiresIn = '1h';

        return jwt.sign(payload, secretKey, {expiresIn});
   
    }

}