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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksController = void 0;
const common_1 = require("@nestjs/common");
const links_service_1 = require("./links.service");
const links_dto_1 = require("../../dto/links.dto");
const rate_limit_guard_1 = require("../../common/guards/rate-limit.guard");
let LinksController = class LinksController {
    linksService;
    constructor(linksService) {
        this.linksService = linksService;
    }
    async shorten(createLinkDto) {
        return this.linksService.shorten(createLinkDto.url);
    }
    async redirect(code, req, res) {
        const ip = req.ip || req.connection?.remoteAddress || 'unknown';
        const userAgent = req.headers['user-agent'] || 'unknown';
        const originalUrl = await this.linksService.getOriginalUrl(code, ip, userAgent);
        return res.redirect(originalUrl);
    }
};
exports.LinksController = LinksController;
__decorate([
    (0, common_1.Post)('shorten'),
    (0, common_1.UseGuards)(rate_limit_guard_1.RateLimitGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [links_dto_1.CreateLinkDto]),
    __metadata("design:returntype", Promise)
], LinksController.prototype, "shorten", null);
__decorate([
    (0, common_1.Get)(':code'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], LinksController.prototype, "redirect", null);
exports.LinksController = LinksController = __decorate([
    (0, common_1.Controller)('links'),
    __metadata("design:paramtypes", [links_service_1.LinksService])
], LinksController);
//# sourceMappingURL=links.controller.js.map