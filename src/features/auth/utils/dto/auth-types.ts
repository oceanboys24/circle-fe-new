import {UserEntity} from "@/entities/user-entities.ts"

export type LoginDTO = Pick<UserEntity, "email" | "password">

export type RegisterDTO = Pick<UserEntity, "fullName" | "userName" | "email" | "password">
