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
import { DreamRequestService } from "../dreamRequest.service";
import { DreamRequestCreateInput } from "./DreamRequestCreateInput";
import { DreamRequest } from "./DreamRequest";
import { DreamRequestFindManyArgs } from "./DreamRequestFindManyArgs";
import { DreamRequestWhereUniqueInput } from "./DreamRequestWhereUniqueInput";
import { DreamRequestUpdateInput } from "./DreamRequestUpdateInput";
import { DreamInterpretationFindManyArgs } from "../../dreamInterpretation/base/DreamInterpretationFindManyArgs";
import { DreamInterpretation } from "../../dreamInterpretation/base/DreamInterpretation";
import { DreamInterpretationWhereUniqueInput } from "../../dreamInterpretation/base/DreamInterpretationWhereUniqueInput";
import { DreamInterpretationCreateNestedManyWithoutDreamRequestsInput } from "./DreamInterpretationCreateNestedManyWithoutDreamRequestsInput";

export class DreamRequestControllerBase {
  constructor(protected readonly service: DreamRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DreamRequest })
  async createDreamRequest(
    @common.Body() data: DreamRequestCreateInput
  ): Promise<DreamRequest> {
    return await this.service.createDreamRequest({
      data: data,
      select: {
        createdAt: true,
        dreamDescription: true,
        id: true,
        updatedAt: true,
        user: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DreamRequest] })
  @ApiNestedQuery(DreamRequestFindManyArgs)
  async dreamRequests(@common.Req() request: Request): Promise<DreamRequest[]> {
    const args = plainToClass(DreamRequestFindManyArgs, request.query);
    return this.service.dreamRequests({
      ...args,
      select: {
        createdAt: true,
        dreamDescription: true,
        id: true,
        updatedAt: true,
        user: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DreamRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async dreamRequest(
    @common.Param() params: DreamRequestWhereUniqueInput
  ): Promise<DreamRequest | null> {
    const result = await this.service.dreamRequest({
      where: params,
      select: {
        createdAt: true,
        dreamDescription: true,
        id: true,
        updatedAt: true,
        user: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DreamRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDreamRequest(
    @common.Param() params: DreamRequestWhereUniqueInput,
    @common.Body() data: DreamRequestUpdateInput
  ): Promise<DreamRequest | null> {
    try {
      return await this.service.updateDreamRequest({
        where: params,
        data: data,
        select: {
          createdAt: true,
          dreamDescription: true,
          id: true,
          updatedAt: true,
          user: true,
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
  @swagger.ApiOkResponse({ type: DreamRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDreamRequest(
    @common.Param() params: DreamRequestWhereUniqueInput
  ): Promise<DreamRequest | null> {
    try {
      return await this.service.deleteDreamRequest({
        where: params,
        select: {
          createdAt: true,
          dreamDescription: true,
          id: true,
          updatedAt: true,
          user: true,
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

  @common.Get("/:id/dreamInterpretations")
  @ApiNestedQuery(DreamInterpretationFindManyArgs)
  async findDreamInterpretations(
    @common.Req() request: Request,
    @common.Param() params: DreamRequestWhereUniqueInput
  ): Promise<DreamInterpretation[]> {
    const query = plainToClass(DreamInterpretationFindManyArgs, request.query);
    const results = await this.service.findDreamInterpretations(params.id, {
      ...query,
      select: {
        createdAt: true,

        dreamRequest: {
          select: {
            id: true,
          },
        },

        id: true,
        imageUrl: true,
        interpretation: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/dreamInterpretations")
  async connectDreamInterpretations(
    @common.Param() params: DreamRequestWhereUniqueInput,
    @common.Body() body: DreamInterpretationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dreamInterpretations: {
        connect: body,
      },
    };
    await this.service.updateDreamRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/dreamInterpretations")
  async updateDreamInterpretations(
    @common.Param() params: DreamRequestWhereUniqueInput,
    @common.Body() body: DreamInterpretationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dreamInterpretations: {
        set: body,
      },
    };
    await this.service.updateDreamRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/dreamInterpretations")
  async disconnectDreamInterpretations(
    @common.Param() params: DreamRequestWhereUniqueInput,
    @common.Body() body: DreamInterpretationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dreamInterpretations: {
        disconnect: body,
      },
    };
    await this.service.updateDreamRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/dream/interpret")
  @swagger.ApiOkResponse({
    type: DreamInterpretationCreateNestedManyWithoutDreamRequestsInput,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async InterpretDream(
    @common.Body()
    body: DreamRequestCreateInput
  ): Promise<DreamInterpretationCreateNestedManyWithoutDreamRequestsInput> {
    return this.service.InterpretDream(body);
  }
}
