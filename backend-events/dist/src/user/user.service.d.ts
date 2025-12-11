import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(userId: number): Promise<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
    }>;
    updateProfile(userId: number, data: {
        name?: string;
    }): Promise<{
        name: string;
        email: string;
        password: string;
        id: number;
        createdAt: Date;
    }>;
}
