"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkAnalytics = void 0;
const typeorm_1 = require("typeorm");
const link_entity_1 = require("./link.entity");
let LinkAnalytics = class LinkAnalytics {
    id;
    link;
    ip;
    userAgent;
    clickedAt;
};
exports.LinkAnalytics = LinkAnalytics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LinkAnalytics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => link_entity_1.Link),
    (0, typeorm_1.JoinColumn)({ name: 'link_id' }),
    __metadata("design:type", link_entity_1.Link)
], LinkAnalytics.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ip' }),
    __metadata("design:type", String)
], LinkAnalytics.prototype, "ip", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_agent' }),
    __metadata("design:type", String)
], LinkAnalytics.prototype, "userAgent", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'clicked_at' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Date)
], LinkAnalytics.prototype, "clickedAt", void 0);
exports.LinkAnalytics = LinkAnalytics = __decorate([
    (0, typeorm_1.Entity)('link_analytics')
], LinkAnalytics);
//# sourceMappingURL=linkAnalytics.entity.js.map