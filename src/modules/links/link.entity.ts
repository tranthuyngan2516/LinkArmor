import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('links')
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'original_url', length: 1000 })
  originalUrl: string;

  @Column({ name: 'short_code', length: 10, unique: true })
  shortCode: string;

  @Column({ default: 0 })
  clicks: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
