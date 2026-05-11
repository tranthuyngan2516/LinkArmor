import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, Index } from "typeorm";
import { Link } from "./link.entity";

@Entity('link_analytics')
export class LinkAnalytics {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Link)
    @JoinColumn({name: 'link_id'})
    link: Link;

    @Column({name: 'ip'})
    ip: string;

    @Column({name: 'user_agent'})
    userAgent: string;

    @CreateDateColumn({name: 'clicked_at'})
    @Index()
    clickedAt: Date;
    



}