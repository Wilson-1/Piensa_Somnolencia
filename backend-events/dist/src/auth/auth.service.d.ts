import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
    login(email: string, password: string): Promise<{
        token: string;
        user: {
            id: number;
            name: string;
            email: string;
        };
    }>;
}
