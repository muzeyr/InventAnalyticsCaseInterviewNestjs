import {
  BeforeInsert, BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index, ObjectId,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import {DBTable} from "../enums";
import {Exclude, Expose} from "class-transformer";
import {ApiHideProperty} from "@nestjs/swagger";


export class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;


  @Expose()
  @CreateDateColumn()
  created_at!: Date;

  @Expose()
  @UpdateDateColumn()
  updated_at!: Date;

  @ApiHideProperty()
  @Exclude()
  @DeleteDateColumn({nullable: true})
  @Index({unique: false})
  deleted_at?: Date;

  @BeforeInsert()
  async beforeInsert() {
    this.id = new ObjectId(ObjectId.generate()).toHexString();
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  @BeforeUpdate()
  async beforeUpdate() {
    this.updated_at = new Date();
  }
}
