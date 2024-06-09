import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    const taskFound = await this.taskService.getTaskById(Number(id));
    if (!taskFound) throw new NotFoundException('Task does not found');
    return taskFound;
  }

  @Post()
  async createTask(@Body() data: Task) {
    return this.taskService.createTask(data);
  }

  @Put(':id')
  async upDateTask(@Param('id') id: string, @Body() data: Task) {
    try {
      return await this.taskService.upDateTask(Number(id), data);
    } catch (error) {
      throw new NotFoundException('Task does not exist');
    }
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    try {
      return await this.taskService.deleteTask(Number(id));
    } catch (error) {
      throw new NotFoundException('Task does not exist');
    }
  }
}
