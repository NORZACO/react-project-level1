// const { Op, sequelize } = require("sequelize");
const bcrypt = require('bcrypt');

class UserService {
    constructor(db) {
        this.client = db.sequelize;
        this.User = db.User;
        this.CartItem = db.CartItem;
        this.Cart = db.Cart;
        this.Category = db.Category;
        this.Item = db.Item;
        this.Role = db.Role;
        this.UserRole = db.UserRole;
        this.OrderItem = db.OrderItem;
    }


    // CHECK IF EMAIL and returun email attribute
    async checktUserByEmail(Email) {
        return this.User.findOne(
            {
                where: {
                    email: Email
                }
                ,
                attributes: ['email']
            }
        )
    }

    // get by email and return encryptedPassword
    async userByEmail(Email) {
        const userHashpassword = this.User.findAll(
            {
                where: {
                    email: Email
                }
                , attributes: ['encryptedPassword']
            }
        )
        return userHashpassword.encryptedPassword
    }



    async find_user(username) {
        return this.User.findAll(
            {
                where: {
                    username
                }
                // ,  attributes: ['email', 'salt', 'encryptedPassword']
            }
        )
    }

    // CHECK IF and CHECK ROLE ID EXIST
    async getUserRoleId(roleId) {
        return this.User.findAll({
            where: {
                roleId
            }
        })
    }



    // https://stackoverflow.com/questions/68115880/get-specific-attributes-from-database-using-sequelize-model-query
    async getAllUsers() {
        return this.User.findAll({
            attributes: ['id', 'username', 'email'],
            include: {
                model: this.Role,
                // attributes: ['id', 'name']
                // through: {
                //     attributes: [`RoleId`]
                // },
            }
        })
    }




    async getUserById(userId) {
        return await this.User.findOne({
            where: { id: userId },
            // attributes
            attributes: [['id', 'userid'], 'username', 'email']
        });
    }




    // update user updateUser
    async updateUser(UserId, Username, Email, Salt, EncryptedPassword) {
        return this.User.update(
            {
                esername: Username,
                email: Email,
                // salt: Salt,
                encryptedPassword: EncryptedPassword
            },
            {
                where: { id: UserId }
            }
        )
    }


    // add addRole
    async addRole(userId, roleId) {
        return this.UserRole.create(
            {
                UserId: userId,
                RoleId: roleId
            }
        )
    }



    async getOne(Email) {
        return this.User.findOne({
            where: { email: Email }
        })
    }



    // DisplayAllUser
    async DisplayAllUser() {
        return this.User.findAll(
            {
                attributes: ['id', 'username', 'email'],
                include: {
                    model: this.Role,
                    attributes: ['id', 'name']
                }
            }
        )
    }



    // userService.getOneByName
    async getOneByName(Username) {
        return this.User.findOne({
            where: { username: Username }
        })
    }




    // create user
    async createUser(FirstName, LastName, Username, Email, password, RoleId) {
        RoleId = "ffe3201a-f827-44f5-91f1-f0fb3076571f"
        // check if user with same username Exist
        const user = await this.User.findOne({ where: { username: Username } });
        if (user) {
            throw new Error('User with a given username already exist');
        }


        // already have 4 users with the same emial
        if (await this.User.count({ where: { email: Email } }) > 4) {
            throw new Error('Email cannot be used by more than 4 users');
        }

        // check role
        const role = await this.Role.findOne({ where: { id: RoleId } });
        if (!role) {
            throw new Error('Role with a given roleId not found');
        }

        // check if the role is admin. return error
        if (role.name === 'Admin') {
            throw new Error(`Only admin can have ${role.name}  role`);
        }

        // await sequelize.transaction
        const t = await this.client.transaction();

        try {
            // find or create user with username
            const santRount = 10;
            const EncryptedPassword = await bcrypt.hash(password, santRount);

            const [newUser, created] = await this.User.findOrCreate({
                where: { username: Username },
                defaults: {
                    firstName: FirstName,
                    lastName: LastName,
                    username: Username,
                    email: Email,
                    encryptedPassword: EncryptedPassword,
                    roleId : RoleId
                },
                transaction: t
            });

            if (!created) {
                throw new Error('User with a given username already exist');
            }

            await t.commit();

            return newUser;

        }
        catch (error) {
            await t.rollback();
            throw error;
        }
    }
}
//TODO: Creat user service
module.exports = UserService;




