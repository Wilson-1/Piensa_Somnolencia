import { UserService } from './user.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getProfile(req: any): Promise<{
        name: string;
        email: string;
        id: number;
        createdAt: Date;
    }>;
    updateProfile(req: any, dto: UpdateProfileDto): Promise<{
        name: string;
        email: string;
        password: string;
        id: number;
        createdAt: Date;
    }>;
}
