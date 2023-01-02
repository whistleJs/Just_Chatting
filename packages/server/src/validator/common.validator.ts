import { IsNotEmpty, ValidationArguments } from 'class-validator';

export const IsRequired = () =>
  IsNotEmpty({
    message: ({ property }: ValidationArguments) => `IS_REQUIRED (${property})`,
  });
