import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidationArguments,
} from 'class-validator';

export type RequireType = 'REQUIRED' | 'OPTIONAL';
export type DataType = 'STRING' | 'NUMBER' | 'BOOLEAN';
export type MessageType = RequireType | DataType;

const createMessage = (
  messageType: MessageType,
  { property }: ValidationArguments,
) => {
  return `${messageType}:${property}`;
};

export const IsRequired = IsNotEmpty({
  message: (args) => createMessage('REQUIRED', args),
});

export const IsDataType = (type: DataType) => {
  switch (type) {
    case 'STRING':
      return IsString({ message: (args) => createMessage(type, args) });
    case 'NUMBER':
      return IsNumber(null, { message: (args) => createMessage(type, args) });
    case 'BOOLEAN':
      return IsBoolean({ message: (args) => createMessage(type, args) });
  }
};
