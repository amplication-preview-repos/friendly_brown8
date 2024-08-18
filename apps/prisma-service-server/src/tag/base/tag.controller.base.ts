/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TagService } from "../tag.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TagCreateInput } from "./TagCreateInput";
import { Tag } from "./Tag";
import { TagFindManyArgs } from "./TagFindManyArgs";
import { TagWhereUniqueInput } from "./TagWhereUniqueInput";
import { TagUpdateInput } from "./TagUpdateInput";
import { LikeFindManyArgs } from "../../like/base/LikeFindManyArgs";
import { Like } from "../../like/base/Like";
import { LikeWhereUniqueInput } from "../../like/base/LikeWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TagControllerBase {
  constructor(
    protected readonly service: TagService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tag })
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTag(@common.Body() data: TagCreateInput): Promise<Tag> {
    return await this.service.createTag({
      data: {
        ...data,

        dream: data.dream
          ? {
              connect: data.dream,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        dream: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        parent: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Tag] })
  @ApiNestedQuery(TagFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tags(@common.Req() request: Request): Promise<Tag[]> {
    const args = plainToClass(TagFindManyArgs, request.query);
    return this.service.tags({
      ...args,
      select: {
        createdAt: true,

        dream: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        parent: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tag(@common.Param() params: TagWhereUniqueInput): Promise<Tag | null> {
    const result = await this.service.tag({
      where: params,
      select: {
        createdAt: true,

        dream: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        parent: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTag(
    @common.Param() params: TagWhereUniqueInput,
    @common.Body() data: TagUpdateInput
  ): Promise<Tag | null> {
    try {
      return await this.service.updateTag({
        where: params,
        data: {
          ...data,

          dream: data.dream
            ? {
                connect: data.dream,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          dream: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          parent: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTag(
    @common.Param() params: TagWhereUniqueInput
  ): Promise<Tag | null> {
    try {
      return await this.service.deleteTag({
        where: params,
        select: {
          createdAt: true,

          dream: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          parent: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/likes")
  @ApiNestedQuery(LikeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Like",
    action: "read",
    possession: "any",
  })
  async findLikes(
    @common.Req() request: Request,
    @common.Param() params: TagWhereUniqueInput
  ): Promise<Like[]> {
    const query = plainToClass(LikeFindManyArgs, request.query);
    const results = await this.service.findLikes(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        tag: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/likes")
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "update",
    possession: "any",
  })
  async connectLikes(
    @common.Param() params: TagWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        connect: body,
      },
    };
    await this.service.updateTag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/likes")
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "update",
    possession: "any",
  })
  async updateLikes(
    @common.Param() params: TagWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        set: body,
      },
    };
    await this.service.updateTag({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/likes")
  @nestAccessControl.UseRoles({
    resource: "Tag",
    action: "update",
    possession: "any",
  })
  async disconnectLikes(
    @common.Param() params: TagWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        disconnect: body,
      },
    };
    await this.service.updateTag({
      where: params,
      data,
      select: { id: true },
    });
  }
}
